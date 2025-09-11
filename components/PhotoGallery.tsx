"use client";

import { useState } from "react";
import { ProjectPhoto } from "@/lib/projects";
import PhotoModal from "./PhotoModal";

interface PhotoGalleryProps {
  photos: ProjectPhoto[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<ProjectPhoto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (photo: ProjectPhoto) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {photos.map((photo, index) => (
          <button
            key={index}
            onClick={() => openModal(photo)}
            className="group relative aspect-square overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
          >
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </button>
        ))}
      </div>

      <PhotoModal
        photo={selectedPhoto}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
