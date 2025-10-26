// toolbar.js

import { DraggableNode } from './draggableNode';
import { APIFetchNode } from './nodes/APIFetchNode';
import { API_NODE_COLOR, CONDITION_NODE_COLOR, FILE_NODE_COLOR, INPUT_NODE_COLOR, LLM_NODE_COLOR, MATH_NODE_COLOR, OUTPUT_NODE_COLOR, TEXT_NODE_COLOR } from './utils/color';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' color={INPUT_NODE_COLOR} />
                <DraggableNode type='llm' label='LLM' color={LLM_NODE_COLOR} />
                <DraggableNode type='customOutput' label='Output' color={OUTPUT_NODE_COLOR} />
                <DraggableNode type='text' label='Text' color={TEXT_NODE_COLOR} />
                <DraggableNode type='math' label='Math' color={MATH_NODE_COLOR} />
                <DraggableNode type='api' label='API' color={API_NODE_COLOR} />
                <DraggableNode type='condition' label='Condition' color={CONDITION_NODE_COLOR} />
                <DraggableNode type='file' label='File' color={FILE_NODE_COLOR} />
            </div>
        </div>
    );
};
