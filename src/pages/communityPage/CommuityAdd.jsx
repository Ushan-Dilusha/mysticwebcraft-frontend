import React, { useState } from "react";
import { Form, Input, Button, message, Typography } from "antd";
import AdminHeader from "../../components/header/AdminHeader";
import AdminSideNav from "../../components/AdminSideNav/SideNav";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { addCommunity } from "../../service/community";

const {Title} = Typography;

function CommunityAddPage() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      await addCommunity(values);
      message.success("Community added successfully!");
      navigate(`/community-view/`);
    } catch (error) {
      message.error("Failed to add community. Please try again later.");
    }
    setLoading(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <AdminHeader />
      <AdminSideNav />
      <div
        className="flex justify-center"
        style={{
          marginLeft: "250px",
          maxWidth: "1190px",
          backgroundImage: "url('https://i.ibb.co/d2zHgWW/community.jpg')", // Set background image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full max-w-xl mt-10">
          <h1 className="mb-4 text-3xl font-bold">Add Community Questions</h1>
          <Form
            name="communityForm"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Title level={4}>Title *</Title>
            <Form.Item
              name="title"
              rules={[
                { required: true, message: "Please enter problem title!" },
              ]}
            >
              <Input placeholder="Enter Title" />
            </Form.Item>
            <Title level={4}>What are the details of your problem? *</Title>
            <Form.Item
              name="problem"
              rules={[{ required: true, message: "Please enter problem!" }]}
            >
              <Input.TextArea placeholder="Enter Your Problem" />
            </Form.Item>
            <Title level={4}> What did you try and what were you expecting? *</Title>
            <Form.Item
              name="expecting"
              rules={[
                { required: true, message: "Please enter expectations!" },
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
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CommunityAddPage;
