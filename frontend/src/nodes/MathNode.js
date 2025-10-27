import { useState } from "react";
import { BaseNode } from "./BaseNode";
import { MATH_NODE_COLOR } from "../utils/color";
import { useStore } from "../store";


export const MathNode = ({ id, data }) => {

    /* Hooks */
    const updateNodeField = useStore((state) => state.updateNodeField);
    const deleteNode = useStore((state) => state.deleteNode);

    /* States */
    const [expression, setExpression] = useState(data?.expression || "");

    /* Output */
    return (
        <BaseNode id={id} title="Math Node" color={MATH_NODE_COLOR} inputs={[{ id: "input" }]} outputs={[{ id: "output" }]} onDelete={deleteNode}>
            <div className="form-group">
                <label htmlFor={`expr-${id}`} className="label-base">Expression</label>
                <input
                    id={`expr-${id}`}
                    type="text"
                    value={expression}
                    onChange={(e) => setExpression(e.target.value)}
                    className="input-text"
                    placeholder="e.g. a + b * 2"
                    style={{ borderColor: MATH_NODE_COLOR }}

                />
            </div>
        </BaseNode>
    );
};
