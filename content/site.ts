export const site = {
  name: "Prince Kumar",
  title: "Java Developer | MERN Stack Developer",
  bio: "Passionate software developer skilled in Java, Python, DSA, and MERN. I build reliable, scalable products and love shipping clean, maintainable code. I’m interested in computer vision, backend engineering, and modern web apps.",
  contact: {
  email: "prince.kumar1.cs.2022@mitmeerut.ac.in",
  github: "https://github.com/Prince12cyber",
  linkedin: "http://www.linkedin.com/in/prince-kumar-228884263",
    phone: "",
    whatsapp: "/+918092128185", // Added WhatsApp contact
  },
  skills: [
    { name: "Java" },
    { name: "Python" },
    { name: "Data Structures & Algorithms" },
    { name: "MongoDB" },
    { name: "Express" },
    { name: "React" },
    { name: "Node.js" },
  ],
  projects: [
    {
      title: "Object Detecting Video Feed",
      description: "Real-time object detection on live video using computer vision.",
      stack: ["Python", "OpenCV", "TensorFlow"],
  github: "https://github.com/Prince12cyber/Object_detecting_video_feed",
      demo: "[ADD HERE]",
      media: "/object-detection-thumbnail.png",
    },
  ],
  education: {
  degree: "B.Tech in Computer Science",
  college: "MIT Meerut",
  years: "2022–2026",
  highlights: ["Relevant Courses: DSA, OS, DBMS, CN"],
  },
  experience: [
    // Optional entries, leave empty to hide
    // { role: 'SDE Intern', company: 'Company', period: 'Jun 2024 – Aug 2024', points: ['Built X', 'Improved Y by Z%'] },
  ],
} as const

export type Site = typeof site
