import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ['Full Stack Developer', 'Frontend Developer', 'AI Engineer', 'DevOps Engineer', 'UI/UX Designer'];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 1500;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (charIndex < currentRole.length) {
        // Still typing
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else if (charIndex === currentRole.length) {
        // Done typing, wait before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        // Done deleting, move to next role
        setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 100);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex, isDeleting]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  // Code icon animation positioning
  const codeIcons = [
    { x: '10%', y: '20%', delay: 0 },
    { x: '85%', y: '30%', delay: 0.2 },
    { x: '15%', y: '70%', delay: 0.4 },
    { x: '80%', y: '60%', delay: 0.3 },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-dark-900 via-dark-800 to-dark-900 overflow-x-hidden relative" style={{ paddingTop: '100px' }}>
      {/* Animated background code icons */}
      {codeIcons.map((icon, idx) => (
        <motion.div
          key={idx}
          className="absolute text-cyan-400 text-2xl opacity-30"
          style={{ left: icon.x, top: icon.y }}
          animate={{ y: [0, 15, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, delay: icon.delay, repeat: Infinity }}
        >
          {'</>'}
        </motion.div>
      ))}

      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 flex items-center justify-center" style={{ minHeight: 'calc(100vh - 100px)' }}>
        <div className="w-full">
          <motion.div
            className="grid md:grid-cols-2 gap-8 lg:gap-16 2xl:gap-24 w-full items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Side - Text Content */}
            <motion.div className="space-y-3 lg:space-y-4 2xl:space-y-5">
              {/* Greeting */}
              <motion.div variants={itemVariants}>
                <p className="text-cyan-400 text-lg md:text-xl lg:text-2xl xl:text-3xl font-light tracking-wide">
                  Hello.
                </p>
              </motion.div>

              {/* Name */}
              <motion.div variants={itemVariants}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  I'm Abhishek <> </>
                  <span className="text-cyan-400">Kurhade</span>
                </h1>
              </motion.div>

              {/* Title with Typing Animation */}
              <motion.div variants={itemVariants}>
                <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-cyan-400 min-h-[1.5em]">
                  {displayText}
                  <motion.span
                    className="inline-block w-0.5 lg:w-1 bg-cyan-400 ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  />
                </h2>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 pt-2 lg:pt-3"
              >
                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 lg:px-8 py-2 lg:py-3 bg-cyan-400 hover:bg-cyan-500 text-black font-bold rounded-full transition-all duration-300 text-center text-sm lg:text-base"
                >
                  Got a project?
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 lg:px-8 py-2 lg:py-3 border-2 border-cyan-400 text-white hover:bg-cyan-400 hover:text-dark-900 font-bold rounded-full transition-all duration-300 text-center text-sm lg:text-base"
                >
                  My Resume
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Side - Profile Image */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center md:justify-center px-4 md:px-0 md:-ml-6 lg:-ml-8"
            >
              <motion.div
                className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Outer glow */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-linear-to-br from-cyan-400 to-orange-500 p-1"
                >
                  <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center overflow-hidden border-4 lg:border-6 border-orange-500">
                    {/* Profile Image Placeholder */}
                    <div className="text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                        <img src="image/photo.png" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </motion.div>

                {/* Floating code icons around image */}
                {[
                  { angle: 0, x: -450, y: 50 },
                  { angle: 0, x: -100, y: -340 },
                  { angle: 0, x: -500, y: -200 },
                  { angle: 0, x: 290, y: 200},
                  { angle: 0, x: -790, y: 200},
                 
                ].map((pos) => (
                  <motion.div
                    key={pos.angle}
                    className="absolute text-cyan-400 text-2xl lg:text-3xl"
                    style={{
                      left: `calc(50% + ${pos.x}px)`,
                      top: `calc(50% + ${pos.y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {'</>'}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
