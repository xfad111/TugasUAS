export interface User {
  id: string;
  name: string;
  username: string;
  isAdmin: boolean;
}

export interface Order {
  id: string;
  userId: string;
  serviceType: ServiceType;
  description: string;
  budget: number;
  timeline: string;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Invoice {
  id: string;
  orderId: string;
  userId: string;
  amount: number;
  status: InvoiceStatus;
  dueDate: string;
  createdAt: string;
}

export enum ServiceType {
  GraphicDesign = 'Graphic Design',
  WebDevelopment = 'Web Development',
  ContentCreation = 'Content Creation',
  VideoProduction = 'Video Production',
  SocialMediaManagement = 'Social Media Management',
}

export enum OrderStatus {
  Pending = 'Pending',
  InProgress = 'In Progress',
  Completed = 'Completed',
  Cancelled = 'Cancelled',
}

export enum InvoiceStatus {
  Pending = 'Pending',
  Paid = 'Paid',
  Overdue = 'Overdue',
}