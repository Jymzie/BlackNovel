
import React, { useState, CSSProperties, useEffect, useRef } from 'react'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useTransition, animated, AnimatedProps, useSpringRef } from '@react-spring/web'
import {Link} from "react-router-dom";
import { useOrientation } from 'react-use';
import { useContext } from 'react';
import GlobalContext from '../GlobalContext';
import styles from './styles.module.css';
import WindowSize from '../components/WindowSize';




 function App() {
  //data
  const data = useContext(GlobalContext)
  const {type} = useOrientation()
  const coverplaceholder = { id: -1, title: 'Black Novel', summary:"A novel who's rich from thy own story..." }
  var [storyID, SetStory] = useState(-1);
  const [displaynov, SetNov] = useState(data)
  
 
  const audioRef = useRef(null);
  //NOTE old to new comparison sample
  // const OldStoryID = useRef();
  // useEffect(() => {
  //   if (OldStoryID.current !== storyID) {
  //     // Handle value change
  //     console.log('Changed from:', OldStoryID.current, 'to:', storyID);
  //     OldStoryID.current = storyID;
  //     audioRef.current = null;
  //   }
  // }, [storyID]);
  const [currentSrc, setCurrentSrc] = useState(data[0].sound);

  //NOTE For Audio
  useEffect(() => {
    audioRef.current.pause();
    
    if(storyID !== -1){
      setCurrentSrc(data[storyID].sound);
    
      //NOTE - Audio error handler
      const playPromise = audioRef.current.play();
      if (playPromise) {
        playPromise
          .catch(error => {
            if (error.name === 'NotAllowedError') {
              console.debug('Playback prevented by browser policy');
            } else if (error.name === 'AbortError') {
              console.debug('Playback interrupted by pause');
            } else {
              console.debug('Unknown error:', error);
            }
          });
      }
      
    }
    else{
      audioRef.current.currentTime = 0;
    }

    
  });



    function mSearch(val){
      let search = data.filter(rec => rec.title.toUpperCase().includes(val.toUpperCase()) )
      SetNov(search)
    }

    const transitions = useTransition(storyID, {
      key: storyID,
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: { duration: 1000 },
    })

    const size = WindowSize();
  return (
    // FIXME  not compatible to other monoitor screen?
    <div>
      <div className='bg-gradient-to-bl from-slate-600 to-slate-50 Hminbody pb-2'>
       {/*ANCHOR NAV*/}
      < Navigation />
        {/* ANCHOR Transition Background */}
       {(transitions((style, i) => (
        <animated.div
          className={size.width > 1229 ? styles.bgl : size.width < 660 ? styles.bgxs : styles.bgs}
          style={{
            ...style,
            backgroundImage: `url('/${i === -1 ? '' : data[i].cover}.webp')`,
            backgroundAttachment: 'fixed'
          }}
        />
      )))}
      
          <div className="grid container mx-auto pt-28 grid-cols-1 gap-y-8 xl:grid-cols-2 xl:gap-x-16">
            <div className="mx-auto xl:mr-11 h-80 pt-20">
              <h2 className="isolate text-3xl font-bold sm:text-4xl [text-shadow:_1px_0_4px_rgb(255_255_255_/_0.8)]">{storyID === -1 ? coverplaceholder.title : data[storyID].title}</h2>
              {/* ANCHOR Title and summary */}
                <div style={{width:`${size.width > 614 ? '600px':'auto'}`}} className="isolate rounded-xl bg-white/70 shadow-lg ring-1 ring-black/5 mx-auto mt-5 p-5">
                  <p  align="justify">
                    {storyID === -1 ? coverplaceholder.summary:data[storyID].summary}
                  </p>
                </div>
              
            </div>
            {/* ANCHOR Audio element */}
            <audio ref={audioRef} src={currentSrc}/>
            {/* ANCHOR Latest Story preview */}
            <div className='mx-auto'>
            
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
               
                {displaynov.map((item,i) => (
                  <Link to={"/novel?title="+item.title} key={i}>
                    <img className="isolate rounded-lg object-cover hover:scale-105 transition ease-in-out delay-150 h-60 w-96" alt={item.title} src={item.cover+'.webp'}  
                    onMouseEnter={() =>  SetStory(item.id)} onMouseLeave={() => SetStory(coverplaceholder.id)}/>
                  </Link>
                ))}
                
                
               
              </div>
      
            </div>
            
          </div>
          
      
       
      </div>
      {/* ANCHOR Footer */}

      <Footer/>
     
    
       {/* <div className="flex flex-col rounded-lg border border-emerald-600 hover:bg-gray-200 hover:border-gray-200 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Tickets Sold
                  </dt>
                  <dd className="text-4xl font-extrabold mb-4 text-emerald-600 md:text-5xl">
                    9,k+
                  </dd>
                  </div> */}
    </div>
  );
 }

export default App;
