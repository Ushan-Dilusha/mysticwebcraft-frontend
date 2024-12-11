import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { SpinnerImg } from "../../components/loader/Loader";
import PageMenu from "../../components/pageMenu/PageMenu";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import {
  deleteUser,
  getUsers,
  RESET,
} from "../../redux/features/auth/authSlice";
import "./UserList.scss";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import ChangeRole from "../../components/changeRole/ChangeRole";
import { shortenText } from "../profile/Profile";
import UserStats from "../../components/userStats/UserStats";
import Search from "../../components/search/Search";
import ReactPaginate from "react-paginate";
import {
  FILTER_USERS,
  selectFilteredUsers,
} from "../../redux/features/auth/filterSlice";

const UserList = () => {
  useRedirectLoggedOutUser("/login");
  const [search, setSearch] = useState("");
  const filteredUsers = useSelector(selectFilteredUsers);
  const dispatch = useDispatch();

  const { users, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const delUser = async (id) => {
    // console.log(id);
    // Await works, don't mind VSCode
    await dispatch(deleteUser(id));
    dispatch(getUsers());
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Delete This User",
      message: "Are you sure you want to delete this user.",
      buttons: [
        {
          label: "Delete",
          onClick: () => delUser(id),
        },
        {
          label: "Cancel",
          // onClick: () => alert('Click No')
        },
      ],
    });
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      // toast.success("User Profile Fetched");
      // console.log(users);
    }

    dispatch(RESET());
  }, [isError, isSuccess, message, dispatch, users]);

  useEffect(() => {
    dispatch(FILTER_USERS({ users, search }));
  }, [users, search, dispatch]);

  //   Begin Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(filteredUsers.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredUsers.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredUsers]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredUsers.length;
    setItemOffset(newOffset);
  };
  //   End Pagination

  return (
    <section>
      <div className="container">
        <PageMenu />
        <UserStats />

        <div className="user-list">
          {isLoading && <SpinnerImg />}

          <div className="table">
            <div className="--flex-between">
              <span>
                <h3>All Users</h3>
              </span>
              <span>
                <Search
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </span>
            </div>
            {!isLoading && users.length === 0 ? (
              <p>No user found</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>s/n</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Change Role</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {currentItems.map((user, index) => {
                    const { _id, name, email, role } = user;

                    return (
                      <tr key={_id}>
                        <td>{index + 1}</td>
                        <td>{shortenText(name, 16)}</td>
                        <td>{email}</td>
                        <td>{role}</td>
                        <td>
                          {/* {"Change Role"} */}
                          <ChangeRole _id={_id} email={email} />
                        </td>
                        <td className="icons">
                          <span>
                            <FaTrashAlt
                              size={20}
                              color={"red"}
                              onClick={() => confirmDelete(_id)}
                            />
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
            <hr />
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="Prev"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="activePage"
          />
        </div>
      </div>
    </section>
  );
};

export default UserList;
