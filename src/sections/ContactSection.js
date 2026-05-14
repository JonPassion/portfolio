import React from 'react';
import { Mail } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';


const socialLinks = [
  
  { name: "Twitter", url: "https://twitter.com/", icon: Twitter },
  { name: "Facebook", url: "https://www.facebook.com/justcodeitnow", icon: Facebook },
  { name: "Email", url: "mailto:jonipassion@gmail.com", icon: Mail }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl mb-4">
            <img
              src="/profile.jpg"
              alt="JONI"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Joni Passion</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Full-Stack Developer | MERN Stack | AI & Web Apps
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900 transition duration-300"
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 text-left p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-2xl">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-200"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-200"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
            <textarea
              id="message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-200"
              placeholder="How can I help you?"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transform hover:scale-[1.01] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
