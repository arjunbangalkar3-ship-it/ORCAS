import React from 'react';
import { RECOMMENDATIONS } from '../constants';
import { MapPin, ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Recommendations() {
  return (
    <section id="recommendations" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Personalized <span className="text-blue-500 italic">Recommendations.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our AI-powered travel agent suggests the best destinations based on your preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RECOMMENDATIONS.map((rec, index) => (
            <motion.div
              key={rec.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-4 hover:bg-white/10 transition-all"
            >
              <div className="relative h-72 rounded-2xl overflow-hidden mb-6">
                <img 
                  src={rec.image} 
                  alt={rec.destination} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-bold rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  4.9
                </div>
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                  {rec.price}
                </div>
              </div>
              <div className="px-2">
                <div className="flex items-center gap-2 text-xs text-blue-400 font-bold uppercase tracking-widest mb-2">
                  <MapPin className="w-3 h-3" />
                  {rec.destination}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors leading-tight">{rec.destination}</h3>
                <p className="text-sm text-gray-400 mb-6 line-clamp-2">{rec.reason}</p>
                <button className="w-full py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all flex items-center justify-center gap-2 group/btn">
                  Explore Destination
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
