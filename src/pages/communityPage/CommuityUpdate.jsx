import React, { useState, useEffect } from "react";
import { Form, Input, Button, message, Typography } from "antd";
import AdminHeader from "../../components/header/AdminHeader";
import AdminSideNav from "../../components/AdminSideNav/SideNav";
import Footer from "../../components/footer/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { updateCommunity, getCommunityById } from "../../service/community";

function CommunityUpdatePage() {
  const [loading, setLoading] = useState(false);
  const [community, setCommunity] = useState(null);

  const {Title} = Typography;
  
  const navigate = useNavigate();
  useEffect(() => {
    fetchCommunityData();
    // eslint-disable-next-line
  }, []);

  const { id } = useParams();
  const fetchCommunityData = async () => {
    try {
      const communityData = await getCommunityById(id);
      setCommunity(communityData);
    } catch (error) {
      message.error("Failed to fetch community data");
    }
  };

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await updateCommunity(id, values);
      message.success("Community updated successfully!");
      navigate(`/community-view/`);
    } catch (error) {
      message.error("Failed to update community. Please try again later.");
    }
    setLoading(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (!community) {
    return null;
  }

  return (
    <>
      <AdminHeader />
      <AdminSideNav />
      <div className="flex justify-center" style={{
          marginLeft: "250px",
          maxWidth: "1190px",
          backgroundImage: "url('https://i.ibb.co/d2zHgWW/community.jpg')", // Set background image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="w-full max-w-xl mt-10">
          <h1 className="mb-4 text-3xl font-bold">
            Update Community Questions
          </h1>
          <Form
            name="communityForm"
            initialValues={community}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Title level={4}>Title *</Title>
            <Form.Item
              name="title"
              rules={[
                { required: true, message: "Please enter community title!" },
              ]}
            >
              <Input placeholder="Enter Title" />
            </Form.Item>
            <Title level={4}>What are the details of your problem? *</Title>
            <Form.Item
              name="problem"
              rules={[
                { required: true, message: "Please enter community problem!" },
              ]}
            >
              <Input.TextArea placeholder="Enter Your Problem" />
            </Form.Item>
            <Title level={4}>What did you try and what were you expecting? *</Title>
            <Form.Item
              name="expecting"
              rules={[
                {
                  required: true,
                  message: "Please enter community expectations!",
                },
              ]}
            >
              <Input.TextArea placeholder="Enter Your Expecting" />
            </Form.Item>
            <Title level={4}>Tags</Title>
            <Form.Item name="tags">
              <Input placeholder="Enter Your Tags (comma-separated)" />
            </Form.Item>
            <Title level={4}>Related Languages</Title>
            <Form.Item name="languages">
              <Input placeholder="Enter Your Languages (comma-separated)" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                style={{
                  backgroundColor: "#1d4ed8",
                  borderColor: "#000000",
                  color: "#ffffff",
                }}
              >
                Update
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CommunityUpdatePage;
