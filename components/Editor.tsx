import React from 'react';
import { PosterState } from '../types';
import { Upload, Type, Calendar, MapPin, Palette, LayoutTemplate } from 'lucide-react';

interface EditorProps {
  data: PosterState;
  onChange: (key: keyof PosterState, value: string) => void;
}

const Editor: React.FC<EditorProps> = ({ data, onChange }) => {
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, key: keyof PosterState) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      onChange(key, url);
    }
  };

  return (
    <div className="p-6 pb-20 lg:pb-6 min-h-full">
      <h2 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2 sticky top-0 bg-white py-2 z-10">
        <span className="w-1 h-6 bg-green-600 rounded-full block"></span>
        Edit Konten
      </h2>

      <div className="space-y-6">
        
        {/* Appearance / Theme Section */}
        <div className="space-y-4">
           <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
             <Palette size={16} /> Tampilan & Tema
           </h3>
           
           <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Warna Header</label>
                <div className="flex items-center gap-2 border rounded-md p-2 bg-white">
                  <input 
                    type="color" 
                    value={data.headerColor}
                    onChange={(e) => onChange('headerColor', e.target.value)}
                    className="w-8 h-8 rounded cursor-pointer border-0 p-0"
                  />
                  <span className="text-xs text-gray-500 font-mono">{data.headerColor}</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Warna Footer</label>
                <div className="flex items-center gap-2 border rounded-md p-2 bg-white">
                  <input 
                    type="color" 
                    value={data.footerColor}
                    onChange={(e) => onChange('footerColor', e.target.value)}
                    className="w-8 h-8 rounded cursor-pointer border-0 p-0"
                  />
                  <span className="text-xs text-gray-500 font-mono">{data.footerColor}</span>
                </div>
              </div>
           </div>

           <div>
              <label className="block text-xs font-medium text-gray-700 mb-1 flex items-center gap-1">
                <LayoutTemplate size={14} /> Jenis Font (Tulisan)
              </label>
              <select 
                value={data.fontFamily}
                onChange={(e) => onChange('fontFamily', e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border text-sm"
              >
                <option value="'Inter', sans-serif">Modern Sans (Inter)</option>
                <option value="'Montserrat', sans-serif">Geometric Modern (Montserrat)</option>
                <option value="'Oswald', sans-serif">Tall Condensed (Oswald)</option>
                <option value="'Roboto', sans-serif">Standard Readable (Roboto)</option>
                <option value="'Playfair Display', serif">Elegant Serif (Playfair)</option>
                <option value="'Times New Roman', Times, serif">Classic Serif (Times)</option>
                <option value="'Courier New', Courier, monospace">Typewriter (Courier)</option>
              </select>
           </div>
        </div>

        <hr className="border-gray-200" />

        {/* Images Section */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Upload Foto</h3>
          
          <div className="space-y-3">
             {/* Logo Input */}
             <div className="border rounded-lg p-3 hover:bg-gray-50 transition-colors bg-gray-50 border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-1">Logo Instansi (Kiri Atas)</label>
                <div className="flex items-center gap-2">
                    <input 
                      type="file" 
                      accept="image/*"
                      className="hidden" 
                      id="upload-logo"
                      onChange={(e) => handleFileChange(e, 'logoImage')}
                    />
                    <label 
                      htmlFor="upload-logo" 
                      className="cursor-pointer flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 w-full"
                    >
                      <Upload className="w-4 h-4 mr-2 text-green-600" />
                      Pilih Logo
                    </label>
                    {data.logoImage && <div className="w-10 h-10 rounded overflow-hidden border bg-white flex-shrink-0"><img src={data.logoImage} className="w-full h-full object-contain"/></div>}
                </div>
             </div>

             {/* Main Image Input */}
             <div className="border rounded-lg p-3 hover:bg-gray-50 transition-colors">
                <label className="block text-sm font-medium text-gray-700 mb-1">Foto Utama (Kiri)</label>
                <div className="flex items-center gap-2">
                    <input 
                      type="file" 
                      accept="image/*"
                      className="hidden" 
                      id="upload-main"
                      onChange={(e) => handleFileChange(e, 'mainImage')}
                    />
                    <label 
                      htmlFor="upload-main" 
                      className="cursor-pointer flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 w-full"
                    >
                      <Upload className="w-4 h-4 mr-2 text-green-600" />
                      Pilih Foto
                    </label>
                    {data.mainImage && <div className="w-10 h-10 rounded overflow-hidden border flex-shrink-0"><img src={data.mainImage} className="w-full h-full object-cover"/></div>}
                </div>
             </div>

             {/* Top Right Input */}
             <div className="border rounded-lg p-3 hover:bg-gray-50 transition-colors">
                <label className="block text-sm font-medium text-gray-700 mb-1">Foto Kanan Atas</label>
                <div className="flex items-center gap-2">
                    <input 
                      type="file" 
                      accept="image/*"
                      className="hidden" 
                      id="upload-tr"
                      onChange={(e) => handleFileChange(e, 'topRightImage')}
                    />
                    <label 
                      htmlFor="upload-tr" 
                      className="cursor-pointer flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 w-full"
                    >
                      <Upload className="w-4 h-4 mr-2 text-green-600" />
                      Pilih Foto
                    </label>
                    {data.topRightImage && <div className="w-10 h-10 rounded overflow-hidden border flex-shrink-0"><img src={data.topRightImage} className="w-full h-full object-cover"/></div>}
                </div>
             </div>

             {/* Bottom Right Input */}
             <div className="border rounded-lg p-3 hover:bg-gray-50 transition-colors">
                <label className="block text-sm font-medium text-gray-700 mb-1">Foto Kanan Bawah</label>
                <div className="flex items-center gap-2">
                    <input 
                      type="file" 
                      accept="image/*"
                      className="hidden" 
                      id="upload-br"
                      onChange={(e) => handleFileChange(e, 'bottomRightImage')}
                    />
                    <label 
                      htmlFor="upload-br" 
                      className="cursor-pointer flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 w-full"
                    >
                      <Upload className="w-4 h-4 mr-2 text-green-600" />
                      Pilih Foto
                    </label>
                    {data.bottomRightImage && <div className="w-10 h-10 rounded overflow-hidden border flex-shrink-0"><img src={data.bottomRightImage} className="w-full h-full object-cover"/></div>}
                </div>
             </div>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Text Section */}
        <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Teks Footer</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <Type size={14} /> Nama Kegiatan
              </label>
              <textarea
                value={data.eventTitle}
                onChange={(e) => onChange('eventTitle', e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border text-sm uppercase"
                rows={2}
                placeholder="PELAKSANAAN TRYOUT..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <MapPin size={14} /> Lokasi / Sekolah
              </label>
              <input
                type="text"
                value={data.schoolName}
                onChange={(e) => onChange('schoolName', e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border text-sm uppercase"
                placeholder="SMA NEGERI 1..."
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                  <Calendar size={14} /> Hari
                </label>
                <input
                  type="text"
                  value={data.dateDay}
                  onChange={(e) => onChange('dateDay', e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border text-sm uppercase"
                  placeholder="SENIN"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                  <Calendar size={14} /> Tanggal
                </label>
                <input
                  type="text"
                  value={data.dateValue}
                  onChange={(e) => onChange('dateValue', e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border text-sm uppercase"
                  placeholder="DD/MM/YYYY"
                />
              </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Editor;