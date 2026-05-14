import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Trophy, Target, Shield, Zap, CheckCircle, Star } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';

export default function Home() {
  const features = [
    { icon: <Trophy className="w-8 h-8 text-yellow-500" />, title: "High O/L Results", desc: "Proven track record of producing top island ranks and A-grade passes." },
    { icon: <Shield className="w-8 h-8 text-blue-500" />, title: "Safe Environment", desc: "A disciplined and secure learning space focused on student wellbeing." },
    { icon: <Users className="w-8 h-8 text-green-500" />, title: "Expert Teachers", desc: "Qualified educators with years of experience in O/L syllabus." },
    { icon: <Target className="w-8 h-8 text-red-500" />, title: "Individual Attention", desc: "Small group focus ensuring no student is left behind." },
    { icon: <Zap className="w-8 h-8 text-purple-500" />, title: "Modern Methods", desc: "Interactive multimedia lessons and modern teaching techniques." },
    { icon: <BookOpen className="w-8 h-8 text-indigo-500" />, title: "Hybrid Classes", desc: "Seamless integration of physical and online learning platforms." },
  ];

  const subjects = [
    { name: "Mathematics", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" },
    { name: "Science", color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400" },
    { name: "English", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" },
    { name: "Sinhala", color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400" },
    { name: "ICT", color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400" },
    { name: "Commerce", color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400" },
    { name: "History", color: "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400" },
    { name: "Buddhism", color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400" },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-slate-50 dark:bg-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')] bg-cover bg-center opacity-5 dark:opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-900/20 dark:to-purple-900/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 font-medium mb-6"
            >
              <Star className="w-4 h-4 fill-current" />
              <span>Sri Lanka's Premier O/L Institute</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
            >
              Empowering O/L Students for a <span className="text-blue-600 dark:text-blue-400">Brighter Future</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto"
            >
              Guiding Every Student Towards O/L Excellence. Sri Lanka's trusted institute for Ordinary Level education across all subjects with proven results.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/login" className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Join Classes <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="#subjects" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-lg transition-all shadow-md hover:shadow-lg border border-slate-200 dark:border-slate-700">
                Explore Subjects
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-600 dark:bg-blue-800 text-white relative -mt-8 mx-4 md:mx-auto container rounded-2xl shadow-xl z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-500/50">
          {[
            { value: "5000+", label: "Happy Students" },
            { value: "50+", label: "Expert Teachers" },
            { value: "95%", label: "Pass Rate" },
            { value: "10+", label: "Years Experience" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-4"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-100 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Udula Institute is Special</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">We provide a comprehensive learning ecosystem designed to maximize student potential and ensure academic excellence.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="subjects" className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Comprehensive O/L Subjects</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl">We cover the entire O/L curriculum with specialized teachers for each subject.</p>
            </div>
            <Link to="/contact" className="px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
              Request Time Table
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {subjects.map((subject, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-2xl ${subject.color} flex flex-col items-center justify-center text-center cursor-pointer shadow-sm hover:shadow-md transition-shadow`}
              >
                <BookOpen className="w-8 h-8 mb-3 opacity-80" />
                <span className="font-bold text-lg">{subject.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Timeline */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">The Udula Success Pathway</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">How we guarantee your child's success through our proven methodology.</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-blue-100 dark:bg-blue-900/30 transform md:-translate-x-1/2 rounded-full"></div>
            
            {[
              { title: "Weekly Progress Tracking", desc: "Regular assessments to identify weak areas." },
              { title: "Past Paper Discussions", desc: "Extensive analysis of 10+ years of past papers." },
              { title: "Motivational Culture", desc: "Monthly seminars to boost confidence and focus." },
              { title: "Affordable Education", desc: "Premium education that doesn't break the bank." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="hidden md:block w-1/2"></div>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900 transform -translate-x-1/2 md:translate-x-[-50%] flex items-center justify-center z-10">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                  <div className="glass p-6 rounded-2xl">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-white text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Start Your O/L Success Journey With Udula Institute Today!</h2>
            <p className="text-blue-100 text-lg mb-10">Join thousands of successful students who have achieved their academic dreams with us.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-blue-600 font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl">
              Register Now <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

    </PageTransition>
  );
}
