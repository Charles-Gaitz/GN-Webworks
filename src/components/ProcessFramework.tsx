import React, { useEffect, useRef } from 'react';
import { Search, Palette, Code, Rocket } from 'lucide-react';

const ProcessFramework = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.process-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const processes = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'Deep dive into your business goals, target audience, and technical requirements.',
      deliverables: ['Project roadmap', 'Technical specifications', 'User personas', 'Feature prioritization']
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Create intuitive user experiences with modern design principles and accessibility.',
      deliverables: ['Wireframes', 'UI/UX design', 'Design system', 'Interactive prototypes']
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Build scalable, performant applications using cutting-edge technologies.',
      deliverables: ['Clean codebase', 'API integration', 'Testing suite', 'Performance optimization']
    },
    {
      icon: Rocket,
      title: 'Deployment',
      description: 'Launch your application with proper monitoring, security, and ongoing support.',
      deliverables: ['Production deployment', 'Monitoring setup', 'Documentation', 'Training & support']
    }
  ];

  return (
    <section id="process" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Our Proven Path to <span className="text-orange-500">Digital Excellence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every successful project follows a structured approach. Here's how I transform your vision into reality.
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div
              key={index}
              className="process-card opacity-0 transform translate-y-8 transition-all duration-700 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:bg-slate-900/80 hover:border-orange-500/50 hover:transform hover:scale-105 group"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
                  <process.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{process.title}</h3>
                <p className="text-gray-300 leading-relaxed">{process.description}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-orange-500 mb-3">Key Deliverables:</h4>
                <ul className="space-y-1">
                  {process.deliverables.map((deliverable, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-center">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
import React, { useEffect, useRef } from 'react';
import { Search, Palette, Code, Rocket } from 'lucide-react';

const ProcessFramework = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.process-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const processes = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'Deep dive into your business goals, target audience, and technical requirements.',
      deliverables: ['Project roadmap', 'Technical specifications', 'User personas', 'Feature prioritization']
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Create intuitive user experiences with modern design principles and accessibility.',
      deliverables: ['Wireframes', 'UI/UX design', 'Design system', 'Interactive prototypes']
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Build scalable, performant applications using cutting-edge technologies.',
      deliverables: ['Clean codebase', 'API integration', 'Testing suite', 'Performance optimization']
    },
    {
      icon: Rocket,
      title: 'Deployment',
      description: 'Launch your application with proper monitoring, security, and ongoing support.',
      deliverables: ['Production deployment', 'Monitoring setup', 'Documentation', 'Training & support']
    }
  ];

  return (
    <section id="process" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Our Proven Path to <span className="text-orange-500">Digital Excellence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every successful project follows a structured approach. Here's how I transform your vision into reality.
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div
              key={index}
              className="process-card opacity-0 transform translate-y-8 transition-all duration-700 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:bg-slate-900/80 hover:border-orange-500/50 hover:transform hover:scale-105 group"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
                  <process.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{process.title}</h3>
                <p className="text-gray-300 leading-relaxed">{process.description}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-orange-500 mb-3">Key Deliverables:</h4>
                <ul className="space-y-1">
                  {process.deliverables.map((deliverable, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-center">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFramework;
export default ProcessFramework;