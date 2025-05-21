"use client";

import React, { useEffect, useState } from "react";

export default function FakeViewerCounter() {
  const [viewerCount, setViewerCount] = useState(getInitialCount());

  useEffect(() => {
    let timeout;

    const updateCount = () => {
      let newCount;

      const chance = Math.random();

      if (chance < 0.2) {
        // 20% chance to go to 0 (simulate inactivity)
        newCount = 0;
      } else {
        newCount = getNextCount(viewerCount);
      }

      setViewerCount(newCount);

      const nextInterval = getRandomInterval();
      timeout = setTimeout(updateCount, nextInterval);
    };

    timeout = setTimeout(updateCount, getRandomInterval());

    return () => clearTimeout(timeout);
  }, [viewerCount]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 py-2 font-semibold text-center text-white transition-all duration-500 bg-pink-700">
      {viewerCount > 0
        ? `${viewerCount} people are viewing this right now!`
        : "No one is viewing this right now."}
    </div>
  );
}

// 🔧 Utility Functions
function getInitialCount() {
  return Math.floor(Math.random() * 10) + 5; // 5–14
}

function getNextCount(current) {
  const change = Math.floor(Math.random() * 4) - 1; // -1, 0, 1, 2
  let next = current + change;
  if (next < 0) next = 0;
  if (next > 20) next = 20; // cap at 20
  return next;
}

function getRandomInterval() {
  return Math.floor(Math.random() * 4000) + 1000; // 1000–5000 ms
}
