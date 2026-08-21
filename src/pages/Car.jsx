import { useEffect, useState } from "react";
import MusicPlayer from "../components/MusicPlayer";
import carPlaylist from "../data/carplaylist";
import "./Car.css";

function Car() {
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
    <main className="car-page">

      <header className="top-bar">
        <div className="atmosphere-info">
          <div className="atmosphere-title">
            <h1>CAR</h1>
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

      <MusicPlayer songs={carPlaylist} />

    </main>
  );
}

export default Car;