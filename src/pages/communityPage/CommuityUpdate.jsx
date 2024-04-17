import React, { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import AdminHeader from "../../components/header/AdminHeader";
import AdminSideNav from "../../components/AdminSideNav/SideNav";
import Footer from "../../components/footer/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { updateCommunity, getCommunityById } from "../../service/community";

function CommunityUpdatePage() {
  const [loading, setLoading] = useState(false);
  const [community, setCommunity] = useState(null);

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
      <div className="flex justify-center">
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
            <p>Title *</p>
            <Form.Item
              name="title"
              rules={[
                { required: true, message: "Please enter community title!" },
              ]}
            >
              <Input placeholder="Enter Title" />
            </Form.Item>
            <p>What are the details of your problem? *</p>
            <Form.Item
              name="problem"
              rules={[
                { required: true, message: "Please enter community problem!" },
              ]}
            >
              <Input.TextArea placeholder="Enter Your Problem" />
            </Form.Item>
            <p>What did you try and what were you expecting? *</p>
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
            <p>Tags</p>
            <Form.Item name="tags">
              <Input placeholder="Enter Your Tags (comma-separated)" />
            </Form.Item>
            <p>Related Languages</p>
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
