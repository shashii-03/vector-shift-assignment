export const DraggableNode = ({ type, label, color = '#3b82f6' }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
    event.currentTarget.style.cursor = 'grabbing';
    event.currentTarget.style.opacity = '0.6';
  };

  const onDragEnd = (event) => {
    event.currentTarget.style.cursor = 'grab';
    event.currentTarget.style.opacity = '1';
  };

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, type)}
      onDragEnd={onDragEnd}
      className="cursor-grab select-none rounded-lg min-w-[120px] h-[70px] flex items-center justify-center
        border-2 bg-white
        transition-all duration-200 ease-out
        hover:shadow-lg hover:-translate-y-0.5"
      style={{
        borderColor: color,
        borderLeftWidth: '4px',
      }}
    >
      <span className="font-semibold text-sm text-gray-700">{label}</span>
    </div>
  );
};