import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, FileText, Video, Database, Code, Zap, TrendingUp, Search, Smartphone, Award, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Data Science Certification",
      subtitle: "Hugging Face",
      icon: Award,
      color: "from-yellow-500 to-orange-500",
      type: "certification",
      description: "Completed comprehensive data science training with Hugging Face, mastering transformers and NLP techniques.",
      links: [
        {
            label: "Data Science Hugging Face.pdf",
            url: "https://drive.google.com/file/d/1PxlowBaUeSHjlz1PZtAJrB3L3UVAKMwr/view?usp=sharing"
        }
      ]    
    },
    {
      id: 2,
      title: "Introduction Video",
      subtitle: "My AI Journey",
      icon: Video,
      color: "from-purple-500 to-pink-500",
      type: "video",
      description: "Watch my introduction and learn about my passion for AI and technology.",
      links: [{ type: "video", label: "Watch Video", url: "https://drive.google.com/file/d/1ZYFxtztWjpveJQQWtblbR1sMYPEpvhrt/view?usp=sharing" }]
    },
    {
      id: 3,
      title: "Vibe Coding Certification",
      subtitle: "AI-Powered Development",
      icon: Award,
      color: "from-green-500 to-teal-500",
      type: "certification",
      description: "Certified in modern AI-assisted coding practices and rapid prototyping techniques.",
      links: [
        {
            label: "Vibe Coding With Google.pdf",
            url: "https://drive.google.com/file/d/1geQd07lMWnjFkyFk2e-Gfux7wOcnBBDM/view?usp=sharing"
        }
      ]
    },
    {
      id: 4,
      title: "Automation Arena",
      subtitle: "n8n Workflow Automation",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      type: "project",
      description: "Automated repetitive AI-related tasks and content posting using n8n, streamlining workflows and boosting productivity.",
      tech: ["n8n", "API Integration", "Workflow Automation"],
      links: [
        { type: "document", label: "Project Documentation", url: "https://drive.google.com/file/d/1iyFoFgy1tSxiieLFNWtN2SFXfIPNS3Dr/view?usp=sharing" },
        { type: "video", label: "Demo Video", url: "https://drive.google.com/file/d/1Fjw4lVtAImZaE4zhBoXOz2-xSEYgVil8/view?usp=sharing" }
      ]
    },
    {
      id: 5,
      title: "AI Agent",
      subtitle: "Content Repurposing Engine",
      icon: Code,
      color: "from-indigo-500 to-purple-500",
      type: "project",
      description: "Built an AI agent that scans existing content (blogs, articles, videos) and intelligently repurposes it into summaries, LinkedIn posts, and more.",
      tech: ["AI/ML", "NLP", "Content Generation"],
      links: [
        { type: "document", label: "Technical Report", url: "https://drive.google.com/file/d/1qZ8E1wbhlEK2Cfz-HxjeUgtWuxi81Dc8/view?usp=sharing" },
        { type: "video", label: "Watch Demo", url: "https://drive.google.com/file/d/1gpmlXqb2s05aF8ueXazEHAl6w0vwKhjZ/view?usp=sharing" }
      ]
    },
    {
      id: 6,
      title: "AI Influencer Tracker",
      subtitle: "Global Dataset Analysis",
      icon: TrendingUp,
      color: "from-pink-500 to-rose-500",
      type: "project",
      description: "Analyzed a comprehensive dataset of 60+ AI influencers across platforms. Discovered Instagram's dominance (60% fashion/lifestyle focus), emerging niches in environmental activism and VTubers, and key players like Lu do Magalu (8.1M followers).",
      tech: ["Data Analysis", "Python", "Visualization"],
      insights: [
        "Instagram hosts majority of AI influencers",
        "Fashion/Lifestyle dominates ~60% of content",
        "Emerging niches: Environmental activism, VTubers, AI news anchors",
        "Top performers: Lu do Magalu (8.1M), Nobody Sausage (15M TikTok)"
      ],
      links: [
        { type: "document", label: "Tools Report", url: "https://drive.google.com/file/d/1pr0RkN_k2k9Z-37CDqVL8Ijua_Dx0i9R/view?usp=sharing" },
        { type: "document", label: "Platform Analysis", url: "https://drive.google.com/file/d/11SzDdf9kl8ox4GkQDjcLU-AoNIPgQYsQ/view?usp=sharing" },
        { type: "dataset", label: "View Dataset", url: "https://drive.google.com/file/d/1ODZ3OzOVIJvsygekLq8v6LgyIOL7uk2J/view?usp=sharing" }
      ]
    },
    {
      id: 7,
      title: "Stack Showdown",
      subtitle: "Framework Comparison",
      icon: Database,
      color: "from-orange-500 to-red-500",
      type: "project",
      description: "Comprehensive comparison of MERN, Next.js, Remix, and Astro stacks for building AI-powered web applications. Evaluated performance, developer experience, and AI integration capabilities.",
      tech: ["MERN", "Next.js", "Remix", "Astro"],
      links: [
        { type: "document", label: "Comparison Report", url: "https://drive.google.com/file/d/1gKf-7z3n0ARloM5HOrepqnISSOg_wbEr/view?usp=sharing" },
        { type: "document", label: "Final Report", url: "https://drive.google.com/file/d/1TB14ibr2fAaAYdL54gUKEYP0sKQDySIq/view?usp=sharing" }
      ]
    },
    {
      id: 8,
      title: "AI Content Forge",
      subtitle: "SEO Analysis Engine",
      icon: Search,
      color: "from-cyan-500 to-blue-500",
      type: "project",
      description: "Conducted in-depth SEO-driven content analysis for AI-themed articles. Evaluated keyword optimization, readability scores, and performance metrics.",
      tech: ["SEO", "Content Analysis", "Data Visualization"],
      links: [
        { type: "document", label: "SEO Analysis Report", url: "https://drive.google.com/file/d/1v6lq6AP5oT6GrbyVU3mhmDy3vfv3y5wO/view?usp=sharing" }
      ]
    },
    {
      id: 9,
      title: "Vibe Coding Sprint",
      subtitle: "AI Flashcards Generator",
      icon: Smartphone,
      color: "from-violet-500 to-purple-500",
      type: "project",
      description: "Built a fully functional mobile app prototype using AI-powered coding tools. The app generates intelligent flashcards for studying and learning.",
      tech: ["Mobile Development", "AI Integration", "Rapid Prototyping"],
      links: [
        { type: "video", label: "App Demo", url: "https://drive.google.com/file/d/1LUX62NmTsF7lw6xNaKDBcpJJgLcMj1G7/view?usp=sharing" },
        { type: "document", label: "Document with links", url: "https://drive.google.com/file/d/1838J8hHVAllZL6oYrU_9OPDUPzhg-67-/view?usp=sharing" },
        { type: "document", label: "App links", url: "https://ai-flashcard-generator-pi.vercel.app/" }
      ]
    },
    {
      id: 10,
      title: "Viral Replicator",
      subtitle: "AI Agent to build trending Linkedin Posts",
      icon: Smartphone,
      color: "from-violet-500 to-purple-500",
      type: "project",
      description: "Built a functioning AI agent, which can make posts for Linkedin and upload them on your linkedin Page.",
      tech: ["Gemini AI", "AI Integration", "Streamlit", "LinkedIn"],
      links: [
        { type: "video", label: "App Document", url: "https://drive.google.com/file/d/1E_nBEXLLgfV8m8LtqV3Tm4JCtNwjfd1f/view?usp=sharing" },
        { type: "document", label: "Ready to Upload Post", url: "https://drive.google.com/file/d/182iKGNvQwO94b4VO20HMHypzmWuQE1JZ/view?usp=sharing" }
      ]
    }
  ];

  const tools = [
    { name: "n8n", category: "Automation" },
    { name: "Perplexity AI", category: "Research" },
    { name: "Gemini AI", category: "AI Tools" },
    { name: "Claude AI", category: "AI Tools" },
    { name: "Hugging Face", category: "ML/AI" },
    { name: "React", category: "Frontend" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Next.js", category: "Framework" },
    { name: "Python", category: "Programming" },
    { name: "Data Visualization", category: "Analytics" },
    { name: "Bolt", category: "Vibe Coding" }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={onClose}>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl" onClick={e => e.stopPropagation()}>
          <div className="sticky top-0 bg-gradient-to-br from-gray-900 to-gray-800 border-b border-gray-700 p-6 flex items-start justify-between z-10">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color}`}>
                <project.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400">{project.subtitle}</p>
              </div>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="p-6 space-y-6">
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
            
            {project.insights && (
              <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-3">Key Insights</h4>
                <ul className="space-y-2">
                  {project.insights.map((insight, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▸</span>
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.tech && (
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-cyan-400 border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {project.links && project.links.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Resources</h4>
                <div className="space-y-2">
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      className="flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all group"
                    >
                      {link.type === 'video' && <Video className="w-5 h-5 text-cyan-400" />}
                      {link.type === 'document' && <FileText className="w-5 h-5 text-cyan-400" />}
                      {link.type === 'dataset' && <Database className="w-5 h-5 text-cyan-400" />}
                      <span className="text-gray-300 group-hover:text-white transition-colors">{link.label}</span>
                      <ExternalLink className="w-4 h-4 text-gray-500 ml-auto group-hover:text-cyan-400 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-lg border-b border-gray-800 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center font-bold text-lg">
                BB
              </div>
              <span className="font-bold text-xl">Brian Biju</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {['home', 'projects', 'tools', 'about'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-gray-800">
            <div className="px-4 py-4 space-y-3">
              {['home', 'projects', 'tools', 'about'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 capitalize text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block animate-fadeIn">
            <div className="inline-block animate-fadeIn">
                <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
                    Brian Biju
                </h1>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-fadeIn">
            AI Internship Portfolio
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto animate-fadeIn">
            Showcasing my journey through AI innovation, automation, and data-driven insights at ORANTS AI
          </p>
          
          <div className="flex items-center justify-center gap-4 animate-fadeIn">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 border border-gray-700 rounded-full font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all"
            >
              Contact Me
            </button>
          </div>

          <button
            onClick={() => scrollToSection('projects')}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects & Achievements</h2>
            <p className="text-gray-400 text-lg">Explore my internship journey through interactive project cards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
                onClick={() => setSelectedProject(project)}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`inline-block p-3 rounded-xl bg-gradient-to-br ${project.color} mb-4`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.subtitle}</p>
                
                <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                  {project.description}
                </p>

                {project.tech && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 2).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-700/50 rounded text-xs text-cyan-400">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 2 && (
                      <span className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-400">
                        +{project.tech.length - 2}
                      </span>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between text-sm">
                  <span className="text-cyan-400 group-hover:underline">View Details</span>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="min-h-screen py-20 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack & Tools</h2>
            <p className="text-gray-400 text-lg">Technologies and frameworks I've mastered during my internship</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all hover:scale-105 text-center"
              >
                <div className="text-lg font-semibold text-white mb-1">{tool.name}</div>
                <div className="text-sm text-gray-400">{tool.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 px-4 flex items-center">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Connect</h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I'm Brian Biju Kunnakadu, a passionate AI enthusiast and developer. Through my internship at ORANTS AI, 
            I've worked on cutting-edge projects involving AI automation, data analysis, and content generation.
          </p>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://www.linkedin.com/in/brian-biju-53b128229/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/br1xn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full hover:shadow-lg hover:shadow-gray-500/50 transition-all hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:brianbiju@gmail.com"
              className="p-4 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2025 Brian Biju Kunnakadu. Built with React & Tailwind CSS.</p>
          <p className="text-sm mt-2">ORANTS AI Internship Portfolio</p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}