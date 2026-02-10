import { useEffect, useState } from "react";
import logoMark from "@/assets/logo-mark.svg";
import "./splash-screen.css";

interface SplashScreenProps {
  onFinish: () => void;
  duration?: number;
}

const SplashScreen = ({ onFinish, duration = 3000 }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onFinish, 500);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onFinish]);

  return (
    <div className={`splash-screen ${!isVisible ? "splash-screen--hidden" : ""}`}>
      {/* Gradient Background */}
      <div className="splash-screen__background">
        <div className="splash-screen__gradient splash-screen__gradient--1"></div>
        <div className="splash-screen__gradient splash-screen__gradient--2"></div>
        <div className="splash-screen__gradient splash-screen__gradient--3"></div>
      </div>

      {/* Content */}
      <div className="splash-screen__content">
        {/* Animated Logo Container */}
        <div className="splash-screen__logo-wrapper">
          <div className="splash-screen__logo">
            <img
              src={logoMark}
              alt="Zelha Education Logo"
              className="splash-screen__logo-icon"
            />
          </div>

          {/* Pulsing rings */}
          <div className="splash-screen__ring splash-screen__ring--1"></div>
          <div className="splash-screen__ring splash-screen__ring--2"></div>
          <div className="splash-screen__ring splash-screen__ring--3"></div>
        </div>

        {/* Text Content */}
        <div className="splash-screen__text">
          <h1 className="splash-screen__title">Zelha Education</h1>
          <p className="splash-screen__subtitle">Empowering Your Future</p>
        </div>

        {/* Loading Animation */}
        <div className="splash-screen__loader">
          <div className="splash-screen__dot splash-screen__dot--1"></div>
          <div className="splash-screen__dot splash-screen__dot--2"></div>
          <div className="splash-screen__dot splash-screen__dot--3"></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="splash-screen__particles">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="splash-screen__particle"
            style={{
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SplashScreen;
