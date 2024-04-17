import React, { useState, useEffect } from "react";
import { Avatar, Button, Popconfirm, message, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { timeAgo } from "../../util/timeConver";
import { fetchCommunities, deleteCommunity } from "../../service/community";
import AdminHeader from "../../components/header/AdminHeader";
import AdminSideNav from "../../components/AdminSideNav/SideNav";

function CommunityView() {
  const [communities, setCommunities] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCommunity, setSelectedCommunity] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchCommunityData();
  }, []);

  const fetchCommunityData = async () => {
    try {
      const data = await fetchCommunities();
      setCommunities(data);
    } catch (error) {
      message.error("Failed to fetch community");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCommunity(id);
      setCommunities(communities.filter((community) => community._id !== id));
      message.success("Community deleted successfully!");
    } catch (error) {
      message.error("Failed to delete community");
    }
  };

  const handleEdit = async (id) => {
    navigate(`/community-update/${id}`);
  };

  const handleAddCommunity = async (id) => {
    navigate(`/community-add`);
  };

  const renderModalContent = () => {
    if (!selectedCommunity) return null;

    return (
      <div>
        <p style={{ fontSize: "20px", margin: "5px" }}>Title</p>
        <p style={{ margin: "5px" }}>{selectedCommunity.title}</p>
        <p style={{ fontSize: "20px", margin: "5px" }}>Problem</p>
        <p style={{ margin: "5px" }}>
          {selectedCommunity.problem.split(" ").map((word, index) => (
            <span key={index}>
              {word.startsWith("http") ? (
                <a href={word} target="_blank" rel="noopener noreferrer">
                  {word}{" "}
                </a>
              ) : (
                word + " "
              )}
            </span>
          ))}
        </p>
        <p style={{ fontSize: "20px", margin: "5px" }}>Expecting</p>
        <p style={{ margin: "5px" }}>
          {selectedCommunity.expecting.split(" ").map((word, index) => (
            <span key={index}>
              {word.startsWith("http") ? (
                <a href={word} target="_blank" rel="noopener noreferrer">
                  {word}{" "}
                </a>
              ) : (
                word + " "
              )}
            </span>
          ))}
        </p>
      </div>
    );
  };

  return (
    <>
      <AdminHeader />
      <AdminSideNav />
      <div
        className="container px-4 py-8"
        style={{ marginLeft: "250px", maxWidth: "1190px" }}
      >
        <h1 className="text-3xl font-bold mb-8">All Community Questions</h1>
        <div className="flex justify-end mt-6 mb-4">
          <Button
            type="primary"
            onClick={handleAddCommunity}
            style={{ backgroundColor: "#1d4ed8", color: "#ffffff" }}
          >
            Add Community Questions
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6">
          {communities.map((community) => (
            <div
              key={community._id}
              className="rounded-lg overflow-hidden bg-white shadow-md p-4"
            >
              <div className="flex items-center mb-4">
                <Avatar
                  src="https://jooinn.com/images/model-photo-3.jpg"
                  size={64}
                />
                <div className="ml-4">
                  <p className="font-bold">
                    {community.title.substring(0, 40)}...
                  </p>
                  <p className="text-sm text-gray-600">
                    {timeAgo(community.createdAt)}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                {community.problem.length > 50 ? (
                  <>
                    <p>Problem: {community.problem.substring(0, 45)}...</p>
                  </>
                ) : (
                  <p>Problem: {community.problem}</p>
                )}
              </div>
              <div className="mb-4">
                {community.expecting.length > 50 ? (
                  <>
                    <p>Expecting: {community.expecting.substring(0, 50)}...</p>
                    {/* eslint-disable-next-line */}
                    <a
                      className="text-blue-500"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setSelectedCommunity(community);
                        setModalVisible(true);
                      }}
                    >
                      View More
                    </a>
                  </>
                ) : (
                  <p>Expecting: {community.problem}</p>
                )}
              </div>
              {community.tags && (
                <p className="text-sm text-gray-500 mb-2">
                  Tags: {community.tags.join(", ")}
                </p>
              )}
              {community.languages && (
                <p className="text-sm text-gray-500 mb-2">
                  Languages: {community.languages.join(", ")}
                </p>
              )}
              <div className="flex justify-between">
                <Button
                  type="primary"
                  onClick={() => handleEdit(community._id)}
                  style={{ backgroundColor: "#1d4ed8", color: "#ffffff" }}
                >
                  Edit
                </Button>
                <Popconfirm
                  title="Are you sure to delete this community question?"
                  onConfirm={() => handleDelete(community._id)}
                  okText={<span style={{ color: "#FF3131" }}>Yes</span>}
                  cancelText={<span style={{ color: "#1d4ed8" }}>No</span>}
                  okButtonProps={{
                    style: { backgroundColor: "#FFFFFF", color: "blue" },
                  }}
                  cancelButtonProps={{
                    style: { backgroundColor: "#FFFFFF", color: "red" },
                  }}
                >
                  <Button
                    type="danger"
                    style={{ backgroundColor: "#FF3131", color: "#ffffff" }}
                  >
                    Delete
                  </Button>
                </Popconfirm>
              </div>
            </div>
          ))}
        </div>
        <Modal
          title="Community Question More Details"
          open={modalVisible}
          onCancel={() => setModalVisible(false)}
        >
          {renderModalContent()}
        </Modal>
      </div>
      <Footer />
    </>
  );
}

export default CommunityView;
