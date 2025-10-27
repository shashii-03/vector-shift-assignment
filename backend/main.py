from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

# Allow requests from frontend
origins = [
    "http://localhost:3000",  # React dev server
    "http://127.0.0.1:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, 
    allow_credentials=True,
    allow_methods=["*"],   
    allow_headers=["*"],   
)


class NodeData(BaseModel):
    id: str
    nodeType: str

class Node(BaseModel):
    id: str
    type: str
    data: NodeData


class Edge(BaseModel):
    source: str
    target: str
    sourceHandle: str
    targetHandle: str
    type: str
    animated: bool

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

# DAG check using DFS
def is_dag(nodes: List[Dict], edges: List[Dict]) -> bool:
    graph = {node['id']: [] for node in nodes}
    for edge in edges:
        graph[edge['source']].append(edge['target'])

    visited = set()
    rec_stack = set()

    def dfs(v):
        visited.add(v)
        rec_stack.add(v)
        for neighbor in graph[v]:
            if neighbor not in visited:
                if dfs(neighbor):
                    return True  # cycle found
            elif neighbor in rec_stack:
                return True  # cycle found
        rec_stack.remove(v)
        return False

    for node_id in graph:
        if node_id not in visited:
            if dfs(node_id):
                return False  # cycle detected → not DAG
    return True  # no cycles → DAG

# Endpoint to parse pipeline
@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)
    dag = is_dag([node.dict() for node in pipeline.nodes], [edge.dict() for edge in pipeline.edges])
    return {"num_nodes": num_nodes, "num_edges": num_edges, "is_dag": dag}
