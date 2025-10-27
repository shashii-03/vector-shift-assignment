import { useState } from "react";
import { BaseNode } from "./BaseNode";
import { CONDITION_NODE_COLOR } from "../utils/color";
import { useStore } from "../store";

export const ConditionNode = ({ id, data }) => {

    /* Hooks */
    const updateNodeField = useStore((state) => state.updateNodeField);
    const deleteNode = useStore((state) => state.deleteNode);

    /* States */
    const [condition, setCondition] = useState(data?.condition || "");

    /* Output */
    return (
        <BaseNode
            id={id}
            title="Condition Node"
            color={CONDITION_NODE_COLOR}
            inputs={[{ id: "input" }]}
            outputs={[{ id: "true" }, { id: "false" }]}
            onDelete={deleteNode}
        >
            <div className="form-group">
                <label htmlFor={`cond-${id}`} className="label-base">Condition</label>
                <input
                    id={`cond-${id}`}
                    type="text"
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="input-text"
                    placeholder="e.g. age > 18"
                    style={{ borderColor: CONDITION_NODE_COLOR }}
                />
            </div>
        </BaseNode>
    );
};
