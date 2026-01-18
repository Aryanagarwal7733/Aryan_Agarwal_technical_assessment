from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# ✅ CORS (required for React frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- MODELS ----------------

class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

# ---------------- ROUTES ----------------

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    nodes = pipeline.nodes
    edges = pipeline.edges

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Build adjacency list
    graph = {node.id: [] for node in nodes}
    for edge in edges:
        graph[edge.source].append(edge.target)

    visited = set()
    recursion_stack = set()

    def has_cycle(node_id):
        if node_id in recursion_stack:
            return True
        if node_id in visited:
            return False

        visited.add(node_id)
        recursion_stack.add(node_id)

        for neighbor in graph.get(node_id, []):
            if has_cycle(neighbor):
                return True

        recursion_stack.remove(node_id)
        return False

    # Check if DAG
    is_dag = True
    for node_id in graph:
        if has_cycle(node_id):
            is_dag = False
            break

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }