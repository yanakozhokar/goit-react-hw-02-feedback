import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ buttonClickHandler }) => {
  return (
    <div className={css.buttons}>
      <button
        type="button"
        className={css.button}
        name="good"
        onClick={event => {
          buttonClickHandler(event);
        }}
      >
        Good
      </button>
      <button
        type="button"
        className={css.button}
        name="neutral"
        onClick={event => {
          buttonClickHandler(event);
        }}
      >
        Neutral
      </button>
      <button
        type="button"
        className={css.button}
        name="bad"
        onClick={event => {
          buttonClickHandler(event);
        }}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
