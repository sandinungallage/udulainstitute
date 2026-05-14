import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Award, Mail } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';

export default function Teachers() {
  const [filter, setFilter] = useState('All');

  const subjects = ['All', 'Mathematics', 'Science', 'English', 'ICT', 'Commerce'];

  const teachers = [
    { name: 'Mr. Nimal Perera', subject: 'Mathematics', qualifications: 'BSc. (Hons) Mathematics, PGDE', exp: '15+ Years', desc: 'Expert in making complex mathematical concepts easy to understand.' },
    { name: 'Mrs. Kanthi Silva', subject: 'Science', qualifications: 'BSc. Bio Science', exp: '12+ Years', desc: 'Passionate about practical experiments and interactive learning.' },
    { name: 'Mr. John Fernando', subject: 'English', qualifications: 'BA (English), MA (Linguistics)', exp: '10+ Years', desc: 'Focuses on grammar, spoken English, and exam techniques.' },
    { name: 'Miss. Sanduni Rathnayake', subject: 'ICT', qualifications: 'BSc. Computer Science', exp: '8+ Years', desc: 'Bringing technology to life with hands-on coding experience.' },
    { name: 'Mr. Rohan Gunasekara', subject: 'Commerce', qualifications: 'BCom (Special)', exp: '14+ Years', desc: 'Specialist in accounting principles and business studies.' },
    { name: 'Mrs. Deepika Weerasinghe', subject: 'Mathematics', qualifications: 'BSc. Physical Science', exp: '9+ Years', desc: 'Dedicated to helping students overcome their math phobias.' },
  ];

  const filteredTeachers = filter === 'All' ? teachers : teachers.filter(t => t.subject === filter);

  return (
    <PageTransition>
      <section className="bg-slate-50 dark:bg-slate-900 py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Meet Our Experts
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Learn from the best educators in Sri Lanka. Our highly qualified teaching staff is dedicated to your success.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900 min-h-screen">
        <div className="container mx-auto px-4">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {subjects.map((sub) => (
              <button
                key={sub}
                onClick={() => setFilter(sub)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === sub 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          {/* Teacher Cards */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredTeachers.map((teacher, i) => (
                <motion.div
                  key={teacher.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="h-48 bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                    {/* Placeholder Image */}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-500 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800">
                      <span className="font-medium text-lg text-slate-500 dark:text-slate-400">{teacher.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-blue-600 dark:text-blue-400 shadow-sm flex items-center gap-1">
                      <BookOpen className="w-4 h-4" /> {teacher.subject}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{teacher.name}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <Award className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-500" />
                        <span>{teacher.qualifications}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="font-semibold px-2 py-0.5 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded text-xs">{teacher.exp}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                      {teacher.desc}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <button className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors p-2 bg-slate-50 dark:bg-slate-800 rounded-full">
                        <Mail className="w-4 h-4" />
                      </button>
                      <button className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                        View Schedule &rarr;
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredTeachers.length === 0 && (
            <div className="text-center py-20 text-slate-500 dark:text-slate-400">
              No teachers found for this subject category.
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
