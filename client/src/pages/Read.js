import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import GlobalContext from '../GlobalContext';
import { useEffect } from "react";




 function PARAMS(){
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const data = {title:params.get("title"),
                ch:parseInt(params.get("ch")),
                total:params.get("ch").split('/')[1]}
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
    <span className="hover:text-black">{params.title}</span></Link> / Chapter  <select value={params.ch} onChange={e => ChangeChapter(e.target.value)} className="text-black w-14 rounded-lg">
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
            {params.ch > 1 && <Link to={`/read?title=${params.title}&&ch=${params.ch-1}`+'/'+params.total}>
              <p onClick={ToTop} className="text-xl hover:text-black">Prev
              </p>
            </Link>}
            {params.ch < params.total && <Link to={`/read?title=${params.title}&&ch=${params.ch+1}`+'/'+params.total}>
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

    const data = useContext(GlobalContext)
    const filternovel = data.filter(rec => rec.title === params.title)
    const filterchapter = filternovel[0].chapters.filter(chap => chap.ch === params.ch)
    const novel = filterchapter[0]
    console.log(novel)
  return(
<div>

    <dd className="text-4xl font-extrabold mb-10 md:text-5xl text-center">
        Chapter {params.ch}: {novel.title}
    </dd>
    {novel.content.map((item,i) => (
      <div key={i}>
             <p  style={{fontStyle:`${item.includes('<italic>') ? 'italic':''}`}} align="justify" className="mt-4 text-gray-600">
            {item.replace(/<italic>/g, "")}
        </p>
        {novel.screenshots[i] !== undefined && 
          <img style={{width:700}} className="p-2 mx-auto" alt='sample' src={novel.screenshots[i]+'.webp'}/>}
        
      </div>
   
    ))}
  </div>
  )
  
 }


export default Main;
