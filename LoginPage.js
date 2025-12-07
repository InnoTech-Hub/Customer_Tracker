import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import "./LoginPage.css";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [isStarted, setIsStarted] = useState(false);

  const handleStartShopping = () => {
    if (name.trim()) {
      setIsStarted(true);
      // In a real app, you would navigate to the next page or show main features
      alert(`Welcome ${name}! Let's start shopping.`);
    } else {
      alert("Please enter your name to start.");
    }
  };

  const handleBack = () => {
    setIsStarted(false);
  };

  const features = [
    {
      id: 1,
      title: "Live Indoor Navigation",
      description: "Find products instantly with turn-by-turn directions",
      icon: <LocationOnOutlinedIcon className="feature-icon-svg" />,
    },
    {
      id: 2,
      title: "Smart Shopping List",
      description: "Organize your shopping with guided routes",
      icon: <ListAltOutlinedIcon className="feature-icon-svg" />,
    },
  ];

  return (
    <div className="app-container">
      {/* Background elements for grassmorphism effect */}
      <div className="bg-blur-circle circle-1"></div>
      <div className="bg-blur-circle circle-2"></div>
      <div className="bg-blur-circle circle-3"></div>

      <div className="glass-card">
        {/* Back Button - Only shown when not on initial screen */}

        <button className="back-button" onClick={handleBack}>
          <span className="back-arrow">←</span> Back
        </button>

        {/* Main Content */}
        <div className="content">
          <div className="logo-container">
            <div className="logo-circle">
              <ShoppingCartOutlinedIcon className="logo-icon" />
            </div>
            <h1 className="app-title">Welcome to ShopTrack</h1>
            <p className="app-subtitle">Your smart shopping companion</p>
          </div>

          {!isStarted ? (
            <>
              <div className="input-section">
                <label htmlFor="name" className="input-label">
                  Enter Your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="name-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Mensah"
                  onKeyPress={(e) => e.key === "Enter" && handleStartShopping()}
                />
              </div>

              <button className="start-button" onClick={handleStartShopping}>
                <AutoAwesomeOutlinedIcon className="star" /> Start Shopping
              </button>

              <div className="features-section">
                <h3 className="features-title">What you'll get:</h3>
                <div className="features-grid">
                  {features.map((feature) => (
                    <div key={feature.id} className="feature-card">
                      <div className="feature-header">
                        <div className="feature-icon-wrapper">
                          {feature.icon}
                        </div>
                        <h4 className="feature-title">{feature.title}</h4>
                      </div>
                      <p className="feature-description">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="welcome-screen">
              <div className="welcome-icon-circle">
                <div className="welcome-icon">🎉</div>
              </div>
              <h2 className="welcome-title">Welcome, {name}!</h2>
              <p className="welcome-message">
                Ready to start your smart shopping experience?
              </p>

              <div className="features-grid">
                {features.map((feature) => (
                  <div key={feature.id} className="feature-card active">
                    <div className="feature-header">
                      <div className="feature-icon-wrapper">{feature.icon}</div>
                      <h4 className="feature-title">{feature.title}</h4>
                    </div>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                ))}
              </div>

              <button
                className="start-button"
                onClick={() => alert("Navigating to store...")}
              >
                Find Nearest Store
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
