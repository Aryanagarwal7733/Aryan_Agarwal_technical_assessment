// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ 
          cursor: 'grab', 
          minWidth: '100px', 
          padding: '12px',
          height: 'auto',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          borderRadius: '8px',
          backgroundColor: '#1e40af',
          border: '2px solid #3b82f6',
          transition: 'all 0.2s ease',
          userSelect: 'none',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
        }} 
        draggable
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#1e3a8a';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#1e40af';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
        }}
      >
          <span style={{ color: '#fff', fontWeight: 500, fontSize: '14px' }}>{label}</span>
      </div>
    );
  };
  