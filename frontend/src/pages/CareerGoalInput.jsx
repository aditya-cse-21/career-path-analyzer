import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { analyzeSkillGap, generateRoadmap } from '../api/careerApi';
import '../styles/CareerGoalInput.css';

function CareerGoalInput() {
  const [targetRole, setTargetRole] = useState('');
  const [currentSkills, setCurrentSkills] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const skillsArray = currentSkills
        .split(',')
        .map(skill => skill.trim())
        .filter(skill => skill.length > 0);

      if (!targetRole.trim()) {
        throw new Error('Please enter a target role');
      }

      if (skillsArray.length === 0) {
        throw new Error('Please enter at least one skill');
      }

      const skillGapData = {
        targetRole: targetRole.trim(),
        currentSkills: skillsArray
      };

      const roadmapData = {
        targetRole: targetRole.trim()
      };

      const [skillGapResponse, roadmapResponse] = await Promise.all([
        analyzeSkillGap(skillGapData),
        generateRoadmap(roadmapData)
      ]);

      sessionStorage.setItem('skillGapAnalysis', JSON.stringify(skillGapResponse));
      sessionStorage.setItem('roadmap', JSON.stringify(roadmapResponse));
      sessionStorage.setItem('targetRole', targetRole.trim());

      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || err.message || 'An error occurred');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="career-goal-input">
      <div className="container">
        <h1>Career Path Analyzer</h1>
        <p className="subtitle">Enter your career goals and current skills to get personalized insights</p>

        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="targetRole">Target Role</label>
            <input
              type="text"
              id="targetRole"
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              placeholder="e.g., Backend Developer, Frontend Developer, Data Analyst"
              required
              disabled={loading}
            />
            <small>Available roles: Frontend Developer, Backend Developer, Data Analyst</small>
          </div>

          <div className="form-group">
            <label htmlFor="currentSkills">Current Skills</label>
            <input
              type="text"
              id="currentSkills"
              value={currentSkills}
              onChange={(e) => setCurrentSkills(e.target.value)}
              placeholder="e.g., Java, Git, SQL (comma-separated)"
              required
              disabled={loading}
            />
            <small>Enter your skills separated by commas</small>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Analyzing...' : 'Analyze My Career Path'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CareerGoalInput;

