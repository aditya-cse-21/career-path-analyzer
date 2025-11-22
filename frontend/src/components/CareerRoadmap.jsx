import '../styles/CareerRoadmap.css';

function CareerRoadmap({ data }) {
  if (!data || !data.phases) {
    return <div className="career-roadmap">No roadmap data available</div>;
  }

  const { role, phases } = data;

  return (
    <div className="career-roadmap">
      <h2>Career Roadmap: {role}</h2>

      <div className="phases-container">
        {phases.map((phase, index) => (
          <div key={index} className="phase-card">
            <div className="phase-header">
              <span className="phase-number">Phase {index + 1}</span>
              <span className="phase-duration">{phase.phase}</span>
            </div>
            <h3 className="phase-title">{phase.title}</h3>
            <p className="phase-description">{phase.description}</p>
            <div className="phase-topics">
              <h4>Topics to Cover:</h4>
              <ul>
                {phase.topics.map((topic, topicIndex) => (
                  <li key={topicIndex}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CareerRoadmap;

