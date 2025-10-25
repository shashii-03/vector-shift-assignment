// src/nodes/ConditionNode.js
import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id }) => {
    const [condition, setCondition] = useState('x > 0');

    return (
        <BaseNode
            id={id}
            title="Condition Node"
            inputs={[{ id: 'input', positionTopPercent: 50 }]}
            outputs={[
                { id: 'true', positionTopPercent: 35 },
                { id: 'false', positionTopPercent: 65 },
            ]}
            color="#22c55e"
        >
            <label>
                Condition:
                <input
                    type="text"
                    placeholder="x > 0"
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                />
            </label>
            <small style={{ color: '#666' }}>Outputs true/false based on condition.</small>
        </BaseNode>
    );
};
