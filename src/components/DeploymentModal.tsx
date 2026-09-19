import React, { useState, useEffect } from 'react';
import { 
  X, 
  Share2, 
  Check, 
  Copy, 
  Globe, 
  Linkedin, 
  CheckCircle2,
  Building2,
  Download,
  FolderArchive,
  Github,
  Terminal,
  AlertCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface DeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentModal: React.FC<DeploymentModalProps> = ({ isOpen, onClose }) => {
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedHeadline, setCopiedHeadline] = useState(false);
  const [copiedGitCmds, setCopiedGitCmds] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentUrl = window.location.origin;

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2200);
  };

  const linkedinHeadline = `Full Stack Developer @ Nyusoft Solutions | React, Next.js, TypeScript, Node.js, PostgreSQL, AWS | 9.73 CGPA`;

  const handleCopyHeadline = () => {
    navigator.clipboard.writeText(linkedinHeadline);
    setCopiedHeadline(true);
    setTimeout(() => setCopiedHeadline(false), 2200);
  };

  const gitCommands = `# 1. Extract the downloaded ZIP file and navigate into the folder:
cd portfolio-pragnesh

# 2. Push directly to your repository:
git remote add origin https://github.com/pragnesh12/Portfolio.git 2>/dev/null || git remote set-url origin https://github.com/pragnesh12/Portfolio.git
git branch -M main
git push -u origin main`;

  const handleCopyGitCmds = () => {
    navigator.clipboard.writeText(gitCommands);
    setCopiedGitCmds(true);
    setTimeout(() => setCopiedGitCmds(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-2xl bg-zinc-950 text-white rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden my-auto p-6 sm:p-8 space-y-6 text-left max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Export to GitHub &amp; Deployment Guide
              </h3>
              <p className="text-xs text-zinc-400">
                How to export this codebase to GitHub, download files, or share the live link.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section 1: Export to GitHub & ZIP Explanation */}
        <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm text-white flex items-center gap-2">
              <Github className="w-4 h-4 text-zinc-300" />
              <span>1. Why &quot;Export to GitHub&quot; might not appear in AI Studio</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-zinc-800 text-zinc-300 border border-zinc-700">
              AI Studio Menu
            </span>
          </div>

          <p className="text-xs text-zinc-300 leading-relaxed">
            In Google AI Studio, the Export options are located in the <strong>top-right corner of the outer browser window</strong> (the three dots <code className="px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-200 border border-zinc-800">...</code> or Settings menu, above this preview frame).
          </p>

          <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-900/40 text-amber-200/90 text-xs space-y-1.5">
            <div className="font-semibold flex items-center gap-1.5 text-amber-300">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>If &quot;Export to GitHub&quot; is not visible in the top menu:</span>
            </div>
            <p className="text-zinc-300 text-[11px] leading-relaxed">
              Google AI Studio requires your GitHub account to be connected and authorized first. If your account is not linked, or if your organization restrictions apply, AI Studio will show <strong>&quot;Export as ZIP&quot;</strong> instead.
            </p>
          </div>

          <div className="pt-2">
            <div className="text-xs font-semibold text-white mb-2 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-zinc-400" />
              <span>The Recommended Method (Export as ZIP &rarr; Push to GitHub):</span>
            </div>
            <ol className="list-decimal list-inside text-xs text-zinc-400 space-y-1 pl-1">
              <li>In AI Studio top right, click <strong>Menu &rarr; Export as ZIP</strong> to download the full codebase.</li>
              <li>Extract the downloaded archive on your computer.</li>
              <li>Open your terminal inside that folder and run the commands below:</li>
            </ol>
          </div>

          {/* Code snippet with copy button */}
          <div className="relative mt-2">
            <pre className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 text-[11px] font-mono text-zinc-300 overflow-x-auto leading-relaxed whitespace-pre">
              {gitCommands}
            </pre>
            <button
              onClick={handleCopyGitCmds}
              className="absolute top-2.5 right-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-[11px] font-semibold text-white border border-zinc-700 transition-colors"
            >
              {copiedGitCmds ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copiedGitCmds ? 'Copied Commands' : 'Copy Commands'}</span>
            </button>
          </div>
        </div>

        {/* Section 2: Live Preview URL */}
        <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm text-white">2. Live Deployment URL</span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-zinc-800 text-zinc-200 border border-zinc-700">
              Active &amp; Shareable
            </span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            This portfolio is hosted and accessible online:
          </p>
          <div className="flex items-center gap-2 bg-zinc-950 p-2 rounded-xl border border-zinc-800">
            <Globe className="w-4 h-4 text-zinc-400 shrink-0" />
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="w-full bg-transparent text-xs font-mono text-zinc-200 focus:outline-none"
            />
            <button
              onClick={handleCopyUrl}
              className="px-4 py-2 rounded-lg bg-white text-black hover:bg-zinc-200 text-xs font-bold shrink-0 transition-colors"
            >
              {copiedUrl ? 'Copied!' : 'Copy Link'}
            </button>
          </div>
        </div>

        {/* Section 3: LinkedIn Headline */}
        <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm text-white flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-zinc-300" />
              <span>3. Recommended LinkedIn Headline</span>
            </span>
          </div>
          <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 text-xs font-mono text-zinc-300 leading-relaxed">
            {linkedinHeadline}
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleCopyHeadline}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white border border-zinc-700 transition-colors"
            >
              {copiedHeadline ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedHeadline ? 'Copied' : 'Copy Headline'}</span>
            </button>
          </div>
        </div>

        {/* Close */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
