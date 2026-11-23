import React, { useState } from 'react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from '../Icons';

export const ContactTab: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kawserahmedratul@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col gap-8 animate-fade-in max-w-[1280px] mx-auto pb-12">
      {/* Header Section */}
      <header className="flex flex-col gap-2 border-b border-outline-variant pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight font-h1">
          Contact
        </h1>
        <p className="text-xs md:text-sm text-on-surface-variant font-mono-label">
          Get in touch for collaboration, software engineering conversations, or academic discussions.
        </p>
      </header>

      <div className="flex flex-col gap-8">
        {/* Direct Channels */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold text-on-surface tracking-tight">Direct Channels</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <div className="glass-card p-5 flex items-center gap-4 border border-outline-variant rounded-2xl hover:border-primary-container/40 transition-colors">
              <div className="h-10 w-10 bg-surface-container border border-outline-variant flex items-center justify-center text-primary-container rounded-xl shrink-0">
                <span className="material-symbols-outlined text-lg">mail</span>
              </div>
              <div className="min-w-0 flex-grow">
                <div className="font-mono-label text-xs text-on-surface-variant uppercase font-bold">Email</div>
                <a
                  href="mailto:kawserahmedratul@gmail.com"
                  className="text-sm font-mono text-primary-container hover:underline font-bold truncate block"
                >
                  kawserahmedratul@gmail.com
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-2.5 py-1 text-[10px] font-mono-label uppercase font-bold bg-surface-container hover:bg-primary-container hover:text-background border border-outline-variant rounded-lg transition-all"
              >
                {copiedEmail ? 'Copied!' : 'Copy'}
              </button>
            </div>

            {/* Location */}
            <div className="glass-card p-5 flex items-center gap-4 border border-outline-variant rounded-2xl hover:border-primary-container/40 transition-colors">
              <div className="h-10 w-10 bg-surface-container border border-outline-variant flex items-center justify-center text-primary-container rounded-xl shrink-0">
                <span className="material-symbols-outlined text-lg">location_on</span>
              </div>
              <div className="min-w-0">
                <div className="font-mono-label text-xs text-on-surface-variant uppercase font-bold">Location</div>
                <span className="text-sm font-mono text-on-surface font-bold truncate block">
                  Mymensingh / Chandpur, Bangladesh
                </span>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="glass-card p-5 flex items-center gap-4 border border-outline-variant rounded-2xl hover:border-primary-container/40 transition-colors">
              <div className="h-10 w-10 bg-surface-container border border-outline-variant flex items-center justify-center text-[#0A66C2] rounded-xl shrink-0">
                <LinkedinIcon className="w-5 h-5 fill-current" />
              </div>
              <div className="min-w-0">
                <div className="font-mono-label text-xs text-on-surface-variant uppercase font-bold">LinkedIn</div>
                <a
                  href="https://www.linkedin.com/in/kawserahmedratulpro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-primary-container hover:underline font-bold truncate block"
                >
                  linkedin.com/in/kawserahmedratulpro
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="glass-card p-5 flex items-center gap-4 border border-outline-variant rounded-2xl hover:border-primary-container/40 transition-colors">
              <div className="h-10 w-10 bg-surface-container border border-outline-variant flex items-center justify-center text-on-surface rounded-xl shrink-0">
                <GithubIcon className="w-5 h-5 fill-current" />
              </div>
              <div className="min-w-0">
                <div className="font-mono-label text-xs text-on-surface-variant uppercase font-bold">GitHub</div>
                <a
                  href="https://github.com/KawserAhmedpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-primary-container hover:underline font-bold truncate block"
                >
                  github.com/KawserAhmedpro
                </a>
              </div>
            </div>

            {/* Facebook */}
            <div className="glass-card p-5 flex items-center gap-4 border border-outline-variant rounded-2xl hover:border-primary-container/40 transition-colors">
              <div className="h-10 w-10 bg-surface-container border border-outline-variant flex items-center justify-center text-[#1877F2] rounded-xl shrink-0">
                <FacebookIcon className="w-5 h-5 fill-current" />
              </div>
              <div className="min-w-0">
                <div className="font-mono-label text-xs text-on-surface-variant uppercase font-bold">Facebook</div>
                <a
                  href="https://www.facebook.com/kawserahmedpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-primary-container hover:underline font-bold truncate block"
                >
                  facebook.com/kawserahmedpro
                </a>
              </div>
            </div>

            {/* University */}
            <div className="glass-card p-5 flex items-center gap-4 border border-outline-variant rounded-2xl hover:border-primary-container/40 transition-colors">
              <div className="h-10 w-10 bg-surface-container border border-outline-variant flex items-center justify-center text-primary-container rounded-xl shrink-0">
                <span className="material-symbols-outlined text-lg">school</span>
              </div>
              <div className="min-w-0">
                <div className="font-mono-label text-xs text-on-surface-variant uppercase font-bold">Institution</div>
                <span className="text-sm font-mono text-on-surface font-bold truncate block">
                  Mymensingh Engineering College
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Send Direct Message / Inquiry Form */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold text-on-surface tracking-tight">Direct Inquiry</h2>

          <div className="glass-card p-6 flex flex-col gap-4 border border-outline-variant rounded-2xl">
            {submitted ? (
              <div className="p-6 bg-surface-container/60 border border-primary-container/40 rounded-xl flex items-center gap-3">
                <span className="material-symbols-outlined text-emerald-400 text-2xl">check_circle</span>
                <div>
                  <h4 className="font-bold text-sm text-on-surface">Message Received!</h4>
                  <p className="text-xs text-on-surface-variant">
                    Thank you, {formData.name || 'Friend'}. I will review your message and reply via email shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono-label text-on-surface-variant uppercase font-bold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="px-3.5 py-2 text-sm bg-surface-container/40 border border-outline-variant rounded-lg text-on-surface focus:outline-none focus:border-primary-container transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono-label text-on-surface-variant uppercase font-bold">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="px-3.5 py-2 text-sm bg-surface-container/40 border border-outline-variant rounded-lg text-on-surface focus:outline-none focus:border-primary-container transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono-label text-on-surface-variant uppercase font-bold">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Backend Collaboration / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="px-3.5 py-2 text-sm bg-surface-container/40 border border-outline-variant rounded-lg text-on-surface focus:outline-none focus:border-primary-container transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono-label text-on-surface-variant uppercase font-bold">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your note here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="px-3.5 py-2 text-sm bg-surface-container/40 border border-outline-variant rounded-lg text-on-surface focus:outline-none focus:border-primary-container transition-colors resize-none"
                  />
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-primary-container text-background font-mono-label text-xs uppercase font-extrabold tracking-wider rounded-xl hover:bg-primary-fixed-dim transition-all flex items-center gap-2 cursor-pointer shadow-sm active:scale-95"
                  >
                    <span className="material-symbols-outlined text-sm">send</span>
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
