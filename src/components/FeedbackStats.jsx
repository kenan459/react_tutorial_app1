import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  //Calculate Rating Average
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating;
  }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className="feedback-stats">
      {feedback.length} Reviews
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

