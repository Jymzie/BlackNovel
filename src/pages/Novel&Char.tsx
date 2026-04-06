import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useLocation, useSearchParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import WindowSize from '../components/WindowSize';
import useMediaQuery from '../components/CustomSize';
// import { useWindowDimensions } from 'react-native';
import axios from 'axios';
import enki from '../components/Enkidu';

const API_URL = import.meta.env.VITE_API_BASE_URL;

interface NovelData {
  title: string;
  summary: string;
  metadata: {
    cover: string;
  };
  chapters: {
    chapter_number: number;
    title: string;
  }[];
}

interface CharData {
  description: Record<string, string>; // e.g., { "backstory": "...", "powers": "..." }
  metadata: {
    cover: string;
  };
}
/**
 * Custom hooks for data fetching
 */
function useNovelData(title: string | null) {
  const [data, setData] = useState<NovelData | null>(null);;
  useEffect(() => {
    if (!title) return;
    axios.get(`${API_URL}/api/v1/chap?title=${title}`)
      .then(res => setData(enki(res.data)))
      .catch(err => console.error(err));
  }, [title]);
  return data;
}

function useCharacterData(char: string | null) {
  const [data, setContent] = useState<CharData | null>(null);;
  useEffect(() => {
    if (!char) return;
    axios.get(`${API_URL}/api/z2/char?char=${char}`)
      .then(res => setContent(enki(res.data)))
      .catch(err => console.error("API Error:", err));
  }, [char]);
  return data;
}

// ANCHOR Main
function Main() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const path = location.pathname;

  // 1. CALL ALL HOOKS AT THE TOP (Unconditionally)
  const novelTitle = searchParams.get("title");
  const charName = searchParams.get("about");

  const novelData = useNovelData(novelTitle);
  const charData = useCharacterData(charName);
  
  const size = WindowSize();
  const isSmallScreen = useMediaQuery('(max-width: 900px)');
  // const { width } = useWindowDimensions();

  // 2. DERIVE LOGIC AFTER HOOKS
  const isNovelPage = path === '/novel';
  const data = isNovelPage ? novelData : charData;
  const displayTitle = isNovelPage ? novelTitle : charName;

  return (
    <div>
      <div className='bg-gradient-to-bl from-slate-600 to-slate-50 bg-cover h-fit min-h-screen'>
        <Navigation />
        <div className="grid mx-auto grid-cols-1 lg:grid-cols-7 lg:items-center">
          <div className="mx-auto -mb-9 col-span-4">
            <div className="justify-center flex">
              <img 
                style={{ height: size.width > 940 ? '30vw' : '300px', objectFit: size.width > 940 ? 'initial' : 'cover' }} 
                className={`rounded-lg ${size.width < 940 ? 'mt-16 w-screen bg-center' : ' h-fit'}`} 
                alt={displayTitle || "Cover"} 
                src={data?.metadata?.cover ? `${data.metadata.cover}.webp` : 'favicon.webp'}
                onError={(e) => { e.currentTarget.src = "favicon.webp"; }}
              />
            </div>
            <div>
              <h2 className="text-black justify-center flex pt-3 text-3xl font-bold sm:text-4xl [text-shadow:_1px_0_4px_rgb(255_255_255_/_0.8)]">
                {displayTitle}
              </h2>
            </div>
          </div>

          <div className="bg-white/50 mx-auto rounded-sm mt-16 pb-5 pt-3 col-span-3 w-full" 
               style={{ height: isSmallScreen ? '700px' : '52vw' }}>
            {isNovelPage ? (
              <Chapters novel={novelData} isSmallScreen={isSmallScreen} />
            ) : (
              /* Use charData here instead of data */
              <CharDetails desc={charData?.description} isSmallScreen={isSmallScreen} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// ANCHOR Chapter List
function Chapters({ novel, isSmallScreen }: { novel: any, isSmallScreen: boolean }) {
  const isMidScreen = useMediaQuery('(max-width: 1300px)');
  
  return (
    <div className="text-center mx-2">
      <div className="text-black isolate rounded-xl bg-white/70 shadow-lg ring-1 ring-black/5 mx-auto p-5"> 
        <Synopsis data={novel} />
      </div>
      <div className="mx-3 p-3 overflow-auto bg-gray-500 rounded-md" 
           style={{ height: isSmallScreen ? '400px' : isMidScreen ? '24vw' : '33vw' }}>
        {novel?.chapters?.map((item: any, i: number) => (
          <Link to={`/read?title=${novel.title}&&ch=${item.chapter_number}`} key={i}>
            <div className="text-gray-600 mb-3 rounded-lg border bg-gray-200 border-black hover:bg-black hover:text-white p-3 transition-all hover:[text-shadow:_1px_0_4px_rgb(255_255_255_/_0.8)]">
              Chapter {item.chapter_number}: {item.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ANCHOR Character Details
function CharDetails({ desc, isSmallScreen }: { desc: any, isSmallScreen: boolean }) {
  const isMidScreen = useMediaQuery('(max-width: 1300px)');

  // HOOKS FIRST
  // (useMediaQuery is already called in Main and passed down or called here before the IF)

  if (!desc) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-gray-500 animate-pulse">Loading character details...</p>
      </div>
    );
  }

  return (
    <div className="overflow-auto" style={{ height: isSmallScreen ? '650px' : isMidScreen ? '48vw' : '50vw' }}>
      {Object.keys(desc).map((item, i) => (
        <div key={i}>
          <h2 className="text-black mb-2 mx-5 font-bold text-3xl [text-shadow:_1px_0_4px_rgb(0_0_0_/_0.8)]">
            {item.toUpperCase()}
          </h2>
          <p className="text-black text-justify indent-16 mb-6 mx-5 whitespace-pre-line">
            {desc[item]}
          </p>
        </div>
      ))}
    </div>
  );
}

function Synopsis({ data }: { data: any }) {
  // Use className="text-justify" instead of align="justify"
  return <p className="text-justify">{data?.summary}</p>;
}

export default Main;