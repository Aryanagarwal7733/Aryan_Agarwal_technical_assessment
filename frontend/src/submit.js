import { useCallback } from "react";

// Sends nodes and edges to backend and shows alert
export async function submitPipeline(nodes, edges) {
  try {
    if (!nodes.length) {
      alert("No nodes in the pipeline!");
      return;
    }

    // Transform nodes and edges to match backend format
    const transformedNodes = nodes.map((node) => ({
      id: node.id,
    }));

    const transformedEdges = edges.map((edge) => ({
      source: edge.source,
      target: edge.target,
    }));

    const response = await fetch("http://localhost:8000/pipelines/parse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nodes: transformedNodes,
        edges: transformedEdges,
      }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();

    alert(
      `Pipeline Analysis ✅\n\n` +
        `Nodes: ${data.num_nodes}\n` +
        `Edges: ${data.num_edges}\n` +
        `Is DAG: ${data.is_dag ? "Yes" : "No"}`
    );
  } catch (error) {
    console.error("Pipeline submission failed:", error);
    alert("Failed to analyze pipeline. Check console for details.");
  }
}

// Submit button component
export const SubmitButton = ({ nodes = [], edges = [] }) => {
  // Memoized submit handler
  const handleSubmit = useCallback(() => {
    submitPipeline(nodes, edges);
  }, [nodes, edges]);

  return (
    <button
      onClick={handleSubmit}
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        padding: "10px 20px",
        backgroundColor: "#3b82f6",
        color: "white",
        border: "none",
        borderRadius: 6,
        cursor: "pointer",
        fontSize: 14,
        fontWeight: 600,
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      }}
    >
      Submit Pipeline
    </button>
  );
};
