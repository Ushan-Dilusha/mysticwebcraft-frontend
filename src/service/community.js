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