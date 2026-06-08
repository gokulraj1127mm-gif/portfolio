// Mock data for portfolio - will be replaced with backend API later

export const profileData = {
  name: "Gokul Raj ",
  role: "B.Tech Information Technology Student",
  college: "St. Peter's College of Engineering and Technology",
  summary: "Passionate IT student with a keen interest in software development, testing, and emerging technologies. Eager to learn and contribute to innovative projects.",
  email: "gokulraj1127mm@gmail.com",
  phone: "+91 8122112760",
  location: "Tamil Nadu, India",
  profileImage: "/photos/bg.jpeg",
  resumeUrl: "/RESUME/gokulresume.pdf",
  social: {
    instagram: "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=lnbdz3a",
    linkedin: "https://www.linkedin.com/in/gokul-raj-422933344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/gokulraj1127mm-gif"
  }
};

export const aboutData = {
  title: "About Me",
  paragraphs: [
    "I am a dedicated Information Technology student at St. Peter's College of Engineering and Technology, passionate about leveraging technology to solve real-world problems.",
    "My journey in tech has equipped me with a solid foundation in programming, web development, and software testing. I thrive in collaborative environments and am always eager to learn new technologies and methodologies.",
    "Beyond academics, I actively participate in coding competitions and tech communities to stay updated with industry trends. I believe in continuous learning and am committed to growing as a well-rounded technology professional."
  ]
};

export const skillsData = {
  technical: [
    { name: "HTML/CSS", level: 90 },
    { name: "MongoDB", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "MySQL", level: 60 },
    { name: "Git/GitHub", level: 85 },
    { name: "Java", level: 70 }
  ],
  soft: [
    { name: "Communication", icon: "MessageSquare" },
    { name: "Teamwork", icon: "Users" },
    { name: "Problem Solving", icon: "Lightbulb" },
    { name: "Adaptability", icon: "RefreshCw" },
    { name: "Time Management", icon: "Clock" },
    { name: "Critical Thinking", icon: "Brain" }
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "Food Connect Web App",
    description: "A Food connect application that fetches real-time Food data using APIs",
    technologies: ["JavaScript", "HTML", "CSS", "REST API","PHP"],
    role: "Frontend Developer",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRknytHFuyQHddB-rcBwRWz9JOEW0SQDaz1QQ&s",
    github: "https://github.com/gokulraj1127mm-gif",
    live: "#"
  },
    {
    id: 2,
    title: "Electricity Bill Calculator Web App",
    description: "Built a full-stack Electricity Bill Calculator with automated bill calculation, subsidy management, bill history, and PDF generation features.",
    technologies: ["JavaScript", "HTML", "CSS", "React","Node.js","Express.js"],
    role: "MERN Stack Developer",
    image:"https://play-lh.googleusercontent.com/MuzIpFolgzfIKUOzzQBvB6kmba1FFi_aF35BkDPCGS7oeRo-_hHLstrO6ksEmtrvnA",
    github: "https://github.com/gokulraj1127mm-gif",
    live: "https://electricity-bill-app-flame.vercel.app/"
  },
  {
    id: 3,
    title: "Daily-Expense-Tracker Web App",
    description: "A Daily Expense Tracker helps you easily record and manage your daily spending and income.",
    technologies: ["JavaScript", "HTML", "CSS", "React","Node.js","Express.js"],
    role: "MERN Stack Developer",
    image:"https://play-lh.googleusercontent.com/z9aDlvPVi7ZtxQjTKCmcuzF1c14x6fjcCY7JWPAsHXyo_xJPwKlS1-MVfPZRvWXyow",
    github: "https://github.com/gokulraj1127mm-gif",
    live: "https://daily-expense-tracker-3-cviw.onrender.com"
  }
  
];

export const experienceData = [
  {
    id: 1,
    company: "Teamacy",
    role: "Full Stack Developer",
    duration: "January 2026 - Present",
    responsibilities: [
      "Developed and maintained responsive web pages using HTML, CSS, and JavaScript",
      "Collaborated with the design team to implement UI/UX improvements",
      "Participated in code reviews and implemented feedback for quality assurance",
      "Assisted in debugging and testing web applications"
    ]
  }
];

export const certificationsData = [
  {
    id: 1,
    name: "Full Stack Web Development",
    platform: "simplilearn",
    date: "2024",
    icon: "Award"
  },
  {
    id: 2,
    name: "Python for Data Science",
    platform: "NPTEL",
    date: "2024",
    icon: "Award"
  },
  {
    id:3,
    name:"Getting Started with Full Stack Java Development",
    platform:"simplilearn",
    date:"2026",
    icon:"Award"
  },
  {
    id:4,
    name:"Deep Learning",
    platform:"simplilearn",
    date:"2026",
    icon:"Award"
  }
];

export const educationData = [
  {
    id: 1,
    degree: "B.Tech - Information Technology",
    institution: "St. Peter's College of Engineering and Technology",
    duration: "2022 - 2026",
    description: "Currently pursuing Bachelor's degree in Information Technology with focus on software development, database management, and emerging technologies."
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Sri Ramakrishna Matriculation Higher Secondary School",
    duration: "2020 - 2022",
    description: "Completed higher secondary education with Computer Science as major subject."
  }
];

export const achievementsData = [
 
  {
    id: 1,
    title: "Academic Excellence Award",
    description: "Recognized for outstanding academic performance in IT department",
    icon: "Certificate"
  },
 
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];
