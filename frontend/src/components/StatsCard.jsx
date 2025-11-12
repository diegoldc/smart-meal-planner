import React from 'react'

// eslint-disable-next-line no-unused-vars
export default function StatsCard({ icon: Icon, value, label, color }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-3xl font-bold text-gray-800">{value}</p>
          <p className="text-gray-600 mt-1">{label}</p>
        </div>
        <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
}