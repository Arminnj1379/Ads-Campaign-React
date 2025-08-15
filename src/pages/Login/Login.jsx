import React, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import loginapi from "../../api/loginService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("لطفاً نام کاربری و رمز عبور را وارد کنید.");
      return;
    }

    try {
      const response = await loginapi.post("/auth/login", {
        UserName: username,
        Password: password,
        RememberMe: false,
      });

      console.log("پاسخ سرور:", response.data);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token); // ذخیره توکن
        navigate("/home");
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("نام کاربری یا رمز عبور اشتباه است.");
      } else {
        setError("خطایی در ارتباط با سرور رخ داده است.");
      }
      console.error("خطا در ورود:", err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <h2 className="text-2xl text-center text-gray-800">ورود به حساب</h2>
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">نام کاربری:</label>
            <input
              type="text"
              id="username"
              placeholder="نام کاربری یا ایمیل"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">رمز عبور:</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn-login">
            ورود
          </button>

          <div className="form-footer">
            <p>
              <a href="/forgot-password">فراموشی رمز عبور؟</a>
            </p>
            <p>
              حساب ندارید؟ <a href="/register">ثبت‌نام کنید</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
