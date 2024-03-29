import React, { useState, useEffect } from 'react';
import { Spin, Avatar } from 'antd';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { timeAgo } from '../../util/timeConver';
import { fetchCommunities } from '../../service/community';

function CommunityPage() {
    const [loading, setLoading] = useState(true);
    const [communities, setCommunities] = useState([]);

    useEffect(() => {
        fetchCommunityData();
    }, []);

    const fetchCommunityData = async () => {
        try {
            const data = await fetchCommunities();
            setCommunities(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
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
                                        <p className="text-sm text-gray-600">{timeAgo(community.createdAt)}</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-lg">{community.problem}</p>
                                    {community.tags && (
                                        <p className="mt-2 text-sm text-gray-500">Tags: {community.tags.join(', ')}</p>
                                    )}
                                    {community.languages && (
                                        <p className="mt-1 text-sm text-gray-500">Languages: {community.languages.join(', ')}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </Spin>
                </div >
            </div >
            <Footer />
        </>
    );
}

export default CommunityPage;
