import  { useState } from 'react';
import Navbar from './Navbar';

// Gallery Page Component
function GalleryPage() {
  // Sample gallery data - replace with your actual images
  const galleryData:any = {
    events: [
      { id: 1, src: "https://res.cloudinary.com/manish19/image/upload/v1754281006/spring/message/z02pyvwzppot0o9wqoe4.jpg", title: "Annual Day Celebration" },
      { id: 2, src: "https://res.cloudinary.com/manish19/image/upload/v1754281006/spring/message/z02pyvwzppot0o9wqoe4.jpg", title: "Science Fair" },
      { id: 3, src: "https://res.cloudinary.com/manish19/image/upload/v1754281006/spring/message/z02pyvwzppot0o9wqoe4.jpg", title: "Classroom Activities" },
      { id: 4, src: "https://res.cloudinary.com/manish19/image/upload/v1754281006/spring/message/z02pyvwzppot0o9wqoe4.jpg", title: "Sports Day" },
      { id: 5, src: "https://res.cloudinary.com/manish19/image/upload/v1754281006/spring/message/z02pyvwzppot0o9wqoe4.jpg", title: "Art Exhibition" },
      { id: 6, src: "https://res.cloudinary.com/manish19/image/upload/v1754281006/spring/message/z02pyvwzppot0o9wqoe4.jpg", title: "School Building" }
    ],
    campus: [
      { id: 1, src: "https://res.cloudinary.com/manish19/image/upload/v1754281006/spring/message/z02pyvwzppot0o9wqoe4.jpg", title: "Main Building" },
      { id: 2, src: "https://res.cloudinary.com/manish19/image/upload/v1754281006/spring/message/z02pyvwzppot0o9wqoe4.jpg", title: "Library" },
      { id: 3, src: "https://res.cloudinary.com/manish19/image/upload/v1754281006/spring/message/z02pyvwzppot0o9wqoe4.jpg", title: "Science Lab" },
      { id: 4, src: "https://res.cloudinary.com/manish19/image/upload/v1754281006/spring/message/z02pyvwzppot0o9wqoe4.jpg", title: "Classroom" },
      { id: 5, src: "https://res.cloudinary.com/manish19/image/upload/v1754281006/spring/message/z02pyvwzppot0o9wqoe4.jpg", title: "Sports Ground" },
      { id: 6, src: "https://res.cloudinary.com/manish19/image/upload/v1754281006/spring/message/z02pyvwzppot0o9wqoe4.jpg", title: "Computer Lab" }
    ],
    achievements: [
      { id: 1, src: "https://res.cloudinary.com/manish19/image/upload/v1754281006/spring/message/z02pyvwzppot0o9wqoe4.jpg", title: "Science Olympiad Winners" },
      { id: 2, src: "https://res.cloudinary.com/manish19/image/upload/v1754281006/spring/message/z02pyvwzppot0o9wqoe4.jpg", title: "Academic Excellence Award" },
      { id: 3, src: "https://res.cloudinary.com/manish19/image/upload/v1754281006/spring/message/z02pyvwzppot0o9wqoe4.jpg", title: "Sports Championship" },
      { id: 4, src: "https://res.cloudinary.com/manish19/image/upload/v1754281006/spring/message/z02pyvwzppot0o9wqoe4.jpg", title: "Cultural Fest Winners" },
      { id: 5, src: "https://res.cloudinary.com/manish19/image/upload/v1754281006/spring/message/z02pyvwzppot0o9wqoe4.jpg", title: "Debate Competition" },
      { id: 6, src: "https://res.cloudinary.com/manish19/image/upload/v1754281006/spring/message/z02pyvwzppot0o9wqoe4.jpg", title: "Art Competition" }
    ]
  };

  const [activeTab, setActiveTab] = useState('events');
  type GalleryItem = { id: number; src: string; title: string };
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const openModal = (image:any) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Navbar/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            School Gallery
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Explore the vibrant life at Saraswati Bal Vinay Mandir High School
          </p>
        </div>

        {/* Gallery Tabs */}
        <div className="flex justify-center mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {['events', 'campus', 'achievements'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize ${activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData[activeTab].map((item:any) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-auto max-h-96 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900">{selectedImage.title}</h3>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


export default GalleryPage;
