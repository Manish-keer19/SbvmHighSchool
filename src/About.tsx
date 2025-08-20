
import { FaChild, FaGraduationCap, FaUsers, FaHeart, FaTrophy, FaShieldAlt } from 'react-icons/fa';
import schoolBuilding from '../public/school.jpg';
import Navbar from './Navbar';

function AboutPage() {
  return (
    <div className="bg-gray-50">
      <Navbar/>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our School</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            A special place where students thrive in a happy, safe environment designed to fulfill their potential
          </p>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-medium text-gray-800 italic mb-6">
              "Our parents and staff, but particularly our fantastic students tell us that SARASWATI BAL VINAY MANDIR HIGH SCHOOL is a very special place."
            </p>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              We continuously ensure that students enjoy school in a happy, safe and secure environment designed to fulfill their potential.
            </p>
          </blockquote>
        </div>
      </div>

      {/* Our Mission */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Mission</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Excellence in Education and Personal Development
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                      <FaGraduationCap className="h-6 w-6" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 text-center">Academic Excellence</h3>
                    <p className="mt-5 text-base text-gray-500">
                      We match our clear focus on academic excellence with a strong commitment to personal, social and emotional development.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                      <FaChild className="h-6 w-6" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 text-center">Individual Potential</h3>
                    <p className="mt-5 text-base text-gray-500">
                      All our students are individuals of whom we have the highest expectations. We nurture each child's unique talents.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                      <FaUsers className="h-6 w-6" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 text-center">Community Values</h3>
                    <p className="mt-5 text-base text-gray-500">
                      We encourage students to be tolerant, respectful and become responsible citizens of the wider community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* School Environment */}
      <div className="relative bg-gray-100 py-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="w-full h-full object-cover opacity-10"
            src={schoolBuilding}
            alt="School building"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Learning Environment
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                At SARASWATI BAL VINAY MANDIR HIGH SCHOOL we are passionate about learning in every sense. Our vibrant and energetic student community develops confidence and deep love of learning.
              </p>
              <div className="mt-8">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Learn more about our curriculum
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <FaHeart className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Student Welfare</h3>
                <p className="text-gray-500">
                  We place student welfare and progress at the heart of all that we do.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <FaTrophy className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Achievement</h3>
                <p className="text-gray-500">
                  Our culture of hard work and support makes success both expected and natural.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <FaShieldAlt className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Safe Environment</h3>
                <p className="text-gray-500">
                  Students enjoy school in a happy, safe and secure environment.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <FaUsers className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Community</h3>
                <p className="text-gray-500">
                  Vibrant student community with diverse opportunities to grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to join our community?</span>
            <span className="block text-yellow-300">We'd love to welcome you.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Contact Admissions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;