import { create } from 'zustand';
import axios from 'axios';
import enki from './Enkidu';

const API_URL = import.meta.env.VITE_API_BASE_URL;

interface NovelItem {
  title: string;
}

interface NovelState {
  global: NovelItem[];
  mGetTable: () => Promise<void>;
}

export const useNovelStore = create<NovelState>((set, get) => ({
  global: [],
  
  mGetTable: async () => {
    // VUE-STYLE GUARD: If we already have data, do nothing.
    if (get().global.length > 0) return;

    try {
      const res = await axios.get(`${API_URL}/api/vt/nov`);
      const final = enki(res.data);
      set({ global: final });
    } catch (err) {
      console.error('Failed to fetch novels:', err);
    }
  },
}));