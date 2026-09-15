import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const update = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const signup = (e) => {

    e.preventDefault();

    localStorage.setItem(
      "lumiereUser",
      JSON.stringify(form)
    );

    navigate("/dashboard");
  };

  return (
    <div className="auth-page signup-page">

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

          <span>WELCOME TO LUMIÈRE</span>

          <h1>
            Begin your
            <br />
            <em>journey.</em>
          </h1>

          <p>
            Bring your restaurant operations
            together in one beautiful workspace.
          </p>

        </div>

      </div>


      <div className="auth-form-area">

        <div className="auth-form">

          <span className="eyebrow">
            CREATE ACCOUNT
          </span>

          <h2>Let's begin.</h2>

          <p className="auth-description">
            Create your Lumière workspace.
          </p>


          <form onSubmit={signup}>

            <label>
              Your name

              <input
                type="text"
                placeholder="Admin name"
                value={form.name}
                onChange={(e) =>
                  update("name", e.target.value)
                }
                required
              />

            </label>


            <label>
              Email address

              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) =>
                  update("email", e.target.value)
                }
                required
              />

            </label>


            <label>
              Password

              <div className="password-input">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Create a password"
                  value={form.password}
                  onChange={(e) =>
                    update("password", e.target.value)
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


            <button className="auth-submit">
              Create workspace
              <span>→</span>
            </button>

          </form>


          <p className="auth-footer">
            Already have an account?
            <Link to="/login">
              Sign in →
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Signup;