const express = require('express');
const { downloadSong } = require('../services/spotifyService');
const router = express.Router();

router.get('/', downloadSong);

module.exports = router;
