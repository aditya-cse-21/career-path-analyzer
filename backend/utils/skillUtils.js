export const getSkillMap = () => {
  return {
    "Frontend Developer": ["HTML", "CSS", "JavaScript", "React", "Git"],
    "Backend Developer": ["Java", "Spring Boot", "SQL", "APIs", "Git"],
    "Data Analyst": ["Excel", "SQL", "Python", "Dashboards", "Statistics"]
  };
};

export const calculateSkillGap = (currentSkills, requiredSkillsNormalized, requiredSkillsOriginal) => {
  const matchedSkills = [];
  const missingSkills = [];
  
  requiredSkillsOriginal.forEach((skill, index) => {
    if (currentSkills.includes(requiredSkillsNormalized[index])) {
      matchedSkills.push(skill);
    } else {
      missingSkills.push(skill);
    }
  });
  
  const recommendations = missingSkills.map(skill => {
    if (skill.toLowerCase().includes('sql')) {
      return `Learn ${skill}: Start with basic queries, then move to joins and subqueries`;
    } else if (skill.toLowerCase().includes('react')) {
      return `Learn ${skill}: Start with components, hooks, and state management`;
    } else if (skill.toLowerCase().includes('spring boot')) {
      return `Learn ${skill}: Master Spring Boot fundamentals, REST APIs, and dependency injection`;
    } else if (skill.toLowerCase().includes('python')) {
      return `Learn ${skill}: Start with basics, then pandas and data visualization libraries`;
    } else {
      return `Learn ${skill}: Focus on practical projects and hands-on experience`;
    }
  });
  
  const learningOrder = [...missingSkills].sort((a, b) => {
    if (a.toLowerCase() === 'git') return -1;
    if (b.toLowerCase() === 'git') return 1;
    if (a.toLowerCase().includes('sql')) return -1;
    if (b.toLowerCase().includes('sql')) return 1;
    return a.length - b.length;
  });
  
  return {
    matchedSkills,
    missingSkills,
    recommendations,
    learningOrder
  };
};

