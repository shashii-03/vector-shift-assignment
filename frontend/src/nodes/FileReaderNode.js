import { useStore } from "../store";
import { FILE_NODE_COLOR } from "../utils/color";
import { BaseNode } from "./BaseNode";


export const FileReaderNode = ({ id }) => {

    /* Hooks */
    const updateNodeField = useStore((state) => state.updateNodeField);
    const deleteNode = useStore((state) => state.deleteNode);

    /* Output */
    return (
        <BaseNode
            id={id}
            title="File Reader"
            outputs={[{ id: 'fileContent' }]}
            color={FILE_NODE_COLOR}
            onDelete={deleteNode}
        >
            <label className="flex flex-col text-sm text-text-light font-medium gap-1">
                Upload File:
                <input
                    type="file"
                    className="rounded-lg px-3 py-2  border outline-none focus:ring-2 text-text-light transition-all"
                    style={{
                        borderColor: FILE_NODE_COLOR,
                    }}
                />
            </label>

            <small className="text-xs text-text-muted mt-1">
                Reads file and outputs text content.
            </small>
        </BaseNode>
    );
};
