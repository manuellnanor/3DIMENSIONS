/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Send, CheckCircle, ArrowRight, ArrowLeft, Ruler, Landmark, Leaf, Heart, Hammer } from 'lucide-react';

interface FreeConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledProjectStyle?: string;
}

interface appraisalResult {
  styleName: string;
  materials: string[];
  metrics: string[];
  bioAdvice: string;
}

export default function FreeConsultationModal({ isOpen, onClose, prefilledProjectStyle }: FreeConsultationModalProps) {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState('houses');
  const [budget, setBudget] = useState('$500k - $1.5M');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState(prefilledProjectStyle ? `I am highly inspired by the design layout of ${prefilledProjectStyle} and want to collaborate...` : '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appraisal, setAppraisal] = useState<appraisalResult | null>(null);

  const budgetOptions = [
    'Under $250k',
    '$250k - $500k',
    '$500k - $1.5M',
    '$1.5M - $5M',
    '$5M+'
  ];

  const handleNextStep = () => {
    if (step < 3) setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate high-fidelity architectural apprising engine
    setTimeout(() => {
      setIsSubmitting(false);

      // Programmatic synthesis based on selections
      let styleOutput = 'Contemporary Natural Modern';
      let mats: string[] = ['Redwood panels', 'Board-form concrete', 'Brushed steel'];
      let metrics: string[] = ['Thermal mass cooling', 'Dual-glazed low-E windows', 'Solar loop integration'];
      let bioMessage = '';

      if (projectType === 'renovation') {
        styleOutput = 'Adaptive Heritage Revival';
        mats = ['Reclaimed spruce structural framing', 'Local raw quarry stone', 'Brushed bronze fixtures'];
        metrics = ['Air tightness retrofit (ACH < 0.6)', 'Active heat exchange ventilation', 'Greywater bio-filtration'];
        bioMessage = `For your retrofit in ${location || 'your area'}, we prioritize stitching advanced envelope systems flush inside the historic core. This locks up carbon in existing materials without degrading historical alignment.`;
      } else if (projectType === 'interior-design') {
        styleOutput = 'Minimalist Organic Interior';
        mats = ['FSC-certified white oak cabinetry', 'Muted clay plasters', 'Linen textiles & basalt stone work'];
        metrics = ['Circadian LED spectral lighting', 'VOC-free raw wall coatings', 'Sound-acoustic timber baffles'];
        bioMessage = `Inside, we’ll maximize light penetration by installing low-profile sliding cedar paneling. This helps air pass through beautifully between rooms without visual noise, ideal for custom interior detailing.`;
      } else {
        // houses
        styleOutput = 'Monolithic Carbon-Locked Residence';
        mats = ['Claddings of charred cedar (Shou Sugi Ban)', 'Mass Timber slabs', 'Local river-bed aggregate'];
        metrics = ['Net-Zero passive solar tracking', 'Geothermal structural loops', 'Rainwater capture cistern (3500 gal)'];
        bioMessage = `With a budget allocation of ${budget}, your custom residential brief matches perfectly with a Net-Zero energy scheme. We will orchestrate cantilevers around local wind behaviors to cut operational grid demands.`;
      }

      setAppraisal({
        styleName: styleOutput,
        materials: mats,
        metrics: metrics,
        bioAdvice: bioMessage
      });
      setStep(4);
    }, 1200);
  };

  const handleReset = () => {
    setStep(1);
    setProjectType('houses');
    setBudget('$500k - $1.5M');
    setName('');
    setEmail('');
    setLocation('');
    setDescription('');
    setAppraisal(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6" id="free-consultation-modal-root">
          
          {/* Main Card Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-stone-900 border border-stone-200 w-full max-w-2xl rounded-none relative overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header branding & close bar */}
            <div className="px-6 py-4 border-b border-stone-100 flex justify-between items-center bg-stone-50 select-none">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center bg-stone-900 text-white font-display font-black text-xs">
                  M
                </div>
                <span className="font-mono text-[10px] tracking-wider text-stone-500 uppercase font-semibold">3DIMENSIONAL DESIGN FELLOWSHIP</span>
              </div>

              <button
                onClick={onClose}
                className="text-stone-400 hover:text-black p-1.5 rounded-full hover:bg-stone-200 transition-colors cursor-pointer"
                aria-label="Close modal dialog"
                id="close-modal-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Stepper Progress Indicator */}
            {step < 4 && (
              <div className="w-full bg-stone-200 h-1 flex">
                <div
                  className="bg-stone-900 h-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            )}

            {/* Form body */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <h3 className="font-display font-medium text-xl sm:text-2xl text-stone-900">
                        Select Project Scope
                      </h3>
                      <p className="text-xs text-stone-400 font-sans">
                        Let us coordinate around your high-level structural goals.
                      </p>
                    </div>

                    {/* Scope Options Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'houses', label: 'Houses', desc: 'Custom Residences', icon: Leaf },
                        { id: 'renovation', label: 'Renovation', desc: 'Heritage & Retrofits', icon: Hammer },
                        { id: 'interior-design', label: 'Interior Design', desc: 'Bespoke Millwork', icon: Ruler }
                      ].map((opt) => {
                        const IconComponent = opt.icon;
                        const isSelected = projectType === opt.id;
                        return (
                          <div
                            key={opt.id}
                            onClick={() => setProjectType(opt.id)}
                            className={`p-4 border text-left cursor-pointer transition-all flex flex-col justify-between h-28 hover:border-stone-800 ${
                              isSelected
                                ? 'border-stone-900 bg-stone-900 text-stone-50 shadow-sm'
                                : 'border-stone-200 bg-white text-stone-800'
                            }`}
                            id={`option-scope-${opt.id}`}
                          >
                            <IconComponent className={`w-5 h-5 ${isSelected ? 'text-amber-300' : 'text-stone-400'}`} />
                            <div>
                              <p className="font-display font-medium text-sm leading-tight">{opt.label}</p>
                              <p className={`text-[10px] uppercase font-mono tracking-widest mt-0.5 ${isSelected ? 'text-stone-300' : 'text-stone-400'}`}>{opt.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Est. Budget Selection */}
                    <div className="space-y-2.5">
                      <label className="text-xs font-mono tracking-wider text-stone-400 uppercase font-semibold">
                        TARGET BUDGET REFERENCE
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {budgetOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setBudget(opt)}
                            className={`py-2 px-3 text-xs border cursor-pointer transition-all ${
                              budget === opt
                                ? 'bg-stone-100 border-stone-900 text-stone-900 font-semibold'
                                : 'border-stone-200 bg-white text-stone-500 hover:border-stone-400'
                            }`}
                            id={`budget-btn-${opt.replace(/\s+/g, '')}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <h3 className="font-display font-medium text-xl sm:text-2xl text-stone-900">
                        Client Details
                      </h3>
                      <p className="text-xs text-stone-400 font-sans">
                        Where and who we will write this physical site map for.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Name input */}
                      <div className="flex flex-col space-y-1.5">
                        <label className="text-[10px] font-mono font-semibold tracking-wider text-stone-400 uppercase">
                          YOUR FULL NAME
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Edward Hopper"
                          className="w-full px-4 py-3 border border-stone-200 rounded-none text-sm font-sans focus:outline-none focus:border-stone-900"
                          id="client-name-input"
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col space-y-1.5">
                        <label className="text-[10px] font-mono font-semibold tracking-wider text-stone-400 uppercase">
                          EMAIL ADDRESS
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="edward@hopper.studio"
                          className="w-full px-4 py-3 border border-stone-200 rounded-none text-sm font-sans focus:outline-none focus:border-stone-900"
                          id="client-email-input"
                        />
                      </div>

                      {/* Location input */}
                      <div className="flex flex-col space-y-1.5">
                        <label className="text-[10px] font-mono font-semibold tracking-wider text-stone-400 uppercase">
                          TARGET SITE LOCATION
                        </label>
                        <input
                          type="text"
                          required
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="e.g. Accra, Ghana or Kumasi, Ghana"
                          className="w-full px-4 py-3 border border-stone-200 rounded-none text-sm font-sans focus:outline-none focus:border-stone-900"
                          id="client-location-input"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <h3 className="font-display font-medium text-xl sm:text-2xl text-stone-900">
                        Describe Your Dream Envelope
                      </h3>
                      <p className="text-xs text-stone-400 font-sans">
                        Outline textures, target views, solar orientations, or structural needs.
                      </p>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <textarea
                        required
                        rows={5}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="I want a split-level modernist frame with raw concrete pillars, overlooking a wood deck, maximizing winter solar capture..."
                        className="w-full p-4 border border-stone-200 rounded-none text-sm font-sans focus:outline-none focus:border-stone-900 resize-none"
                        id="client-description-input"
                      />
                      <span className="text-[10px] font-mono text-stone-400">
                        MINIMUM 25 CHARACTERS FOR INTENSE GENERATIVE appraisal.
                      </span>
                    </div>
                  </motion.div>
                )}

                {step === 4 && appraisal && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6 text-stone-950"
                  >
                    {/* Success Greeting stamp */}
                    <div className="bg-emerald-50 border border-emerald-100 p-4 shrink-0 flex items-center gap-3">
                      <CheckCircle className="w-8 h-8 text-emerald-600 shrink-0" />
                      <div>
                        <h4 className="font-display text-sm font-bold text-emerald-950">Appraisal Scheme Generated Successfully</h4>
                        <p className="text-stone-500 font-sans text-xs">An architectural analyst is reviewing your site files in our Accra studio.</p>
                      </div>
                    </div>

                    {/* Appraiser outputs */}
                    <div className="space-y-4">
                      <div>
                        <p className="text-[9px] font-mono tracking-wider font-semibold text-amber-600 uppercase border border-amber-500/30 px-2 py-0.5 inline-block bg-amber-50 rounded-sm">
                          DRAFT STYLE RECOMMENDED
                        </p>
                        <h4 className="font-display font-medium text-2xl text-stone-900 mt-1.5">
                          {appraisal.styleName}
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Materials list */}
                        <div className="border border-stone-150 p-4 space-y-2.5">
                          <span className="text-[10px] tracking-wider font-mono font-semibold text-stone-400 uppercase">SYNCHRONIZED MATERIALS</span>
                          <ul className="space-y-1">
                            {appraisal.materials.map((m, idx) => (
                              <li key={idx} className="text-xs text-stone-705 font-sans flex items-center gap-1.5 font-light">
                                <span className="w-1.5 h-1.5 rounded-full bg-stone-900" />
                                {m}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Environmental metrics */}
                        <div className="border border-stone-150 p-4 space-y-2.5">
                          <span className="text-[10px] tracking-wider font-mono font-semibold text-stone-400 uppercase">ENVIRONMENTAL TARGETS</span>
                          <ul className="space-y-1">
                            {appraisal.metrics.map((met, idx) => (
                              <li key={idx} className="text-xs text-stone-705 font-sans flex items-center gap-1.5 font-light">
                                <span className="w-1.5 h-1.5 rounded-full bg-stone-850" />
                                {met}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Customized Paragraph */}
                      <div className="space-y-2 bg-stone-50/50 p-4 border border-stone-200/50">
                        <span className="text-[9px] font-mono tracking-wider font-semibold text-stone-400 uppercase">BIO-CLIMATIC SITE ANALYSIS</span>
                        <p className="text-xs font-sans text-stone-605 italic leading-relaxed">
                          "{appraisal.bioAdvice}"
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Nav bottoms */}
              <div className="mt-8 border-t border-stone-100 pt-6 flex justify-between items-center bg-white">
                {step < 4 ? (
                  <>
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      disabled={step === 1}
                      className={`inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider h-11 px-4 cursor-pointer ${
                        step === 1 ? 'text-stone-300 pointer-events-none' : 'text-stone-500 hover:text-black'
                      }`}
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>

                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNextStep}
                        disabled={step === 2 && (!name || !email || !location)}
                        className={`inline-flex items-center gap-1.5 h-11 bg-stone-900 hover:bg-neutral-800 text-stone-50 text-xs font-mono font-semibold uppercase tracking-widest px-6 rounded-none cursor-pointer ${
                          step === 2 && (!name || !email || !location) ? 'opacity-50 pointer-events-none' : ''
                        }`}
                        id="consult-next-step-btn"
                      >
                        Next <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting || description.length < 15}
                        className={`inline-flex items-center gap-2 h-11 bg-stone-900 hover:bg-neutral-800 text-stone-50 text-xs font-mono font-semibold uppercase tracking-widest px-6 rounded-none cursor-pointer ${
                          isSubmitting || description.length < 15 ? 'opacity-50 pointer-events-none' : ''
                        }`}
                        id="consult-submit-btn"
                      >
                        {isSubmitting ? (
                          <>Appraising Draft...</>
                        ) : (
                          <>Aesthetic Appraisal <Sparkles className="w-4 h-4 text-amber-300" /></>
                        )}
                      </button>
                    )}
                  </>
                ) : (
                  <div className="w-full flex justify-between items-center gap-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500 hover:text-stone-900 h-11 px-4 cursor-pointer"
                    >
                      Restart Appraisal
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="h-11 bg-stone-900 hover:bg-neutral-800 text-stone-50 text-xs font-mono font-semibold uppercase tracking-widest px-6 rounded-none cursor-pointer"
                    >
                      Complete Session
                    </button>
                  </div>
                )}
              </div>

            </form>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
