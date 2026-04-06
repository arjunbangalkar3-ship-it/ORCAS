/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppHub from './components/AppHub';
import Itinerary from './components/Itinerary';
import Deals from './components/Deals';
import Recommendations from './components/Recommendations';
import Chatbot from './components/Chatbot';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      
      <main>
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <AppHub />
          <Itinerary />
          <Deals />
          <Recommendations />
        </motion.div>
      </main>

      <footer className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">O</span>
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">ORCAS</span>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
          
          <p className="text-sm text-gray-600">
            © 2026 ORCAS Travel. All rights reserved.
          </p>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
}
