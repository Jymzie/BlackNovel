import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';
import enki from '../components/Enkidu'

const API_URL = process.env.REACT_APP_API_BASE_URL;
 function PARAMS(){
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (total === 0) {
      axios.get(`${API_URL}/api/v3/chap?title=${params.get("title")}`)
        .then(res => {
           const final = enki(res.data)
               
          setTotal(final); // This "catches" the data from Express
        })
        .catch(err => console.error(err));
    }
  }, [total]);

  const data = {title:params.get("title"),
                ch:parseInt(params.get("ch")),
                total:total}

  return data
 }

function ToTop(){

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

// NOTE Detect Story through url parameter
 function History(){
  const params = PARAMS()
  const navigate = useNavigate()
  const chapters =[]
    for (let i = 1; i <= params.total; i++) {
      chapters.push(i)
    }

    function ChangeChapter(value){
      
      navigate(`/read?title=COMA&&ch=${value}/`+params.total)
    }
  return(
    
    <p className="container mx-auto mb-5 mt-32 px-2 text-white text-xl [text-shadow:_1px_0_4px_rgb(255_255_255_/_0.8)]">
    <Link to="/"><span className="hover:text-black">HOME</span></Link> / <Link to={`/novel?title=${params.title}`}>
    <span className="hover:text-black">{params?.title}</span></Link> / Chapter  <select value={params?.ch} onChange={e => ChangeChapter(e.target.value)} className="text-black w-14 rounded-lg">
        {chapters.map((item,i) =>
          <option key={i} value={item}>{item}</option>
        )}
      </select>
    </p>
  )
 

 }

 //  ANCHOR NextPrev
 function NextPrev(){
  const params = PARAMS()
  return(
        <div className={`${params.ch > 1 ? 'grid container grid-cols-2':'' } pb-32 px-10 pt-5 text-white [text-shadow:_1px_0_4px_rgb(255_255_255_/_0.8)]`}>
            {params.ch > 1 && <Link to={`/read?title=${params?.title}&&ch=${params?.ch-1}`+'/'+params.total}>
              <p onClick={ToTop} className="text-xl hover:text-black">Prev
              </p>
            </Link>}
            {params.ch < params.total && <Link to={`/read?title=${params?.title}&&ch=${params.ch+1}`+'/'+params.total}>
              <p onClick={ToTop} className="text-right text-xl hover:text-black">Next
              </p>
            </Link>}
        </div>
  )
 }

//  ANCHOR Main
 function Main() {
    
   
    // const pagepath = window.location.pathname

  return (
    <div>
      <div className='bg-gradient-to-bl from-slate-600 to-slate-50 Hminbody'>
        < Navigation />
          
          
        
          <div className=" container mx-auto p-8 gap-y-8 lg:items-center lg:gap-x-16">
            <History/>
            <div className=" rounded-xl bg-white/50 shadow-lg ring-1 ring-black/5 mx-auto pt-10 pb-20 p-8">
              <Read/>
            </div>
            <NextPrev/>
            
            
          </div>
         
      </div>
      <Footer/>
    </div>
    
  );
 }

 //  ANCHOR Read
 function Read(){
  
  
    const params = PARAMS()
     const [data, setData] = useState(null);

    useEffect(() => {
      if (data === null) {
        axios.get(`${API_URL}/api/v2/chap?title=${params?.title}`)
          .then(res => {
             const final = enki(res.data)
                
            setData(final); // This "catches" the data from Express
          })
          .catch(err => console.error(err));
      }
    }, []);
    const novel = data?.[params.ch-1]
  return(
<div>

    <dd className="text-4xl font-extrabold mb-10 md:text-5xl text-center">
        Chapter {params?.ch}: {novel?.title}
    </dd>
    {novel?.content.map((item,i) => (
      <div 
        key={i} 
        className={`select-none grid gap-8 items-center ${
          novel.screenshots[i] !== undefined ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'
        }`}
      >
        {/* Column 1: Text */}
        <p 
          style={{ fontStyle: item.includes('<italic>') ? 'italic' : 'normal' }} 
          className="mt-4 text-gray-600 text-justify"
        >
          {item.replace(/<italic>/g, "")}
        </p>

        {/* Column 2: Screenshot */}
        {novel.screenshots[i] !== undefined && (
          <div className="flex justify-center">
            <img 
              style={{ height: 400, objectFit: 'contain' }} 
              className="p-2" 
              alt="sample" 
              src={`${novel.screenshots[i]}.webp`} 
              onError={(e) => {
                  e.currentTarget.src = "favicon.webp";
                  e.currentTarget.onerror = null; // Prevents infinite loops if placeholder also fails
                }}/>
          </div>
        )}
      </div>
   
    ))}
  </div>
  )
  
 }


export default Main;
