import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const [text, setText] = useState('');
  const phrases = [
    '↑ Select one of the links above to see what restaurants Boston has to offer! ↑',
  ];

  useEffect(() => {
    let currentText = '';
    let index = 0;

    const type = () => {
      if (index < phrases.length) {
        if (currentText.length < phrases[index].length) {
          currentText = phrases[index].substring(0, currentText.length + 1);
          setText(currentText);
        }
      }
    };

    const typingInterval = setInterval(type, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return <h2>{text}</h2>;
};

export default Typewriter;
