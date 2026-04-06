import React from 'react';
import { TRAVEL_APPS } from '../constants';
import { Plane, Hotel, Bus, TrainFront, Search, Globe, Building2, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const iconMap: Record<string, any> = {
  Plane,
  Hotel,
  Bus,
  TrainFront,
  Search,
  Globe,
  Building2
};

export default function AppHub() {
  return (
    <section id="apps" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Your Travel <span className="text-blue-500 italic">Command Center.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Access all your favorite travel platforms in one place. No more switching apps.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRAVEL_APPS.map((app, index) => {
            const Icon = iconMap[app.icon] || Globe;
            return (
              <motion.a
                key={app.id}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl ${app.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{app.name}</h3>
                <p className="text-sm text-gray-400 mb-4 capitalize">{app.category} Services</p>
                <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Visit Site
                  <ExternalLink className="w-4 h-4" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
