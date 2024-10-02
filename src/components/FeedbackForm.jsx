import { useState } from "react";
import Card from "./shared/card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

export default function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState("10");
  const [btnDisabled, setBtnDisabled] = useState("true");
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length < 10) {
      setMessage("Text must be atleast 10 characters");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };
      handleAdd(newFeedback);
      setText('')
    }
  };

  return (
    <div>
      <Card>
        <form onSubmit={handleSubmit}>
          <h2>Rate your service with us:</h2>
          <RatingSelect select={(rating) => setRating(rating)} />
          <div className="input-group">
            <input
              onChange={handleTextChange}
              type="text"
              placeholder="Write a review"
              value={text}
            />
            <Button type="submit" version="secondary" isDisabled={btnDisabled}>
              Send
            </Button>
          </div>
          {message && <div className="message">{message}</div>}
        </form>
      </Card>
    </div>
  );
}
