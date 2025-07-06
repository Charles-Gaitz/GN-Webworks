import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: any;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={handleBackdropClick}>
      <div className="relative bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors"
        >
          <X className="h-6 w-6 text-white" />
        </button>

        <div className="aspect-video overflow-hidden rounded-t-2xl">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">{caseStudy.title}</h2>
            <p className="text-orange-500 font-semibold text-lg">{caseStudy.client}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500">Challenge</h3>
              <p className="text-gray-300 leading-relaxed">{caseStudy.challenge}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500">Results</h3>
              <p className="text-gray-300 leading-relaxed">{caseStudy.results}</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-orange-500">Project Overview</h3>
            <p className="text-gray-300 leading-relaxed">{caseStudy.overview}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-orange-500">Technical Approach</h3>
            <p className="text-gray-300 leading-relaxed">{caseStudy.approach}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-orange-500">Business Impact</h3>
            <p className="text-gray-300 leading-relaxed">{caseStudy.impact}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-orange-500">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {caseStudy.technologies.map((tech: string, index: number) => (
                <span key={index} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {caseStudy.testimonial && (
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Client Testimonial</h3>
              <blockquote className="text-gray-300 italic mb-4 text-lg">
                "{caseStudy.testimonial.text}"
              </blockquote>
              <cite className="text-gray-400 font-semibold">
                — {caseStudy.testimonial.author}
              </cite>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;