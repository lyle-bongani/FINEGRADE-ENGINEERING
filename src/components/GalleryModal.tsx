import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface GalleryModalProps {
  open: boolean;
  images: string[];
  alt: string;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ open, images, alt, index, onClose, onPrev, onNext }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <button className="absolute top-6 right-8 text-white hover:text-blue-400" onClick={onClose} aria-label="Close">
        <CloseIcon fontSize="large" />
      </button>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 p-2 rounded-full bg-black/40"
        onClick={onPrev}
        aria-label="Previous"
      >
        <ArrowBackIosNewIcon fontSize="large" />
      </button>
      <div className="flex flex-col items-center max-w-3xl w-full">
        <img
          src={images[index]}
          alt={alt}
          className="max-h-[80vh] w-auto rounded-xl shadow-lg bg-white"
          style={{ maxWidth: '90vw' }}
        />
        <div className="mt-4 text-white text-center text-lg max-w-2xl bg-black/50 px-4 py-2 rounded">
          {alt}
        </div>
      </div>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 p-2 rounded-full bg-black/40"
        onClick={onNext}
        aria-label="Next"
      >
        <ArrowForwardIosIcon fontSize="large" />
      </button>
    </div>
  );
};

export default GalleryModal;
