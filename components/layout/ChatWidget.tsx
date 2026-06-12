'use client';

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ChatWidget() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {showTooltip && (
        <div className="absolute bottom-16 right-0 bg-warm-50 shadow-lg px-4 py-3 text-sm text-charcoal-800 whitespace-nowrap border border-warm-300/60">
          How can we help you today?
          <div className="absolute -bottom-1 right-6 w-3 h-3 bg-white rotate-45 shadow-lg" />
        </div>
      )}
      <button
        aria-label="Chat with us"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 rounded-full bg-charcoal-800 text-warm-50 shadow-lg flex items-center justify-center hover:bg-charcoal-900 transition-colors duration-300 cursor-pointer"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}
