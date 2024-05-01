import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import "./Profile.scss";
import PageMenu from "../../components/pageMenu/PageMenu";
import Notification from "../../components/notification/Notification";
import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  RESET,
  updateUser,
} from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import Loader, { SpinnerImg } from "../../components/loader/Loader";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";

export const shortenText = (text, n) => {
  if (text.length > n) {
    const shortenedText = text.substring(0, n).concat("...");
    return shortenedText;
  }
  return text;
};

const Profile = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoggedIn, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.auth);

  const initialState = {
    name: user?.name,
    email: user?.email,
    phone: user?.phone,
    bio: user?.bio,
    photo: user?.photo,
    role: user?.role,
    isVerified: user?.isVerified,
  };
  const [profile, setProfile] = useState(initialState);
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const cloud_name = process.env.REACT_APP_CLOUD_NAME;
  const upload_preset = process.env.REACT_APP_UPLOAD_PRESET;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = async (e) => {
    setProfileImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    let imageURL;
    try {
      if (
        profileImage !== null &&
        (profileImage.type === "image/jpeg" ||
          profileImage.type === "image/jpg" ||
          profileImage.type === "image/png")
      ) {
        const image = new FormData();
        image.append("file", profileImage);
        image.append("cloud_name", cloud_name);
        image.append("upload_preset", upload_preset);

        // Save the image to Cloudinary
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/zinotrust/image/upload",
          { method: "post", body: image }
        );
        const imgData = await response.json();
        imageURL = imgData.url.toString();
      }

      // Save Profile To DB
      const userData = {
        name: profile.name,
        phone: profile.phone,
        bio: profile.bio,
        photo: profileImage ? imageURL : profile.photo,
      };

      dispatch(updateUser(userData));
      toast.success("User updated");
    } catch (error) {
      toast.error(error.message);
    }
  };

  useLayoutEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useLayoutEffect(() => {
    if (user) {
      setProfile({
        ...profile,
        name: user.name,
        email: user.email,
        phone: user.phone,
        bio: user.bio,
        photo: user.photo,
        role: user.role,
        isVerified: user.isVerified,
      });
    }
  }, [user]);

  return (
    <>
      {!profile.isVerified && <Notification />}
      <section>
        <div className="container">
          <PageMenu />
          <h2>Profile</h2>

          <div className="--flex-start profile">
            <Card cardClass={"card"}>
              {isLoading && <Loader />}
              {!isLoading && user && (
                <div>
                  <div className="profile-photo">
                    <div>
                      <img
                        src={imagePreview === null ? user.photo : imagePreview}
                        alt="profilepic"
                      />
                      <h3>Role: {user?.role}</h3>
                    </div>
                  </div>

                  <form onSubmit={saveProfile}>
                    <p>
                      <label>Change Photo:</label>
                      <input
                        type="file"
                        accept="image/*"
                        name="image"
                        onChange={handleImageChange}
                      />
                    </p>
                    <p>
                      <label>Name:</label>
                      <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleInputChange}
                      />
                    </p>
                    <p>
                      <label>Email:</label>
                      <input
                        type="text"
                        name="name"
                        value={profile?.email}
                        onChange={handleInputChange}
                        disabled
                      />
                    </p>
                    <p>
                      <label>Phone:</label>
                      <input
                        type="text"
                        name="phone"
                        value={profile?.phone}
                        onChange={handleInputChange}
                      />
                    </p>
                    <p>
                      <label>Bio:</label>
                      <textarea
                        name="bio"
                        value={profile?.bio}
                        onChange={handleInputChange}
                        cols="30"
                        rows="10"
                      ></textarea>
                    </p>
                    {/* {isLoading ? (
                      <SpinnerImg />
                    ) : (
                    )} */}
                    <button className="--btn --btn-block --btn-primary">
                      Update Profile
                    </button>
                  </form>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export const UserName = () => {
  const { user } = useSelector((state) => state.auth);

  const username = user?.name || "...";
  return <p className="--color-white">Hi, {shortenText(username, 10)} |</p>;
};

export default Profile;
