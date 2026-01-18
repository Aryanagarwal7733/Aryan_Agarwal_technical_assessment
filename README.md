# Frontend Technical Assessment - Pipeline Builder

A visual pipeline builder application that allows users to create, configure, and analyze data processing pipelines.

## Features

- **Drag-and-Drop Interface**: Easily create pipelines by dragging nodes from the toolbar
- **Node Types**: 
  - Input Node: Pipeline entry point
  - Text Node: Text processing with variable support
  - LLM Node: Language model integration
  - Output Node: Pipeline exit point
- **Edge Connections**: Connect nodes to define data flow
- **Pipeline Analysis**: Submit pipelines to backend for validation
- **DAG Detection**: Automatically detect cycles in the pipeline
- **Real-time Feedback**: Receive alerts with pipeline statistics

## Project Structure

```
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── App.js           # Main app component
│   │   ├── ui.js            # React Flow canvas
│   │   ├── toolbar.js       # Node selector toolbar
│   │   ├── submit.js        # Submit button & pipeline submission
│   │   ├── store.js         # Zustand state management
│   │   ├── nodes/           # Custom node components
│   │   │   ├── BaseNode.jsx
│   │   │   ├── InputNode.jsx
│   │   │   ├── LLMNode.js
│   │   │   ├── OutputNode.js
│   │   │   └── TextNode.js
│   │   └── index.js
│   ├── package.json
│   └── public/
├── backend/                  # FastAPI backend
│   └── main.py              # Pipeline analysis endpoint
└── .gitignore
```

## Installation

### Frontend
```bash
cd frontend
npm install
npm start
```

### Backend
```bash
cd backend
pip install fastapi uvicorn
uvicorn main:app --reload
```

## Usage

1. **Create Pipeline**:
   - Drag nodes from the toolbar onto the canvas
   - Connect nodes by dragging from output handles to input handles

2. **Submit Pipeline**:
   - Click the "Submit Pipeline" button in the bottom-right
   - Receive analysis with node count, edge count, and DAG status

## API Endpoint

### POST `/pipelines/parse`

Request body:
```json
{
  "nodes": [
    {"id": "input-1"},
    {"id": "output-1"}
  ],
  "edges": [
    {"source": "input-1", "target": "output-1"}
  ]
}
```

Response:
```json
{
  "num_nodes": 2,
  "num_edges": 1,
  "is_dag": true
}
```

## Technologies Used

- **Frontend**: React, React Flow, Zustand, Styled Components
- **Backend**: FastAPI, Pydantic
- **State Management**: Zustand

## License

MIT
