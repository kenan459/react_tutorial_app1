import { Link } from "react-router-dom";
import Card from "../components/shared/card";

export default function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About Page</h1>
        <p>This is a React app to leave feedback for a product or service.</p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  );
}
