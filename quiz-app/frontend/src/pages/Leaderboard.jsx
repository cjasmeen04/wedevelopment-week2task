import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Trophy,
  ArrowLeft,
  RotateCcw,
  LoaderCircle,
} from "lucide-react";
import axios from "axios";

function Leaderboard() {
  const navigate = useNavigate();

  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/scores/leaderboard"
        );

        setScores(response.data);
      } catch (error) {
        console.error("Failed to fetch leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="leaderboard-page">

      <header className="quiz-header">

        <div className="brand">
          <div className="brand-mark">Q</div>
          <span>QUIZ MASTER</span>
        </div>

        <div className="leaderboard-label">
          <Trophy size={17} />
          Leaderboard
        </div>

      </header>

      <main className="leaderboard-container">

        <div className="leaderboard-heading">

          <span>TOP PERFORMERS</span>

          <h1>Leaderboard</h1>

          <p>
            See how you rank against other quiz takers.
          </p>

        </div>

        {loading ? (
          <div className="leaderboard-loading">
            <LoaderCircle size={28} />
            <p>Loading leaderboard...</p>
          </div>
        ) : scores.length === 0 ? (
          <div className="empty-leaderboard">
            <Trophy size={30} />

            <h3>No scores yet</h3>

            <p>
              Complete a quiz and be the first to appear here.
            </p>

            <button onClick={() => navigate("/quiz")}>
              Take Quiz
            </button>
          </div>
        ) : (
          <section className="leaderboard-card">

            <div className="leaderboard-header">
              <span>RANK</span>
              <span>PLAYER</span>
              <span>SCORE</span>
              <span>RESULT</span>
            </div>

            {scores.map((player, index) => (

              <div className="leaderboard-row" key={player._id}>

                <div className="rank">
                  {index + 1}
                </div>

                <div className="player">

                  <div className="player-avatar">
                    {player.name.charAt(0).toUpperCase()}
                  </div>

                  <strong>{player.name}</strong>

                </div>

                <div className="player-score">
                  {player.score}/{player.total}
                </div>

                <div className="player-percentage">
                  {player.percentage}%
                </div>

              </div>

            ))}

          </section>
        )}

        <div className="leaderboard-actions">

          <button
            className="retake-btn"
            onClick={() => navigate("/quiz")}
          >
            <RotateCcw size={17} />
            Take Quiz
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

export default Leaderboard;