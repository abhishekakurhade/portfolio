import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function Skills() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const skillsByCategory = {
    'Frontend': [
      { name: 'React', proficiency: 95, category: 'Frontend' },
      { name: 'TypeScript', proficiency: 90, category: 'Frontend' },
      { name: 'Tailwind CSS', proficiency: 92, category: 'Frontend' },
      { name: 'JavaScript', proficiency: 95, category: 'Frontend' },
    ],
    'Backend': [
      { name: 'Node.js', proficiency: 88, category: 'Backend' },
      { name: 'Express', proficiency: 85, category: 'Backend' },
      { name: 'MongoDB', proficiency: 87, category: 'Backend' },
      { name: 'PostgreSQL', proficiency: 83, category: 'Backend' },
    ],
    'Tools & Others': [
      { name: 'Git', proficiency: 92, category: 'Tools & Others' },
      { name: 'Docker', proficiency: 80, category: 'Tools & Others' },
      { name: 'REST APIs', proficiency: 90, category: 'Tools & Others' },
      { name: 'Figma', proficiency: 85, category: 'Tools & Others' },
    ],
  };

  const skillCategories = Object.entries(skillsByCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 pt-20 pb-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16" ref={ref}>
        {/* Page Title */}
        <motion.div
          className="mb-16 lg:mb-20 2xl:mb-24 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl 2xl:text-7xl font-bold text-white mb-4 lg:mb-6">Skills & Expertise</h2>
          <div className="w-20 lg:w-28 2xl:w-32 h-1 lg:h-2 2xl:h-3 bg-gradient-to-r from-cyan-400 to-orange-500 rounded mx-auto mb-4 lg:mb-6"></div>
          <p className="text-lg lg:text-xl 2xl:text-2xl text-gray-400">
            A comprehensive overview of my technical proficiency and experience
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 2xl:gap-12 mb-16 lg:mb-20 2xl:mb-24">
          {skillCategories.map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: categoryIndex * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-dark-800 bg-opacity-50 backdrop-blur-sm p-8 lg:p-10 2xl:p-12 rounded-lg border border-cyan-400 border-opacity-30 hover:border-opacity-100 transition-all duration-300"
            >
              <h3 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold text-cyan-400 mb-8 pb-4 border-b border-cyan-400/30">
                {category}
              </h3>

              <div className="space-y-6">
                {skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-300 text-sm lg:text-base 2xl:text-lg">{skill.name}</span>
                      <motion.span
                        className="text-cyan-400 font-bold text-sm lg:text-base 2xl:text-lg"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: skillIndex * 0.1 + 0.3 }}
                      >
                        {skill.proficiency}%
                      </motion.span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2 bg-dark-900 rounded-full overflow-hidden border border-cyan-400/20">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 to-orange-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                        transition={{ delay: skillIndex * 0.1 + 0.2, duration: 0.8, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          className="mt-16 lg:mt-20 2xl:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold text-white mb-8 lg:mb-12 2xl:mb-16">Other Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-6 2xl:gap-8">
            {['Responsive Design', 'Web Performance', 'SEO Optimization', 'UX/UI Design', 'Agile Methodology', 'Problem Solving', 'Team Collaboration', 'Code Review'].map((competency, index) => (
              <motion.div
                key={competency}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, borderColor: '#00D9FF' }}
                className="bg-dark-800 bg-opacity-50 p-4 rounded-lg border border-gray-700 hover:border-cyan-400 hover:bg-dark-700 transition-all text-center text-gray-300 font-medium cursor-pointer group"
              >
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                  className="inline-block group-hover:text-cyan-400 transition-colors"
                >
                  {competency}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
