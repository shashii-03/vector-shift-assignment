import { LLM_NODE_COLOR } from "../utils/color";
import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="LLM Node"
      color={LLM_NODE_COLOR}
      inputs={[
        { id: "system", label: "System" },
        { id: "prompt", label: "Prompt" },
      ]}
      outputs={[{ id: "response" }]}
    >
      <p className="text-sm text-gray-600">Processes LLM prompt & returns AI-generated response.</p>
    </BaseNode>
  );
};
