import BaseNode from "./BaseNode";

export default function InputNode() {
  return (
    <BaseNode
      title="Input"
      outputs={[{ id: "out", top: "50%" }]}
    >
      <div>Pipeline Input</div>
    </BaseNode>
  );
}
