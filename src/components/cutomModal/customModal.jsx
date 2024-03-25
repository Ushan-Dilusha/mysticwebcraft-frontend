import React from 'react';
import { Modal } from 'antd';

const CustomModal = ({ title, visible, onCancel, children }) => {
    return (
        <Modal
            title={title}
            visible={visible}
            onCancel={onCancel}
            footer={null}
        >
            {children}
        </Modal>
    );
};

export default CustomModal;
