import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const analyzeSkillGap = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/skill-gap`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const generateRoadmap = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/roadmap`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTopNews = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/news`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

