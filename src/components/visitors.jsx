import React, { useState, useEffect } from "react";
import axios from "axios";

const Visitors = () => {
    
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/log_visit/")
      .then((response) => {
        console.log("Visit logged:", response.data);
      })
      .catch((error) => {
        console.error("Error logging visit:", error);
      });
  }, []);

   const [count, setCount] = useState(0);

   useEffect(() => {
     axios
       .get("http://127.0.0.1:8000/get_visit_count/")
       .then((response) => {
         setCount(response.data.visit_count);
       })
       .catch((error) => {
         console.error("Error fetching visit count:", error);
       });
   }, []);
    return (
      <div>
        <i>Number of Visits: {count}</i>
      </div>
    );
}

export default Visitors;
