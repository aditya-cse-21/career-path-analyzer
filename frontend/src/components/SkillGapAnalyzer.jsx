import '../styles/SkillGapAnalyzer.css';

function SkillGapAnalyzer({ data }) {
  if (!data) {
    return <div className="skill-gap-analyzer">No data available</div>;
  }

  const { matchedSkills, missingSkills, recommendations, learningOrder } = data;

  return (
    <div className="skill-gap-analyzer">
      <h2>Skill Gap Analysis</h2>

      <div className="skill-section">
        <h3>✅ Matched Skills</h3>
        {matchedSkills.length > 0 ? (
          <ul className="skill-list matched">
            {matchedSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        ) : (
          <p className="no-skills">No matched skills yet. Start learning!</p>
        )}
      </div>

      <div className="skill-section">
        <h3>❌ Missing Skills</h3>
        {missingSkills.length > 0 ? (
          <ul className="skill-list missing">
            {missingSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        ) : (
          <p className="no-skills">Great! You have all required skills.</p>
        )}
      </div>

      <div className="skill-section">
        <h3>💡 Recommendations</h3>
        {recommendations.length > 0 ? (
          <ul className="recommendations-list">
            {recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        ) : (
          <p className="no-skills">No recommendations at this time.</p>
        )}
      </div>

      <div className="skill-section">
        <h3>📚 Learning Order</h3>
        {learningOrder.length > 0 ? (
          <ol className="learning-order">
            {learningOrder.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ol>
        ) : (
          <p className="no-skills">No skills to learn.</p>
        )}
      </div>
    </div>
  );
}

export default SkillGapAnalyzer;

