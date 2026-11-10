import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-24 bg-luxury-dark/95 border-t border-gold-900/10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* FAQ Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
            Common Inquiries
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-gold-100 font-medium tracking-wide">
            Expedition Directives & FAQs
          </h2>
          <p className="font-sans text-sm text-gold-100/50 leading-relaxed font-light">
            Everything you need to plan your pristine private vacation with peace of mind.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 text-left" id="faq-accordion-container">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-luxury-gray/40 border border-gold-900/10 hover:border-gold-400/15 rounded-sm overflow-hidden transition-all duration-300"
              >
                {/* Accordion header button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 focus:outline-none text-left cursor-pointer select-none"
                  aria-expanded={isOpen}
                  id={`faq-btn-${index}`}
                >
                  <div className="flex items-start space-x-4 pr-4">
                    <HelpCircle size={16} className="text-gold-400 mt-1 flex-shrink-0" />
                    <span className="font-serif text-base text-gold-100 font-medium tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  <div className="text-gold-400 flex-shrink-0">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {/* Accordion content */}
                {isOpen && (
                  <div className="px-6 pb-6 pl-[38px] border-t border-gold-900/5 animate-fade-in">
                    <p className="font-sans text-xs md:text-sm text-gold-100/60 leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
