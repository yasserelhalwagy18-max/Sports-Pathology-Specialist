
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface Publication {
  title: string;
  journal: string;
  year: string;
  impact: 'High' | 'Medium' | 'Low' | string;
  category: string;
  icon: any;
}

export interface UserProfile {
  name: string;
  phone: string;
  age: string;
  weight: string;
  height: string;
  injuryConcern: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  phone: string;
  date: string;
  time: string;
  type: 'online' | 'in-person';
  status: 'pending' | 'confirmed' | 'completed';
  reason?: string;
}

export interface Exercise {
  id: string;
  title: string;
  videoUrl: string;
  thumbnail: string;
  sets: number;
  reps: string;
  description: string;
  duration: string;
  category?: 'Shoulder' | 'Knee' | 'Spine' | string;
}

export interface RehabProgram {
  id: string;
  title: string;
  week: number;
  exercises: Exercise[];
}

export interface RehabLog {
  exerciseId: string;
  date: string;
  completed: boolean;
  painLevel: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export interface PatientRecord {
  id: string;
  name: string;
  phone: string;
  lastVisit: string;
  rehabProgress: number;
  avgPain: number;
  status: 'active' | 'recovered' | 'observation';
}

export interface Prescription {
  id: string;
  patientId: string;
  patientName: string;
  exercises: Exercise[];
  assignedDate: string;
  status: 'active' | 'completed';
}
