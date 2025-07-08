import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import AuthForm from './AuthForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess?: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onAuthSuccess,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleAuthSuccess = () => {
    onAuthSuccess?.();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm h-screen"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors"
        >
          <X className="h-6 w-6 text-white" />
        </button>

        <AuthForm onAuthSuccess={handleAuthSuccess} onClose={onClose} />
      </div>
    </div>
  );
};

export default AuthModal;
