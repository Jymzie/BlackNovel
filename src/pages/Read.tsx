import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import enki from '../components/Enkidu';
import { Loader2 } from "lucide-react";

const API_URL = import.meta.env.VITE_API_BASE_URL;

// --- Custom Hooks (Must be called at top level) ---

function useReaderParams() {
  const [searchParams] = useSearchParams();
  const [totalChapters, setTotalChapters] = useState(0);

  const title = searchParams.get("title");
  const ch = parseInt(searchParams.get("ch") || "1");

  useEffect(() => {
    if (title) {
      axios.get(`${API_URL}/api/v3/chap?title=${title}`)
        .then(res => {
          const final = enki(res.data);
          // Assuming 'final' is the count or an array of chapters
          setTotalChapters(Array.isArray(final) ? final.length : final);
        })
        .catch(err => console.error("Error fetching total chapters:", err));
    }
  }, [title]);

  return { title, ch, totalChapters };
}

// --- Helpers ---
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// --- Components ---

function History({ title, ch, totalChapters }: any) {
  const navigate = useNavigate();
  
  const chapters = Array.from({ length: totalChapters }, (_, i) => i + 1);

  const handleChapterChange = (value: string) => {
    navigate(`/read?title=${title}&ch=${value}`);
    scrollToTop();
  };

  return (
    <p className="container mx-auto mb-5 mt-32 px-2 text-white text-xl [text-shadow:_1px_0_4px_rgb(255_255_255_/_0.8)]">
      <Link to="/"><span className="hover:text-black">HOME</span></Link> / 
      <Link to={`/novel?title=${title}`}><span className="hover:text-black uppercase ml-2">{title}</span></Link> / 
      <span className="ml-2">Chapter</span> 
      <select 
        value={ch} 
        onChange={e => handleChapterChange(e.target.value)} 
        className="text-black w-16 ml-2 rounded-lg p-1"
      >
        {chapters.map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
    </p>
  );
}

function NextPrev({ title, ch, total }: any) {
  return (
    <div className={`flex justify-between container mx-auto pb-32 px-10 pt-5 text-white [text-shadow:_1px_0_4px_rgb(255_255_255_/_0.8)]`}>
      <div>
        {ch > 1 && (
          <Link to={`/read?title=${title}&ch=${ch - 1}`} onClick={scrollToTop}>
            <p className="text-xl hover:text-black cursor-pointer">← Prev</p>
          </Link>
        )}
      </div>
      <div>
        {ch < total && (
          <Link to={`/read?title=${title}&ch=${ch + 1}`} onClick={scrollToTop}>
            <p className="text-xl hover:text-black cursor-pointer">Next →</p>
          </Link>
        )}
      </div>
    </div>
  );
}

function Read({ title, ch }: any) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`${API_URL}/api/v2/chap?title=${title}&ch=${ch}`)
      .then(res => {
        setData(enki(res.data));
        // console.log(data)
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [ch]); // Fetch when title changes

  const chapterContent = data?.[0];

  if (loading) return <div className="flex flex-col items-center justify-center text-black text-center py-20 text-2xl">
    <Loader2 className="h-10 w-10 text-gray-500 animate-spin" />
    Loading Chapter...</div>;
  if (!chapterContent) return <div className="text-center py-20 text-red-500">Chapter not found.</div>;

  return (
    <div>
      <h1 className="text-4xl font-extrabold mb-10 md:text-5xl text-center text-black ">
        Chapter {ch}: {chapterContent.title}
      </h1>
      
      {chapterContent.content.map((item: string, i: number) => (
        <div 
          key={i} 
          className={`mb-8 grid gap-8 items-center ${
            chapterContent.screenshots?.[i] ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'
          }`}
        >
          <p className={`text-gray-700 text-lg leading-relaxed text-justify ${item.includes('<italic>') ? 'italic' : ''}`}>
            {item.replace(/<italic>/g, "")}
          </p>

          {chapterContent.screenshots?.[i] && (
            <div className="flex justify-center">
              <img 
                className="rounded-lg shadow-md max-h-[400px] object-contain border border-gray-200" 
                alt={`scene-${i}`} 
                src={`${chapterContent.screenshots[i]}.webp`} 
                onError={(e) => { e.currentTarget.src = "favicon.webp"; }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// --- Main ---
function Main() {
  const { title, ch, totalChapters } = useReaderParams();

  return (
    <div className="bg-gradient-to-bl from-slate-600 to-slate-50 min-h-screen">
      <Navigation />
      
      <div className="container mx-auto p-4 lg:p-8">
        <History title={title} ch={ch} totalChapters={totalChapters} />
        
        <div className="rounded-xl bg-white/70 backdrop-blur-sm shadow-2xl ring-1 ring-black/5 mx-auto pt-10 pb-20 p-6 md:p-12">
          <Read title={title} ch={ch} />
        </div>
        
        <NextPrev title={title} ch={ch} total={totalChapters} />
      </div>
      
      <Footer />
    </div>
  );
}

export default Main;