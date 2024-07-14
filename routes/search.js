const express = require('express');
const { searchSongs } = require('../services/spotifyService');
const router = express.Router();

router.get('/', searchSongs);

module.exports = router;
