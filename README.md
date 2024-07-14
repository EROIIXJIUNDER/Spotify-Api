# Spotify APIs Proxy Server

This project is a Node.js Express server that acts as a proxy for the Spotify API, allowing users to search for and download songs. It provides modular code organization, logging, and error handling.

## Project Structure

- **server.js**: Main entry point of the application. It sets up the Express server and registers routes.
- **routes/**: Contains route handlers for different endpoints.
  - **search.js**: Handles `/search` endpoint for song searching.
  - **download.js**: Handles `/download` endpoint for song downloading.
- **services/**: Contains service logic for API requests and logging.
  - **spotifyService.js**: Handles communication with the Spotify API and logs actions.
- **utils/**: Contains utility functions.
  - **logs.js**: Handles logging of requests and errors to `logs.txt`.
- **logs.txt**: Log file where all logs are stored with timestamps.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/asmitgandu/Spotify-APIs.git
   cd Spotify-APIs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node server.js
   ```

4. The server will run on `http://localhost:3000`.

## Endpoints

- **GET /search?query=**: Searches for songs based on the query parameter `q`.
- **GET /download?url=**: Downloads a song based on the query parameter `q`.

## Usage

1. **Search for a Song**:
   - Send a GET request to `/search` with a `q` parameter containing the search term.
   - Example: `http://localhost:3000/search?q=Imagine`

2. **Download a Song**:
   - Send a GET request to `/download` with a `q` parameter containing the song title.
   - Example: `http://localhost:3000/download?q=Imagine`

## Code Explanation

- **server.js**: Initializes the Express server and registers the routes.
- **routes/search.js** and **routes/download.js**: Define route handlers and call corresponding service functions.
- **services/spotifyService.js**: Contains functions `searchSongs` and `downloadSong` that make requests to the Spotify API, handle responses, and log actions.
- **utils/logs.js**: Provides `logData` function to append logs to `logs.txt` with timestamps.

## Logging

- Logs are written to `logs.txt` in the same directory as `logs.js`.
- Logs include timestamps and details about search queries and downloads, as well as any errors encountered.

## Additional Information

- **Modular Design**: The project structure separates concerns, making it easy to maintain and extend.
- **Error Handling**: Errors are logged and a generic error message is sent back to the client.
- **Customization**: You can customize endpoints, logging, and other configurations as needed.

## Contributions

Contributions are welcome! Feel free to open issues or submit pull requests with improvements or bug fixes.

## License

This project is licensed under the MIT License.
