import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  message,
} from "antd";
import { analyzeCodeComplexity } from "../../service/codeComplexity";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import renderAnalysisResult from "./AnalysisResult";

const CodeComplexityAnalyzer = () => {
  const [form] = Form.useForm();
  const [analysisResult, setAnalysisResult] = useState(null);
  const [error, setError] = useState(null);

  const handleAnalysis = async (values) => {
    try {
      const result = await analyzeCodeComplexity(values);
      setAnalysisResult(result);
      setError(null);
    } catch (err) {
      message.error("Failed to analyze code complexity");
      setError("Failed to analyze code complexity");
      window.location.pathname = '/code-complexity'
      setAnalysisResult(null);
    }
  };

  

  return (
    <>
      <Header />
      <div className="min-h-[120px]">
        <div className="max-w-7xl mx-auto mt-8">
          <h1 className="text-2xl font-bold mb-4">Code Complexity Analyzer</h1>
          <Form form={form} onFinish={handleAnalysis} layout="vertical">
            <Form.Item
              name="code"
              rules={[{ required: true, message: "Please enter your code!" }]}
            >
              <Input.TextArea rows={10} style={{height:"60px"}} placeholder="Enter your code here..." />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large"  style={{ backgroundColor: "#52c41a", borderColor: "#52c41a" }}>
                Analyze
              </Button>
            </Form.Item>
          </Form>
        </div>
        {error && <div className="text-red-500 mb-4">Error: {error}</div>}
        {analysisResult && renderAnalysisResult(analysisResult)}
      </div>
      <Footer />
    </>
  );
};

export default CodeComplexityAnalyzer;
