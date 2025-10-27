import { useStore } from "../store";
import { LLM_NODE_COLOR } from "../utils/color";
import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id, data }) => {

  /* Hooks */
  const updateNodeField = useStore((state) => state.updateNodeField);
  const deleteNode = useStore((state) => state.deleteNode);

  /* Output */

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
      onDelete={deleteNode}
    >
      <p className="text-sm text-gray-600">Processes LLM prompt & returns AI-generated response.</p>
    </BaseNode>
  );
};
