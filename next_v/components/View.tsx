"use client";

import { useEffect, useState } from "react";
import { updateLandingPageViews } from "@/lib/updateview";
import "../css/view.css";

export default function ViewPage() {
  const [views, setViews] = useState(null);

  useEffect(() => {
    async function updateAndGetViews() {
      const newCount = await updateLandingPageViews();
      setViews(newCount);
    }

    updateAndGetViews();
  }, []);

  return (
    <main className="view-wrapper">
      <section>
        <h1 className="view-title">Hey Michał Terczyński </h1>
        <p className="view-text">
          {views === null ? "Loading views..." : `  We have ${views} viewer`}
        </p>
      </section>
    </main>
  );
}
