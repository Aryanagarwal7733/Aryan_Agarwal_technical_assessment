import { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import BaseNode from "./BaseNode";

/**
 * Match valid JS variable names inside {{ }}
 */
const VAR_REGEX = /{{\s*([a-zA-Z_$][\w$]*)\s*}}/g;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    const matches = [...currText.matchAll(VAR_REGEX)];
    const uniqueVars = [...new Set(matches.map((m) => m[1]))];
    setVariables(uniqueVars);
  }, [currText]);

  return (
    <BaseNode
      title="Text"
      inputs={variables.map((v, i) => ({
        id: `${id}-${v}`,
        top: `${30 + i * 15}%`,
      }))}
      outputs={[
        {
          id: `${id}-output`,
          top: "50%",
        },
      ]}
    >
      <TextareaAutosize
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        minRows={2}
        placeholder="Type text with {{variables}}"
        style={{
          width: "100%",
          resize: "none",
          background: "#020617",
          color: "white",
          border: "1px solid #1e293b",
          borderRadius: 6,
          padding: 6,
          fontSize: 13,
        }}
      />
    </BaseNode>
  );
};

export default TextNode;
