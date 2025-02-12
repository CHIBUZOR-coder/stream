// import { useSearchParams } from "react-router-dom";
// import Layout from "../Layout/Layout";
// import { useContext, useEffect, useState } from "react";
// import MovieContext from "../Context/MovieContext";
// import { MdEmail } from "react-icons/md";

// const Thankyou = () => {
//   const { Result, setResult, Alert, User } = useContext(MovieContext);
//   const [searchParams] = useSearchParams();
//   const [transactionId, SetTransaction] = useState(
//     searchParams.get("transaction_id")
//   );
//   const [isLoading, setIsLoading] = useState(true);

//   const [status, setStatus] = useState(null);
//   const orderId = localStorage.getItem("orderId");

//   const email = User ? User.userInfo.email : "unavalable email";

//   useEffect(() => {
//     console.log("status:", status);
//   }, [status]);

//   const createReciept = async (transaction_id, orderId) => {
//     try {
//       const response = await fetch("http://localhost:5000/verify-payment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ transaction_id, orderId, email }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         console.log(data);
//         setResult(Alert(true, data.message) || "Order successful");
//         // setOrder(data.data);
//         localStorage.setItem("Recipt", data.data);
//         setIsLoading(false);
//         localStorage.removeItem("orderId");
//         setStatus(data.data.status);
//       } else {
//         setResult(Alert(false, data.message) || "Order failed");
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setTimeout(() => {
//         setResult(null);
//       }, 3000);
//     }
//   };

//   useEffect(() => {
//     createReciept(transactionId, orderId);
//   }, [transactionId]);

//   return (
//     <Layout>
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//         {isLoading ? (
//           <div className="bg-white flex justify-center items-center ringg  shadow-lg max-w-md text-center rounded-full p-2 h-48 w-48 relative">
//             <div className="text-subMain  font-semibold animate-pulse ">
//               Verifying Payment...
//             </div>
//           </div>
//         ) : status && status === "COMPLETED" ? (
//           <div>
//             <h2 className="text-2xl font-bold text-green-500">
//               Payment Successful! <br />
//               Thank you for subscribing to our service!
//             </h2>
//           </div>
//         ) : (
//           <h2 className="text-2xl font-bold text-green-500">Payment Failed!</h2>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default Thankyou;


import { useSearchParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useContext, useEffect, useState } from "react";
import MovieContext from "../Context/MovieContext";

const Thankyou = () => {
  const { Result, setResult, Alert, User } = useContext(MovieContext);
  const [searchParams] = useSearchParams();
  const [transactionId, setTransaction] = useState(
    searchParams.get("transaction_id")
  );
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState(null);
  const orderId = localStorage.getItem("orderId");
  const email = User ? User.userInfo.email : "unavailable email";
  const [emojis, setEmojis] = useState([]); // Store emoji objects

  useEffect(() => {
    console.log("status:", status);
  }, [status]);

  const createReciept = async (transaction_id, orderId) => {
    try {
      const response = await fetch("http://localhost:5000/verify-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ transaction_id, orderId, email }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setResult(Alert(true, data.message) || "Order successful");
        localStorage.setItem("Recipt", data.data);
        setIsLoading(false);
        localStorage.removeItem("orderId");
        setStatus(data.data.status);
      } else {
        setResult(Alert(false, data.message) || "Order failed");
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
    createReciept(transactionId, orderId);
  }, [transactionId]);

  // Generate animated 🎉 emojis if payment is successful
  useEffect(() => {
    if (status === "COMPLETED") {
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

      setTimeout(() => clearInterval(interval), 3000); // Stop adding after 3s

      return () => clearInterval(interval);
    }
  }, [status]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative overflow-hidden">
        {isLoading ? (
          <div className="bg-white flex justify-center items-center shadow-lg max-w-md text-center rounded-full p-2 h-48 w-48 relative">
            <div className="text-subMain font-semibold animate-pulse">
              Verifying Payment...
            </div>
          </div>
        ) : status && status === "COMPLETED" ? (
          <div>
            <h2 className="text-2xl font-bold text-green-500 text-center">
              Payment Successful! <br />
              Thank you for subscribing to our service!
            </h2>
          </div>
        ) : (
          <h2 className="text-2xl font-bold text-red-500">Payment Failed!</h2>
        )}

        {/* Animated Party Emojis 🎉 */}
        {status === "COMPLETED" &&
          emojis.map((emoji) => (
            <span
              key={emoji.id}
              className="absolute text-3xl animate-fall"
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

export default Thankyou;
