import React, { useState } from "react"

export function Counter() {
  const [count, useCount] = useState(0)

  return (
    <div>
      <h1 style={{ fontFamily: "MonoLisa", fontSize: "6rem" }}>
        Choice Fatigue Misery Count: {count}
      </h1>
      <button
        style={{
          textAlign: "center",
          fontFamily: "MonoLisa",
          fontSize: "6rem",
        }}
        onClick={() => useCount((state) => state + 1)}
      >
        Pain
      </button>
    </div>
  )
}
