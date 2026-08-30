import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Clock3,
  CircleHelp,
  Trophy,
  ShieldCheck,
} from "lucide-react";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">

      <nav className="landing-nav">
        <div className="brand">
          <div className="brand-mark">Q</div>
          <span>QUIZ MASTER</span>
        </div>

        <div className="nav-status">
          <span className="status-dot"></span>
          Ready to begin
        </div>
      </nav>

      <main className="hero">

        <section className="hero-content">

          <div className="eyebrow">
            <span></span>
            KNOWLEDGE · SPEED · ACCURACY
          </div>

          <h1>
            Think fast.
            <br />
            <span>Answer smarter.</span>
          </h1>

          <p className="hero-description">
            Test your knowledge with a timed quiz designed to
            challenge your thinking and track your performance.
          </p>

          <div className="hero-actions">
            <button
              className="start-button"
              onClick={() => navigate("/quiz")}
            >
              Start Quiz
              <ArrowRight size={18} />
            </button>

            <div className="quiz-info">
              <Clock3 size={17} />
              <span>20 minutes</span>

              <span className="info-divider"></span>

              <CircleHelp size={17} />
              <span>20 questions</span>
            </div>
          </div>

        </section>

        <section className="quiz-preview">

          <div className="preview-header">
            <div>
              <span className="preview-label">QUIZ PREVIEW</span>
              <h3>Ready when you are.</h3>
            </div>

            <div className="preview-icon">
              <CircleHelp size={20} />
            </div>
          </div>

          <div className="preview-question">
            <span>QUESTION 01 / 20</span>

            <h2>
              Which technology is used to
              build modern user interfaces?
            </h2>
          </div>

          <div className="preview-options">

            <div className="preview-option selected">
              <span>A</span>
              React
            </div>

            <div className="preview-option">
              <span>B</span>
              MongoDB
            </div>

            <div className="preview-option">
              <span>C</span>
              Node.js
            </div>

          </div>

          <div className="preview-progress">
            <span></span>
          </div>

        </section>

      </main>

      <section className="features">

        <div className="feature">
          <div className="feature-icon">
            <Clock3 size={19} />
          </div>

          <div>
            <h4>Timed Challenge</h4>
            <p>Stay focused with a live countdown.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <Trophy size={19} />
          </div>

          <div>
            <h4>Track Your Score</h4>
            <p>See how well you performed.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <ShieldCheck size={19} />
          </div>

          <div>
            <h4>Fair Assessment</h4>
            <p>Every question counts toward your result.</p>
          </div>
        </div>

      </section>

    </div>
  );
}

export default Home;