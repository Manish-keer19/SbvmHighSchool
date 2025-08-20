



import { Link } from "react-router";
import schoollogo from "../public/school.jpg";
import Navbar from "./Navbar";
import priciple from "./assets/priciple.jpg"

import Footer from "./Footter";


function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-7xl lg:w-full lg:pb-28 xl:pb-32">
                        <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex flex-col lg:flex-row items-center">
                                {/* Left side - School info */}
                                <div className="sm:text-center lg:text-left lg:w-1/2">
                                    <img
                                        src={schoollogo}
                                        alt="School Logo"
                                        className="h-24 mx-auto lg:mx-0 mb-6 rounded-lg shadow-xl"
                                    />
                                    <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                                        <span className="block">SARASWATI BAL</span>
                                        <span className="block text-yellow-300"> VINAY VIDHYA  MANDIR</span>
                                    </h1>
                                    <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                        Shaping futures through excellence in education and values
                                    </p>
                                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                        <div className="rounded-md shadow">
                                            <Link to={"/contact"} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                                                Admissions
                                            </Link>
                                        </div>
                                        <div className="mt-3 sm:mt-0 sm:ml-3">
                                            <Link to={"/contact"} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10">
                                                Learn more
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Right side - Principal's image and details */}
                                <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-12 flex justify-center">
                                    <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md w-full">
                                        <img
                                            src={priciple}
                                            alt="Principal"
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900">Principal's Message</h3>
                                            <p className="mt-2 text-gray-600">
                                                "Education is the most powerful weapon which you can use to change the world."
                                            </p>
                                            <div className="mt-4 flex items-center">
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">Mr. Ajay Bijawat</p>
                                                    <p className="text-sm text-blue-600">Principal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rest of the sections remain the same */}
            {/* Mission Section */}
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Vision</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Preparing Leaders of Tomorrow
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            SARASWATI BAL VINAY MANDIR HIGH SCHOOL is an institution conceived to impart the best in education along with development of values and personality traits.
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Holistic Development</h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            Our pedagogy develops life skills like logic, reasoning and creativity in all students.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Global Outlook</h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            We prepare students to be confident, creative and have a global perspective.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="bg-blue-800">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        <span className="block">Ready to join our community?</span>
                        <span className="block text-yellow-300">Enroll today.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <Link to={"/contact"} className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Location */}
            <div className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center mb-8">
                        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Location</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Visit Our Campus
                        </p>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.035875469252!2d76.0551461!3d22.8329139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631f4e74a7adc9%3A0xfa4609135ededc14!2sSaraswati%20Bal%20Vinay%20Mandir%20High%20School%2C%20Tigariya%20Goga%2C%20Madhya%20Pradesh%20455111!5e0!3m2!1sen!2sin!4v1692455891234!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            // allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;