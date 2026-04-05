import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useOrientation } from 'react-use';
import IsIpad from '../components/IsIpad'
import axios from 'axios';
import enki from '../components/Enkidu'

var EventEmitter = require("events").EventEmitter;
var theEvent = new EventEmitter();

const API_URL = process.env.REACT_APP_API_BASE_URL;
// ANCHOR Main
 function Main() {
   const path =window.location.pathname
   const {type} = useOrientation()
   const Ipad = IsIpad()
   const [searchValue, setSearchValue] = useState('')

   useEffect(() => {
    setSearchValue('');
  }, [path]);

  return (
    <div>
      
    
      <div className={`bg-gradient-to-bl from-slate-600 to-slate-50  ${type === 'portrait-primary' ? 'Hminportrait': Ipad ? 'Hminbodyipad':'Hminbody'} `}>
        < Navigation />
          <div className=" container mx-auto p-8 gap-y-8 lg:items-center lg:gap-x-16">
            
            {/* ANCHOR Search bar */}
              <input
                  type="text"
                  id="Search"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={val => { setSearchValue(val.target.value); 
                    theEvent.emit(`${path}Search`,val.target.value);}}
                  className="w-80 mb-5 mt-40 focus:outline-none rounded-full border-none border-gray-200 pe-10 ps-4 text-sm  py-2.5 shadow-sm sm:text-sm"
              />
            <div className=" rounded-xl bg-white/50 shadow-lg ring-1 ring-black/5 mx-auto pt-10 pb-20 p-8 min-h-96">
            {path === '/list' ? <WikiList/>:<NovelList/>}
            </div>
    
          </div>
      </div>
      <Footer/>
    </div>
    
  );
 }

 //ANCHOR Novel List
 function NovelList(){
    
      let [data, setContent] = useState([]);
      useEffect(() => {
              mGetTable();
          }, []);
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
    const [displaynov, SetNov] = useState(data)

    theEvent.on('/novelsSearch',function (val){
        let search = data.filter(rec => rec.title.toUpperCase().includes(val.toUpperCase()) )
        SetNov(search)
        theEvent.removeAllListeners();
      })
  var [storyID, SetStory] = useState(-1);
  return(
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4" >
    {displaynov.map((item,i) => (
      <div key={i} className="items-center justify-center text-center flex">
      <Link to={"/novel?title="+item.title} preventScrollReset >
        <img className="rounded-lg object-cover hover:scale-105 transition ease-in-out delay-150 h-60 w-96" alt={item.title} src={item.metadata.cover+'.webp'}/>
        <h2 className="text-3xl font-bold sm:text-4xl [text-shadow:_1px_0_4px_rgb(0_0_0_/_0.8)]">{item.title}</h2>
      </Link>
       
       </div>
    ))}
    </div>
  )
  
 }

 //ANCHOR Wiki List
 function WikiList(){
 const [data, SetData] = useState([])
 const [contents, SetContent] = useState([])
  const mGetTable = () => {
 
        axios.get(`${API_URL}/api/z1/char`) 
            .then((res) => {
               const final = enki(res.data)
                
              
                SetData(final);
                SetContent(final);
            })
            .catch(err => console.error(err));

            
    };

    useEffect(() => {
        mGetTable();
    }, []);

    theEvent.on('/listSearch',function (val){
      let search = data.map(rec => { return{novel_title:rec.novel_title, 
        characters:rec.characters.filter(chars => chars.name.toUpperCase().includes(val.toUpperCase()))}}
        ).filter(index => index.characters.length !== 0)
      SetContent(search)
      theEvent.removeAllListeners();
    })

    return(
      <div className="grid grid-cols-1 text-center lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-2">
        {contents?.map((item,i) => (
          <div key={i} >
      
            <h2 className="text-3xl mx-2 my-2 font-bold sm:text-4xl [text-shadow:_1px_0_4px_rgb(0_0_0_/_0.8)]">{item.novel_title}</h2>
            <ul>
            {item?.characters?.map((chars,x) =>(
              <Link to={"/wiki?about="+chars.name} key={x}>
              <li className="py-1 mx-2 text-xl rounded-lg hover:bg-black hover:text-white hover:[text-shadow:_1px_0_4px_rgb(255_255_255_/_0.8)]">{chars.name}</li>
              </Link>
            ))}
            </ul>
          </div>
        ))}
      
      </div>
    )
 }

export default Main;
