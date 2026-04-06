import React from 'react';
import { INITIAL_ITINERARY } from '../constants';
import { Plane, Hotel, Bus, TrainFront, MapPin, Calendar, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const iconMap: Record<string, any> = {
  flight: Plane,
  hotel: Hotel,
  bus: Bus,
  train: TrainFront
};

export default function Itinerary() {
  return (
    <section id="itinerary" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <div className="text-left">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4">
              Your <span className="text-blue-500 italic">Itineraries.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Manage all your travel plans in one place. Real-time updates and flight tracking.
            </p>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl border border-white/10 transition-all flex items-center gap-2">
            View All Trips
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {INITIAL_ITINERARY.map((item, index) => {
              const Icon = iconMap[item.type] || MapPin;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                        <span className="px-3 py-1 text-xs font-semibold tracking-widest text-green-400 uppercase bg-green-400/10 rounded-full border border-green-400/20 flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3" />
                          {item.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          {item.date}
                        </div>
                        {item.time && (
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-blue-500" />
                            {item.time}
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-blue-500" />
                          {item.location}
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-gray-500 italic">{item.details}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Flight Tracker Mini-Widget */}
          <div className="lg:col-span-1">
            <div className="bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden h-full">
              <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-white/10 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Real-time Flight Tracker</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <p className="text-xs text-blue-200 uppercase tracking-widest mb-1">SFO</p>
                      <p className="text-3xl font-bold">10:30</p>
                    </div>
                    <div className="flex-1 px-4 flex items-center gap-2">
                      <div className="h-0.5 flex-1 bg-blue-400/50 relative">
                        <Plane className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-blue-200 uppercase tracking-widest mb-1">CDG</p>
                      <p className="text-3xl font-bold">06:15</p>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-white/20">
                    <p className="text-sm text-blue-100 mb-2">Flight Status</p>
                    <div className="flex items-center justify-between">
                      <p className="font-bold">On Time</p>
                      <p className="text-xs bg-white/20 px-2 py-1 rounded-lg">Gate A24</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
