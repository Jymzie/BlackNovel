import { useState, useEffect } from 'react';


function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
    
    useEffect(() => {
      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);
      
      const handler = (e) => setMatches(e.matches);
      mediaQuery.addEventListener('change', handler);
      
      return () => mediaQuery.removeEventListener('change', handler);
    }, [query]);
    
    return matches;
  }

export default useMediaQuery;