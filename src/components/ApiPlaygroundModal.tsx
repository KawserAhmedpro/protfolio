import React, { useState } from 'react';
import { X, Play, Code2, Check, Copy } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface ApiPlaygroundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApiPlaygroundModal: React.FC<ApiPlaygroundModalProps> = ({ isOpen, onClose }) => {
  const [selectedEndpointIndex, setSelectedEndpointIndex] = useState(0);
  const [isExecuting, setIsExecuting] = useState(false);
  const [hasExecuted, setHasExecuted] = useState(true);
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const currentEndpoint = PORTFOLIO_DATA.simulatedApiEndpoints[selectedEndpointIndex];

  const handleExecute = () => {
    sound.playTerminal();
    setIsExecuting(true);
    setHasExecuted(false);
    setTimeout(() => {
      setIsExecuting(false);
      setHasExecuted(true);
      sound.playSuccess();
    }, 280);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentEndpoint.csharpSnippet);
    sound.playSuccess();
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="w-full max-w-4xl max-h-[90vh] rounded-2xl bg-[#0D1016] border border-white/15 shadow-2xl overflow-hidden flex flex-col font-mono text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#121620] border-b border-white/10 select-none">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C8FF00] animate-pulse" />
            <span className="text-white font-bold tracking-wide text-xs sm:text-sm">
              ASP.NET CORE 8.0 // KESTREL WEB API WORKBENCH
            </span>
            <span className="hidden md:inline px-2 py-0.5 rounded bg-white/5 text-[10px] text-zinc-400">
              Interactive Controller Simulator
            </span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1 rounded text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Endpoints Selector */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Select Endpoint to Test:
            </div>
            <div className="space-y-2">
              {PORTFOLIO_DATA.simulatedApiEndpoints.map((ep, idx) => {
                const isSelected = idx === selectedEndpointIndex;
                const isGet = ep.method === 'GET';
                return (
                  <button
                    key={ep.path}
                    onClick={() => {
                      sound.playClick();
                      setSelectedEndpointIndex(idx);
                      setHasExecuted(true);
                    }}
                    className={`w-full text-left p-3 rounded-lg border transition-all flex flex-col gap-1.5 ${
                      isSelected
                        ? 'bg-[#181D2A] border-[#C8FF00]/50 shadow-md'
                        : 'bg-[#10131B] border-white/5 hover:border-white/20 text-zinc-400'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                            isGet ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                          }`}
                        >
                          {ep.method}
                        </span>
                        <span className={`font-mono text-xs ${isSelected ? 'text-white font-bold' : 'text-zinc-300'}`}>
                          {ep.path}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] text-zinc-400 font-sans">{ep.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Test Action Button */}
            <div className="pt-2">
              <button
                onClick={handleExecute}
                disabled={isExecuting}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#C8FF00] hover:bg-[#b2e600] text-[#090A0E] font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-[#C8FF00]/20 cursor-pointer disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isExecuting ? 'Dispatching Request...' : 'Send HTTP Request'}</span>
              </button>
            </div>

            {/* Endpoint description */}
            <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-[11px] text-zinc-400 font-sans leading-relaxed">
              <strong className="text-zinc-300">Context:</strong> {currentEndpoint.description}
            </div>
          </div>

          {/* Right Column: Execution Result & C# Source Snippet */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* HTTP Response Box */}
            <div className="flex-1 rounded-xl bg-black/60 border border-white/10 overflow-hidden flex flex-col">
              <div className="flex items-center justify-between px-3.5 py-2 bg-[#121620] border-b border-white/10 text-[11px] text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold">RESPONSE STREAM</span>
                  {hasExecuted && (
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                      {currentEndpoint.responseCode} OK
                    </span>
                  )}
                </div>
                {hasExecuted && (
                  <div className="flex items-center gap-2 text-zinc-500 text-[10px]">
                    <span>Latency: {currentEndpoint.responseTimeMs}ms</span>
                    <span>•</span>
                    <span>Server: Kestrel</span>
                  </div>
                )}
              </div>

              <div className="p-3 flex-1 overflow-x-auto text-[11px] leading-relaxed">
                {isExecuting ? (
                  <div className="py-8 text-center text-zinc-500 animate-pulse">
                    Connecting to Kestrel server via TCP socket...
                  </div>
                ) : (
                  <pre className="text-emerald-300">
                    {JSON.stringify(currentEndpoint.responseBody, null, 2)}
                  </pre>
                )}
              </div>
            </div>

            {/* C# ASP.NET Core Controller Code Snippet */}
            <div className="rounded-xl bg-[#090A0E] border border-white/10 overflow-hidden flex flex-col">
              <div className="flex items-center justify-between px-3.5 py-2 bg-[#121620] border-b border-white/10 text-[11px] text-zinc-400">
                <div className="flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-[#C8FF00]" />
                  <span className="text-zinc-200 font-semibold">C# Controller Source</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-[10px] text-zinc-400 hover:text-white transition-colors"
                >
                  {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="p-3 overflow-x-auto">
                <pre className="text-cyan-300 text-[11px] leading-relaxed font-mono">
                  {currentEndpoint.csharpSnippet}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-2.5 bg-[#090A0E] border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500">
          <span>Backend Framework: ASP.NET Core 8 / Entity Framework Core / PostgreSQL</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
