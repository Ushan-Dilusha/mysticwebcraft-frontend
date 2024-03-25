import React, { useState, useEffect } from 'react';
import { Spin, Avatar, Button } from 'antd';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import CustomModal from '../../components/cutomModal/customModal'; // Adjust the import path as per your project structure

function CommunityPageNew() {
    const [communities, setCommunities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCommunity, setSelectedCommunity] = useState(null); // State to store selected community
    const [modalVisible, setModalVisible] = useState(false); // State to manage modal visibility

    useEffect(() => {
        // Fetch communities data from API or local data source
        fetchCommunities();
    }, []);

    const fetchCommunities = async () => {
        try {
            const response = await fetch('http://localhost:8070/api/communities');
            if (!response.ok) {
                throw new Error('Failed to fetch communities');
            }
            const data = await response.json();
            setCommunities(data);
            setLoading(false); // Set loading to false once data is fetched
        } catch (error) {
            console.error('Error fetching communities:', error);
        }
    };

    const openModal = (community) => {
        setSelectedCommunity(community);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <>
            <Header />
            <div className="flex justify-center">
                <div className="w-full max-w-xl mt-10">
                    <h1 className="mb-4 text-3xl font-bold">Community Page</h1>
                    <Spin spinning={loading} size='large'>
                        {communities.map(community => (
                            <div key={community._id} className="p-6 mb-6 bg-white rounded-lg shadow-md">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 mr-4">
                                        <Avatar src="https://jooinn.com/images/model-photo-3.jpg" size={64} />
                                    </div>
                                    <div>
                                        <p className="font-bold">{community.title}</p>
                                        <p className="text-sm text-gray-600">{new Date(community.createdAt).toLocaleString()}</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-lg">{community.problem}</p>
                                    <p className="mt-2 text-sm text-gray-500">Tags: {community.tags.join(', ')}</p>
                                    <p className="mt-1 text-sm text-gray-500">Languages: {community.languages.join(', ')}</p>
                                </div>
                                <div className="mt-4">
                                    <Button className="text-blue-500 hover:underline" onClick={() => openModal(community)}>View Details</Button>
                                </div>
                            </div>
                        ))}
                    </Spin>
                </div >
            </div >
            <Footer />
            <CustomModal
                title="Community Details"
                visible={modalVisible}
                onCancel={closeModal}
            >
                {selectedCommunity && (
                    <div>
                        <p>Title: {selectedCommunity.title}</p>
                        <p>Problem: {selectedCommunity.problem}</p>
                    </div>
                )}
            </CustomModal>
        </>
    );
}

export default CommunityPageNew;
