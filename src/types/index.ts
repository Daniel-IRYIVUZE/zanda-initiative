// src/types/index.ts
export interface Donation {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  amount: string;
  message: string;
  timestamp: string;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  videoId: string;
  duration: string;
  instructor: string;
}