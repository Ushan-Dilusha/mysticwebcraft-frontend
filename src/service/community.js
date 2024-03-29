export const fetchCommunities = async() => {
    try {
        const response = await fetch('http://localhost:8070/api/communities');
        if (!response.ok) {
            throw new Error('Failed to fetch communities');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching communities:', error);
        throw error;
    }
};

export const addCommunity = async(communityData) => {
    try {
        const response = await fetch('http://localhost:8070/api/communities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(communityData),
        });

        if (!response.ok) {
            throw new Error('Failed to add community');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding community:', error);
        throw error;
    }
};

export const deleteCommunity = async(communityId) => {
    try {
        const response = await fetch(`http://localhost:8070/api/communities/${communityId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete community');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error deleting community:', error);
        throw error;
    }
};

export const getCommunityById = async(communityId) => {
    try {
        const response = await fetch(`http://localhost:8070/api/communities/${communityId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch community by ID');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching community by ID:', error);
        throw error;
    }
};

export const updateCommunity = async(communityId, communityData) => {
    try {
        const response = await fetch(`http://localhost:8070/api/communities/${communityId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(communityData)
        });
        if (!response.ok) {
            throw new Error('Failed to update community');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating community:', error);
        throw error;
    }
};