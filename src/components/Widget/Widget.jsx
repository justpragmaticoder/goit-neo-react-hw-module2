import { useState, useEffect } from "react";
import css from "./Widget.module.css";
import Description from "@components/Description/Description";
import Feedback from "@components/Feedback/Feedback";
import Notification from "@components/Notification/Notification";
import Options from "@components/Options/Options";

const CACHE_KEY = 'feedback_cache';
const TOTAL_PCT = 100;

export const Widget = ({}) => {
  const [feedback, setFeedback] = useState(() => {
    const storedData = window.localStorage.getItem(CACHE_KEY);

    if (storedData !== null) {
      return JSON.parse(storedData);
    } else
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
  });

  useEffect(() => {
    window.localStorage.setItem(CACHE_KEY, JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePct = Math.round((feedback.good / totalFeedback) * TOTAL_PCT);

  return (
      <div className={css.container}>
        <Description></Description>
        <Options
            options={feedback}
            onLeaveFeedback={updateFeedback}
            total={totalFeedback}
            onResetFeedback={resetFeedback}
        />
        {totalFeedback !== 0 && (
            <Feedback feedback={feedback} total={totalFeedback} positive={positivePct}/>
        )}
        {totalFeedback === 0 && <Notification />}
      </div>
  );
}

export default Widget;
