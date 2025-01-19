import { useState, useEffect, useReducer, useContext } from "react";

let initialState = {
  data: null,
  error: "",
  isLoading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Success":
      return {
        data: action.dataa,
        error: "",
        isLoading: false,
      };

    case "Error":
      return {
        data: null,
        error: action.errmessage,
        isLoading: false,
      };

    default:
      return state;
  }
};

const DataResolve = (url, requestType, postData = null) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const getFeedback = async () => {
      let res;
      try {
        const headers = {
          "Content-Type": "application/json",
        };

        // Add credentials to include cookies in requests
        const fetchOptions = {
          method: requestType,
          headers: headers,
          signal: signal,
          credentials: "include", // Ensure cookies are included in the request
        };

        // Add body for POST requests
        if (
          requestType === "POST" ||
          requestType === "PUT" ||
          requestType === "DELETE"
        ) {
          fetchOptions.body = JSON.stringify(postData);
        }

        res = await fetch(url, fetchOptions);
        const data = await res.json();

        if (res.ok) {
          dispatch({ type: "Success", dataa: data });
          console.log(`${requestType} request successful`);
          // console.log(data);
        } else {
          throw new Error(
            `${
              requestType === "POST"
                ? "Could not Post data"
                : "Could not fetch data"
            }`
          );
        }
      } catch (err) {
        dispatch({ type: "Error", errmessage: err.message });
      }
    };

    getFeedback();

    // Cleanup the effect
    return () => {
      abortController.abort();
    };
  }, [url, requestType, postData]);

  return state;
};

export default DataResolve;
