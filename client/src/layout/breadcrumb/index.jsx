// import React from 'react'
// import { useLocation, Link, useNavigate } from 'react-router-dom'
// import { ChevronRight, ChevronLeft } from 'lucide-react'
// import './style.css'

// const Breadcrumb = () => {
//   const location = useLocation()
//   const navigate = useNavigate()

//   const pathnames = location.pathname
//     .split('/')
//     .filter(x => x && x !== 'rrgroup')

//   if (pathnames.length === 0) return null

//   const handleBack = () => navigate(-1)

//   return (
//     <div className="container mx-auto my-10 px-4 max-w-screen-xl">
//     <div className="breadcrumb-container px-4 py-2">
//       <nav className="flex items-center space-x-2 text-lg text-[#0F2431] dark:text-gray-300">
//         <button
//           onClick={handleBack}
//           className="flex items-center hover:underline"
//           aria-label="Go back"
//         >
//           <ChevronLeft className="w-4 h-4" />
//         </button>
//         {pathnames.map((name, index) => {
//           const routeTo = '/' + pathnames.slice(0, index + 1).join('/')
//           const isLast = index === pathnames.length - 1
//           return (
//             <div key={name} className="flex items-center space-x-1">
//               <ChevronRight className="w-4 h-4 text-gray-400" />
//               {isLast ? (
//                 <span className="font-medium capitalize">{decodeURIComponent(name)}</span>
//               ) : (
//                 <Link to={routeTo} className="hover:underline capitalize">
//                   {decodeURIComponent(name)}
//                 </Link>
//               )}
//             </div>
//           )
//         })}
//       </nav>
//     </div>
//     </div>
//   )
// }

// export default Breadcrumb

// import React from 'react'
// import { useLocation, Link, useNavigate } from 'react-router-dom'
// import { ChevronRight, ChevronLeft } from 'lucide-react'
// import './style.css'

// // Dummy data for example – replace this with your real data or prop/API
// const items = [
//   {
//     id: 2,
//     title: "Qarabağ Aqro 44 MMC COP29 Yaşıl Zonada2",
//     slug: "qarabag-aqro-44-mmc-cop29-yasil-zonada2",
//   },
//   {
//     id: 3,
//     name: "some-other-product",
//     title: "Başqa Məhsulun Adı"
//   },
//   // add more as needed...
// ]

// const Breadcrumb = () => {
//   const location = useLocation()
//   const navigate = useNavigate()

//   const pathnames = location.pathname
//     .split('/')
//     .filter(x => x && x !== 'rrgroup')

//   if (pathnames.length === 0) return null

//   // Map slugs or names to titles for easier access
//   const slugMap = items.reduce((acc, item) => {
//     if (item.slug) acc[item.slug] = item.title || item.name
//     if (item.name && !item.slug) acc[item.name] = item.title || item.name
//     return acc
//   }, {})

//   // Format fallback for unknown slugs
//   const formatBreadcrumb = (str) => {
//     return decodeURIComponent(str)
//       .replace(/-/g, ' ')
//       .replace(/\b\w/g, c => c.toUpperCase())
//   }

//   const getLabel = (name) => {
//     return slugMap[name] || formatBreadcrumb(name)
//   }

//   const handleBack = () => navigate(-1)

//   return (
//     <div className="container mx-auto my-10 px-4 max-w-screen-xl">
//       <div className="breadcrumb-container px-4 py-2">
//         <nav className="flex items-center space-x-2 text-lg text-[#0F2431] dark:text-gray-300">
//           <button
//             onClick={handleBack}
//             className="flex items-center hover:underline"
//             aria-label="Go back"
//           >
//             <ChevronLeft className="w-4 h-4" />
//           </button>
//           {pathnames.map((name, index) => {
//             const routeTo = '/' + pathnames.slice(0, index + 1).join('/')
//             const isLast = index === pathnames.length - 1
//             return (
//               <div key={name} className="flex items-center space-x-1">
//                 <ChevronRight className="w-4 h-4 text-gray-400" />
//                 {isLast ? (
//                   <span className="font-medium capitalize">{getLabel(name)}</span>
//                 ) : (
//                   <Link to={routeTo} className="hover:underline capitalize">
//                     {getLabel(name)}
//                   </Link>
//                 )}
//               </div>
//             )
//           })}
//         </nav>
//       </div>
//     </div>
//   )
// }

// export default Breadcrumb

import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { getAPiData } from '@/http/api';
import './style.css';

// Azerbaijani translations for static paths
const staticPathsMap = {
  about: 'Haqqımızda',
  news: 'Xəbərlər',
  career: 'Karyera',
  ksm: 'KSM',
  services: 'Xidmətlərimiz',
  projects: 'Layihələrimiz',
};

const Breadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [dynamicTitle, setDynamicTitle] = useState(null);

  const pathnames = location.pathname
    .split('/')
    .filter((x) => x && x !== 'rrgroup');

  const lastSegment = pathnames[pathnames.length - 1];
  const secondLastSegment = pathnames[pathnames.length - 2]; // e.g. "news" or "career"

  // Fetch title for last slug only (if it's dynamic)
  useEffect(() => {
    const fetchTitle = async () => {
      try {
        if (!secondLastSegment || !lastSegment) return;

        let endpoint = null;
        if (secondLastSegment === 'news') {
          endpoint = `/v1/news/getBySlug/${lastSegment}`;
        } else if (secondLastSegment === 'career') {
          endpoint = `/v1/vacancy/getBySlug/${lastSegment}`;
        } else if (secondLastSegment === 'ksm') {
          endpoint = `/v1/ksm/getBySlug/${lastSegment}`;
        }

        if (endpoint) {
          const data = await getAPiData(endpoint);
          setDynamicTitle(data?.title || data?.name || data?.header || null);
        }
      } catch (error) {
        console.error('Breadcrumb fetch error:', error);
      }
    };

    fetchTitle();
  }, [secondLastSegment, lastSegment]);

  const formatBreadcrumb = (str) =>
    decodeURIComponent(str)
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());

  const getLabel = (name, index) => {
    if (staticPathsMap[name]) return staticPathsMap[name];

    // Last segment = try to use fetched title
    if (index === pathnames.length - 1 && dynamicTitle) return dynamicTitle;

    return formatBreadcrumb(name);
  };

  const handleBack = () => navigate(-1);

  if (pathnames.length === 0) return null;

  return (
    <div className="container mx-auto my-10 px-4 max-w-screen-xl">
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
            const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
            const isLast = index === pathnames.length - 1;

            return (
              <div key={name} className="flex items-center space-x-1">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                {isLast ? (
                  <span className="font-medium capitalize">
                    {getLabel(name, index)}
                  </span>
                ) : (
                  <Link to={routeTo} className="hover:underline capitalize">
                    {getLabel(name, index)}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
