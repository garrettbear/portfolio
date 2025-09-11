"use client";

import { useEffect } from "react";
import { ProjectPhoto } from "@/lib/projects";

interface PhotoModalProps {
  photo: ProjectPhoto | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PhotoModal({
  photo,
  isOpen,
  onClose,
}: PhotoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <span className="text-xl font-bold">×</span>
        </button>

        {/* Photo description */}
        {photo.description && (
          <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 max-w-md">
            <p className="text-white text-sm">{photo.description}</p>
          </div>
        )}

        {/* Image */}
        <div className="relative">
          <img
            src={photo.url}
            alt={photo.alt}
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
