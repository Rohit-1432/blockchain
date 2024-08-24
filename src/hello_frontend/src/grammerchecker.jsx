import React, { useState } from 'react';
import axios from 'axios';

const GrammarChecker = () => {
  const [text, setText] = useState('');
  const [correctedText, setCorrectedText] = useState('');
  const [error, setError] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const checkGrammar = async () => {
    try {
      const response = await axios.post('YOUR_API_ENDPOINT_HERE', {
        text: text,
      });
      setCorrectedText(response.data.correctedText);
      setError('');
    } catch (err) {
      setError('An error occurred while checking grammar.');
      setCorrectedText('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Grammar Checker</h2>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text to check for grammar"
        rows="10"
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      <button onClick={checkGrammar} style={{ marginTop: '10px', padding: '10px 20px' }}>
        Check Grammar
      </button>
      {correctedText && (
        <div style={{ marginTop: '20px', backgroundColor: '#f0f0f0', padding: '10px' }}>
          <h3>Corrected Text:</h3>
          <p>{correctedText}</p>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default GrammarChecker;
