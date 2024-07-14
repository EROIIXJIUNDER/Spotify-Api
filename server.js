const express = require('express');
const searchRoute = require('./routes/search');
const downloadRoute = require('./routes/download');

const app = express();
const PORT = 3000;

app.use('/search', searchRoute);
app.use('/download', downloadRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
