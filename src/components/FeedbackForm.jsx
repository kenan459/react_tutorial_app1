import { useState } from "react";
import Card from "./shared/card";
import Button from './shared/Button';

export default function FeedbackForm() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <Card>
        <form>
          <h2>Rate your service with us:</h2>
          {/* Rating select component */}
          <div className="input-group">
            <input
              onChange={handleTextChange}
              type="text"
              placeholder="Write a review"
              value={text}
            />
            <Button type='submit' version='secondary'>Send</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
