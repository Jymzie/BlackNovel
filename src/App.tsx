
import React, { useLayoutEffect } from 'react';
import { Routes, Route, BrowserRouter as Router, useLocation } from 'react-router-dom';
import Home from "./pages/Home";
import Read from "./pages/Read";
import NovelChar from "./pages/Novel&Char";
import List from "./pages/List";
interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
        const location = useLocation();
      
        useLayoutEffect(() => {
          // Scroll to the top of the page when the route changes
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }, [location.pathname]);
      
        return <>{children}</>;
      };

 function App() {
        // ANCHOR COMA
 

  return (   
        <Router>
            <Wrapper>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/read" element={<Read />} />
                <Route path="/list" element={<List />} />
                <Route path="/novels" element={<List />} />
                <Route path="/novel" element={<NovelChar  />} />
                <Route path="/wiki" element={<NovelChar  />} />
                </Routes>
            </Wrapper>
        </Router>
 
  );
 }
 

export default App;
