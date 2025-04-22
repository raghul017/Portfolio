import { 
  Eye, 
  MessageSquare,
  CheckSquare,
  Briefcase,
  Circle,
  Triangle,
  Square
} from "lucide-react";
import React from "react";

// Helper function to create icon elements
const createIcon = (Component: React.FC<React.SVGProps<SVGSVGElement>>) => {
  return React.createElement(Component, { className: "h-10 w-10 text-matt-black" });
};

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "YOLO Object Detection",
    description: "Developed an object detection system using YOLOv5 to recognize and classify real-world objects in images and video streams. Leveraged OpenCV and Python for preprocessing and real-time deployment.",
    icon: createIcon(Eye),
    technologies: ["Python", "YOLO", "OpenCV"],
    image: "/images/projects/yolo-detection.jpg",
    githubUrl: "https://github.com/raghul017",
    featured: true
  },
  {
    id: 2,
    title: "Sentiment Analysis on Social Media Posts",
    description: "Built an NLP model to classify sentiments in social media posts as positive, negative, or neutral. Employed text preprocessing, tokenization, and classification using Scikit-learn, Pandas, and NLTK.",
    icon: createIcon(MessageSquare),
    technologies: ["Python", "Scikit-learn", "NLTK", "NLP"],
    image: "/images/projects/sentiment-analysis.jpg"
  },
  {
    id: 3,
    title: "TaskFlow – Task Management App",
    description: "Created a full-stack web application to manage tasks with deadlines, tags, and status updates. Implemented user authentication, task sorting, and filtering functionalities.",
    icon: createIcon(CheckSquare),
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    image: "/images/projects/taskflow-app.jpg",
    demoUrl: "https://example.com/taskflow",
    featured: true
  },
  {
    id: 4,
    title: "Futurense - USP",
    description: "Contributed to performance analytics and reporting for a US placement-focused upskilling initiative. Supported evaluation of student progress and training impact using data visualization tools.",
    icon: createIcon(Briefcase),
    technologies: ["Python", "Excel", "Power BI"],
    image: "/images/projects/data-dashboard.jpg"
  }
];
