// src/nodes/MathNode.js
import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const MathNode = ({ id }) => {
    const [operation, setOperation] = useState('add');

    return (
        <BaseNode
            id={id}
            title="Math Node"
            inputs={[
                { id: 'a', positionTopPercent: 30 },
                { id: 'b', positionTopPercent: 70 },
            ]}
            outputs={[{ id: 'result' }]}
            color="#f97316"
        >
            <label>
                Operation:
                <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                    <option value="add">Add</option>
                    <option value="subtract">Subtract</option>
                    <option value="multiply">Multiply</option>
                    <option value="divide">Divide</option>
                </select>
            </label>
            <small style={{ color: '#666' }}>
                Takes 2 inputs and outputs the computed result.
            </small>
        </BaseNode>
    );
};
