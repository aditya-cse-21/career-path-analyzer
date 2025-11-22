import '../styles/TechNews.css';

function TechNews({ news, loading, error }) {
  if (loading) {
    return (
      <div className="tech-news">
        <h2>Latest Tech News</h2>
        <div className="loading">Loading news...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="tech-news">
        <h2>Latest Tech News</h2>
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  if (!news || news.length === 0) {
    return (
      <div className="tech-news">
        <h2>Latest Tech News</h2>
        <div className="no-news">No news available</div>
      </div>
    );
  }

  return (
    <div className="tech-news">
      <h2>Latest Tech News (Top 5 from HackerNews)</h2>
      <div className="news-list">
        {news.map((item, index) => (
          <div key={index} className="news-item">
            <div className="news-header">
              <h3 className="news-title">
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h3>
              <span className="news-score">⭐ {item.score}</span>
            </div>
            <div className="news-meta">
              <span className="news-author">by {item.by}</span>
              <span className="news-time">{item.time}</span>
              <span className="news-type">{item.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechNews;

