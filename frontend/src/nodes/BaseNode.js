import { Handle, Position } from 'reactflow';
import { useCallback, useState } from 'react';
import { SOURE_COLOR, TARGET_COLOR } from '../utils/color';
import { DeleteIcon, MaximizeIcon, MinimizeIcon } from '../utils/icon';

/**
 * BaseNode Component
 * Reusable node wrapper for ReactFlow nodes with collapsible header.
 *
 * @param {string} id - Node ID
 * @param {string} title - Display title of node (e.g. "Input", "LLM")
 * @param {string} description - Short description shown in header
 * @param {Array} inputs - [{ id, label, positionTopPercent }]
 * @param {Array} outputs - [{ id, label, positionTopPercent }]
 * @param {ReactNode} children - Custom content (like text fields, selects)
 * @param {string} color - Border/background color for header
 * @param {Function} onDelete - Callback when delete button is clicked
 */
export const BaseNode = ({
    id,
    title,
    description = '',
    inputs = [],
    outputs = [],
    color = '#333',
    children,
    onDelete,
}) => {
    const [isMinimized, setIsMinimized] = useState(false);

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

    const handleDelete = (e) => {
        e.stopPropagation();
        if (onDelete) {
            onDelete(id);
        }
    };

    const toggleMinimize = (e) => {
        e.stopPropagation();
        setIsMinimized(!isMinimized);
    };

    return (
        <div
            className="w-[220px] border-2 rounded-[10px] bg-white font-sans shadow-md overflow-hidden"
            style={{
                borderColor: color,
                minHeight: isMinimized ? 'auto' : '100px'
            }}
        >
            {/* Header Bar */}
            <div
                className="px-3 py-2.5 flex flex-col gap-1"
                style={{ background: color }}
            >
                {/* Title and Icons Row */}
                <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-white flex-1">
                        {title}
                    </div>
                    <div className="flex gap-2 items-center">
                        {/* Minimize/Maximize Button */}
                        <button
                            onClick={toggleMinimize}
                            className="bg-transparent border-none cursor-pointer p-1 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                            title={isMinimized ? 'Maximize' : 'Minimize'}
                        >
                            {isMinimized ? <MaximizeIcon /> : <MinimizeIcon />}
                        </button>

                        {/* Delete Button */}
                        <button
                            onClick={handleDelete}
                            className="bg-transparent border-none cursor-pointer p-1 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                            title="Delete node"
                        >
                            <DeleteIcon />
                        </button>
                    </div>
                </div>

                {/* Description */}
                {description && (
                    <div className="text-[11px] text-white/90">
                        {description}
                    </div>
                )}
            </div>

            {/* Handles - Always rendered for edge connections */}
            {renderHandles(inputs, 'target', Position.Left)}
            {renderHandles(outputs, 'source', Position.Right)}

            {/* Content Area (hidden when minimized) */}
            {!isMinimized && (
                <div className="p-2.5">
                    <div className="flex flex-col gap-1.5">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};