import { motion } from 'framer-motion';
import { Award, BookOpen, Heart, Shield, Users } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';

export default function About() {
  const values = [
    { icon: <Heart className="w-6 h-6 text-red-500" />, title: "Student First", desc: "Every decision we make prioritizes the well-being and academic success of our students." },
    { icon: <Shield className="w-6 h-6 text-blue-500" />, title: "Safe Environment", desc: "A disciplined, inclusive, and secure space where students can focus entirely on learning." },
    { icon: <Award className="w-6 h-6 text-yellow-500" />, title: "Excellence", desc: "We strive for the highest standards in teaching methodologies and academic results." },
  ];

  return (
    <PageTransition>
      {/* Hero Header */}
      <section className="bg-slate-50 dark:bg-slate-900 py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            About Udula Institute
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            A legacy of excellence in shaping the future of Sri Lankan students through quality O/L education.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border-t-4 border-blue-500"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <BookOpen className="text-blue-500" /> Our Mission
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                To provide high-quality, accessible, and comprehensive Ordinary Level education that empowers students to achieve their highest academic potential in a safe, motivating, and disciplined environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border-t-4 border-purple-500"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Users className="text-purple-500" /> Our Vision
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                To be the most trusted and recognized educational institute in Sri Lanka, nurturing well-rounded individuals equipped for future challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/3 aspect-[3/4] bg-slate-200 dark:bg-slate-700 rounded-2xl overflow-hidden relative shadow-lg"
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-500">
                <span>Director Image</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-2/3"
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">A Message from Our Director</h2>
              <blockquote className="text-xl italic text-slate-600 dark:text-slate-300 mb-6 border-l-4 border-blue-500 pl-6 py-2">
                "Education is not just about passing exams; it's about building character, discipline, and the confidence to face the world. At Udula Institute, we are committed to being the guiding light for every student that walks through our doors."
              </blockquote>
              <div className="font-semibold text-slate-900 dark:text-white text-lg">Mr. Samantha Perera</div>
              <div className="text-blue-600 dark:text-blue-400">Founder & Managing Director</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border border-slate-100 dark:border-slate-800 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{val.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
