import React from 'react';
import { Plane, Map, Bell, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <Plane className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">ORCAS</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">Explore</a>
              <a href="#itinerary" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">My Trips</a>
              <a href="#deals" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Deals</a>
              <a href="#apps" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">App Hub</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <User className="w-5 h-5" />
            </button>
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="text-white block px-3 py-2 text-base font-medium">Explore</a>
              <a href="#itinerary" className="text-gray-300 block px-3 py-2 text-base font-medium">My Trips</a>
              <a href="#deals" className="text-gray-300 block px-3 py-2 text-base font-medium">Deals</a>
              <a href="#apps" className="text-gray-300 block px-3 py-2 text-base font-medium">App Hub</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
