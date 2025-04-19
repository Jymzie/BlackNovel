import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import GlobalContext from '../GlobalContext';

var EventEmitter = require("events").EventEmitter;
var theEvent = new EventEmitter();

 function Main() {
   const path =window.location.pathname
  return (
   
    <div className='bg-gradient-to-bl from-slate-600 to-slate-50'>
      < Navigation />
        <div className=" container mx-auto p-8 gap-y-8 lg:items-center lg:gap-x-16">
          
            <input
                type="text"
                id="Search"
                placeholder="Search..."
                onChange={val => theEvent.emit(`${path}Search`,val.target.value)}
                className="w-80 mb-5 mt-40 focus:outline-none rounded-full border-none border-gray-200 pe-10 ps-4 text-sm  py-2.5 shadow-sm sm:text-sm"
            />

          <div className=" rounded-xl bg-white/50 shadow-lg ring-1 ring-black/5 mx-auto pt-10 pb-20 p-8 min-h-96">
           {path == '/list' ? <WikiList/>:<NovelList/>}
          </div>
   
        </div>
        <Footer/>
    </div>
    
  );
 }

 function NovelList(){
    const data = useContext(GlobalContext)
    const [displaynov, SetNov] = useState(data)

    theEvent.on('/novelsSearch',function (val){
        let search = data.filter(rec => rec.title.toUpperCase().includes(val.toUpperCase()) )
        SetNov(search)
      })
  var [storyID, SetStory] = useState(-1);
  return(
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2" >
    {displaynov.map((item,i) => (
      <div key={i} className="items-center justify-center text-center flex">
      <Link to={"/novel?title="+item.title} preventScrollReset >
        <img className="rounded-lg object-cover hover:scale-105 transition ease-in-out delay-150 h-60 w-96" alt={item.title} src={item.cover+'.webp'}  
        onMouseEnter={() => SetStory(item.id)}/>
        <h2 className="text-3xl font-bold sm:text-4xl [text-shadow:_1px_0_4px_rgb(0_0_0_/_0.8)]">{item.title}</h2>
      </Link>
       
       </div>
    ))}
    </div>
  )
  
 }
 function WikiList(){
    const data = [{story:'Coma', characters:["Kalisto Lytcaster", 'Kassidy Vanguinii', 'Wigen Tales', 'John Veils', 'Nero', 'Tomoka']},
    {story:'The Dark Child', characters:["Luchifer Arba", 'Geanne Mortan', 'Monika', 'Psymon Don Miljeste', 'Sample', 'Sample1']},
    {story:'Colors N Shadows', characters:['Jymz Starstrife', 'Doctor Mideus']},
    {story:'!=', characters:['Yuki Touma', 'Jinxo', 'Aubry']}]
    const [contents, SetContent] = useState(data)
    theEvent.on('/listSearch',function (val){
      let search = data.map(rec => { return{story:rec.story, 
        characters:rec.characters.filter(chars => chars.toUpperCase().includes(val.toUpperCase()))}}
        ).filter(index => index.characters.length != 0)
      SetContent(search)
    })

    return(
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {contents.map((item,i) => (
          <div key={i} >
      
            <h2 className="text-3xl mx-2 my-2 font-bold sm:text-4xl [text-shadow:_1px_0_4px_rgb(0_0_0_/_0.8)]">{item.story}</h2>
            <ul>
            {item.characters.map((chars,x) =>(
              <Link to={"/wiki?about="+chars} key={x}>
              <li className="py-1 mx-2 text-xl rounded-lg hover:bg-black hover:text-white hover:[text-shadow:_1px_0_4px_rgb(255_255_255_/_0.8)]">{chars}</li>
              </Link>
            ))}
            </ul>
          </div>
        ))}
      
      </div>
    )
 }

export default Main;
