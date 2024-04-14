export const analyzeCodeComplexity = async(codeComplexitycode) => {
    try {
        const response = await fetch('http://localhost:8070/api/analyze-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(codeComplexitycode),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch code complexity');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetch code complexity:', error);
        throw error;
    }
};