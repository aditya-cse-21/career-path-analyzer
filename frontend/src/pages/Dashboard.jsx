import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTopNews } from '../api/careerApi';
import SkillGapAnalyzer from '../components/SkillGapAnalyzer';
import CareerRoadmap from '../components/CareerRoadmap';
import TechNews from '../components/TechNews';
import '../styles/Dashboard.css';

/**
 * Dashboard Page
 * Displays Skill Gap Analysis, Career Roadmap, and Tech News
 * Layout: Left side (Skill Gap), Right side (Roadmap), Bottom (News)
 */
function Dashboard() {
  const [skillGapData, setSkillGapData] = useState(null);
  const [roadmapData, setRoadmapData] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsError, setNewsError] = useState('');
  const navigate = useNavigate();

  // Load data from sessionStorage on mount
  useEffect(() => {
    const storedSkillGap = sessionStorage.getItem('skillGapAnalysis');
    const storedRoadmap = sessionStorage.getItem('roadmap');

    if (storedSkillGap) {
      setSkillGapData(JSON.parse(storedSkillGap));
    }

    if (storedRoadmap) {
      setRoadmapData(JSON.parse(storedRoadmap));
    }

    // If no data, redirect to input page
    if (!storedSkillGap || !storedRoadmap) {
      navigate('/');
    }
  }, [navigate]);

  // Fetch news on mount
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setNewsLoading(true);
        const news = await getTopNews();
        setNewsData(news);
      } catch (err) {
        setNewsError(err.response?.data?.error || err.message || 'Failed to load news');
        console.error('Error fetching news:', err);
      } finally {
        setNewsLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleBack = () => {
    navigate('/');
  };

  if (!skillGapData || !roadmapData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Career Path Dashboard</h1>
        <button onClick={handleBack} className="back-button">
          ← Back to Input
        </button>
      </div>

      <div className="dashboard-content">
        {/* Left side: Skill Gap Analyzer */}
        <div className="dashboard-left">
          <SkillGapAnalyzer data={skillGapData} />
        </div>

        {/* Right side: Career Roadmap */}
        <div className="dashboard-right">
          <CareerRoadmap data={roadmapData} />
        </div>
      </div>

      {/* Bottom: Latest Tech News */}
      <div className="dashboard-bottom">
        <TechNews news={newsData} loading={newsLoading} error={newsError} />
      </div>
    </div>
  );
}

export default Dashboard;

