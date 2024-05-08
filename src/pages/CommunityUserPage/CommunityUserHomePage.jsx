import React, { useState, useEffect } from "react";
import { Avatar, Button, message, Modal, Input } from "antd";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { timeAgo } from "../../util/timeConver";
import { fetchCommunities } from "../../service/community";
import Header from "../../components/header/Header";

function CommunityUserHomePage() {
  const [communities, setCommunities] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [comment, setComment] = useState("");
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

  const handleViewMore = (community) => {
    setSelectedCommunity(community);
    setModalVisible(true);
  };

  const handleAddComment = () => {
    console.log("Adding comment:", comment);
    setModalVisible(false);
    setComment("");
  };

  const handleAddCommunity = async (id) => {
    navigate(`/community-add-user`);
  };

  const renderModalContent = () => {
    if (!selectedCommunity) return null;

    return (
      <div>
        <p style={{ fontSize: "20px", margin: "5px" }}>Title</p>
        <p style={{ margin: "5px" }}>{selectedCommunity.title}</p>
        <p style={{ fontSize: "20px", margin: "5px" }}>Problem</p>
        <p style={{ margin: "5px" }}>{selectedCommunity.problem}</p>
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
        <Input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Type your comment here..."
          style={{ margin: "10px 0" }}
        />
        <Button
          type="primary"
          onClick={handleAddComment}
          style={{ backgroundColor: "#52c41a", borderColor: "#52c41a" }}
        >
          Add Comment
        </Button>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="container px-12 py-8 " style={{ maxWidth: "1425px" }}>
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
                <p>Problem: {community.problem.substring(0, 40)}...</p>
              </div>
              <div className="mb-4">
                <p>Expecting: {community.expecting}</p>
                <a
                  className="text-blue-500"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleViewMore(community)}
                >
                  View More
                </a>
              </div>
              <div class="flex flex-row">
                <div class="basis-2/3">
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
                </div>
                <div class="basis-1/3">
                  <Button onClick={() => handleViewMore(community)}>
                    View Comments
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Modal
          title="Community Question More Details"
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={null}
        >
          {renderModalContent()}
        </Modal>
      </div>
      <Footer />
    </>
  );
}

export default CommunityUserHomePage;
