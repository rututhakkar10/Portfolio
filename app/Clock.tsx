"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  // Render nothing meaningful on the server / first paint to avoid a
  // hydration mismatch — the real time fills in right after mount.
  if (!now) {
    return <p className="footer" suppressHydrationWarning aria-hidden="true">&nbsp;</p>;
  }

  const hour = now.getHours();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  let mood: string;
  if (hour >= 6 && hour < 12) mood = "It's fresh and morning.";
  else if (hour >= 12 && hour < 17) mood = "It's sunny and daytime.";
  else if (hour >= 17 && hour < 21) mood = "It's golden and evening.";
  else mood = "It's quiet and night.";

  return (
    <p className="footer" suppressHydrationWarning>
      Hi, internet wanderer! It&rsquo;s {time} over here.
      <br />
      {mood} Thanks for stopping by.
    </p>
  );
}
