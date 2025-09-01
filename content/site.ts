export const site = {
  name: "Prince Kumar",
  title: "Java Developer | MERN Stack Developer",
  bio: "Passionate software developer skilled in Java, Python, DSA, and MERN. I build reliable, scalable products and love shipping clean, maintainable code. I’m interested in computer vision, backend engineering, and modern web apps.",
  contact: {
    email: "[your email]",
    github: "[your GitHub]",
    linkedin: "[your LinkedIn]",
    phone: "",
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
      github: "[ADD HERE]",
      demo: "[ADD HERE]",
      media: "/object-detection-thumbnail.png",
    },
  ],
  education: {
    degree: "B.Tech in Computer Science",
    college: "[Your College Name]",
    years: "2021–2025",
    highlights: ["CGPA: [X.Y]/10", "Relevant Courses: DSA, OS, DBMS, CN"],
  },
  experience: [
    // Optional entries, leave empty to hide
    // { role: 'SDE Intern', company: 'Company', period: 'Jun 2024 – Aug 2024', points: ['Built X', 'Improved Y by Z%'] },
  ],
} as const

export type Site = typeof site
