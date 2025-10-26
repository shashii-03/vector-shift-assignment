import { useState } from "react";
import { BaseNode } from "./BaseNode";
import { INPUT_NODE_COLOR } from "../utils/color";


export const InputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.inputName || id.replace("customInput-", "input_"));
  const [type, setType] = useState(data?.inputType || "Text");

  return (
    <BaseNode id={id} title="Input Node" color={INPUT_NODE_COLOR} outputs={[{ id: "value" }]}>
      <div className="flex items-center gap-2 mb-3">
        <label htmlFor={`name-${id}`} className="label-base w-16">Name</label>
        <input
          id={`name-${id}`}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-text flex-1"
          style={{
            borderColor: INPUT_NODE_COLOR,
          }}
        />
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor={`type-${id}`} className="label-base w-16">Type</label>
        <select
          id={`type-${id}`}
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="select-base flex-1"
          style={{
            borderColor: INPUT_NODE_COLOR,
          }}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </div>
    </BaseNode>
  );
};
