import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Eye, EyeOff, Lock, Mail, ArrowLeft } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <PageTransition>
      <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden bg-slate-50 dark:bg-slate-900">
        
        {/* Animated Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 dark:bg-blue-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-400/20 dark:bg-purple-600/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row glass rounded-3xl overflow-hidden shadow-2xl border border-white/40 dark:border-slate-700/50">
            
            {/* Left Side - Illustration */}
            <div className="w-full md:w-1/2 bg-blue-600 dark:bg-blue-800 p-12 text-white flex flex-col justify-between relative overflow-hidden hidden md:flex">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
              
              <div className="relative z-10">
                <Link to="/" className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors mb-12">
                  <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                    <BookOpen className="text-white w-8 h-8" />
                  </div>
                  <span className="font-bold text-3xl tracking-tight">Udula Institute</span>
                </div>
                <h2 className="text-4xl font-bold mb-4 leading-tight">Welcome Back, Student!</h2>
                <p className="text-blue-100 text-lg opacity-90">Login to access your personalized dashboard, online classes, and learning materials.</p>
              </div>
              
              <div className="relative z-10">
                <div className="flex -space-x-4 mb-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-blue-600 bg-slate-300 flex items-center justify-center text-xs font-bold text-slate-500 z-[${10-i}]`}>S{i}</div>
                  ))}
                </div>
                <p className="text-sm font-medium text-blue-100">Join 5000+ students learning with us.</p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full md:w-1/2 p-8 md:p-12 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg">
              
              <div className="md:hidden flex items-center gap-2 mb-8">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <BookOpen className="text-white w-6 h-6" />
                </div>
                <span className="font-bold text-xl text-slate-900 dark:text-white">Udula Institute</span>
              </div>

              <div className="mb-10">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Login</h3>
                <p className="text-slate-500 dark:text-slate-400">Enter your credentials to continue.</p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email or Index Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-slate-400" />
                    </div>
                    <input 
                      type="text" 
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm" 
                      placeholder="student@example.com" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="w-5 h-5 text-slate-400" />
                    </div>
                    <input 
                      type="password" 
                      className="w-full pl-12 pr-12 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm" 
                      placeholder="••••••••" 
                    />
                    <button 
                      type="button" 
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer text-sm">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-slate-600 dark:text-slate-400">Remember me</span>
                  </label>
                  <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                    Forgot Password?
                  </a>
                </div>

                <button type="button" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Sign In
                </button>
              </form>

              <div className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
                Don't have an account? <span className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer">Contact Administration</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}
