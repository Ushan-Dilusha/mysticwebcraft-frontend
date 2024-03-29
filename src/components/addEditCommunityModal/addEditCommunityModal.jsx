import React, { useState } from 'react';
import { Modal, Form, Input, Button, Tag } from 'antd';

const { TextArea } = Input;

const EditCommunityModal = ({ visible, onCancel, community, onSave }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        onSave({ ...community, ...values, });
        onCancel();
    };

    return (
        <Modal
            title="Edit Community"
            visible={visible}
            onCancel={onCancel}
            footer={null}
        >
            <Form
                form={form}
                layout="vertical"
                initialValues={{
                    title: community.title,
                    problem: community.problem,
                    expecting: community.expecting,
                    tags: community.tags
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input the title!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Problem"
                    name="problem"
                    rules={[{ required: true, message: 'Please input the problem!' }]}
                >
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item
                    label="Expecting"
                    name="expecting"
                >
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item
                    label="Tags"
                    name="tags"
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Save</Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EditCommunityModal;
