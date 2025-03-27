import React, { useState, useEffect } from 'react';
import { Bell, MapPin, Shield, Home, Newspaper, AlertTriangle, ShieldCheck, LogIn, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCard } from './components/AlertCard';
import { NewsCard } from './components/NewsCard';
import { PreventiveMeasureCard } from './components/PreventiveMeasureCard';
import { AuthModal } from './components/AuthModal';
import { MessageCenter } from './components/MessageCenter';
import { mockAlerts, mockNews, mockPreventiveMeasures, indianStates } from './data/mockData';
import { supabase } from './lib/supabase';
import Footers from './components/Footers';

function App() {
  const [selectedRegion, setSelectedRegion] = useState<string>('Kerala');
  const [activeTab, setActiveTab] = useState<'home' | 'alerts' | 'news' | 'prevention'>('home');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => setUser(session?.user??null));

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };
  
  const filteredAlerts = mockAlerts.filter(alert => alert.region === selectedRegion);

  const renderContent = () => {
    const pageTransition = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 }
    };

    switch (activeTab) {
      case 'home':
        return (
          <motion.div
            {...pageTransition}
            className="space-y-8"
          >
            <section className="relative h-96 rounded-xl overflow-hidden mb-8">
              {/* <img 
                src="https://unsplash.com/photos/traffic-light-sign-underwater-_whs7FPfkwQ"
                alt="Emergency Response"
                className="w-full h-full object-cover"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
                <div className="text-white p-8 max-w-2xl">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-bold mb-4"
                  >
                    Stay Safe, Stay Informed
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl mb-6"
                  >
                    Get real-time alerts and critical safety information for natural disasters in your area.
                  </motion.p>
                  <motion.button 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => setActiveTab('alerts')}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    View Active Alerts
                  </motion.button>
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">24/7 Monitoring</h3>
                <p>Our advanced systems continuously monitor weather patterns and seismic activity across India.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Instant Alerts</h3>
                <p>Receive immediate notifications about potential disasters in your region.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Expert Guidance</h3>
                <p>Access verified safety protocols and expert recommendations during emergencies.</p>
              </motion.div>
            </section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockNews.slice(0, 2).map((news, index) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                  >
                    <NewsCard news={news} />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h2 className="text-2xl font-bold mb-6">Featured Safety Measures</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockPreventiveMeasures.slice(0, 2).map((measure, index) => (
                  <motion.div
                    key={measure.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                  >
                    <PreventiveMeasureCard measure={measure} />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h2 className="text-2xl font-bold mb-6">Emergency Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">Emergency Numbers</h3>
                  <ul className="space-y-2">
                    <li>National Emergency: 112</li>
                    <li>Police: 100</li>
                    <li>Fire: 101</li>
                    <li>Ambulance: 102</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">Disaster Management</h3>
                  <ul className="space-y-2">
                    <li>NDRF Helpline: 011-24363260</li>
                    <li>NDMA Control Room: 1078</li>
                    <li>Relief Commissioner: 1070</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">Weather Services</h3>
                  <ul className="space-y-2">
                    <li>IMD Weather: 011-24631913</li>
                    <li>Cyclone Warning: 1554</li>
                    <li>Flood Control: 1916</li>
                  </ul>
                </div>
              </div>
            </motion.section>
          </motion.div>
        );

      case 'alerts':
        return (
          <motion.div {...pageTransition} className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-blue-800 mb-2">Active Alerts for {selectedRegion}</h2>
              <p className="text-blue-600">Stay informed about current disasters and follow safety guidelines.</p>
            </div>
            {filteredAlerts.length > 0 ? (
              filteredAlerts.map((alert, index) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <AlertCard alert={alert} />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <Shield className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Active Alerts</h3>
                <p className="text-gray-500">There are currently no active alerts for {selectedRegion}.</p>
              </motion.div>
            )}
          </motion.div>
        );

      case 'news':
        return (
          <motion.div {...pageTransition} className="space-y-6">
            <h2 className="text-2xl font-bold">Latest News & Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <NewsCard news={news} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'prevention':
        return (
          <motion.div {...pageTransition} className="space-y-6">
            <h2 className="text-2xl font-bold">Preventive Measures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockPreventiveMeasures.map((measure, index) => (
                <motion.div
                  key={measure.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <PreventiveMeasureCard measure={measure} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">DisasterGuard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <MessageCenter />
              <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
                <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                <select 
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 text-gray-700"
                >
                  {indianStates.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <LogIn className="w-5 h-5" />
                  <span>Login</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {['home', 'alerts', 'news', 'prevention'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-3 py-4 text-sm font-medium flex items-center space-x-2 border-b-2 ${
                  activeTab === tab ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {tab === 'home' && <Home className="w-5 h-5" />}
                {tab === 'alerts' && <AlertTriangle className="w-5 h-5" />}
                {tab === 'news' && <Newspaper className="w-5 h-5" />}
                {tab === 'prevention' && <ShieldCheck className="w-5 h-5" />}
                <span className="capitalize">{tab}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
      <Footers></Footers>
    </div>
  );
}

export default App;