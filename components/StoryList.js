import Link from 'next/link';

const StoryList = ({ stories }) => (
    <div className="story-list">
        {stories.map(story => (
            <div key={story.id} className="story">
                <h2 className="story-title">
                    <a href={story.url}>{story.title}</a>
                </h2>
                <div className="story-detail">
                    <span>{story.points || 0} points</span>
                    <Link href={`/story?id=${story.id}`}>
                        <a>{story.comment_count || 0} comments</a>
                    </Link>
                </div>
            </div>
        ))}
    </div>
);

export default StoryList;