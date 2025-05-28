import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Malmoum</h1>
        <p className="text-lg text-gray-600 mb-8">Your modern web application</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-blue-50 rounded-xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Feature One</h2>
            <p className="text-gray-600">Experience seamless integration and powerful functionality.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Feature Two</h2>
            <p className="text-gray-600">Build amazing things with modern tools and technologies.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App