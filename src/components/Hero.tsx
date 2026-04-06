import React from 'react';
import { Search, MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with blur and gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20">
            Your Premium Travel Concierge
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
            The World is Yours <br />
            <span className="text-blue-500 italic">to Explore.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-12">
            ORCAS brings all your favorite travel apps together. Book flights, hotels, and more with real-time tracking and exclusive deals.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-2 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="flex-1 w-full flex items-center gap-3 px-6 py-4 border-b md:border-b-0 md:border-r border-white/10">
              <MapPin className="text-blue-500 w-5 h-5 flex-shrink-0" />
              <input 
                type="text" 
                placeholder="Where to?" 
                className="w-full bg-transparent border-none text-white placeholder-gray-500 focus:ring-0 text-sm"
              />
            </div>
            <div className="flex-1 w-full flex items-center gap-3 px-6 py-4 border-b md:border-b-0 md:border-r border-white/10">
              <Calendar className="text-blue-500 w-5 h-5 flex-shrink-0" />
              <input 
                type="text" 
                placeholder="When?" 
                className="w-full bg-transparent border-none text-white placeholder-gray-500 focus:ring-0 text-sm"
              />
            </div>
            <div className="flex-1 w-full flex items-center gap-3 px-6 py-4">
              <Users className="text-blue-500 w-5 h-5 flex-shrink-0" />
              <input 
                type="text" 
                placeholder="Travelers" 
                className="w-full bg-transparent border-none text-white placeholder-gray-500 focus:ring-0 text-sm"
              />
            </div>
            <button className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all flex items-center justify-center gap-2 group">
              Search
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
