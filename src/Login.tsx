import { useState, FormEvent, ChangeEvent } from 'react';
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

  // Form submit handler
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
      {/* Login Card */}
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

        {/* Form */}
        <form onSubmit={handleLogin}>
          {/* Email Input */}
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

          {/* Password Input */}
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
                {showPassword ? (
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" strokeWidth="2" strokeLinecap="round"></path>
                  </svg>
                ) : (
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2"></path>
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth="2"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && <div className="error-message">{error}</div>}

          {/* Submit Button */}
          <button type="submit" className="btn btn-login" disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="spinner"></div>
                Connexion en cours...
              </>
            ) : (
              <>
                Se connecter
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '20px', height: '20px' }}>
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span>ou</span>
        </div>

        {/* Sign Up Link */}
        <p className="signup-link">
          Pas encore de compte ? <a href="/signup">Créer un compte</a>
        </p>

        {/* Security Badge */}
        <p className="security-badge">🔒 Protégé par un cryptage de niveau entreprise</p>
      </div>

      {/* QR Code — affiché à droite seulement si connecté */}
      {isLoggedIn && (
        <div className="qr-image-container">
          <img
            src={qr6}
            alt="QR Code"
            className="img-fluid rounded shadow"
            style={{
              width: "300px",
              height: "300px",
              objectFit: "contain"
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Login;
