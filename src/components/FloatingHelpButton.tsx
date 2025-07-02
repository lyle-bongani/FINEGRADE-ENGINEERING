import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingHelpButton: React.FC = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="fixed bottom-24 right-6 z-50 flex flex-col items-center">
            {showTooltip && (
                <div className="mb-2 px-4 py-2 bg-white text-gray-800 rounded shadow text-sm whitespace-nowrap">
                    Need Help? <span className="font-semibold text-blue-600">Chat with us</span>
                </div>
            )}
            <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-colors"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                aria-label="Chat with us on WhatsApp"
            >
                <MessageCircle size={32} />
            </a>
        </div>
    );
};

export default FloatingHelpButton; 