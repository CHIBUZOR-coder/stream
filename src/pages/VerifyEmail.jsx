import { useContext, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import MovieContext from "../Context/MovieContext";
import Layout from "../Layout/Layout";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState(false);
  const [token, setToken] = useState(searchParams.get("token"));
  const [isLoading, setIsLoading] = useState(true);
  const { Result, setResult, Alert, User, Autentification } =
    useContext(MovieContext);

  const [emojis, setEmojis] = useState([]); // Store emoji objects
  const navigate = useNavigate();

  const verifyEmail = async (token) => {
    try {
      const response = await fetch(
        "https://streambackend-nbbc.onrender.com/verifyEmail",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ token }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setStatus(true);
        console.log(data);
        setResult(
          Alert(true, data.message) || "Email Verification Successfull"
        );
        localStorage.setItem("token", data.data);
        setIsLoading(false);
        setTimeout(() => {
          navigate("/login");
        }, 4000);
      } else {
        setResult(Alert(false, data.message) || "Email verification failed!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setResult(null);
      }, 3000);
    }
  };

  useEffect(() => {
    if (token) {
      verifyEmail(token);
    }
  }, [token]);

  useEffect(() => {
    if (status === true) {
      let count = 0;
      const interval = setInterval(() => {
        setEmojis((prev) => [
          ...prev,
          {
            id: count++, // Unique ID
            left: Math.random() * 100 + "vw", // Random horizontal position
            animationDuration: Math.random() * 2 + 3 + "s", // Random duration
          },
        ]);
      }, 300);

      setTimeout(() => clearInterval(interval), 4000); // Stop adding after 3s

      return () => clearInterval(interval);
    }
  }, [status]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-main px-10 gap-10 relative overflow-hidden">
        {isLoading ? (
          <div className="bg-white flex justify-center items-center ringg shadow-lg max-w-md text-center rounded-full p-2 h-48 w-48 relative">
            <div className="text-subMain font-semibold animate-pulse">
              Verifying Email...
            </div>
          </div>
        ) : status && status === true ? (
          <div>
            <h2 className="text-2xl font-bold text-white text-center">
              Email verification successfull <br />
              You will be redirected to login page
            </h2>
            <p className="font-semibold text-4xl text-white animate-bounce">
              🤗
            </p>
          </div>
        ) : (
          <h2 className="text-2xl font-bold text-red-500">
            {" "}
            Email verification Failed!
          </h2>
        )}

        {/* Animated Party Emojis 🎉 */}
        {status === true &&
          emojis.map((emoji) => (
            <span
              key={emoji.id}
              className="absolute text-4xl animate-fall"
              style={{
                left: emoji.left,
                animationDuration: emoji.animationDuration,
              }}
            >
              🎉
            </span>
          ))}

        <style>
          {`
            @keyframes fall {
              0% { transform: translateY(-100vh); opacity: 1; }
              100% { transform: translateY(100vh); opacity: 0; }
            }
            .animate-fall {
              position: absolute;
              top: 0;
              animation: fall linear infinite;
            }
          `}
        </style>
      </div>
    </Layout>
  );
};

export default VerifyEmail;
