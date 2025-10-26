import { useStore } from "./store";
import { parsePipeline } from "./services/parsePipeline";
import { useState } from "react";

export const SubmitButton = () => {

    const { nodes, edges } = useStore()

    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        console.log(nodes, edges)
        try {
            setLoading(true)
            const data = await parsePipeline(nodes, edges);
            alert(`Number of nodes: ${data.num_nodes}\nNumber of edges: ${data.num_edges}\nIs DAG: ${data.is_dag}`);
        } catch (error) {
            alert('Failed to parse pipeline. Check console for details.');
        } finally {
            setLoading(false)
        }
    };
    return (
        <div className="flex items-center justify-center mt-4">
            <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                className="btn-primary"
            >
                {!loading ? "Submit" : "Submitting"}
            </button>
        </div>
    );
};
