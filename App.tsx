import React, { useState, useRef, useCallback } from 'react';
import Poster from './components/Poster';
import Editor from './components/Editor';
import { PosterState, INITIAL_STATE } from './types';
import * as htmlToImage from 'html-to-image';
import { Download, Share2, RefreshCw, ZoomIn, ZoomOut } from 'lucide-react';

const App: React.FC = () => {
  const [data, setData] = useState<PosterState>(INITIAL_STATE);
  const posterRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [zoom, setZoom] = useState(1);

  const handleDataChange = (key: keyof PosterState, value: string) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  const handleDownload = useCallback(async () => {
    if (!posterRef.current) return;
    setIsGenerating(true);
    
    try {
      // Small delay to ensure images are fully rendered
      const dataUrl = await htmlToImage.toPng(posterRef.current, {
        quality: 1.0,
        pixelRatio: 2, // High resolution
      });
      
      const link = document.createElement('a');
      link.download = `Dokumentasi-${data.dateValue.replace(/\//g, '-')}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Failed to generate image', error);
      alert('Gagal membuat gambar. Pastikan semua gambar sudah termuat.');
    } finally {
      setIsGenerating(false);
    }
  }, [data.dateValue]);

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 shrink-0 z-30 relative">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-green-700 p-2 bg-green-100 rounded-lg mr-3">
                 <Share2 size={24} />
              </span>
              <div>
                <h1 className="text-xl font-bold text-gray-900 hidden sm:block">Poster Generator</h1>
                <p className="text-xs text-gray-500 hidden sm:block">Dinas Pendidikan Aceh Style</p>
                <h1 className="text-lg font-bold text-gray-900 sm:hidden">Poster Gen</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
               <button 
                onClick={() => window.location.reload()}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                title="Reset"
               >
                 <RefreshCw size={20} />
               </button>
               <button
                onClick={handleDownload}
                disabled={isGenerating}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-medium shadow-md transition-all ${isGenerating ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 active:transform active:scale-95'}`}
               >
                 {isGenerating ? (
                   <>Processing...</>
                 ) : (
                   <>
                     <Download size={18} /> <span className="hidden sm:inline">Download HD</span>
                   </>
                 )}
               </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Workspace */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        
        {/* Left: Editor Sidebar */}
        <div className="w-full lg:w-[400px] h-[40vh] lg:h-full bg-white border-r border-gray-200 overflow-y-auto shrink-0 z-20 shadow-xl">
          <Editor data={data} onChange={handleDataChange} />
        </div>

        {/* Right: Preview Area */}
        <div className="flex-1 bg-gray-200 relative overflow-hidden flex flex-col">
           
           {/* Zoom Controls Overlay */}
           <div className="absolute top-4 right-4 z-10 bg-white rounded-lg shadow-md p-1 flex items-center gap-1 border border-gray-200">
              <button 
                onClick={() => setZoom(z => Math.max(0.3, z - 0.1))} 
                className="p-2 hover:bg-gray-100 rounded text-gray-600"
                title="Zoom Out"
              >
                <ZoomOut size={20} />
              </button>
              <span className="text-xs font-medium w-12 text-center text-gray-600">{Math.round(zoom * 100)}%</span>
              <button 
                onClick={() => setZoom(z => Math.min(2, z + 0.1))} 
                className="p-2 hover:bg-gray-100 rounded text-gray-600"
                title="Zoom In"
              >
                <ZoomIn size={20} />
              </button>
           </div>

           <div className="flex-1 overflow-auto flex items-center justify-center p-8 lg:p-12">
             {/* The Scalable Container */}
             <div 
               className="transform transition-transform duration-200 origin-center shadow-2xl"
               style={{ transform: `scale(${zoom})` }}
             >
               <Poster ref={posterRef} data={data} />
             </div>
           </div>
           
           <div className="bg-white/50 backdrop-blur-sm py-1 px-4 text-center text-xs text-gray-500 absolute bottom-0 w-full border-t border-gray-200/50">
             Scroll untuk melihat seluruh poster jika di-zoom besar
           </div>
        </div>

      </main>
    </div>
  );
};

export default App;