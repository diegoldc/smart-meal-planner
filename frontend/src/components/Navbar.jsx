import React, {useState} from 'react'
import { ChefHat, LogOut, Menu, X, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar({onLogout}) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-lg shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              SmartMeal Planner
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/login" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Iniciar Sesión
            </Link>
            
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Inicio
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Mis Planes
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Recetas
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Comunidad
            </a>
          </div>

          {/* User Menu Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
            >
              <LogOut className="w-4 h-4" />
              <span>Cerrar Sesión</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-indigo-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-200">
            <a href="#" className="block text-gray-700 hover:text-indigo-600 font-medium">
              Inicio
            </a>
            <a href="#" className="block text-gray-700 hover:text-indigo-600 font-medium">
              Mis Planes
            </a>
            <a href="#" className="block text-gray-700 hover:text-indigo-600 font-medium">
              Recetas
            </a>
            <a href="#" className="block text-gray-700 hover:text-indigo-600 font-medium">
              Comunidad
            </a>
            <button
              onClick={onLogout}
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg"
            >
              <LogOut className="w-4 h-4" />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
