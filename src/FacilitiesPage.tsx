import { FaBook, FaRunning, FaUserGraduate, FaMusic, FaPaintBrush, FaVolleyballBall, FaFutbol } from 'react-icons/fa';
import { GiBasketballBall } from 'react-icons/gi';
// GiMartialArtsUniform does not exist, consider using another icon if needed
import { MdSportsKabaddi } from 'react-icons/md';

const FacilitiesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Facilities</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            World-class infrastructure designed to nurture young minds and bodies
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-2 origin-top-left"></div>
      </div>

      {/* Academic Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <div className="bg-blue-100 p-4 rounded-lg inline-block mb-6">
                <FaBook className="text-blue-600 text-3xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Academic Facilities</h2>
              <p className="text-gray-600 mb-6">
                SARASWATI BAL VINAY MANDIR HIGH SCHOOL boasts of some of the best academic facilities to give our students the utmost support to learn in the best way possible.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-blue-600">Smart Classrooms</h3>
                  <p className="text-sm text-gray-600">Interactive digital learning</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-blue-600">Science Labs</h3>
                  <p className="text-sm text-gray-600">Hands-on experiments</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-blue-600">Library</h3>
                  <p className="text-sm text-gray-600">Extensive book collection</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-blue-600">Computer Lab</h3>
                  <p className="text-sm text-gray-600">Modern technology access</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-200 h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Classroom" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="bg-red-100 p-4 rounded-lg inline-block mb-6">
              <FaRunning className="text-red-600 text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sports Facilities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              With an aim to ensure every child's holistic development, we take pride in providing excellent infrastructure for various sports.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SportCard icon={<FaFutbol className="text-4xl" />} title="Football" />
            <SportCard icon={<FaVolleyballBall className="text-4xl" />} title="Volleyball" />
            <SportCard icon={<GiBasketballBall className="text-4xl" />} title="Basketball" />
            <SportCard icon={<MdSportsKabaddi className="text-4xl" />} title="Kabaddi" />
            <SportCard icon={<GiBasketballBall className="text-4xl" />} title="Martial Arts" />
            <SportCard icon={<FaRunning className="text-4xl" />} title="Athletics" />
            <SportCard icon={<FaRunning className="text-4xl" />} title="Athletics" />
            <SportCard icon={<div className="text-2xl font-bold">Kho-Kho</div>} title="Kho-Kho" />
          </div>
        </div>
      </section>

      {/* Personality Development */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pl-10">
              <div className="bg-purple-100 p-4 rounded-lg inline-block mb-6">
                <FaUserGraduate className="text-purple-600 text-3xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Personality Development</h2>
              <p className="text-gray-600 mb-6">
                Personality development classes are conducted for children of all classes. These classes aim at grooming young girls and boys in manners and etiquette, with a stress on value-based development of their personality.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-600 p-1 rounded-full mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-700">Communication skills workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-600 p-1 rounded-full mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-700">Leadership training programs</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-600 p-1 rounded-full mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-700">Etiquette and manners classes</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-600 p-1 rounded-full mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-700">Value education sessions</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-200 h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Personality Development" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Curricular */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="bg-green-100 p-4 rounded-lg inline-block mb-6">
              <FaMusic className="text-green-600 text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Extra Curricular Activities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer students a variety of extra-curricular activities that are integral parts of our education system.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ActivityCard 
              icon={<FaMusic className="text-4xl text-green-600" />} 
              title="Music" 
              description="Vocal and instrumental music training for all skill levels"
            />
            <ActivityCard 
              icon={<div className="text-4xl text-green-600">💃</div>} 
              title="Dance" 
              description="Various dance forms taught by professional instructors"
            />
            <ActivityCard 
              icon={<FaPaintBrush className="text-4xl text-green-600" />} 
              title="Art & Craft" 
              description="Creative expression through multiple art mediums"
            />
            <ActivityCard 
              icon={<div className="text-4xl text-green-600">🛠️</div>} 
              title="SUPW" 
              description="Socially Useful Productive Work for practical learning"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Our World-Class Facilities</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule a visit to see how our facilities can benefit your child's education and development.
          </p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg">
            Book a Campus Tour
          </button>
        </div>
      </section>
    </div>
  );
};

const SportCard = ({ icon, title }:any) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
      <div className="bg-gray-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-gray-800">{title}</h3>
    </div>
  );
};

const ActivityCard = ({ icon, title, description }:any) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-gray-800 text-xl mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FacilitiesPage;