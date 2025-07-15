"use client";
import { useEffect } from "react";
import { updateLandingPageViews } from "@/lib/updateview";
import "../css/view.css";

export default function WebsiteViewLogger() {
  useEffect(() => {
    async function updateAndGetViews() {
      const newCount = await updateLandingPageViews();
      console.log(`Website view count: ${newCount}`);
    }

    updateAndGetViews();
  }, []);

  return null;
}
