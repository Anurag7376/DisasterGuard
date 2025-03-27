import { Link, Phone } from 'lucide-react'
import React from 'react'

function Footers() {
  return (
    <div>
       <footer className="bg-white shadow-lg py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <button
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 shadow-md"
              onClick={() => window.location.href = 'https://magenta-jelly-51ec83.netlify.app/'}
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">Emergency Contact</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footers
