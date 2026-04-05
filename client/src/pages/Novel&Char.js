import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
import React, { useState, CSSProperties, useEffect, useRef } from 'react'
import WindowSize from '../components/WindowSize'
import useMediaQuery from '../components/CustomSize'
import { useWindowDimensions } from 'react-native';
import axios from 'axios';
import enki from '../components/Enkidu'


const API_URL = process.env.REACT_APP_API_BASE_URL;
 function PARAMS(){
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  return params
 }

 function NovelData(){
  const title = PARAMS().get("title")
  const [data, setData] = useState(null);

  useEffect(() => {
      axios.get(`${API_URL}/api/v1/chap?title=${title}`)
        .then(res => {
           const final = enki(res.data)
                
          setData(final); // This "catches" the data from Express
        })
        .catch(err => console.error(err));
    
  }, [title]);

  return data; // This will be null first, then fill up with your MongoDB object
}

 //NOTE Character data
function CharacterData() {
  const char = PARAMS().get("about");
  const [data, setContent] = useState(null);

  useEffect(() => {
    // Check for 'char' (the URL param), NOT 'data' (the state)
    if (char) { 
  
      axios.get(`${API_URL}/api/z2/char?char=${char}`)
        .then((res) => {
           const final = enki(res.data)
                
          setContent(final);
            
        })
        .catch(err => console.error("API Error:", err));
    }
  }, [char]); 

  return data;
}
    
// ANCHOR Main
 function Main() {
  const path = window.location.pathname
  const data = path === '/novel' ? NovelData():CharacterData()
  const title = PARAMS().get(path === '/novel' ? "title":"about")
  const size = WindowSize();
  const isMidScreen = useMediaQuery('(max-width: 1300px)');
  const isXSScreen = useMediaQuery('(max-width: 600px)');
  const isSmallScreen = useMediaQuery('(max-width: 900px)');
   const { height, width } = useWindowDimensions();
  return (
    <div>
      <div className='bg-gradient-to-bl from-slate-600 to-slate-50 bg-cover h-fit  Hminbody'>
        < Navigation/>
        {/* NOTE image when mobile */}
      
          <div className="grid mx-auto grid-cols-1 lg:grid-cols-7 lg:items-center ">
            <div className=" mx-auto -mb-9 col-span-4">
              <div className="justify-center flex">
                {/* NOTE image when pc */}
                <img style={{height: size.width > 940 ?'30vw':'300px', objectFit:size.width > 940 ? '':'cover' }} className={`rounded-lg ${size.width < 940 ? 'mt-16 w-screen bg-center': ' h-fit'}`} alt={title} src={data?.metadata?.cover+'.webp'}
                onError={(e) => {
                  e.currentTarget.src = "favicon.webp";
                  e.currentTarget.onerror = null; // Prevents infinite loops if placeholder also fails
                }}/>
              </div>
            
              <div>
                <h2 className="justify-center flex pt-3 text-3xl font-bold sm:text-4xl [text-shadow:_1px_0_4px_rgb(255_255_255_/_0.8)]">{title}</h2>
                {/* <div className="isolate rounded-xl bg-white/70 shadow-lg ring-1 ring-black/5 mx-auto mt-5 p-8">
                  
              
                  {path == '/novel' ? Synopsis(data):PersonalInfo(data)}
                
                </div> */}
              </div>
                
            </div>

            <div className="bg-white/50 mx-auto rounded-sm mt-16 pb-5 pt-3  col-span-3 " style={{height:isSmallScreen ? '700px':'52vw',
              width: '100%'}}>
              
              
                {path === '/novel' ? <Chapters/>:<CharDetails desc={data?.description}/>}
              
                
              
            </div>
          </div>
      </div>
      <Footer/>
    </div>
  );
 }

//  ANCHOR Chapter List
 function Chapters(){
  const novel = NovelData()
  const isBigScreen = useMediaQuery('(max-width: 1600px)');
  const isMidScreen = useMediaQuery('(max-width: 1300px)');
  const isSmallScreen = useMediaQuery('(max-width: 900px)');
  return(
    <div className="text-center mx-2">
      <div className="isolate rounded-xl bg-white/70 shadow-lg ring-1 ring-black/5 mx-auto p-5"> 
        {Synopsis(novel)}
      </div>
      <div className="mx-3 p-3 overflow-auto bg-gray-500 rounded-md" style={{height: isSmallScreen ? '400px' :isMidScreen ? '24vw': '33vw'}}>
        {novel?.chapters.map((item,i) => (
            <Link to={"/read?title="+novel.title+"&&ch="+item.chapter_number} key={i}>
                <div className="text-gray-600 mb-3 rounded-lg border bg-gray-200 border-black
                hover:bg-black hover:text-white p-3
                hover:[text-shadow:_1px_0_4px_rgb(255_255_255_/_0.8)] 
                transition-all 
                ">
            
                    Chapter {item.chapter_number}: {item.title}
            
                </div>
                
            </Link>
        ))}
        </div>
    </div>
  )
  
 }

 //  ANCHOR Character Details
 function CharDetails(index) {
  const isMidScreen = useMediaQuery('(max-width: 1300px)');
  const isSmallScreen = useMediaQuery('(max-width: 900px)');
  // 1. Check if index or index.desc exists
  if (!index || !index.desc) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-gray-500 animate-pulse">Loading character details...</p>
      </div>
    );
  }

  // 2. If we reach here, we know desc exists
  return (
    <div className="overflow-auto" style={{height: isSmallScreen ? '650px' :isMidScreen ? '48vw': '50vw'}}>
      {Object.keys(index.desc).map((item, i) => (
        <div key={i} >
          <h2 className="mb-2 mx-5 font-bold text-3xl [text-shadow:_1px_0_4px_rgb(0_0_0_/_0.8)]">
            {item.toUpperCase()}
          </h2>
          <p align="justify" className="indent-16 mb-6 mx-5">
            {index.desc[item]}
          </p>
        </div>
      ))}
    </div>
  );
}

//  ANCHOR Synopsis
 function Synopsis(data){
  return(
    <p  align="justify">
      {data?.summary}
    </p>
  )
 }

//  ANCHOR personal info 
 function PersonalInfo(data){
  return(
    <table className="flex justify-center xl:text-xl">
      <div className="grid grid-cols-1 gap-x-10 lg:grid-cols-2 lg:gap-x-5 xl:grid-cols-2">
      {Object.keys(data.trait).map((item,i) =>
        <tr key={i} className="grid grid-cols-2">
          <th className="text-left">{item}:</th>
          <td className="text-right w-24 xl:w-28">{data.trait[item]}</td>
          
       </tr>
      )}
      
      </div>
    </table>
    
  )
 }

export default Main;
