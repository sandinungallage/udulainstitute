import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, ChevronDown, MessageCircle } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { q: "How do I register for a class?", a: "You can register online through our student portal or visit our institute office during working hours." },
    { q: "What are the class fees?", a: "Fees vary depending on the subject. Please contact our administration office or submit an inquiry for a detailed fee structure." },
    { q: "Do you offer online classes?", a: "Yes, we offer hybrid learning options. All our physical classes are simultaneously broadcasted online." },
    { q: "Is there a safe parking facility?", a: "Yes, we have a secure parking area dedicated to our students and parents." }
  ];

  return (
    <PageTransition>
      <section className="bg-slate-50 dark:bg-slate-900 py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info & Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="glass p-6 rounded-2xl flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Call Us</h3>
                    <p className="text-slate-600 dark:text-slate-400">+94 11 234 5678</p>
                    <p className="text-slate-600 dark:text-slate-400">+94 77 123 4567</p>
                  </div>
                </div>
                
                <div className="glass p-6 rounded-2xl flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Email Us</h3>
                    <p className="text-slate-600 dark:text-slate-400">info@udulainstitute.lk</p>
                    <p className="text-slate-600 dark:text-slate-400">support@udulainstitute.lk</p>
                  </div>
                </div>
              </div>

              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                    <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="button" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map & FAQs */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="w-full h-[300px] bg-slate-200 dark:bg-slate-800 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-md">
                <div className="absolute inset-0 bg-slate-300 dark:bg-slate-700 flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 gap-2">
                  <MapPin className="w-10 h-10" />
                  <span className="font-medium">Google Maps Placeholder</span>
                  <span className="text-sm">123 Education Avenue, Colombo 03</span>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="glass rounded-xl overflow-hidden">
                      <button 
                        onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center bg-transparent focus:outline-none"
                      >
                        <span className="font-semibold text-slate-900 dark:text-white">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeFaq === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="px-6 pb-4 text-slate-600 dark:text-slate-400"
                          >
                            {faq.a}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* WhatsApp Floating Button */}
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </motion.div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}
