import css from "./Feedback.module.css";

export const Feedback = ({ feedback, total, positive }) => {
  return (
    <div className={css.feedbackBlock}>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p className={css.feedbackTotal}>Total: {total}</p>
      <p className={css.feedbackPositive}>Positive: {positive}%</p>
    </div>
  );
};

export default Feedback;
