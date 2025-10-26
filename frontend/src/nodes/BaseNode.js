import { Handle, Position } from 'reactflow';
import { useCallback } from 'react';
import { SOURE_COLOR, TARGET_COLOR } from '../utils/color';

/**
 * BaseNode Component
 * Reusable node wrapper for ReactFlow nodes.
 *
 * @param {string} title - Display title of node (e.g. "Input", "LLM")
 * @param {Array} inputs - [{ id, label, positionTopPercent }]
 * @param {Array} outputs - [{ id, label, positionTopPercent }]
 * @param {ReactNode} children - Custom content (like text fields, selects)
 * @param {string} color - Optional border/background color
 */
export const BaseNode = ({
    id,
    title,
    inputs = [],
    outputs = [],
    color = '#333',
    children,
}) => {
    const renderHandles = useCallback((handles, type, position) => {
        return handles.map((h, i) => (
            <Handle
                key={`${id}-${h.id}-${type}`}
                type={type}
                position={position}
                id={`${id}-${h.id}`}
                style={{
                    top: h.positionTopPercent ? `${h.positionTopPercent}%` : `${(i + 1) * 25}%`,
                    background: type === 'source' ? SOURE_COLOR : TARGET_COLOR,
                }}
            />
        ));
    }, [id]);

    return (
        <div
            style={{
                width: 220,
                minHeight: 100,
                border: `2px solid ${color}`,
                borderRadius: 10,
                background: 'white',
                padding: 10,
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            }}
        >
            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 8 }}>{title}</div>

            {renderHandles(inputs, 'target', Position.Left)}
            {renderHandles(outputs, 'source', Position.Right)}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {children}
            </div>
        </div>
    );
};
