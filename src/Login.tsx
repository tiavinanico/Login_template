import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import "./bootstrap/css/bootstrap.min.css";
import "./Login.css";
import qr6 from "./sary/qr_6.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    setTimeout(() => {
      if (email === "11" && password === "bera33") {
        setIsLoggedIn(true);
      } else {
        setError("Email ou mot de passe incorrect");
        setIsLoggedIn(false);
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="login-wrapper" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', alignItems: 'flex-start' }}>
      <div className="login-card shadow-lg p-4 rounded-4">
        <div className="login-header">
          <div className="login-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeWidth="2"></rect>
              <path d="M7 11V7a5 5 0 0110 0v4" strokeWidth="2" strokeLinecap="round"></path>
            </svg>
          </div>
          <h1 className="login-title">Bon retour !</h1>
          <p className="login-subtitle">Connectez-vous à votre compte</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="input-group-modern">
            <label>Adresse Email</label>
            <div style={{ position: 'relative' }}>
              <div className="input-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth="2"></rect>
                  <path d="M2 7l10 7 10-7" strokeWidth="2"></path>
                </svg>
              </div>
              <input
                type="email"
                className="form-control form-control-modern"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="vous@exemple.com"
                required
              />
            </div>
          </div>

          <div className="input-group-modern">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <label className="mb-0">Mot de passe</label>
              <a href="#!" className="forgot-password">Mot de passe oublié ?</a>
            </div>
            <div style={{ position: 'relative' }}>
              <div className="input-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeWidth="2"></rect>
                  <path d="M7 11V7a5 5 0 0110 0v4" strokeWidth="2" strokeLinecap="round"></path>
                </svg>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control form-control-modern"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "🙈"}
              </button>
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="btn btn-login" disabled={isLoading}>
            {isLoading ? "Connexion en cours..." : "Se connecter"}
          </button>
        </form>
      </div>

      {isLoggedIn && (
        <div className="qr-image-container">
          <img src={qr6} alt="QR Code" style={{ width: 300, height: 300, objectFit: 'contain' }} />
        </div>
      )}
    </div>
  );
};

export default Login;
