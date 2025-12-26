import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface Room {
  id: string;
  name: string;
  description: string;
  capacity: number;
  price: string;
  imageUrl: string;
  features: string[];
  imageMirrored?: boolean; // Permite espelhar a imagem horizontalmente
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  longDescription?: string; // Texto expandido para a janela flutuante (Desktop/Tablet)
  // Fix: Allow both LucideIcon and standard React component types to support custom SVG icons
  icon: LucideIcon | React.ComponentType<any>;
  imageUrl?: string;
  imageUrls?: string[]; // Galeria de imagens para os detalhes
  imageLabels?: string[]; // Tags específicas para cada imagem da galeria
  imageMirrored?: boolean; // Permite espelhar a imagem visualmente via CSS
  mirroredIndices?: number[]; // Índices específicos da galeria que devem ser espelhados
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface NavigationLink {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
}