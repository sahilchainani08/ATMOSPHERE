import cafePlaylist from "../data/cafePlaylist";
import { useEffect, useState } from "react";
import "../App.css";
import MusicPlayer from "../components/MusicPlayer";

function Cafe() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const [onlineUsers, setOnlineUsers] = useState(() => {
    return Math.floor(Math.random() * 8) + 27;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setOnlineUsers((prev) => {
        const change = Math.floor(Math.random() * 7) - 3;
        return Math.max(20, Math.min(40, prev + change));
      });
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="cafe-page">

      <header className="top-bar">

        <div className="atmosphere-info">
          <div className="atmosphere-title">
            <h1>CAFE</h1>
          </div>

          <div className="current-time">
            {currentTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>

        <div className="online">
          <span className="online-dot"></span>
          {onlineUsers} online
        </div>

      </header>

      <MusicPlayer songs={cafePlaylist} />

    </main>
  );
}

export default Cafe;