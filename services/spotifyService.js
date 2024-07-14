const axios = require('axios');
const { logData } = require('../utils/logs');
const BASE_URL = 'https://spotify-reset-api.onrender.com';

const searchSongs = async (req, res) => {
  const query = req.query.q;
  try {
    const response = await axios.get(`${BASE_URL}/search`, { params: { q: query } });
    logData(`Search query: ${query}`);
    res.json(response.data);
  } catch (error) {
    logData(`Error fetching search results for query: ${query}`);
    res.status(500).send('Error fetching search results');
  }
};

const downloadSong = async (req, res) => {
  const query = req.query.q;
  try {
    const response = await axios.get(`${BASE_URL}/download`, { params: { q: query } });
    logData(`Download query: ${query}`);
    res.json(response.data);
  } catch (error) {
    logData(`Error downloading song for query: ${query}`);
    res.status(500).send('Error downloading song');
  }
};

module.exports = { searchSongs, downloadSong };
