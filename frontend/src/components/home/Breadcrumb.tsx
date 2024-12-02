// MainComponent.js - Main component that contains the right-side heading, cards, and add button
import React, { useState } from "react";
import CardComponent from "./CardComponent";

export default function Breadcrumb() {
  const [cards, setCards] = useState([0, 1, 2]); // Initialize with 3 cards

  const addCard = () => {
    setCards([...cards, cards.length]); // Add a new card by extending the array
  };

  return (
    // <div className="p-8">
    //   <div className="flex justify-start">
    //     <h1 className="text-2xl font-bold">Top Cources</h1>
    //   </div>
    //   <div className="flex flex-wrap gap-4 mt-4">
    //     {cards.map((card, index) => (
    //       <CardComponent key={index} index={index} />
    //     ))}
    //   </div>
    //   <div className="mt-4">
    //     <button
    //       onClick={addCard}
    //       className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    //     >
    //       Add Card
    //     </button>
    //   </div>
    // </div>
    <div className="p-10 m-5 bg-slate-850">
      <div className="header bg-blue-600 w-100 p-2 m-2 h-16 rounded-full">
        <h2 className="text-4xl text-white mb-8 text-center font-bold ">
          Quick Options
        </h2>
      </div>
      <div className="grid m-7 grid-cols-1 md:grid-cols-3 gap-7 px-10">
        {/* Likes and Comments Section */}
        <div className="bg-gray-300 p-4 rounded-l-2xl rounded-r-2xl shadow ">
          <div className="head bg-slate-900 rounded-full p-0.7 w-full">
            <h3 className="text-2xl text-center text-zinc-00 font-semibold mb-4">
              Likes And Comments
            </h3>
          </div>
          <p className="mb-2 font-semibold text-zinc-700">
            Total likes: <span className=" text-zinc-700">25</span>
          </p>
          <button className="w-3/4 bg-indigo-500 text-white py-4 rounded mb-2 hover:bg-purple-700 text-xl">
            View Likes
          </button>
          <p className="mb-2 font-semibold text-zinc-700">
            Progress: <span className=" text-zinc-700">25</span>
          </p>
          <button className="w-3/4 bg-purple-600 text-white py-4 rounded mb-2 hover:bg-purple-700 text-xl">
            View Progress
          </button>
          <p className="mb-2 font-semibold text-zinc-700">
            Total Enrollments: <span className=" text-zinc-700">25</span>
          </p>
          <button className="w-3/4 bg-purple-700 text-white py-4 mb-2 rounded hover:bg-purple-700 text-xl">
            View Courses
          </button>
        </div>

        {/* Top Categories Section */}
        <div className="bg-gray-300 p-4 rounded-l-2xl rounded-r-2xl shadow">
          <div className="heading_2 bg-slate-900 rounded-full p-0.7 w-full">
            <h3 className="text-2xl text-center text-zinc-00 font-semibold mb-4">
              Top Categories
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Technology",
              "Artificial Intelligence",
              "Data Science",
              "Machine Learning",
              "Web Development",
              "Mobile App Development",
              "Cybersecurity",
              "Blockchain",
              "Finance",
              "Cryptocurrency",
              "Entrepreneurship",
              "Leadership",
              "Digital Marketing",
              "ontent Writing",
              "Video Editing",
            ].map((category, index) => (
              <span
                key={index}
                className="px-3 py-3 bg-purple-900 text-white rounded hover:bg-gray-800 text-xl"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Popular Topics Section */}
        <div className="bg-gray-300 p-4 rounded-l-2xl rounded-r-2xl shadow ">
          <div className="heading_3 bg-slate-900 rounded-full p-0.7 w-full">
            <h3 className="text-2xl text-center text-zinc-00 font-semibold mb-4">
              Popular Topics
            </h3>
          </div>
          <div className="flex flex-wrap gap-5">
            {[
              "React",
              "Node.js",
              "Django",
              "APIs",
              "Git",
              "DevOps",
              "Microservices",
              "JavaScript",
              "Analytics",
              "Startup",
              "CRM",
              "SupplyChain",
              "Automation",
              "Finance",
              "Leadership",
              "Strategy",
              "Typography",
            ].map((topic, index) => (
              <span
                key={index}
                className="px-3 py-3 bg-cyan-800 text-white rounded hover:bg-gray-800 text-xl"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}





// // MainComponent.js - Main component that contains the right-side heading, cards, and add button
// import React, { useState } from 'react';
// import CardComponent from './CardComponent';

// export default function Breadcrumb() {
//   const [cards, setCards] = useState([0, 1, 2]); // Initialize with 3 cards

//   const addCard = () => {
//     setCards([...cards, cards.length]); // Add a new card by extending the array
//   };

//   return (
//     // <div className="p-8">
//     //   <div className="flex justify-start">
//     //     <h1 className="text-2xl font-bold">Top Cources</h1>
//     //   </div>
//     //   <div className="flex flex-wrap gap-4 mt-4">
//     //     {cards.map((card, index) => (
//     //       <CardComponent key={index} index={index} />
//     //     ))}
//     //   </div>
//     //   <div className="mt-4">
//     //     <button
//     //       onClick={addCard}
//     //       className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//     //     >
//     //       Add Card
//     //     </button>
//     //   </div>
//     // </div>
//     <div className="p-8">
//     <h2 className="text-3xl font-semibold mb-8">Quick Options</h2>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-7 px-10">
//       {/* Likes and Comments Section */}
//       <div className="bg-gray-200 p-4 rounded shadow">
//         <h3 className="text-lg font-bold mb-4">Likes And Comments</h3>
//         <p className="mb-2">Total likes: <span className="font-semibold">25</span></p>
//         <button className="w-3/4 bg-purple-600 text-white py-6 rounded mb-4 hover:bg-purple-700 text-xl">
//           View Likes
//         </button>
//         <p className="mb-2">Total comments: <span className="font-semibold">12</span></p>
//         <button className="w-3/4 bg-purple-600 text-white py-6 rounded mb-4 hover:bg-purple-700 text-xl">
//           View Comments
//         </button>
//         <p className="mb-2">Saved playlists: <span className="font-semibold">4</span></p>
//         <button className="w-3/4 bg-purple-600 text-white py-6 rounded hover:bg-purple-700 text-xl">
//           View Playlists
//         </button>
//       </div>

//       {/* Top Categories Section */}
//       <div className="bg-gray-200 p-4 rounded shadow">
//         <h3 className="text-lg font-bold mb-4">Top Categories</h3>
//         <div className="flex flex-wrap gap-5">
//           {['development', 'business', 'design', 'marketing', 'music', 'photography', 'software', 'science'].map(
//             (category, index) => (
//               <span
//                 key={index}
//                 className="px-3 py-3 bg-gray-600 text-gray-100 rounded hover:bg-gray-800 text-xl"
//               >
//                 {category}
//               </span>
//             )
//           )}
//         </div>
//       </div>

//       {/* Popular Topics Section */}
//       <div className="bg-gray-200 p-4 rounded shadow">
//         <h3 className="text-lg font-bold mb-4">Popular Topics</h3>
//         <div className="flex flex-wrap gap-5">
//           {['HTML', 'CSS', 'JavaScript', 'React', 'PHP', 'Bootstrap'].map((topic, index) => (
//             <span
//               key={index}
//               className="px-3 py-3 bg-gray-600 text-gray-200 rounded hover:bg-gray-800"
//             >
//               {topic}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
//   );
// }
