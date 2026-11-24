import React, { useState } from 'react';
import { BRAND_INFO } from '../data/brand';
import { FAQS } from '../data/faq';
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle, AlertCircle, Send, ChevronDown, ChevronUp, Code2 } from 'lucide-react';
import { InstagramIcon } from '../components/common/Icons';
import { usePageMetadata } from '../hooks/usePageMetadata';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  preferredBatch: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  preferredBatch?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  usePageMetadata(
    'Contact & Admissions | Kozhikode Campus',
    'Enquire about morning and evening batch admissions, class schedules, and connect with our Kozhikode admissions desk directly.'
  );

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    preferredBatch: 'Morning Batch (10:00 AM – 12:00 PM)',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showBackendInfo, setShowBackendInfo] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+-\s]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please provide a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.preferredBatch) {
      newErrors.preferredBatch = 'Please select a preferred batch';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message or question';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate verified form processing delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      preferredBatch: 'Morning Batch (10:00 AM – 12:00 PM)',
      message: '',
    });
    setIsSubmitted(false);
    setErrors({});
  };

  // Generate personalized WhatsApp message with form details
  const personalizedWhatsAppUrl = () => {
    const msg = `Hello Edufinix, my name is ${formData.fullName || 'Student'}. I would like to enquire about the ${formData.preferredBatch || 'Forex programs'}. Message: ${formData.message || 'Please share admission details.'}`;
    return `https://wa.me/${BRAND_INFO.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="flex flex-col">
      {/* Editorial Page Header */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#F5F4EF] border-b border-[#101C32]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-semibold text-[#315FEA]">
              <span>Admissions &amp; Enquiries</span>
              <span className="text-[#101C32]/30">/</span>
              <span>Kozhikode Campus</span>
            </div>

            <h1 className="font-heading text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-[#101C32] tracking-tight leading-[1.12]">
              Connect With Edufinix.
            </h1>

            <p className="font-body text-base sm:text-lg lg:text-xl text-[#778397] leading-relaxed">
              Enquire about upcoming offline batch cohorts, syllabus outlines, and seat reservations. Speak directly with our admissions desk in Kozhikode, Kerala.
            </p>
          </div>
        </div>
      </section>

      {/* Main Two-Column Spread: Contact Info & Interactive Form */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-[#101C32]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Direct Academy Details & Batch Timings */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div className="space-y-2 sm:space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#315FEA] font-semibold">
                  ADMISSIONS DESK
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#101C32]">
                  Direct Academy Channels
                </h2>
                <p className="font-body text-xs sm:text-sm text-[#778397] leading-relaxed">
                  Connect through our verified communication lines for fast responses on batch allocations and scheduling.
                </p>
              </div>

              {/* Direct Action Contact Cards */}
              <div className="space-y-3.5 sm:space-y-4">
                {/* Click to Call */}
                <a
                  href={`tel:${BRAND_INFO.contact.phoneRaw}`}
                  className="p-4 sm:p-5 rounded-2xl bg-[#F5F4EF] border border-[#101C32]/10 hover:border-[#315FEA]/50 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-white text-[#315FEA] shadow-xs group-hover:bg-[#315FEA] group-hover:text-white transition-colors shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] font-mono text-[#778397] uppercase tracking-wider block">
                        Direct Telephone
                      </span>
                      <span className="font-heading text-sm sm:text-base font-bold text-[#101C32] truncate block">
                        {BRAND_INFO.contact.phone}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#315FEA] group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                    Call Now →
                  </span>
                </a>

                {/* Click to Email */}
                <a
                  href={`mailto:${BRAND_INFO.contact.email}`}
                  className="p-4 sm:p-5 rounded-2xl bg-[#F5F4EF] border border-[#101C32]/10 hover:border-[#315FEA]/50 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-white text-[#315FEA] shadow-xs group-hover:bg-[#315FEA] group-hover:text-white transition-colors shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] font-mono text-[#778397] uppercase tracking-wider block">
                        Admissions Email
                      </span>
                      <span className="font-heading text-xs sm:text-base font-bold text-[#101C32] truncate block">
                        {BRAND_INFO.contact.email}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#315FEA] group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                    Email →
                  </span>
                </a>

                {/* Instagram Channel */}
                <a
                  href={BRAND_INFO.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 sm:p-5 rounded-2xl bg-[#F5F4EF] border border-[#101C32]/10 hover:border-[#315FEA]/50 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-white text-[#315FEA] shadow-xs group-hover:bg-[#315FEA] group-hover:text-white transition-colors shrink-0">
                      <InstagramIcon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] font-mono text-[#778397] uppercase tracking-wider block">
                        Instagram
                      </span>
                      <span className="font-heading text-sm sm:text-base font-bold text-[#101C32] truncate block">
                        {BRAND_INFO.contact.instagram}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#315FEA] group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                    View →
                  </span>
                </a>

                {/* Direct WhatsApp CTA Card */}
                <a
                  href={BRAND_INFO.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 sm:p-5 rounded-2xl bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-all flex items-center justify-between shadow-md group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-white/20 text-white shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] font-mono text-white/90 uppercase tracking-wider block">
                        Instant WhatsApp Desk
                      </span>
                      <span className="font-heading text-sm sm:text-base font-bold text-white truncate block">
                        +91 6369-637566
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-white underline underline-offset-4 group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                    Message →
                  </span>
                </a>
              </div>

              {/* Batch Timings Presentation */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#101C32] text-white space-y-3.5 sm:space-y-4 border border-[#17263D]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#315FEA]" />
                    <span className="font-heading text-xs sm:text-sm font-semibold text-white">
                      Official Batch Timings
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-[#DCE5F1]">
                    Trading Days
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <span className="font-bold text-white block">Morning Batch</span>
                    <span className="font-mono text-[#315FEA] block text-sm">10:00 AM – 12:00 PM</span>
                    <span className="text-[10px] text-[#778397] block">European Open Session</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <span className="font-bold text-white block">Evening Batch</span>
                    <span className="font-mono text-[#315FEA] block text-sm">05:00 PM – 07:00 PM</span>
                    <span className="text-[10px] text-[#778397] block">US Overlap Session</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-start gap-2 text-[11px] text-[#DCE5F1]/80">
                  <AlertCircle className="w-4 h-4 text-[#315FEA] shrink-0 mt-0.5" />
                  <span>
                    Classes are conducted during trading days only. There are no classes from Friday through Sunday.
                  </span>
                </div>
              </div>

              {/* Kozhikode Location Presentation */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F5F4EF] border border-[#101C32]/10 space-y-2.5 sm:space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#101C32]">
                  <MapPin className="w-4 h-4 text-[#315FEA]" />
                  <span>Kozhikode, Kerala, India</span>
                </div>
                <p className="font-body text-xs text-[#778397] leading-relaxed">
                  Located in the commercial heart of Kozhikode, our academy offers focused in-person education for students and professionals across Kerala.
                </p>
                <div className="pt-1 text-[11px] font-mono text-[#101C32]">
                  • Easily accessible via Calicut Railway &amp; Air Connectivity
                </div>
              </div>

            </div>

            {/* Right Column: Admission Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-[#F5F4EF] border border-[#101C32]/10 shadow-sm relative">
                
                <div className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#315FEA] font-semibold">
                    APPLICATION &amp; INQUIRY
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[#101C32]">
                    Enquire About Admission
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#778397]">
                    Please complete the details below. Our academic admissions counselor will get in touch to confirm batch availability.
                  </p>
                </div>

                {/* Form Success State */}
                {isSubmitted ? (
                  <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#101C32]/10 space-y-5 sm:space-y-6 text-center animate-in fade-in duration-300">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#315FEA]/10 text-[#315FEA] flex items-center justify-center mx-auto">
                      <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-heading text-xl sm:text-2xl font-bold text-[#101C32]">
                        Enquiry Received Successfully
                      </h4>
                      <p className="font-body text-xs sm:text-sm text-[#778397] max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-[#101C32]">{formData.fullName}</strong>. Your enquiry for the <strong className="text-[#101C32]">{formData.preferredBatch}</strong> has been logged. Our admissions desk will contact you shortly via phone or WhatsApp.
                      </p>
                    </div>

                    {/* Direct WhatsApp Forward Action */}
                    <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={personalizedWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-lg bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-[#1EBE5D] transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Confirm via WhatsApp Directly</span>
                      </a>
                      <button
                        onClick={handleReset}
                        className="w-full sm:w-auto px-5 py-3 rounded-lg border border-[#101C32]/20 text-[#101C32] text-xs font-semibold uppercase tracking-wider hover:bg-slate-100 transition-colors cursor-pointer"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="block text-xs font-heading font-semibold text-[#101C32]">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rahul Menon"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-base text-[#101C32] placeholder:text-[#778397]/50 focus:outline-none focus:ring-2 focus:ring-[#315FEA] transition-colors ${
                          errors.fullName ? 'border-red-500' : 'border-[#101C32]/15'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Contact Row: Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone Number */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="block text-xs font-heading font-semibold text-[#101C32]">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className={`w-full px-4 py-3 rounded-xl bg-white border text-base text-[#101C32] placeholder:text-[#778397]/50 focus:outline-none focus:ring-2 focus:ring-[#315FEA] transition-colors ${
                            errors.phone ? 'border-red-500' : 'border-[#101C32]/15'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-500 font-medium flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                      {/* Email Address */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="block text-xs font-heading font-semibold text-[#101C32]">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rahul@example.com"
                          className={`w-full px-4 py-3 rounded-xl bg-white border text-base text-[#101C32] placeholder:text-[#778397]/50 focus:outline-none focus:ring-2 focus:ring-[#315FEA] transition-colors ${
                            errors.email ? 'border-red-500' : 'border-[#101C32]/15'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-500 font-medium flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Preferred Batch Timing */}
                    <div className="space-y-1.5">
                      <label htmlFor="preferredBatch" className="block text-xs font-heading font-semibold text-[#101C32]">
                        Preferred Batch <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="preferredBatch"
                        value={formData.preferredBatch}
                        onChange={(e) => setFormData({ ...formData, preferredBatch: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-base text-[#101C32] focus:outline-none focus:ring-2 focus:ring-[#315FEA] transition-colors ${
                          errors.preferredBatch ? 'border-red-500' : 'border-[#101C32]/15'
                        }`}
                      >
                        <option value="Morning Batch (10:00 AM – 12:00 PM)">
                          Morning Batch (10:00 AM – 12:00 PM) • Trading Days
                        </option>
                        <option value="Evening Batch (05:00 PM – 07:00 PM)">
                          Evening Batch (05:00 PM – 07:00 PM) • Trading Days
                        </option>
                        <option value="Either / Flexible on Timing">
                          Either / Flexible on Timing (Kozhikode Offline)
                        </option>
                      </select>
                      <span className="text-[10px] text-[#778397] block">
                        Note: Classes run during trading days only (no classes Fri–Sun).
                      </span>
                    </div>

                    {/* Message / Questions */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-xs font-heading font-semibold text-[#101C32]">
                        Message or Learning Background <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your trading experience (beginner, intermediate) and any specific questions you have about our curriculum or mentorship."
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-base text-[#101C32] placeholder:text-[#778397]/50 focus:outline-none focus:ring-2 focus:ring-[#315FEA] transition-colors ${
                          errors.message ? 'border-red-500' : 'border-[#101C32]/15'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-red-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 rounded-xl bg-[#101C32] text-white font-heading font-semibold text-sm hover:bg-[#17263D] active:bg-[#0c1524] transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Validating &amp; Submitting...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Admission Enquiry</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Backend Architecture Note Toggle */}
                    <div className="pt-4 border-t border-[#101C32]/10">
                      <button
                        type="button"
                        onClick={() => setShowBackendInfo(!showBackendInfo)}
                        className="text-[11px] font-mono text-[#778397] hover:text-[#101C32] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Code2 className="w-3.5 h-3.5 text-[#315FEA]" />
                        <span>Integration Details for Academy Webmaster</span>
                        {showBackendInfo ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </button>

                      {showBackendInfo && (
                        <div className="mt-3 p-4 rounded-xl bg-white border border-[#101C32]/10 text-xs text-[#778397] space-y-2 animate-in fade-in duration-150">
                          <p className="font-mono text-[#101C32] font-semibold">
                            Backend Integration Specification:
                          </p>
                          <p>
                            This client form features real-time validation and WhatsApp message synthesis. For production deployment, route this handler to:
                          </p>
                          <ul className="list-disc pl-4 space-y-1 font-mono text-[11px]">
                            <li>REST API Endpoint (e.g. <code>POST /api/admissions/enquiry</code>)</li>
                            <li>Direct Email Relay (EmailJS or SendGrid delivering to <code>edufinixacademy@gmail.com</code>)</li>
                            <li>CRM Webhook (Zapier / Zoho Bigin / Google Sheets)</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Admissions Frequently Asked Questions Section */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#F5F4EF] border-b border-[#101C32]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          <div className="text-center space-y-2.5 sm:space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#315FEA] font-semibold">
              ADMISSIONS CLEARANCE
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101C32]">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-xs sm:text-sm text-[#778397]">
              Key operational details regarding classes, batch timings, and mentorship access.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#101C32]/10 bg-white overflow-hidden transition-all shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="font-heading text-sm sm:text-base font-bold text-[#101C32]">
                      {faq.question}
                    </span>
                    <div className="p-1.5 rounded-lg bg-[#F5F4EF] text-[#101C32] shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm font-body text-[#778397] leading-relaxed border-t border-[#101C32]/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
