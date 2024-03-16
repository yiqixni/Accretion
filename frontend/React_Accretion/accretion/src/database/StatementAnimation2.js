import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Database.css';

const wordVariants = {
    highlight: {
      color: 'green', // Highlight color when visible
      opacity: 1,
      fontSize: '20pt',
    },
    hidden: {
      color: 'transparent', // Hide the word initially
      opacity: 0,
    },
};


const StatementAnimation2 = () => {
  const [currentWord, setCurrentWord] = useState('county clerks'); // Initial word
  const words = ['county clerk', 
                 'real estate attorney', 
                 'title company', 
                 'title insurer', 
                 'REIT', 
                 'for sale by owner', 
                 'seasoned retail investor',
                 'first time home buyer',
                ]; // Words to cycle through

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (words.indexOf(currentWord) + 1) % words.length;
      setCurrentWord(words[nextIndex]);
    }, 500); // Change word duration 

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [currentWord, words]);

  return (
    <div>
      <div id='statement-animation1'>
        <motion.span animate="highlight" variants={wordVariants}>
            {currentWord}
        </motion.span>
      </div> 
      
    </div>
  );
};

export default StatementAnimation2;
