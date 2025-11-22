import axios from 'axios';

export const getTopNews = async (req, res, next) => {
  try {
    const topStoriesResponse = await axios.get(
      'https://hacker-news.firebaseio.com/v0/topstories.json'
    );
    
    const topStoryIds = topStoriesResponse.data;
    const top5Ids = topStoryIds.slice(0, 5);
    
    const storyPromises = top5Ids.map(id =>
      axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    );
    
    const storyResponses = await Promise.all(storyPromises);
    
    const formattedStories = storyResponses.map(response => {
      const story = response.data;
      const date = new Date(story.time * 1000);
      const formattedTime = date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      
      return {
        title: story.title || 'No title',
        url: story.url || '',
        score: story.score || 0,
        time: formattedTime,
        type: story.type || 'unknown',
        by: story.by || 'unknown'
      };
    });
    
    res.json(formattedStories);
  } catch (error) {
    console.error('Error fetching HackerNews:', error);
    next(error);
  }
};

