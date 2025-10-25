import { BaseNode } from './BaseNode';

export const FileReaderNode = ({ id }) => {
    return (
        <BaseNode
            id={id}
            title="File Reader"
            outputs={[{ id: 'fileContent' }]}
            color="#8b5cf6"
        >
            <label>
                Upload File:
                <input type="file" />
            </label>
            <small style={{ color: '#666' }}>Reads file and outputs text content.</small>
        </BaseNode>
    );
};
