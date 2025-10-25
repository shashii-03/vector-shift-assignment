// // textNode.js

// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || '{{input}}');

//   const handleTextChange = (e) => {
//     setCurrText(e.target.value);
//   };

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <div>
//         <span>Text</span>
//       </div>
//       <div>
//         <label>
//           Text:
//           <input 
//             type="text" 
//             value={currText} 
//             onChange={handleTextChange} 
//           />
//         </label>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-output`}
//       />
//     </div>
//   );
// }




//New node:

import { useState, useEffect, useRef } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [height, setHeight] = useState(80);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      setHeight(textareaRef.current.scrollHeight + 40);
    }

    const vars = [];
    const regex = /{{\s*([a-zA-Z_$][\w$]*)\s*}}/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
      vars.push(match[1]);
    }
    setVariables([...new Set(vars)]); // store unique variables
  }, [text]);

  const inputHandles = variables.map((v) => ({ id: v }));

  return (
    <BaseNode
      id={id}
      title="Text Node"
      inputs={inputHandles} // dynamic handles for each variable
      outputs={[{ id: 'output' }]}
      color="#10b981"
      style={{ minHeight: height }}
    >
      <textarea
        ref={textareaRef}
        rows={1}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: '100%',
          resize: 'none',
          overflow: 'hidden',
          border: '1px solid #ddd',
          borderRadius: 6,
          padding: 6,
        }}
      />
      <small style={{ color: '#666' }}>
        Variables detected: {variables.join(', ') || 'None'}
      </small>
    </BaseNode>
  );
};
