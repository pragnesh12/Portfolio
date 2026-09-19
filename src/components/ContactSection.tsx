import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Send, 
  Check, 
  Copy, 
  MessageSquare,
  Clock,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('Full Stack Developer Role');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${inquiryType}] Inquiring from Portfolio - ${senderName || 'Recruiter'}`);
    const body = encodeURIComponent(
      `Hello Pragnesh,\n\nMy name is ${senderName} (${senderEmail || 'N/A'}).\n\nI reached out regarding: ${inquiryType}\n\nMessage:\n${message}\n\nLooking forward to connecting!`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 relative border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300">
            <Mail className="w-3.5 h-3.5 text-zinc-400" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Interested in discussing full-stack development, AI developer tooling, or new opportunities? Send an inquiry directly to <strong>heypragnesh@gmail.com</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 text-left">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      Primary Email
                    </h3>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:underline break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-xs text-zinc-500">
                All form submissions and direct inquiries go straight to this inbox.
              </p>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      Direct Phone
                    </h3>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-sm sm:text-base font-semibold text-white hover:underline"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-xs text-zinc-500">
                Available for phone calls or WhatsApp discussions.
              </p>
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      LinkedIn Profile
                    </h3>
                    <a
                      href={PERSONAL_INFO.linkedinUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-sm sm:text-base font-semibold text-white hover:underline"
                    >
                      linkedin.com/in/hey-pragnesh
                    </a>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs text-zinc-500">
                Connect and message directly on professional LinkedIn network.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-zinc-300" />
                  <span>Send a Message</span>
                </h3>
                <span className="text-[11px] font-mono text-zinc-400">
                  Direct to heypragnesh@gmail.com
                </span>
              </div>
              <p className="text-xs text-zinc-400 pb-2">
                Fill out the quick form below. It will open your email client pre-filled to <strong className="text-white">heypragnesh@gmail.com</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins (Engineering Manager)"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sjenkins@company.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Inquiry Focus
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white focus:outline-none focus:border-zinc-500"
                >
                  <option value="Full Stack Developer Role">Full Stack Developer Role (Interview / Offer)</option>
                  <option value="AI Vice Captain / AI Tooling Role">AI Tooling &amp; Developer Productivity Mentorship</option>
                  <option value="Contract / System Architecture">System Architecture &amp; Next.js / Node.js Advisory</option>
                  <option value="General Conversation / Coffee Chat">General Networking / Coffee Chat</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Message Details
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about the role, technical challenges, or team you are hiring for..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 leading-relaxed"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                {sentSuccess ? (
                  <div className="flex items-center gap-1.5 text-xs text-white font-medium">
                    <Check className="w-4 h-4" />
                    <span>Email client launched for heypragnesh@gmail.com!</span>
                  </div>
                ) : (
                  <span className="text-[11px] text-zinc-500">
                    Sends directly to heypragnesh@gmail.com
                  </span>
                )}

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-xs font-bold shadow-md hover:bg-zinc-200 transition-all active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
