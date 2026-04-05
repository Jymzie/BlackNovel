import React, { useState, CSSProperties, useEffect, useRef } from 'react'



const useIPadDetector = () => {
    const [isIPad, setIsIPad] = useState(false);
  
    useEffect(() => {
      const checkIPad = () => {
        const userAgent = navigator.userAgent.toLowerCase();
        console.log(userAgent)
        // iPad-specific detection pattern
        const iPadRegex = /ipad/i;
        setIsIPad(iPadRegex.test(userAgent));
      };
  
      checkIPad();
      window.addEventListener('resize', checkIPad);
  
      return () => window.removeEventListener('resize', checkIPad);
    }, []);
    console.log(isIPad)
    return isIPad;
  };

    export default useIPadDetector;