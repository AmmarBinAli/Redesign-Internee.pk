import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone } from "react-icons/fa";
import logo from "../assets/logo.png"; 

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-16 pb-10 px-6 md:px-20">

      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Subscribe to Newsletter</h3>
          <p className="text-sm opacity-80">Subscribe to our newsletter and get exclusive insights, industry trends.</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-full outline-none border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full shadow-md transition font-medium text-sm">
            Subscribe
          </button>
        </div>
      </div>

      <hr className="border-gray-300 dark:border-gray-700 my-6" />

      
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        
        <div>
          <img src={logo} alt="Internee.PK logo" className="h-12 mb-4" />
          <p className="text-sm leading-relaxed mb-4 opacity-80">
            The ultimate platform designed to turbocharge the IT sector in Pakistan.
          </p>
          <div className="flex items-center text-sm mb-4 gap-2">
            <FaPhone className="text-green-500" />
            <span>+92 312 *******</span>
          </div>
          <div className="flex gap-3 text-lg mt-4">
            <a href="https://www.facebook.com/people/Interneepk/100093222249320/" className="hover:text-green-600">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/interneepk" className="hover:text-green-600">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/company/internee-pk/?originalSubdomain=pk" className="hover:text-green-600">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/internee.pk/" className="hover:text-green-600">
              <FaInstagram />
            </a>
          </div>
        </div>

        
        <div>
          <h4 className="font-semibold text-gray-700 dark:text-white mb-4 text-lg">Company</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><a href="https://www.internee.pk/" className="hover:text-green-600 transition">Home</a></li>
            <li><a href="https://www.internee.pk/studentambassadors" className="hover:text-green-600 transition">Student Ambassador</a></li>
            <li><a href="https://www.internee.pk/userprofile" className="hover:text-green-600 transition">Interns Profiles</a></li>
            <li><a href="https://www.internee.pk/about" className="hover:text-green-600 transition">About Us</a></li>
          </ul>
        </div>

        
        <div>
          <h4 className="font-semibold text-gray-700 dark:text-white mb-4 text-lg">Resources</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><a href="#" className="hover:text-green-600 transition">Community</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Certification</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Scholarships</a></li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-300 dark:border-gray-700 my-6" />

      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400 gap-3">
        <p>Copyright &copy; 2025 internee.pk</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-green-600">Terms of Use</a>
          <a href="#" className="hover:text-green-600">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
