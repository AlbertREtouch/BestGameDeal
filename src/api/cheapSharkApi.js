import axios from "axios";

const BASE_URL = "https://www.cheapshark.com/api/1.0";

export const fetchDeals = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/deals`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch deals:", error);
  }
};

export const fetchDealDetails = async (dealID) => {
  try {
    const response = await axios.get(`${BASE_URL}/deals`, {
      params: { id: dealID },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch deal details:", error);
  }
};

// 在 /src/api/CheapSharkAPI.js 中

export const fetchGames = async (title, limit = 60, exact = 0) => {
  try {
    const params = { title, limit, exact };
    const response = await axios.get(`${BASE_URL}/games`, { params });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch games:", error);
  }
};

export const fetchGameDetails = async (gameID) => {
    try {
      const response = await axios.get(`${BASE_URL}/games`, {
        params: { id: gameID }
      });
      return response.data;
    } catch (error) {
      console.error('Failed to fetch game details:', error);
      return null;
    }
  };
  
