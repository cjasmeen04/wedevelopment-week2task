
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  RotateCcw,
  ArrowLeft,
  Trophy,
  Save,
  LoaderCircle,
} from "lucide-react";
import axios from "axios";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score || 0;
  const total = location.state?.total || 20;

  const percentage = Math.round((score / total) * 100);

  const [name, setName] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  let message = "Keep practicing.";
  let subMessage =
    "A little more practice will make a big difference.";

  if (percentage >= 80) {
    message = "Excellent performance.";
    subMessage =
      "You have a strong understanding of the questions.";
  } else if (percentage >= 60) {
    message = "Good work.";
    subMessage =
      "You're on the right track. Keep improving.";
  }

  const saveScore = async () => {
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    setSaving(true);
    setError("");

    try {
      await axios.post("http://localhost:5000/api/scores", {
        name: name.trim(),
        score,
        total,
      });

      setSaved(true);
    } catch (err) {
      console.error("Failed to save score:", err);

      setError(
        "Unable to save your score. Make sure the backend is running."
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="result-page">

      <header className="quiz-header">

        <div className="brand">
          <div className="brand-mark">Q</div>
          <span>QUIZ MASTER</span>
        </div>

        <div className="result-status">
          <CheckCircle2 size={17} />
          Quiz completed
        </div>

      </header>

      <main className="result-container">

        <div className="result-heading">

          <span className="result-eyebrow">
            FINAL RESULT
          </span>

          <h1>{message}</h1>

          <p>{subMessage}</p>

        </div>

        <section className="score-card">

          <div
            className="score-circle"
            style={{
              "--score": `${percentage}%`,
            }}
          >
            <div className="score-inner">
              <strong>{percentage}%</strong>
              <span>Score</span>
            </div>
          </div>

          <div className="score-details">

            <div className="score-icon">
              <Trophy size={21} />
            </div>

            <div>
              <span className="score-label">
                YOUR SCORE
              </span>

              <h2>
                {score} <small>/ {total}</small>
              </h2>
            </div>

          </div>

        </section>

        <div className="result-stats">

          <div>
            <span>QUESTIONS</span>
            <strong>{total}</strong>
          </div>

          <div>
            <span>CORRECT</span>
            <strong>{score}</strong>
          </div>

          <div>
            <span>INCORRECT</span>
            <strong>{total - score}</strong>
          </div>

        </div>

        {/* SAVE SCORE */}

        {!saved ? (
          <section className="save-score-card">

            <div className="save-score-heading">
              <div className="save-score-icon">
                <Save size={18} />
              </div>

              <div>
                <h3>Save your score</h3>
                <p>
                  Add your name to appear on the leaderboard.
                </p>
              </div>
            </div>

            <div className="save-score-form">

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={30}
              />

              <button
                className="save-score-btn"
                onClick={saveScore}
                disabled={saving}
              >
                {saving ? (
                  <>
                    <LoaderCircle
                      size={17}
                      className="saving-icon"
                    />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={17} />
                    Save Score
                  </>
                )}
              </button>

            </div>

            {error && (
              <p className="save-error">{error}</p>
            )}

          </section>
        ) : (
          <section className="score-saved">

            <CheckCircle2 size={20} />

            <div>
              <strong>Score saved successfully</strong>
              <p>
                Your result has been added to the leaderboard.
              </p>
            </div>

          </section>
        )}

        {/* ACTIONS */}

        <div className="result-actions">

          <button
            className="retake-btn"
            onClick={() => navigate("/quiz")}
          >
            <RotateCcw size={17} />
            Retake Quiz
          </button>

          <button
            className="home-btn"
            onClick={() => navigate("/")}
          >
            <ArrowLeft size={17} />
            Back to Home
          </button>

        </div>

      </main>

    </div>
  );
}

export default Result;

