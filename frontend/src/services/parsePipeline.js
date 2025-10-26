import axios from 'axios';

export const parsePipeline = async (nodes, edges) => {
    try {
        const response = await axios.post('http://localhost:8000/pipelines/parse', {
            nodes,
            edges,
        });
        return response.data;
    } catch (error) {
        console.error('Error parsing pipeline:', error);
        throw error;
    }
};
