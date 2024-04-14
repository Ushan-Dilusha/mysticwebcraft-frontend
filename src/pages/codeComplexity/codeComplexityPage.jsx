import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { analyzeCodeComplexity } from '../../service/codeComplexity';

const CodeComplexityAnalyzer = () => {
    const [form] = Form.useForm();
    const [analysisResult, setAnalysisResult] = useState(null);
    const [error, setError] = useState(null);

    const handleAnalysis = async (values) => {
        console.log(values)
        try {
            const result = await analyzeCodeComplexity(values);
            setAnalysisResult(result);
            setError(null);
        } catch (err) {
            setError('Failed to analyze code complexity');
            setAnalysisResult(null);
            message.error('Failed to analyze code complexity');
        }
    };
    
    return (
        <div className="max-w-md mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Code Complexity Analyzer</h1>
            <Form form={form}
             onFinish={handleAnalysis} 
             layout="vertical"
             >
                <Form.Item
                    name="code"
                    rules={[{ required: true, message: 'Please enter your code!' }]}
                >
                    <Input placeholder="Enter your code here..." />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Analyze
                    </Button>
                </Form.Item>
            </Form>
            {error && <div className="text-red-500 mb-4">Error: {error}</div>}
            {analysisResult && (
                <div>
                    <h2 className="text-xl font-bold mb-2">Analysis Result</h2>
                    <p>Total Complexity: {analysisResult.totalComplexity}</p>
                    <p>Loop Count: {analysisResult.loopCount}</p>
                    <p>Condition Count: {analysisResult.conditionCount}</p>
                    {/* Display other analysis results here */}
                </div>
            )}
        </div>
    );
}

export default CodeComplexityAnalyzer;
