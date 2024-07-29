import css from "./Options.module.css";

export const Options = ({
  options,
  total,
  onLeaveFeedback,
  onResetFeedback,
}) => {
  return (
    <div className={css.buttonsBlock}>
      {Object.keys(options).map((option) => (
        <button
          key={option}
          type="button"
          className={css.voteButton}
          onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
      {total != 0 && (
        <button
          type="button"
          className={css.resetButton}
          onClick={() => onResetFeedback()}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
