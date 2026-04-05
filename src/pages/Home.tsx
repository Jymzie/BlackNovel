
import React, { useState, CSSProperties, useEffect, useRef } from 'react'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useTransition, animated, useSpringRef } from '@react-spring/web';
import {Link} from "react-router-dom";
import { useOrientation } from 'react-use';
import styles from './styles.module.css';
import WindowSize from '../components/WindowSize';
import axios from 'axios';
import enki from '../components/Enkidu'

const API_URL = import.meta.env.VITE_API_BASE_URL;
 function App() {
  //NOTE data
  // const data = useContext(GlobalContext)
  let [data, setContent] = useState([]);
  const {type} = useOrientation()
  const coverplaceholder = {_id: -1, title: 'Black Novel', summary:"A novel who's rich from thy own story..." }
  var [storyID, SetStory] = useState(-1);
  const [displaynov, SetNov] = useState(data)
  const currentStory = data?.findIndex(item => item._id === storyID) ;
  
  const mGetTable = () => {
        // In a real app, ensure your API route starts with / if it's absolute
        axios.get(`${API_URL}/api/vt/nov`) 
            .then((res) => {
                const final = enki(res.data)
                setContent(final);
                SetNov(final);
            })
            .catch(err => console.error(err));
            
    };

    useEffect(() => {
        mGetTable();
    }, []);
    //NOTE watcher sample
    // useEffect(() => {
    //   // This will run every time 'currentStory' changes
    //   if (storyID) {
    //     console.log("Current Story Updated:", currentStory);
    //     console.log(storyID)
    //     console.log(data?.findIndex(item => item._id === storyID))

    //   }
    // }, [currentStory]);
  
 
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
  const [currentSrc, setCurrentSrc] = useState(data?.[0]?.metadata?.sound);

  //NOTE For Audio
  useEffect(() => {
    audioRef.current.pause();
    
    if(storyID !== -1){
      setCurrentSrc(data?.[currentStory]?.metadata?.sound);
    
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

    const transitions = useTransition(currentStory, {
      key: currentStory,
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: { duration: 1000 },
    })

    const size = WindowSize();
  return (
    // FIXME  not compatible to other monoitor screen?
    <div>
      <div className={`bg-gradient-to-bl from-slate-600 to-slate-50 pb-2 ${size.width > 1229 ? 'h-screen' : 'min-h-screen'}`}>
       {/*ANCHOR NAV*/}
      < Navigation />
        {/* ANCHOR Transition Background */}
        

       {(transitions((style, i) => (
        <animated.div
          className={size.width > 1229 ? styles.bgl : size.width < 660 ? styles.bgxs : styles.bgs}
          style={{
            ...style,
            backgroundImage: `url('/${i === -1 ? '' : data?.[i]?.metadata?.cover}.webp')`,
            backgroundAttachment: 'fixed'
          }}
        />
      )))}
      
          <div className="grid container mx-auto pt-28 grid-cols-1 gap-y-8 xl:grid-cols-2 xl:gap-x-16">
            <div className="mx-auto xl:mr-11 h-80 pt-20">
              <h2 className="isolate text-black text-3xl font-bold sm:text-4xl [text-shadow:_1px_0_4px_rgb(255_255_255_/_0.8)]">{storyID === -1 ? coverplaceholder.title : data?.[currentStory]?.title}</h2>
              {/* ANCHOR Title and summary */}
                <div style={{width:`${size.width > 614 ? '600px':'auto'}`}} className="isolate text-black rounded-xl bg-white/70 shadow-lg ring-1 ring-black/5 mx-auto mt-5 p-5">
                  <p  align="justify">
                    {storyID === -1 ? coverplaceholder.summary:data?.[currentStory]?.summary}
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
                    <img className="isolate rounded-lg object-cover hover:scale-105 transition ease-in-out delay-150 h-60 w-96" alt={item.title} src={item.metadata.cover+'.webp'}  
                    onMouseEnter={() =>  SetStory(item._id)} onMouseLeave={() => SetStory(coverplaceholder._id)}/>
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
