'use client';

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ChatWidget() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {showTooltip && (
        <div className="absolute bottom-16 right-0 bg-white shadow-lg rounded-lg px-4 py-3 text-sm text-maroon-800 whitespace-nowrap">
          How can we help you today?
          <div className="absolute -bottom-1 right-6 w-3 h-3 bg-white rotate-45 shadow-lg" />
        </div>
      )}
      <button
        aria-label="Chat with us"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 rounded-full bg-maroon-800 text-white shadow-lg flex items-center justify-center hover:bg-maroon-900 hover:scale-105 transition-all duration-300"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}
