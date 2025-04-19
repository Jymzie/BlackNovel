
import React, { useState, CSSProperties, useEffect } from 'react'
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
  const coverplaceholder = { id: -1, title: 'Black Novel', summary:'Rich from thy own story...' }
  var [storyID, SetStory] = useState(-1);
  const [displaynov, SetNov] = useState(data)
  
  //method
  // function SetStory(item){
    // setTitle(item.title)
    // setSummary(item.summary)
  //   setbg(item.id)
  // }

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
    <div style={{top:'0',bottom:'0'}}>
      <div className='bg-gradient-to-bl from-slate-600 to-slate-50'>
       {/* {size.width} */}
      < Navigation />

       {size.width > 1229 && (transitions((style, i) => (
        <animated.div
          className={styles.bg}
          style={{
            ...style,
            backgroundImage: `url('/${i == -1 ? '' : data[i].cover}.webp')`,
          }}
        />
      )))}
      
          <div className="grid container mx-auto pt-20 p-8 grid-cols-1 gap-y-8 xl:grid-cols-2 xl:gap-x-16">
            <div className="mx-auto xl:mr-11 h-80 pt-20">
              <h2 className="isolate text-3xl font-bold sm:text-4xl [text-shadow:_1px_0_4px_rgb(255_255_255_/_0.8)]">{storyID == -1 ? coverplaceholder.title : data[storyID].title}</h2>
                <div style={{width:`${size.width > 614 ? '600px':'auto'}`}} className="isolate rounded-xl bg-white/70 shadow-lg ring-1 ring-black/5 mx-auto mt-5 p-5">
                  <p  align="justify">
                    {storyID == -1 ? coverplaceholder.summary:data[storyID].summary}
                  </p>
                </div>

            {/* Input for search here */}
            {/* <div className="relative mt-8">
              <label className="sr-only"> Search </label>

              <input
                type="text"
                id="Search"
                placeholder="Search..."
                onChange={val => mSearch(val.target.value)}
                className="w-full h-12 focus:outline-none rounded-full border-none border-gray-200 pe-10 ps-4 text-sm  py-2.5 shadow-sm sm:text-sm"
              />

              <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button 
                  type="button" 
                  className="absolute border border-emerald-700 end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                  >
                  <span className="sr-only">Search</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </span>
            </div> */}
              
            </div>
            
            {/* statistics here */}
            <div className='mx-auto pt-10'>
            
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
               
                {displaynov.map((item,i) => (
                  <Link to={"/novel?title="+item.title} key={i}>
                    <img className="isolate rounded-lg object-cover hover:scale-105 transition ease-in-out delay-150 h-60 w-96" alt={item.title} src={item.cover+'.webp'}  
                    onMouseEnter={() => SetStory(item.id)} onMouseLeave={() => SetStory(coverplaceholder.id)}/>
                  </Link>
                ))}
                
                
               
              </div>
      
            </div>
          </div>
          
      
       
      </div>
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
