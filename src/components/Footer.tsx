const Footer = () => {
    return (
      <footer className="w-[55%] mx-auto flex bg-white-800 text-white py-6 mt-0">
        <div className="w-[90%] mx-auto flex justify-center space-x-4">
        <a
  href="https://github.com/saky-semicolon/Retinal-Layer-Segmentation"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-full flex items-center"
>
  <span className="material-icons-outlined mr-2">code</span> {/* icon for Code */}
  GitHub
</a>

<a
  href="#"
  onClick={() => alert("Not Published Yet!\nPlease try again later.")}
  className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-full flex items-center"
>
  <span className="material-icons-outlined mr-2">description</span> {/* icon for Paper */}
  Paper
</a>
        </div>
      </footer>
    );
};

export default Footer;
