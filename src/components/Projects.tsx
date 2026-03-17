import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Movie Recommender',
      description: 'The Movie Recommendation System is a Python-based app built with Streamlit, Pandas, and Scikit-learn that suggests personalized movies to users based on their preferences.',
      image: 'image/recommender.jpg',
      tags: ['Python', 'Streamlit', 'ML'],
      github: 'https://github.com/abhishekakurhade/movie-recommender',
      live: 'https://movie-recommender-abhishekkurhade.streamlit.app/',
    },
    {
      id: 2,
      title: 'Sunshine Solar Website',
      description: 'Sunshine Solar is a startup specializing in solar panel installation, offering a modern website built with PHP, MySQL, and EmailJS API to showcase services and connect with customers.',
      image: 'image/sunshine_solar.png',
      tags: ['PHP', 'MySQL', 'EmailJS'],
      github: 'https://github.com/abhishekakurhade/Sunshine-solar',
      live: 'http://sunshinesolar.kesug.com/',
    },
    {
      id: 3,
      title: 'Kaziranga website',
      description: 'This project is a frontend-based website developed to deliver an engaging and visually appealing presentation of Kaziranga.',
      image: 'image/kaziranga-website.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/abhishekakurhade/Kaziranga_forest-Website',
      
    },
    {
      id: 4,
      title: 'HealthAI Bot',
      description: 'The HealthAI Chatbot is an AI-powered healthcare assistant built using OpenAI models, deployed on Streamlit.It enables real-time medical queries and conversational support.',
      image: 'image/healthai.png',
      tags: ['OpenAI', 'Streamlit', 'AI'],
      github: 'https://github.com/abhishekakurhade/HealthAI-Bot',
      live: 'https://healthai-bot-abhishekakurhade.streamlit.app/',
    },
    {
      id: 5,
      title: 'Gold Price Prediction',
      description: 'Machine learning application for predicting gold prices using historical data and advanced ML algorithms.',
      image: 'image/gold price .png',
      tags: ['Python', 'ML', 'Data Science'],
      github: 'https://github.com/abhishekakurhade/Gold-prediction',
      live: 'https://gold-prediction-i5r1.onrender.com/predict',
    },
    {
      id: 6,
      title: 'Campus Placement Selection',
      description: 'Smart system for campus placement prediction using data analysis and machine learning models.',
      image: 'image/campus placement.png',
      tags: ['Python', 'ML', 'Analytics'],
      
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 pt-20 pb-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Page Title */}
        <motion.div
          className="mb-16 lg:mb-20 2xl:mb-24 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl 2xl:text-7xl font-bold text-cyan-400 mb-4 lg:mb-6">My Projects</h2>
          <p className="text-xs lg:text-xl 2xl:text-2xl text-gray-400 max-w-3xl mx-auto text-justify">
            Explore some of my recent work and the technologies I've used to build amazing digital solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8 2xl:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative overflow-hidden rounded-lg bg-dark-800 border border-gray-800 hover:border-cyan-400 transition-all duration-300"
              whileHover={{ translateY: -8 }}
            >
              {/* Project Image Background */}
              <div className="relative h-48 bg-gradient-to-br from-cyan-400/20 via-dark-800 to-orange-500/20 flex items-center justify-center overflow-hidden border-b border-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-cyan-400/30 to-transparent pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-dark-900 text-cyan-400 rounded-full border border-cyan-400/30 hover:border-cyan-400 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    className="flex-1 text-center px-3 py-2 text-white hover:bg-cyan-400 hover:text-black font-semibold text-sm rounded border border-cyan-400/50 hover:border-cyan-400 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="flex-1 text-center px-3 py-2 bg-cyan-400 text-black hover:bg-cyan-500 font-semibold text-sm rounded transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
