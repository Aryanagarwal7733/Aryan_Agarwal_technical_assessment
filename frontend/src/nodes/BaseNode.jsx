import { Handle, Position } from "reactflow";
import styled from "styled-components";

const NodeWrapper = styled.div`
  background: #111827;
  color: #e5e7eb;
  border-radius: 10px;
  padding: 12px;
  min-width: 180px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  font-size: 14px;
`;

const Title = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
`;

export default function BaseNode({
  title,
  inputs = [],
  outputs = [],
  children
}) {
  return (
    <NodeWrapper>
      <Title>{title}</Title>

      {inputs.map((h) => (
        <Handle
          key={h.id}
          type="target"
          position={Position.Left}
          id={h.id}
          style={{ top: h.top }}
        />
      ))}

      {outputs.map((h) => (
        <Handle
          key={h.id}
          type="source"
          position={Position.Right}
          id={h.id}
          style={{ top: h.top }}
        />
      ))}

      {children}
    </NodeWrapper>
  );
}
