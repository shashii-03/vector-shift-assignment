import { useState } from "react";
import { BaseNode } from "./BaseNode";
import { OUTPUT_NODE_COLOR } from "../utils/color";
import { useStore } from "../store";


export const OutputNode = ({ id, data }) => {

  /* Hooks */
  const updateNodeField = useStore((state) => state.updateNodeField);
  const deleteNode = useStore((state) => state.deleteNode);

  /* States */
  const [name, setName] = useState(data?.outputName || id.replace("customOutput-", "output_"));
  const [type, setType] = useState(data?.outputType || "Text");

  /* Output */

  return (
    <BaseNode id={id} title="Output Node" color={OUTPUT_NODE_COLOR} inputs={[{ id: "value" }]} onDelete={deleteNode}>
      <div className="flex items-center gap-2 mb-3">
        <label htmlFor={`outputName-${id}`} className="label-base w-16">Name</label>
        <input
          id={`outputName-${id}`}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-text flex-1"
          style={{
            borderColor: OUTPUT_NODE_COLOR,
          }}
        />
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor={`outputType-${id}`} className="label-base w-16">Type</label>
        <select
          id={`outputType-${id}`}
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="select-base flex-1"
          style={{
            borderColor: OUTPUT_NODE_COLOR,
          }}
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </div>
    </BaseNode>
  );
};
