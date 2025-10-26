import { useState, useEffect, useRef } from 'react';
import { BaseNode } from './BaseNode';
import { Maximize2 } from 'lucide-react';
import { TEXT_NODE_COLOR } from '../utils/color';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [height, setHeight] = useState(80);
  const [showModal, setShowModal] = useState(false);
  const textareaRef = useRef(null);
  const modalTextareaRef = useRef(null);

  const MAX_HEIGHT = 200;

  const adjustSize = () => {
    if (textareaRef.current) {

      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;


      if (scrollHeight <= MAX_HEIGHT) {
        textareaRef.current.style.height = `${scrollHeight}px`;
        textareaRef.current.style.overflowY = 'hidden';
        setHeight(scrollHeight + 60);
      } else {
        textareaRef.current.style.height = `${MAX_HEIGHT}px`;
        textareaRef.current.style.overflowY = 'auto';
        setHeight(MAX_HEIGHT + 60);
      }
    }
  };

  useEffect(() => {
    adjustSize();

    const vars = [];
    const regex = /{{\s*([a-zA-Z_$][\w$]*)\s*}}/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
      vars.push(match[1]);
    }
    setVariables([...new Set(vars)]);
  }, [text]);

  const inputHandles = variables.map((v) => ({ id: v }));

  const handleTextChange = (e) => {
    const newText = e.target.value;
    const cursorPos = e.target.selectionStart;

    // Auto-complete {{ to {{}}
    if (newText.length > text.length && newText.slice(cursorPos - 2, cursorPos) === '{{') {
      const beforeCursor = newText.slice(0, cursorPos);
      const afterCursor = newText.slice(cursorPos);
      const updatedText = beforeCursor + '}}' + afterCursor;

      setText(updatedText);

      // Set cursor position in the middle of {{}}
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = cursorPos;
          textareaRef.current.selectionEnd = cursorPos;
        }
      }, 0);
    } else {
      setText(newText);
    }
  };

  const handleModalTextChange = (e) => {
    setText(e.target.value);
  };

  const handleExpandClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Adjust modal textarea on open
  useEffect(() => {
    if (showModal && modalTextareaRef.current) {
      modalTextareaRef.current.style.height = 'auto';
      modalTextareaRef.current.style.height = `${modalTextareaRef.current.scrollHeight}px`;
    }
  }, [showModal, text]);

  return (
    <>
      <BaseNode
        id={id}
        title="Text Node"
        inputs={inputHandles}
        outputs={[{ id: 'output' }]}
        color={TEXT_NODE_COLOR}
        style={{ minHeight: height, width: 200 }}
      >
        <div className="relative">
          <textarea
            ref={textareaRef}
            rows={1}
            value={text}
            onChange={handleTextChange}
            className="textarea-auto"
            style={{
              borderColor: TEXT_NODE_COLOR,
            }}
          />
          <button
            onClick={handleExpandClick}
            className="absolute top-1 right-1 p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
            title="Expand"
          >
            <Maximize2 size={14} />
          </button>
        </div>
        <small className="text-muted">
          Variables detected: {variables.join(', ') || 'None'}
        </small>
      </BaseNode>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Edit Text</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="p-4 flex-1 overflow-auto">
              <textarea
                ref={modalTextareaRef}
                value={text}
                onChange={handleModalTextChange}
                className="textarea-auto min-h-[300px]"
                style={{
                  borderColor: TEXT_NODE_COLOR,
                }}
                autoFocus
              />
              <p className="text-muted mt-2">
                Variables detected: {variables.join(', ') || 'None'}
              </p>
            </div>

            <div className="flex justify-end gap-2 px-4 py-3 border-t border-gray-200">
              <button onClick={handleCloseModal} className="btn-outline">
                Cancel
              </button>
              <button onClick={handleCloseModal} className="btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};