import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [emojis, setEmojis] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get("https://emojihub.yurace.pro/api/all")
      .then((res) => setEmojis(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Shuffle emojis (for randomness)
  const getRandomEmojis = () => {
    return [...emojis]
      .sort(() => 0.5 - Math.random())
      .slice(0, count);
  };

  const displayEmojis = getRandomEmojis();

  return (
    <div style={{
      textAlign: "center",
      minHeight: "100vh",
      background: "linear-gradient(to right, #ff9a9e, #fad0c4)",
      padding: "30px"
    }}>
      
      <h1>🎉 Emoji Generator 🎉</h1>

      {/* Input */}
      <input
        type="number"
        placeholder="Enter number of emojis"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        style={{
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          fontSize: "16px"
        }}
      />

      {/* Show count */}
      {count > 0 && <h2>Showing {count} emojis 😄</h2>}

      {/* Emojis */}
      <div style={{
        marginTop: "30px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "15px",
        fontSize: "40px"
      }}>
        {displayEmojis.map((e, i) => (
          <span
            key={i}
            dangerouslySetInnerHTML={{ __html: e.htmlCode[0] }}
            style={{
              transition: "transform 0.2s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => e.target.style.transform = "scale(1.5)"}
            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
          ></span>
        ))}
      </div>

    </div>
  );
}

export default App;
