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
## Development Container Features

This project is designed to work seamlessly in a development container with the following tools pre-installed:

- **Docker CLI**: Manage containers using a dedicated Docker daemon inside the dev container.
- **GitHub CLI (`gh`)**: Interact with GitHub from the terminal. Note: Use multiple `-f` flags for hierarchical keys with `gh api -f`.
- **Node.js, npm, and ESLint**: Ready for Node.js and JavaScript development.
- **SSH Server**: Connect via SSH, SFTP, or SSHFS. Set a password on first use and forward the SSH port for external access.

For more details, see the `.devcontainer` folder.