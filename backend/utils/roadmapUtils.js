export const getRoadmap = (targetRole) => {
  const roadmaps = {
    "Frontend Developer": {
      role: "Frontend Developer",
      phases: [
        {
          phase: "Phase 1 (1-2 months)",
          title: "Foundation",
          topics: ["HTML basics", "CSS fundamentals", "JavaScript basics", "Git version control"],
          description: "Build a solid foundation in web technologies"
        },
        {
          phase: "Phase 2 (2-3 months)",
          title: "React Development",
          topics: ["React components", "Hooks (useState, useEffect)", "Props and state management", "React Router"],
          description: "Master React framework and component-based development"
        },
        {
          phase: "Phase 3 (1-2 months)",
          title: "Advanced & Deployment",
          topics: ["Context API", "Performance optimization", "Testing", "Deployment (Vercel/Netlify)"],
          description: "Advanced concepts and production deployment"
        }
      ]
    },
    "Backend Developer": {
      role: "Backend Developer",
      phases: [
        {
          phase: "Phase 1 (1-2 months)",
          title: "Java Basics",
          topics: ["Java fundamentals", "Object-Oriented Programming", "Git version control", "IDE setup"],
          description: "Master Java programming fundamentals"
        },
        {
          phase: "Phase 2 (2 months)",
          title: "Framework & Database",
          topics: ["Spring Boot basics", "RESTful APIs", "SQL databases", "JPA/Hibernate"],
          description: "Learn Spring Boot framework and database integration"
        },
        {
          phase: "Phase 3 (1-2 months)",
          title: "Advanced & Deployment",
          topics: ["Microservices basics", "System Design fundamentals", "Docker basics", "Cloud deployment"],
          description: "Advanced backend concepts and deployment strategies"
        }
      ]
    },
    "Data Analyst": {
      role: "Data Analyst",
      phases: [
        {
          phase: "Phase 1 (1-2 months)",
          title: "Data Fundamentals",
          topics: ["Excel advanced functions", "SQL basics", "Data cleaning", "Statistics fundamentals"],
          description: "Build strong data manipulation and analysis foundation"
        },
        {
          phase: "Phase 2 (2-3 months)",
          title: "Python & Visualization",
          topics: ["Python for data analysis", "Pandas library", "Data visualization (Matplotlib, Seaborn)", "Jupyter Notebooks"],
          description: "Master Python for data analysis and visualization"
        },
        {
          phase: "Phase 3 (1-2 months)",
          title: "Dashboards & Reporting",
          topics: ["Dashboard creation (Tableau/Power BI)", "Advanced SQL queries", "Statistical analysis", "Report generation"],
          description: "Create professional dashboards and reports"
        }
      ]
    }
  };
  
  return roadmaps[targetRole] || null;
};

