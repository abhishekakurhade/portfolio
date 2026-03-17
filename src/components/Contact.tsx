import { motion } from 'framer-motion';

export default function Contact() {
  // PDF file is in public/image folder
  const resumePath = '/image/Abhishek  Resume.pdf';

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 pt-20 pb-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Page Title */}
        <motion.div
          className="mb-12 lg:mb-16 2xl:mb-20 text-center mt-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl lg:text-4xl 2xl:text-5xl">📄</span>
            <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-white">My Resume</h2>
          </div>
          <div className="w-16 lg:w-24 2xl:w-28 h-1 bg-gradient-to-r from-cyan-400 to-orange-500 rounded mx-auto"></div>
        </motion.div>

        {/* Resume Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-dark-800 bg-opacity-50 backdrop-blur-sm rounded-lg border border-cyan-400 border-opacity-20 p-8 lg:p-12 2xl:p-16"
        >
          {/* Download Button */}
          <div className="flex flex-col md:flex-row justify-center mb-8 gap-2 md:gap-4">
            <motion.a
              href={resumePath}
              download="Abhishek_Kurhade_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 md:px-8 py-2 md:py-3 bg-cyan-400 hover:bg-cyan-500 text-black font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 text-xs md:text-base"
            >
              <span>⬇️</span>
              Download Resume
            </motion.a>
            <motion.a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 md:px-8 py-2 md:py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 text-xs md:text-base"
            >
              <span>👁️</span>
              View in Browser
            </motion.a>
          </div>

          {/* PDF Viewer */}
          <div className="flex justify-center">
            <div className="w-full rounded-lg border border-gray-700 overflow-hidden bg-dark-900" style={{ maxHeight: '900px' }}>
              <object
                data={resumePath}
                type="application/pdf"
                style={{
                  width: '100%',
                  height: '900px',
                  border: 'none'
                }}
              >
                <p>Your browser does not support PDF viewing.</p>
                <motion.a
                  href={resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  Click here to open PDF
                </motion.a>
              </object>
            </div>
          </div>

          {/* Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 p-6 lg:p-8 bg-gradient-to-r from-cyan-400/10 to-orange-500/10 border border-cyan-400/30 rounded-lg text-center"
          >
           
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
     