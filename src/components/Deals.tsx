import React from 'react';
import { DEALS } from '../constants';
import { Tag, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Deals() {
  return (
    <section id="deals" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Exclusive <span className="text-blue-500 italic">Deals.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get real-time price alerts and vacation package deals from across all major platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEALS.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-4 hover:bg-white/10 transition-all"
            >
              <div className="relative h-60 rounded-2xl overflow-hidden mb-6">
                <img 
                  src={deal.image} 
                  alt={deal.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {deal.discount}
                </div>
              </div>
              <div className="px-2">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-blue-400 font-bold uppercase tracking-widest">{deal.provider}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    {deal.expiry}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">{deal.title}</h3>
                <button className="w-full py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all flex items-center justify-center gap-2 group/btn">
                  Claim Deal
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
