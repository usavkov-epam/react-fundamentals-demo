declare module '*.module.css';
declare module '*.module.scss';

interface Course {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
}

interface Author {
  id: string;
  name: string;
}
