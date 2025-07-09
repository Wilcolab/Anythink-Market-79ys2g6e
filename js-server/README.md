# JS Express Server

A simple Express.js server with Docker support.

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn
- Docker (optional, for containerized deployment)

### Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

2. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

The server will start on port 8001 and automatically restart on file changes thanks to nodemon.

### Available Scripts

- `npm start` or `yarn start` - Start the server with nodemon for development
- `npm run dev` or `yarn dev` - Same as start (alternative command)
- `npm run prod` or `yarn prod` - Start the server in production mode

### Docker

To build and run the server using Docker:

1. Build the Docker image:
   ```bash
   docker build -t js-express-server .
   ```

2. Run the container:
   ```bash
   docker run -p 8001:8001 js-express-server
   ```

### Endpoints

- `GET /` - Returns "Hello World"
- `GET /health` - Health check endpoint
- `GET /tasks` - Returns the task list
- `POST /tasks` - Adds a task to the task list (requires JSON body with `text` field)
- All other routes return 404

The server runs on port 8001 and can be accessed at `http://localhost:8001`.
