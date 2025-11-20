import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL;

export const usePortfolio = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await axios.get(`${API_BASE}/portfolio`);
        setPortfolioData(response.data);
      } catch (err) {
        setError('Failed to load portfolio data');
        console.error('Error fetching portfolio:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  const sendContactMessage = async (formData) => {
    try {
      const response = await axios.post(`${API_BASE}/contact`, formData);
      return { success: true, data: response.data };
    } catch (err) {
      return { 
        success: false, 
        error: err.response?.data?.message || 'Failed to send message' 
      };
    }
  };

  return { portfolioData, loading, error, sendContactMessage };
};