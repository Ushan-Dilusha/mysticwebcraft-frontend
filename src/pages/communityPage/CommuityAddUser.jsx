import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";
import { addCommunity } from "../../service/community";

function CommunityAddUserPage() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      await addCommunity(values);
      message.success("Community added successfully!");
      navigate(`/community-home`);
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
      <Header />
      <div className="flex justify-center" style={{ maxWidth: "1190px" }}>
        <div className="w-full flex mt-10">
          <div className="w-1/2 p-5">
            <img
              src="https://www.raklet.com/wp-content/uploads/2022/11/Create-your.png"
              alt="Image"
              className="max-w-full h-auto"
            />
          </div>
          <div className="w-1/2 p-5">
            <div className="max-w-xl">
              <h1 className="mb-4 text-3xl font-bold">
                Add Community Questions
              </h1>
              <Form
                name="communityForm"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <p>Title *</p>
                <Form.Item
                  name="title"
                  rules={[
                    { required: true, message: "Please enter problem title!" },
                  ]}
                >
                  <Input placeholder="Enter Title" />
                </Form.Item>
                <p>What are the details of your problem? *</p>
                <Form.Item
                  name="problem"
                  rules={[{ required: true, message: "Please enter problem!" }]}
                >
                  <Input.TextArea placeholder="Enter Your Problem" />
                </Form.Item>
                <p> What did you try and what were you expecting? *</p>
                <Form.Item
                  name="expecting"
                  rules={[
                    { required: true, message: "Please enter expectations!" },
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
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CommunityAddUserPage;
