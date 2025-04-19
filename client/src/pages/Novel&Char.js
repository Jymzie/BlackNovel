import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
import { useContext } from 'react';
import GlobalContext from '../GlobalContext';
import WindowSize from '../components/WindowSize'

 function PARAMS(){
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  return params
 }

 function NovelData(){
  const title = PARAMS().get("title")
  const data = useContext(GlobalContext)
  const filternovel = data.filter(rec => rec.title == title)
  return filternovel[0]
 }

 function CharacterData(){
  const title = PARAMS().get("about")
  const data = [{char: 'Kalisto Lytcaster', cover:'Kalisto Lytcaster',
                      trait:{Nickname:'Kali', Gender:'Male', 'Physique': 'Ectomorph', Height:'179.7 cm', Skin: 'White', Hair:'Maroon', Eyes: 'l-brown r-green'},
                      desc:{Information:'test2', Appearance:'test3', Personality:"Quiet, emotionless, and doesn't care about anything else. For him everything is meaningless after death. Neverthless, he still spend his time writing a novel to be publish in the future, for at least, leave his name to the world of the living."}},
                {char: 'Kassidy Vanguinii', cover:'coma',
                      trait:{Nickname:'?', Gender:'Female', 'Physique': 'Mesomorph', Height:'181 cm', Skin: 'Pale White', Hair:'Maroon', Eyes: 'l-brown r-green'},
                      desc:{Information:'test2', Appearance:'test3', Personality:'A well-mannered'}},
                      {char: 'Geanne Mortan', cover:'Geanne Mortan',
                        trait:{Nickname:'?', Gender:'Female', 'Physique': 'Mesomorph', Height:'181 cm', Skin: 'Pale White', Hair:'Maroon', Eyes: 'l-brown r-green'},
                        desc:{Information:'test2', Appearance:'test3', Personality:'A well-mannered'}},
                        {char: 'Luchifer Arba', cover:'LuchiferArba',
                          trait:{Nickname:'?', Gender:'Female', 'Physique': 'Mesomorph', Height:'181 cm', Skin: 'Pale White', Hair:'Maroon', Eyes: 'l-brown r-green'},
                          desc:{Information:'test2', Appearance:'test3', Personality:'A well-mannered'}},
                          {char: 'Monika', cover:'Monika',
                            trait:{Nickname:'?', Gender:'Female', 'Physique': 'Mesomorph', Height:'181 cm', Skin: 'Pale White', Hair:'Maroon', Eyes: 'l-brown r-green'},
                            desc:{Information:'test2', Appearance:'test3', Personality:'A well-mannered'}},
                            {char: 'Psymon Don Miljeste', cover:'Psymon Don Miljeste',
                              trait:{Nickname:'?', Gender:'Female', 'Physique': 'Mesomorph', Height:'181 cm', Skin: 'Pale White', Hair:'Maroon', Eyes: 'l-brown r-green'},
                              desc:{Information:'test2', Appearance:'test3', Personality:'A well-mannered'}},
                              {char: 'Jymz Starstrife', cover:'Jymz Starstrife',
                                trait:{Nickname:'?', Gender:'Female', 'Physique': 'Mesomorph', Height:'181 cm', Skin: 'Pale White', Hair:'Maroon', Eyes: 'l-brown r-green'},
                                desc:{Information:'test2', Appearance:'test3', Personality:'A well-mannered'}},
                                {char: 'Nero', cover:'Nero',
                                  trait:{Nickname:'?', Gender:'Female', 'Physique': 'Mesomorph', Height:'181 cm', Skin: 'Pale White', Hair:'Maroon', Eyes: 'l-brown r-green'},
                                  desc:{Information:'test2', Appearance:'test3', Personality:'A well-mannered'}},
                                  {char: 'Tomoka', cover:'Tomoka',
                                    trait:{Nickname:'?', Gender:'Female', 'Physique': 'Mesomorph', Height:'181 cm', Skin: 'Pale White', Hair:'Maroon', Eyes: 'l-brown r-green'},
                                    desc:{Information:'test2', Appearance:'test3', Personality:'A well-mannered'}},
                                    {char: 'Yuki Touma', cover:'Yuki Touma',
                                      trait:{Nickname:'?', Gender:'Female', 'Physique': 'Mesomorph', Height:'181 cm', Skin: 'Pale White', Hair:'Maroon', Eyes: 'l-brown r-green'},
                                      desc:{Information:'test2', Appearance:'test3', Personality:'A well-mannered'}},
                                      {char: 'Jinxo', cover:'Jinxo',
                                        trait:{Nickname:'?', Gender:'Female', 'Physique': 'Mesomorph', Height:'181 cm', Skin: 'Pale White', Hair:'Maroon', Eyes: 'l-brown r-green'},
                                        desc:{Information:'test2', Appearance:'test3', Personality:'A well-mannered'}},
                                        {char: 'Aubry', cover:'Aubry',
                                          trait:{Nickname:'?', Gender:'Female', 'Physique': 'Mesomorph', Height:'181 cm', Skin: 'Pale White', Hair:'Maroon', Eyes: 'l-brown r-green'},
                                          desc:{Information:'test2', Appearance:'test3', Personality:'A well-mannered'}},
                                          {char: 'Doctor Mideus', cover:'Doctor Mideus',
                                            trait:{Nickname:'?', Gender:'Female', 'Physique': 'Mesomorph', Height:'181 cm', Skin: 'Pale White', Hair:'Maroon', Eyes: 'l-brown r-green'},
                                            desc:{Information:'test2', Appearance:'test3', Personality:'A well-mannered'}},
                                            {char: 'Sample', cover:'Sample',
                                              trait:{Nickname:'?', Gender:'Female', 'Physique': 'Mesomorph', Height:'181 cm', Skin: 'Pale White', Hair:'Maroon', Eyes: 'l-brown r-green'},
                                              desc:{Information:'test2', Appearance:'test3', Personality:'A well-mannered'}},
                                              {char: 'Sample1', cover:'Sample1',
                                                trait:{Nickname:'?', Gender:'Female', 'Physique': 'Mesomorph', Height:'181 cm', Skin: 'Pale White', Hair:'Maroon', Eyes: 'l-brown r-green'},
                                                desc:{Information:'test2', Appearance:'test3', Personality:'A well-mannered'}},]
  const filtercharacter = data.filter(rec => rec.char == title)
  return filtercharacter[0]
 }
    
    
 function Main() {
  const path = window.location.pathname
  const data = path == '/novel' ? NovelData():CharacterData()
  const title = PARAMS().get(path == '/novel' ? "title":"about")
  const size = WindowSize();
  
  return (
    
    <div className='bg-gradient-to-bl from-slate-600 to-slate-50 bg-cover h-fit shrink-0'>
      < Navigation />
      {size.width < 940  && <div className="bg-cover bg-center" style={{backgroundImage:`url(/${data.cover}.webp)`,width:'100vw', height:'280px'}}></div>}
        <div className="grid container mx-auto px-5 grid-cols-1 lg:grid-cols-7 lg:items-center ">
            <div className="grid container p-8 grid-cols-1 gap-y-8 xl:grid-cols-1 xl:items-center lg:gap-x-5 col-span-4">
              {size.width > 940  &&<div className="justify-center flex bg-center">
                <img style={{height:'30vw'}} className="rounded-lg  h-fit" alt={title} src={data.cover+'.webp'}/>
              </div>}
            
              <div>
                <h2 className="justify-center flex  text-3xl font-bold sm:text-4xl [text-shadow:_1px_0_4px_rgb(255_255_255_/_0.8)]">{title}</h2>
                <div className="isolate rounded-xl bg-white/70 shadow-lg ring-1 ring-black/5 mx-auto mt-5 p-8">
                  
               
                  {path == '/novel' ? Synopsis(data):PersonalInfo(data)}
                
                </div>
              </div>
                
            </div>

          <div className="bg-white/50 mx-auto mt-16 px-10 pb-5 pt-5 overflow-auto col-span-3 h-screen w-full">
            
            
              {path == '/novel' ? <Chapters/>:<CharDetails desc={data.desc}/>}
             
              
            
          </div>
        </div>
     
      <Footer/>
    </div>
  );
 }

 function Chapters(){
  const novel = NovelData()
  const total = novel.chapters.length
  return(
    <div className="text-center">
      <p className="pb-5 font-bold text-lg">Book 1</p>
      {novel.chapters.map((item,i) => (
          <Link to={"/read?title="+novel.title+"&&ch="+item.ch+"/"+total} key={i}>
              <div className="text-gray-600 mb-3 rounded-lg border border-black
              hover:bg-black hover:text-white p-3
              hover:[text-shadow:_1px_0_4px_rgb(255_255_255_/_0.8)] 
              transition-all 
              ">
          
                  Chapter {item.ch}: {item.title}
          
              </div>
              
          </Link>
      ))}
    </div>
  )
  
 }

 function CharDetails(index){
  return(
    <div>
      {Object.keys(index.desc).map((item, i) => (
        <div key={i}>
          <h2 className="mb-2 font-bold text-3xl [text-shadow:_1px_0_4px_rgb(0_0_0_/_0.8)]">{item}</h2>
          <p align="justify" className="indent-16 mb-4">{index.desc[item]}</p>
        </div>
      ))}
       
    </div>
   
  )
 }

 function Synopsis(data){
  return(
    <p  align="justify">
      {data.summary}
    </p>
  )
 }
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
