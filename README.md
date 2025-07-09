# Multi-Server Application

This project contains both a Python FastAPI server and a Node.js Express server, each running on different ports.

## Project Structure

The project has the following files and directories:

### Python Server (Port 8000)
- `python-server/src/main.py`: FastAPI server implementation with task management routes
- `python-server/src/__init__.py`: Empty file marking the `src` directory as a Python package
- `python-server/requirements.txt`: Python dependencies for the FastAPI server
- `python-server/Dockerfile`: Docker configuration for the Python server

### Node.js Server (Port 8001)
- `js-server/index.js`: Express.js server implementation with basic middleware
- `js-server/package.json`: Node.js dependencies and scripts
- `js-server/Dockerfile`: Production Docker configuration for the Node.js server
- `js-server/Dockerfile.dev`: Development Docker configuration with nodemon
- `js-server/README.md`: Detailed documentation for the Node.js server

### Docker Configuration
- `docker-compose.yml`: Multi-container Docker application configuration for both servers

## Getting Started

To run both servers using Docker Compose, follow these steps:

1. **Build and start both servers:**
   ```shell
   docker-compose up
   ```
   
   This will build and start both the Python server (port 8000) and Node.js server (port 8001).

2. **Run in detached mode (background):**
   ```shell
   docker-compose up -d
   ```

3. **Stop the services:**
   ```shell
   docker-compose down
   ```

4. **Rebuild the services:**
   ```shell
   docker-compose build
   ```

## Server Access

- **Python Server (FastAPI)**: http://localhost:8000
- **Node.js Server (Express)**: http://localhost:8001
## Migration Details

The Node.js server now fully replaces the Python server for all task management APIs. The Python FastAPI server remains available for legacy or demonstration purposes but no longer handles task-related endpoints.

### Key Changes

- **Task Management**: All `/tasks` endpoints are now handled exclusively by the Node.js Express server.
- **Primary API**: The Node.js server is the main entry point for API consumers.
- **Python Server**: Only serves a basic root endpoint (`GET /`) for compatibility.

### Node.js Server Features

- Centralized task management logic
- Health check endpoint (`/health`)
- Improved error handling and 404 responses
- Ready for production and development via Docker

For more details, see [`js-server/README.md`](js-server/README.md).
## API Routes

### Python Server (Port 8000)
- `GET /` - Returns "Hello World"
- `POST /tasks` - Adds a task to the task list
- `GET /tasks` - Retrieves the task list

### Node.js Server (Port 8001) - **Primary API Server**
- `GET /` - Returns "Hello World"
- `GET /health` - Health check endpoint that returns server status
- `GET /tasks` - Returns the task list
- `POST /tasks` - Adds a task to the task list (requires JSON body with `text` field)
- All other routes return 404

**Note**: The task management endpoints have been migrated from the Python server to the Node.js server. The Node.js server now serves as the primary API server with full task management functionality.

## Development

For individual development of each server:

### Python Server
```shell
cd python-server
pip install -r requirements.txt
uvicorn src.main:app --reload --host 0.0.0.0 --port 8000
```

### Node.js Server
```shell
cd js-server
yarn install
yarn start  # Uses nodemon for auto-restart
```
