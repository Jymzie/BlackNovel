import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect, useMemo } from 'react';
import { useOrientation } from 'react-use';
import IsIpad from '../components/IsIpad'
import axios from 'axios';
import enki from '../components/Enkidu'
import WindowSize from '../components/WindowSize';

const API_URL = import.meta.env.VITE_API_BASE_URL;

// ANCHOR Main
function Main() {
  const size = WindowSize();
  const location = useLocation();
  const path = location.pathname;
  const { type } = useOrientation();
  const Ipad = IsIpad();
  const [searchValue, setSearchValue] = useState('');

  // Reset search when switching pages
  useEffect(() => {
    setSearchValue('');
  }, [path]);

  return (
    <div>
      <div className={`bg-gradient-to-bl from-slate-600 to-slate-50 ${
        type === 'portrait-primary' ? 'Hminportrait' : Ipad ? 'Hminbodyipad' : 'Hminbody'
      } ${size.width > 1500 ? 'h-screen' : 'min-h-screen'}`}>
        <Navigation />
        <div className="container mx-auto p-8 gap-y-8 lg:items-center lg:gap-x-16">
          
          {/* ANCHOR Search bar */}
          <input
            type="text"
            id="Search"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="text-black w-80 mb-5 mt-40 focus:outline-none rounded-full border-none border-gray-200 pe-10 ps-4 text-sm py-2.5 shadow-sm sm:text-sm"
          />

          <div className="rounded-xl bg-white/50 shadow-lg ring-1 ring-black/5 mx-auto pt-10 pb-20 p-8 min-h-96">
            {/* Pass searchValue as a prop instead of using events */}
            {path === '/list' ? (
              <WikiList searchValue={searchValue} />
            ) : (
              <NovelList searchValue={searchValue} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// ANCHOR Novel List
function NovelList({ searchValue }: { searchValue: string }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_URL}/api/vt/nov`)
      .then((res) => {
        setData(enki(res.data));
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  // Use useMemo to filter data efficiently without needing a second state
  const filteredNovels = useMemo(() => {
    return data.filter(rec => 
      rec.title.toUpperCase().includes(searchValue.toUpperCase())
    );
  }, [data, searchValue]);

  if (loading) return <p className="text-center">Loading Novels...</p>;

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {filteredNovels.map((item, i) => (
        <div key={i} className="items-center justify-center text-center flex">
          <Link to={"/novel?title=" + item.title} preventScrollReset>
            <img 
              className="rounded-lg object-cover hover:scale-105 transition ease-in-out delay-150 h-60 w-96" 
              alt={item.title} 
              src={item.metadata.cover + '.webp'} 
            />
            <h2 className="text-black mt-1 text-3xl font-bold sm:text-4xl [text-shadow:_1px_0_4px_rgb(0_0_0_/_0.8)]">
              {item.title}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

// ANCHOR Wiki List
function WikiList({ searchValue }: { searchValue: string }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_URL}/api/z1/char`)
      .then((res) => {
        setData(enki(res.data));
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  // Filter logic for nested characters
  const filteredWiki = useMemo(() => {
    if (!searchValue) return data;
    
    return data.map(rec => ({
      ...rec,
      characters: rec.characters.filter(chars => 
        chars.name.toUpperCase().includes(searchValue.toUpperCase())
      )
    })).filter(index => index.characters.length !== 0);
  }, [data, searchValue]);

  if (loading) return <p className="text-center">Loading Characters...</p>;

  return (
    <div className="grid grid-cols-1 text-center lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-2">
      {filteredWiki.map((item, i) => (
        <div key={i}>
          <h2 className="text-3xl text-black mx-2 my-2 font-bold sm:text-4xl [text-shadow:_1px_0_4px_rgb(0_0_0_/_0.8)]">
            {item.novel_title}
          </h2>
          <ul>
            {item.characters.map((chars, x) => (
              <Link to={"/wiki?about=" + chars.name} key={x}>
                <li className="py-1 text-black mx-2 text-xl rounded-lg hover:bg-black hover:text-white hover:[text-shadow:_1px_0_4px_rgb(255_255_255_/_0.8)]">
                  {chars.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Main;