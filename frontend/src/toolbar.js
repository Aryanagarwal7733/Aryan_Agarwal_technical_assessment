// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ 
            padding: '15px', 
            backgroundColor: '#0f172a',
            borderBottom: '1px solid #1e293b',
            minHeight: '100px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <h3 style={{ margin: '0 0 15px 0', color: '#e2e8f0', fontSize: '14px', fontWeight: 600 }}>
                Available Nodes
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
            </div>
        </div>
    );
};
