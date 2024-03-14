import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const wordVariants = {
    highlight: {
      color: 'green', // Highlight color when visible
      opacity: 1,
      fontSize: '30pt',
    },
    hidden: {
      color: 'transparent', // Hide the word initially
      opacity: 0,
    },
  };


const Sentence = () => {
  const [currentWord, setCurrentWord] = useState('real estate experts'); // Initial word
  const words = ['real estate experts', 
                 'title insurances', 
                 'title companies', 
                 'real estate attorneys', 
                 'county clerks', 
                 'YOU', 
                ]; // Words to cycle through

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (words.indexOf(currentWord) + 1) % words.length;
      setCurrentWord(words[nextIndex]);
    }, 1500); // Change word duration 

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [currentWord, words]);

  return (
    <div>
      <div className='mission-statement-animation'>
        <motion.span animate="highlight" variants={wordVariants}>
            {currentWord}
        </motion.span>
      </div> 
      
    </div>
  );
};

export default Sentence;
  