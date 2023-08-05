
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Static section with links */}
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white mr-4">
              T&C
            </a>
            <a href="#" className="text-gray-400 hover:text-white mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact Us
            </a>
          </div>
          {/* Other footer content */}
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Watch Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
