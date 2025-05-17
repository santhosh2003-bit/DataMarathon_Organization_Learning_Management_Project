'use client'
import { useState, useEffect } from 'react'

const AnimatedText = ({ text, interval }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  // useEffect(() => {
  //   if (index < text.length) {
  //     const timeoutId = setTimeout(() => {
  //       setDisplayedText((prev) => prev + text[index]);
  //       setIndex((prev) => prev + 1);
  //     }, interval);

  //     return () => clearTimeout(timeoutId);
  //   }
  // }, [index, text, interval]);

  return <span>{text}</span>
}

export default AnimatedText
