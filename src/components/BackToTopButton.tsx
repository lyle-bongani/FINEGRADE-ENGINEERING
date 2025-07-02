import React from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTopButton: React.FC = () => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-14 h-14 flex flex-col items-center justify-center shadow-lg transition-colors"
            aria-label="Back to Top"
        >
            <ArrowUp size={24} />
            <span className="text-xs font-bold mt-1">TOP</span>
        </button>
    );
};

export default BackToTopButton; 