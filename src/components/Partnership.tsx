import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Shield, Zap, Users, Heart, Target, Lightbulb, TrendingUp, User } from 'lucide-react';

const Partnership = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Brought my page to so many new eyes in the Houston area!",
      author: "Tonya Gaitz",
      position: "Owner",
      company: "Gaitz HVAC",
      rating: 5
    },
    {
      text: "Casey's entrepreneurial background really shows in how he approaches web development—it's not just about code, it's about results that drive business growth.",
      author: "Maria Rodriguez",
      position: "CEO",
      company: "Verde Marketing",
      rating: 5
    },
    {
      text: "Charles delivered exactly what we needed - a website that not only looks amazing but actually converts visitors into customers.",
      author: "David Thompson",
      position: "Founder",
      company: "TechStart Solutions",
      rating: 5
    }
  ];

  const coreValues = [
    {
      icon: Target,
      title: "Excellence through Simplicity",
      description: "Clean, focused solutions that deliver maximum impact without unnecessary complexity."
    },
    {
      icon: Shield,
      title: "Transparency and Trust",
      description: "Open communication, honest timelines, and clear project expectations from start to finish."
    },
    {
      icon: TrendingUp,
      title: "Results-Driven Design",
      description: "Every design decision is made with your business goals and user conversion in mind."
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning & Innovation",
      description: "Staying ahead of technology trends and implementing cutting-edge solutions."
    },
    {
      icon: Heart,
      title: "Entrepreneurial Empathy",
      description: "Understanding business challenges from firsthand entrepreneurial experience."
    }
  ];

  const technologies = [
    { name: 'React', level: 95 },
    { name: 'Vite', level: 92 },
    { name: 'Bolt.new', level: 90 },
    { name: 'SEO Optimization', level: 88 },
    { name: 'AI/Prompt Engineering', level: 85 },
    { name: 'Performance Optimization', level: 90 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Our Journey & <span className="text-orange-500">Philosophy</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A professional website development team with a unique entrepreneurial perspective, dedicated to transforming businesses through powerful digital solutions.
          </p>
        </div>

        {/* Personal Story */}
        <div className="bg-slate-900/50 rounded-2xl p-8 md:p-12 border border-slate-700 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Since 2022, we've specialized in creating, scaling, and revitalizing websites that elevate brands and drive measurable growth. But our journey began differently—with entrepreneurial experience that gives us unique insight into business challenges.
              </p>
              <p>
                Drawing from our experience as system engineers and entreprenures, we understand firsthand the challenges businesses face in the digital landscape. This insight drives our approach to web development, where we combine clean, modern design with performance optimization and strategic SEO implementation.
              </p>
              <p>
                Our mission is simple: to create websites that don't just look impressive—they perform. Whether you're launching a new digital presence or upgrading an existing site, we bring the technical expertise and business acumen to help your brand succeed online.
              </p>
              <p className="text-orange-500 font-semibold">
                Let's build something extraordinary together.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-10 font-poppins">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center group bg-slate-900/30 rounded-xl p-6 border border-slate-700 hover:border-orange-500/50 transition-all">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/30 transition-colors">
                  <value.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold mb-3 font-poppins">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet the Founders */}
        <h3 className="text-2xl font-bold text-center mb-8 font-poppins">Meet the Founders</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Charles Gaitz */}
          <div className="bg-slate-900/50 rounded-2xl p-8 md:p-12 border border-slate-700">
            <div className="text-center">
              <img 
                src="/About me headshot.jpeg" 
                alt="Charles Gaitz - Founder of Gaitz Webworks" 
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-orange-500/20"
              />
              <h4 className="text-xl font-bold text-orange-500 font-poppins">Charles Gaitz</h4>
              <p className="text-gray-300">Co-Founder / Business Strategist</p>
            </div>
            <div className="mt-8 space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h5 className="font-semibold text-orange-500 mb-3 font-poppins">Credentials & Experience</h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Entrepreneur since 2022
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Web development experience in React, Vite, Bolt.new
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    ERP implementation experience
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h5 className="font-semibold text-orange-500 mb-3 font-poppins">Areas of Expertise</h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Modern web development
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Prompt engineering
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    SEO and site performance optimization
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Business storytelling & digital branding
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Michael Natufe */}
          <div className="bg-slate-900/50 rounded-2xl p-8 md:p-12 border border-slate-700">
            <div className="text-center">
              <img 
                src="/Michael_Profile.PNG" 
                alt="Michael Natufe - Co-Founder of Gaitz Webworks" 
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-orange-500/20"
              />
              <h4 className="text-xl font-bold text-orange-500 font-poppins">Michael Natufe</h4>
              <p className="text-gray-300">Co-Founder / Lead Developer</p>
            </div>
            <div className="mt-8 space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h5 className="font-semibold text-orange-500 mb-3 font-poppins">Credentials & Experience</h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Business development and strategy
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Client relationship management
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Market analysis and growth planning
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h5 className="font-semibold text-orange-500 mb-3 font-poppins">Areas of Expertise</h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Strategic business planning
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Partnership development
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Operations optimization
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Digital marketing strategy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* What We Bring to Your Project */}
        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 mb-16 max-w-4xl mx-auto">
          <h4 className="font-semibold text-orange-500 mb-3 font-poppins text-center">What We Bring to Your Project</h4>

          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-300">

            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              Mobile-first design with modern frameworks
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              SEO-optimized structure for better visibility
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              7-day turnaround for express projects
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              Free AI consultation for automation
            </li>
          </ul>
        </div>

        
        {/* Testimonials Carousel */}
        <div className="relative bg-slate-900/50 rounded-2xl p-8 md:p-12 border border-slate-700">
          <h3 className="text-2xl font-bold text-center mb-8 font-poppins">Client Testimonials</h3>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-300 italic mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="text-center">
                <cite className="text-lg font-semibold text-orange-500">
                  {testimonials[currentTestimonial].author}
                </cite>
                <p className="text-gray-400">
                  {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-orange-500' : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;