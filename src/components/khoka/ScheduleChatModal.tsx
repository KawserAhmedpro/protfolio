import React, { useState } from 'react';

interface ScheduleChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleChatModal: React.FC<ScheduleChatModalProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState<number>(0);
  const [selectedSlot, setSelectedSlot] = useState<string>('04:00 PM');
  const [email, setEmail] = useState('');
  const [step, setStep] = useState<'pick' | 'email' | 'success'>('pick');

  if (!isOpen) return null;

  const dates = [
    { day: 'MON', date: 'NOV 24' },
    { day: 'TUE', date: 'NOV 25' },
    { day: 'WED', date: 'NOV 26' },
    { day: 'THU', date: 'NOV 27' },
    { day: 'FRI', date: 'NOV 28' },
  ];

  const slots = ['10:00 AM', '02:00 PM', '04:00 PM', '08:00 PM'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStep('success');
  };

  const handleReset = () => {
    setStep('pick');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg bg-surface border border-outline-variant rounded-2xl shadow-2xl overflow-hidden p-6 relative">
        <button
          onClick={handleReset}
          className="absolute right-4 top-4 text-on-surface-variant hover:text-primary-container p-1 rounded-lg transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="flex items-center gap-2 text-primary-container mb-3">
          <span className="material-symbols-outlined text-xl">calendar_month</span>
          <h3 className="font-h2 text-lg font-bold text-on-surface">Schedule an Engineering Chat</h3>
        </div>

        {step === 'pick' && (
          <div className="flex flex-col gap-5 mt-2">
            <div>
              <label className="text-xs font-mono-label text-on-surface-variant uppercase font-bold block mb-2">
                1. Select Date (Dhaka Time GMT+6)
              </label>
              <div className="grid grid-cols-5 gap-2">
                {dates.map((d, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedDate(idx)}
                    className={`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedDate === idx
                        ? 'border-primary-container bg-primary-container/10 text-primary-container font-bold'
                        : 'border-outline-variant bg-surface-container/40 text-on-surface-variant hover:border-primary-container/40'
                    }`}
                  >
                    <div className="text-[10px] font-mono-label uppercase">{d.day}</div>
                    <div className="text-xs font-bold font-mono mt-0.5">{d.date}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono-label text-on-surface-variant uppercase font-bold block mb-2">
                2. Select Time Slot
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {slots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-2 px-2 rounded-xl border text-center text-xs font-mono transition-all cursor-pointer ${
                      selectedSlot === slot
                        ? 'border-primary-container bg-primary-container/10 text-primary-container font-bold'
                        : 'border-outline-variant bg-surface-container/40 text-on-surface-variant hover:border-primary-container/40'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-2 border-t border-outline-variant/60">
              <button
                type="button"
                onClick={() => setStep('email')}
                className="px-5 py-2.5 bg-primary-container text-background font-mono-label text-xs uppercase font-extrabold tracking-wider rounded-xl hover:bg-primary-fixed-dim transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Continue</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        )}

        {step === 'email' && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
            <div className="p-3 bg-surface-container/40 rounded-xl border border-outline-variant text-xs font-mono-label text-on-surface flex justify-between">
              <span>{dates[selectedDate].day}, {dates[selectedDate].date}</span>
              <span className="text-primary-container font-bold">{selectedSlot}</span>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono-label text-on-surface-variant uppercase font-bold">
                Your Email Address
              </label>
              <input
                type="email"
                required
                autoFocus
                placeholder="name@company.com or student@institution.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3.5 py-2.5 text-sm bg-surface-container/40 border border-outline-variant rounded-xl text-on-surface focus:outline-none focus:border-primary-container transition-colors"
              />
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-outline-variant/60">
              <button
                type="button"
                onClick={() => setStep('pick')}
                className="text-xs font-mono-label text-on-surface-variant hover:text-on-surface cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 bg-primary-container text-background font-mono-label text-xs uppercase font-extrabold tracking-wider rounded-xl hover:bg-primary-fixed-dim transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span className="material-symbols-outlined text-sm">check</span>
                <span>Confirm Schedule</span>
              </button>
            </div>
          </form>
        )}

        {step === 'success' && (
          <div className="flex flex-col items-center text-center gap-3 py-6 animate-fade-in">
            <div className="h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <span className="material-symbols-outlined text-2xl">check_circle</span>
            </div>
            <h4 className="font-h2 text-lg font-bold text-on-surface">Chat Scheduled!</h4>
            <p className="text-xs text-on-surface-variant max-w-xs leading-relaxed">
              We scheduled your discussion for <strong>{dates[selectedDate].date} at {selectedSlot}</strong> (Dhaka Time).
              A calendar invite confirmation has been sent to <strong>{email}</strong>.
            </p>
            <button
              onClick={handleReset}
              className="mt-2 px-5 py-2 bg-primary-container text-background font-mono-label text-xs uppercase font-extrabold tracking-wider rounded-xl hover:bg-primary-fixed-dim transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
