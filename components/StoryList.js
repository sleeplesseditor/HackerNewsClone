const StoryList = ({ stories }) => (
    <div>
        {stories.map(story => (
            <h3 key={story.id}>{story.title}</h3>
        ))}
    </div>
);

export default StoryList;