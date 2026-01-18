# Pipeline Builder - Technical Assessment

A full-stack visual pipeline builder application that allows users to create, configure, and analyze data processing pipelines with real-time cycle detection and validation.

## ✅ Project Status: Working & Fully Functional

This project implements a complete end-to-end solution for building and validating DAG (Directed Acyclic Graph) pipelines.

## Features Implemented

### Frontend (React + React Flow)
- ✅ **Drag-and-Drop Canvas**: Fully functional React Flow canvas for creating pipelines
- ✅ **Dynamic Node Creation**: Toolbar to add multiple node types to the pipeline
- ✅ **Node Types**: Input, Text, LLM, and Output nodes
- ✅ **Edge Connections**: Connect nodes with animated edges and arrows
- ✅ **State Management**: Zustand-based global state for nodes and edges
- ✅ **Real-time Updates**: Nodes and edges update instantly as users interact
- ✅ **Pipeline Submission**: Send pipeline configuration to backend for analysis

### Backend (FastAPI)
- ✅ **Pipeline Parsing API**: POST `/pipelines/parse` endpoint
- ✅ **Cycle Detection**: Detect cycles using DFS algorithm (identifies non-DAG pipelines)
- ✅ **Pipeline Statistics**: Return node count, edge count, and DAG status
- ✅ **CORS Support**: Fully configured CORS middleware for React frontend
- ✅ **Error Handling**: Proper error handling and validation

### Integration
- ✅ **Frontend-Backend Communication**: Full integration between React frontend and FastAPI backend
- ✅ **Real-time Feedback**: Alert users with pipeline analysis results
- ✅ **Data Transformation**: Proper serialization between frontend and backend formats

## Project Structure

```
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── App.js           # Main app component
│   │   ├── ui.js            # React Flow canvas setup
│   │   ├── toolbar.js       # Node selector toolbar
│   │   ├── submit.js        # Submit pipeline button & API call
│   │   ├── store.js         # Zustand state management (nodes & edges)
│   │   ├── nodes/           # Custom node components
│   │   │   ├── BaseNode.jsx
│   │   │   ├── InputNode.jsx
│   │   │   ├── LLMNode.js
│   │   │   ├── OutputNode.js
│   │   │   └── TextNode.js
│   │   ├── index.css
│   │   └── index.js
│   ├── package.json
│   └── public/
├── backend/                  # FastAPI backend
│   ├── main.py              # API routes & pipeline analysis logic
│   └── __pycache__/
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js 14+ and npm
- Python 3.8+
- pip

### Frontend Setup
```bash
cd frontend
npm install
npm start
```
The frontend will start on `http://localhost:3000`

### Backend Setup
```bash
cd backend
pip install fastapi uvicorn pydantic
uvicorn main:app --reload
```
The backend will start on `http://localhost:8000`

## How to Use

1. **Open the Application**: Navigate to `http://localhost:3000` in your browser
2. **Create Pipeline**:
   - Click on node types in the toolbar to add nodes
   - Drag nodes onto the canvas to position them
   - Connect nodes by dragging from one node's output to another's input
3. **Analyze Pipeline**:
   - Click "Submit Pipeline" button
   - View analysis results: node count, edge count, and DAG validation
   - If pipeline has cycles, it will show `Is DAG: No`

## API Reference

### POST `/pipelines/parse`

Analyzes a pipeline and detects cycles.

**Request:**
```json
{
  "nodes": [
    {"id": "input-1"},
    {"id": "text-1"},
    {"id": "output-1"}
  ],
  "edges": [
    {"source": "input-1", "target": "text-1"},
    {"source": "text-1", "target": "output-1"}
  ]
}
```

**Response:**
```json
{
  "num_nodes": 3,
  "num_edges": 2,
  "is_dag": true
}
```

## Technologies Used

- **Frontend**:
  - React 18.2.0
  - React Flow 11.8.3 (for the interactive canvas)
  - Zustand (state management)
  - Styled Components (styling)
  
- **Backend**:
  - FastAPI (modern Python web framework)
  - Pydantic (data validation)
  - Python 3 (DFS cycle detection algorithm)

- **Deployment**: Both services run locally with hot-reload

## Development Notes

- Frontend state is managed globally using Zustand
- Backend uses DFS algorithm with recursion stack to detect cycles
- CORS is enabled to allow cross-origin requests from the React frontend
- All node and edge data is properly serialized for backend processing

## License

MIT

MIT
