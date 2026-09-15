import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {

    e.preventDefault();

    localStorage.setItem(
      "lumiereUser",
      JSON.stringify({
        email,
      })
    );

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">

      <div className="auth-visual">

        <div className="auth-overlay"></div>

        <div className="auth-brand">
          <div>L</div>
          <span>
            LUMIÈRE
            <small>HOTEL & RESTAURANT</small>
          </span>
        </div>
            <div className="auth-quote">
          <span>EST. 2026</span>
          <h1>Where ever
            <em>moment matters.</em>
          </h1>
            <p>
            A refined workspace for modern
            restaurant operations.
          </p>

        </div>
        </div>
        <div className="auth-form-area">
         <div className="auth-form">
          <span className="eyebrow">
           <h1>ACCOUNT LOGIN</h1>
          </span>
             <h2>Welcome back.</h2>
                <p className="auth-description">
           <h3> Enter your details to continue to Lumière.</h3>
          </p><br />


          <form onSubmit={login}>
             <label>
               <h3>Email address</h3>
                <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />
            </label>
              <label>
              <h3>Password</h3>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>

              </div>

            </label>


            <div className="form-options">

              <label className="remember">
                <input type="checkbox" />
                Keep me signed in
              </label>

              <button type="button">
                Forgot?
              </button>

            </div>
            <div className="login-container"></div>


            <button className="auth-submit">
              Enter Lumière
              <span>→</span>
            </button>

          </form>


          <div className="auth-divider">
            <span>OR</span>
          </div>


          <button className="google-button">
             &nbsp; Continue with Google
          </button>


          <p className="auth-footer">
            Don't have an account?
            <Link to="/signup">
              Create one →
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;