import React from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import './style.css'

const Breadcrumb = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const pathnames = location.pathname
    .split('/')
    .filter(x => x && x !== 'rrgroup')

  if (pathnames.length === 0) return null

  const handleBack = () => navigate(-1)

  return (
    <div className="container mx-auto my-20 px-4 max-w-screen-xl">
    <div className="breadcrumb-container px-4 py-2">
      <nav className="flex items-center space-x-2 text-lg text-[#0F2431] dark:text-gray-300">
        <button
          onClick={handleBack}
          className="flex items-center hover:underline"
          aria-label="Go back"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        {pathnames.map((name, index) => {
          const routeTo = '/' + pathnames.slice(0, index + 1).join('/')
          const isLast = index === pathnames.length - 1
          return (
            <div key={name} className="flex items-center space-x-1">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              {isLast ? (
                <span className="font-medium capitalize">{decodeURIComponent(name)}</span>
              ) : (
                <Link to={routeTo} className="hover:underline capitalize">
                  {decodeURIComponent(name)}
                </Link>
              )}
            </div>
          )
        })}
      </nav>
    </div>
    </div>
  )
}

export default Breadcrumb
