import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState<any>(null);

  const caseStudies = [
    {
      id: 7,
      title: 'HVAC Website Remodel',
      client: 'Gaitz HVAC',
      image: '/GaitzAC.png',
      challenge: 'Complete website redesign and SEO optimization for local HVAC business',
      results: 'Brought page to many new eyes in the Houston area',
      technologies: ['React', 'Vite', 'SEO Optimization', 'Local Search'],
      overview:
        'Complete remodel, redesign and publishing of website for Gaitz HVAC, a local Houston HVAC service provider. The project focused on improving local search visibility and creating a professional online presence.',
      approach:
        'Built with modern React and Vite framework, implemented comprehensive SEO strategies for local search optimization, and created a user-friendly design that showcases services and builds trust with potential customers.',
      impact:
        'Successfully increased local visibility and brought the business to many new potential customers in the Houston area through improved search rankings and professional web presence.',
      testimonial: {
        text: 'Brought my page to so many new eyes in the Houston area!',
        author: 'Tonya Gaitz, Gaitz HVAC',
      },
    },
    {
      id: 2,
      title: 'Data Migration/Remodel Relationship Mapping',
      client: 'Kodiak Gas Services',
      image:
        'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Consolidating two databases into one new ERP system after an acquisition',
      results: 'Successfully launched new ERP',
      technologies: ['IFS', 'SQL', 'Excel'],
      overview:
        'Helped bring a new ERP to a public company. Mostly involved with the Accounting Information Systems side of the project.',
      approach:
        'Led the data migration and relationship mapping process during a complex ERP implementation following a corporate acquisition. Worked closely with accounting teams to ensure data integrity and proper system configuration.',
      impact:
        'Successfully consolidated two separate database systems into a unified ERP platform, enabling streamlined operations and improved financial reporting capabilities for the newly merged organization.',
      testimonial: {
        text: 'Charles played a crucial role in our ERP implementation, ensuring our data migration was seamless and our accounting systems were properly configured.',
        author: 'Project Manager, Kodiak Gas Services',
      },
    },
    {
      id: 3,
      title: 'My Texas Community Finder',
      client: 'Personal Project',
      image: '/Community finder copy.png',
      challenge:
        'Maintaining a large database to host the infromation for thousands of communities in Texas, developing interactive maps and creating the option for detailed reports all posed challanges in creating this website.',
      results: 'Successfully launched the website',
      technologies: ['CSS', 'SQL', 'Bolt', 'SVG'],
      overview:
        'Developed a tool for young couples, relocated workers and curious Texas residents to explore communities that are best tailored to their needs.',
      approach:
        'Built a comprehensive database-driven platform using modern web technologies to provide interactive community exploration tools with detailed filtering and mapping capabilities.',
      impact:
        'Successfully created a valuable resource for Texas residents to make informed decisions about where to live, helping families find communities that match their specific needs and preferences.',
      testimonial: {
        text: 'This has helped me find the schools and community I want to raise my family in',
        author: 'Hannah Darwoola',
      },
    },
  ];

  return (
    <section id="work" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Recent <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how I've helped businesses transform their digital presence and achieve measurable
            growth through modern web development and strategic optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="group relative overflow-hidden rounded-xl bg-slate-800 border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-orange-500 font-semibold mb-3">{study.client}</p>
                <p className="text-gray-300 mb-4 line-clamp-2">{study.challenge}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {study.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-700 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="text-sm text-gray-400 mb-4">
                  <strong className="text-green-400">Results:</strong> {study.results}
                </div>
              </div>

              <div className="absolute inset-0 bg-slate-900/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => setSelectedCase(study)}
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2"
                >
                  View Case Study
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCase && (
        <CaseStudyModal caseStudy={selectedCase} onClose={() => setSelectedCase(null)} />
      )}
    </section>
  );
};

export default CaseStudies;
