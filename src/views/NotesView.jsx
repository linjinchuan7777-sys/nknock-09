import React, { useState, useEffect } from 'react';

const NotesView = ({ notes, onSaveNotes }) => {
  const [localNotes, setLocalNotes] = useState(notes);
  const [saveStatus, setSaveStatus] = useState('隨手筆記：自動儲存中');

  useEffect(() => {
    setLocalNotes(notes);
  }, [notes]);

  const handleChange = (e) => {
    const val = e.target.value;
    setLocalNotes(val);
    setSaveStatus('輸入中...');
    
    // Auto save
    if (onSaveNotes) {
      onSaveNotes(val);
    }

    setTimeout(() => {
      setSaveStatus('隨手筆記：已自動儲存');
    }, 500);
  };

  return (
    <div id="notes-view" className="view-panel" style={{ display: 'block' }}>
      <div className="notebook-container">
        <div className="notebook-binder">
          <div className="notebook-ring"></div>
          <div className="notebook-ring"></div>
          <div className="notebook-ring"></div>
          <div className="notebook-ring"></div>
          <div className="notebook-ring"></div>
          <div className="notebook-ring"></div>
          <div className="notebook-ring"></div>
          <div className="notebook-ring"></div>
          <div className="notebook-ring"></div>
          <div className="notebook-ring"></div>
        </div>
        <textarea 
          className="notebook-textarea" 
          id="notebook-textarea" 
          placeholder="在這裡隨手寫下您的靈感與筆記... 離開或重新整理網頁時會自動儲存。"
          value={localNotes}
          onChange={handleChange}
        />
        <div style={{ textAlign: 'right', marginTop: '12px', fontSize: '11px', color: 'var(--text-light)' }} id="notes-save-status">
          {saveStatus}
        </div>
      </div>
    </div>
  );
};

export default NotesView;
