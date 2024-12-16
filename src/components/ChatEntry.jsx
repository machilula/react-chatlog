import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = ({id, sender, body, timeStamp, liked, onLikeEntry }) => {
  const likeButton = liked ? '❤️' : '🤍';
  const isLocal = sender === 'Vladimir' ? 'local' : 'remote';

  const onLikeToggle = () => {
    onLikeEntry(id);
  };
  return (
    <div className={`chat-entry ${isLocal}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button
          className="like"
          onClick={onLikeToggle}>{likeButton}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.shape(
    { time: PropTypes.string.isRequired }
  ).isRequired,
  liked: PropTypes.bool.isRequired,
  onLikeEntry: PropTypes.func.isRequired
};

export default ChatEntry;
