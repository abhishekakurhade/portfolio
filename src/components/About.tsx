import { motion } from 'framer-motion';

export default function About() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
      },
    }),
  };

  const interests = [
    { icon: '💻', label: 'Frontend Development' },
    { icon: '💻⚙️', label: 'Backend Development' },
    { icon: '🤖', label: 'Artificial Intelligence' },
    { icon: '📊', label: 'Machine Learning' },
    { icon: '♾️', label: 'DevOps' },
  ];

  const skills = [
    { icon: '🐳', label: 'Docker' },
    { icon: '📦', label: 'Git' },
    { icon: '☸️', label: 'Kubernetes' },
    { icon: '🔄', label: 'Jenkins' },
    { icon: '🐧', label: 'Linux' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 pt-20 pb-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Page Title */}
        <motion.div
          className="mb-4 lg:mb-6 2xl:mb-5 mt-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl lg:text-4xl 2xl:text-5xl">👤</span>
            <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-white">About Me</h2>
          </div>
          <div className="w-16 lg:w-24 2xl:w-28 h-1 bg-gradient-to-r from-cyan-400 to-orange-500 rounded"></div>
        </motion.div>

        {/* About Content */}
        <motion.div
          custom={0}
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-dark-800 bg-opacity-50 backdrop-blur-sm p-6 lg:p-8 2xl:p-10 rounded-lg border border-cyan-400 border-opacity-20 mb-12 lg:mb-16 2xl:mb-20"
        >
          <p className="text-sm lg:text-base 2xl:text-lg text-gray-300 leading-relaxed mb-4 lg:mb-6 2xl:mb-8 text-justify">
            I'm Abhishek Kurhade, a student at Dr. Babasaheb Ambedkar Technological University pursuing a B.Tech in Computer Science and Engineering (AI & ML). I am a dedicated and passionate developer with a deep love for Cloud, Software Engineering, Machine Learning, Artificial Intelligence, Web Development, and DevOps.
          </p> <br />
          <p className="text-sm lg:text-base 2xl:text-lg text-gray-300 leading-relaxed text-justify">
            I like developing scalable, effective, and significant solutions that tackle real-world problems, and I have practical experience developing web applications and AI-driven models. I can bridge the gap between innovation and execution thanks to my skill set, which includes software design, deployment procedures, and frontend and backend development. Curiosity, lifelong learning, and the goal of using technology to create more intelligent, dependable, and future-ready systems are what motivate me.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 lg:gap-4 justify-center mb-12 lg:mb-16 2xl:mb-20"
        >
          {[
            { icon: '🐙', label: 'GitHub', href: '#' },
            { icon: '💼', label: 'LinkedIn', href: '#' },
            { icon: '✉️', label: 'Mail', href: '#' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-white text-black font-semibold rounded-full hover:bg-cyan-500 transition-all duration-300 text-sm"
            >
              <span>{social.icon}</span>
              {social.label}
            </motion.a>
          ))}
        </motion.div>

        {/* My Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-16 2xl:mb-20"
        >
          <h3 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold text-white mb-6 lg:mb-8 2xl:mb-10">My Interests</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-5 gap-3 lg:gap-4 2xl:gap-5">
            {interests.map((interest, idx) => (
              <motion.div
                key={interest.label}
                custom={idx}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ translateY: -5, scale: 1.03 }}
                className="bg-dark-800 bg-opacity-50 p-4 rounded-lg border border-cyan-400 border-opacity-20 hover:border-cyan-400 hover:border-opacity-100 text-center transition-all duration-300 group cursor-pointer"
              >
                <motion.div
                  className="text-3xl mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {interest.icon}
                </motion.div>
                <p className="text-gray-300 font-semibold group-hover:text-cyan-400 transition-colors text-xs lg:text-sm">
                  {interest.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold text-white mb-6 lg:mb-8 2xl:mb-10">Technical Proficiency</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-5 gap-3 lg:gap-4 2xl:gap-5">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.label}
                custom={idx}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ translateY: -5, scale: 1.03 }}
                className="bg-dark-800 bg-opacity-50 p-4 rounded-lg border border-gray-700 hover:border-cyan-400 text-center transition-all duration-300 group cursor-pointer"
              >
                <motion.div
                  className="text-3xl mb-2"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {skill.icon}
                </motion.div>
                <p className="text-gray-300 font-semibold group-hover:text-cyan-400 transition-colors text-xs lg:text-sm">
                  {skill.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
