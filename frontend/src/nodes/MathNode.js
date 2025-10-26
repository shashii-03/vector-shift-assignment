import { useState } from "react";
import { BaseNode } from "./BaseNode";
import { MATH_NODE_COLOR } from "../utils/color";


export const MathNode = ({ id, data }) => {
    const [expression, setExpression] = useState(data?.expression || "");


    return (
        <BaseNode id={id} title="Math Node" color={MATH_NODE_COLOR} inputs={[{ id: "input" }]} outputs={[{ id: "output" }]}>
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
