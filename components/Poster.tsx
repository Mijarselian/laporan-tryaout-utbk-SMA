import React, { forwardRef } from 'react';
import { PosterState } from '../types';
import { Image as ImageIcon } from 'lucide-react';

interface PosterProps {
  data: PosterState;
}

const Poster = forwardRef<HTMLDivElement, PosterProps>(({ data }, ref) => {
  return (
    <div 
      ref={ref} 
      className="w-[1000px] bg-white shadow-2xl overflow-hidden flex flex-col relative"
      style={{ aspectRatio: '1000 / 750' }} // Keep aspect ratio consistent
    >
      {/* --- HEADER --- */}
      <div 
        className="h-[140px] relative flex items-center px-8 justify-between shrink-0 transition-colors duration-300"
        style={{ backgroundColor: data.headerColor }}
      >
        
        {/* Left Side: Logo & Text */}
        <div className="flex items-center gap-4 z-10">
          
          {/* Logo Area */}
          {data.logoImage ? (
            <div className="w-20 h-24 flex items-center justify-center">
               <img 
                 src={data.logoImage} 
                 alt="Logo Instansi" 
                 className="w-full h-full object-contain drop-shadow-md"
               />
            </div>
          ) : (
            /* Placeholder for Aceh Logo (Pancacita) if no image uploaded */
            <div className="w-20 h-24 bg-white/95 rounded-b-full rounded-t-lg flex items-center justify-center border-2 border-yellow-400 shadow-md">
               <div 
                 className="text-xs font-bold text-center leading-tight"
                 style={{ color: data.headerColor }}
               >
                 LOGO
               </div>
            </div>
          )}
          
          <div 
            className="text-white font-medium space-y-0.5"
            style={{ fontFamily: data.fontFamily }}
          >
            <h2 className="text-xl font-bold leading-none shadow-black/10 drop-shadow-sm">Pemerintah Aceh</h2>
            <h3 className="text-lg font-semibold leading-none shadow-black/10 drop-shadow-sm">Dinas Pendidikan</h3>
            <p className="text-sm font-medium leading-tight max-w-md mt-1 text-gray-100 opacity-90">
              Cabang Dinas Pendidikan Wilayah Kabupaten Aceh Tenggara
            </p>
          </div>
        </div>

        {/* Right Side: BerAKHLAK & Bangga Melayani Bangsa */}
        <div className="flex items-center gap-6 z-10">
          {/* Recreated BerAKHLAK Logo Style - Adapted for Dark Background */}
          <div className="flex flex-col items-end">
            <div className="flex items-baseline bg-white/10 px-2 rounded-lg backdrop-blur-sm border border-white/10">
                <span className="text-red-400 font-bold text-3xl italic filter drop-shadow-sm">Ber</span>
                <span className="text-white font-bold text-3xl filter drop-shadow-sm">AKHLAK</span>
            </div>
            <div className="text-[10px] text-white/90 leading-tight text-right w-40 mt-1">
                Berorientasi Pelayanan Akuntabel Kompeten Harmonis Loyal Adaptif Kolaboratif
            </div>
          </div>

          {/* Separator */}
          <div className="h-12 w-0.5 bg-white/30"></div>

          {/* Bangga Melayani Bangsa */}
          <div className="flex flex-col items-start">
             <div className="text-red-400 font-bold text-sm">#</div>
             <div className="flex flex-col leading-none text-white drop-shadow-sm">
                <span className="font-medium text-sm">bangga</span>
                <span className="font-medium text-sm">melayani</span>
                <span className="font-bold text-sm">bangsa</span>
             </div>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT (IMAGES) --- */}
      <div className="flex-1 bg-white p-3 gap-3 grid grid-cols-12 overflow-hidden">
        
        {/* Left Large Image (7 columns) */}
        <div className="col-span-7 bg-gray-200 relative overflow-hidden h-full">
          {data.mainImage ? (
            <img 
              src={data.mainImage} 
              alt="Main Event" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gray-100">
              <ImageIcon size={64} />
              <p className="mt-2 font-medium">Foto Utama</p>
            </div>
          )}
        </div>

        {/* Right Column (5 columns) - 2 stacked images */}
        <div className="col-span-5 flex flex-col gap-3 h-full">
          {/* Top Right */}
          <div className="flex-1 bg-gray-200 relative overflow-hidden">
             {data.topRightImage ? (
              <img 
                src={data.topRightImage} 
                alt="Secondary Top" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gray-100">
                <ImageIcon size={48} />
                <p className="mt-2 font-medium">Foto Kanan Atas</p>
              </div>
            )}
          </div>
          
          {/* Bottom Right */}
          <div className="flex-1 bg-gray-200 relative overflow-hidden">
            {data.bottomRightImage ? (
              <img 
                src={data.bottomRightImage} 
                alt="Secondary Bottom" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gray-100">
                <ImageIcon size={48} />
                <p className="mt-2 font-medium">Foto Kanan Bawah</p>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* --- FOOTER --- */}
      <div 
        className="h-[100px] shrink-0 flex items-center justify-between px-8 text-white relative transition-colors duration-300"
        style={{ 
          backgroundColor: data.footerColor,
          fontFamily: data.fontFamily
        }}
      >
          {/* Blue bar usually has a darker blue bottom border in some gov designs, but image looks flat blue/cyan */}
          
          <div className="flex flex-col justify-center h-full">
            <h1 className="font-bold text-xl uppercase tracking-wide">
              {data.eventTitle || "NAMA KEGIATAN DI SINI"}
            </h1>
            <h2 className="font-bold text-lg uppercase mt-1 opacity-90">
              {data.schoolName || "NAMA SEKOLAH/LOKASI"}
            </h2>
          </div>

          <div className="flex flex-col items-end justify-center h-full text-right border-l-2 border-white/30 pl-6">
            <span className="font-bold text-xl uppercase block">
              {data.dateDay || "HARI"}
            </span>
            <span className="font-bold text-2xl block leading-none">
              {data.dateValue || "DD/MM/YYYY"}
            </span>
          </div>
      </div>
    </div>
  );
});

Poster.displayName = 'Poster';

export default Poster;