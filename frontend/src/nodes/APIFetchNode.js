import { useState } from "react";
import { BaseNode } from "./BaseNode";
import { API_NODE_COLOR } from "../utils/color";
import { useStore } from "../store";


export const APIFetchNode = ({ id, data }) => {

    /* Hooks */
    const updateNodeField = useStore((state) => state.updateNodeField);
    const deleteNode = useStore((state) => state.deleteNode);

    /* States */
    const [url, setUrl] = useState(data?.url || "");
    const [method, setMethod] = useState(data?.method || "GET");

    /* Output */
    return (
        <BaseNode id={id} title="API Node" color={API_NODE_COLOR} inputs={[{ id: "input" }]} outputs={[{ id: "response" }]} onDelete={deleteNode}>
            <div className="form-group">
                <label htmlFor={`url-${id}`} className="label-base">API URL</label>
                <input
                    id={`url-${id}`}
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="input-text"
                    placeholder="https://api.example.com/data"
                    style={{ borderColor: API_NODE_COLOR }}

                />
            </div>
            <div className="form-group">
                <label htmlFor={`method-${id}`} className="label-base">Method</label>
                <select
                    id={`method-${id}`}
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                    className="select-base"
                    style={{ borderColor: API_NODE_COLOR }}

                >
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                </select>
            </div>
        </BaseNode>
    );
};
