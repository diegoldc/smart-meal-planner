import React from 'react'
import { Calendar, ChefHat, Star, Users, Clock, TrendingUp } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import FeatureCard from '../components/FeatureCard';

// Componente HomePage Principal
export default function HomePage() {
  // const handleLogout = () => {
  //   console.log('Cerrando sesión...');
  //   // Aquí va tu lógica de logout
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* <Navbar onLogout={handleLogout} /> */}

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Bienvenido a{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                SmartMeal Planner
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Planifica tus comidas de manera inteligente, ahorra tiempo y come saludable
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all shadow-lg">
                Crear Nuevo Plan
              </button>
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all shadow-lg border border-indigo-200">
                Explorar Recetas
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            icon={Calendar}
            value="12"
            label="Planes Creados"
            color="from-blue-500 to-blue-600"
          />
          <StatsCard
            icon={ChefHat}
            value="48"
            label="Recetas Guardadas"
            color="from-purple-500 to-purple-600"
          />
          <StatsCard
            icon={Star}
            value="95%"
            label="Objetivos Cumplidos"
            color="from-pink-500 to-pink-600"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Todo lo que necesitas en un solo lugar
          </h2>
          <p className="text-gray-600 text-lg">
            Herramientas potentes para planificar tus comidas de forma eficiente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Calendar}
            title="Planificación Semanal"
            description="Organiza tus comidas para toda la semana con un solo click"
            color="from-blue-500 to-blue-600"
          />
          <FeatureCard
            icon={ChefHat}
            title="Recetas Personalizadas"
            description="Accede a miles de recetas adaptadas a tus preferencias"
            color="from-purple-500 to-purple-600"
          />
          <FeatureCard
            icon={TrendingUp}
            title="Seguimiento Nutricional"
            description="Monitorea tus calorías y nutrientes de forma automática"
            color="from-pink-500 to-pink-600"
          />
          <FeatureCard
            icon={Users}
            title="Planes Familiares"
            description="Crea planes de comida para toda tu familia"
            color="from-indigo-500 to-indigo-600"
          />
          <FeatureCard
            icon={Clock}
            title="Ahorro de Tiempo"
            description="Reduce el tiempo de planificación hasta en un 70%"
            color="from-green-500 to-green-600"
          />
          <FeatureCard
            icon={Star}
            title="Favoritos"
            description="Guarda y organiza tus recetas y planes favoritos"
            color="from-orange-500 to-orange-600"
          />
        </div>
      </div>

      {/* Recent Plans Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Tus Planes Recientes</h2>
          <button className="text-indigo-600 hover:text-indigo-700 font-semibold">
            Ver todos →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Plan Semanal #{item}
                </h3>
                <p className="text-gray-600 mb-4">
                  Desayuno, comida y cena para 7 días
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Hace 2 días</span>
                  <button className="text-indigo-600 hover:text-indigo-700 font-semibold">
                    Ver Plan →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
