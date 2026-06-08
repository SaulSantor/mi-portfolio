"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  speed?: number;
  deleteSpeed?: number;
  pauseAfterWrite?: number;
  pauseAfterDelete?: number;
  className?: string;
  cursor?: boolean;
};

export function Typewriter({
  text,
  speed = 55,
  deleteSpeed = 35,
  pauseAfterWrite = 2500,
  pauseAfterDelete = 500,
  className = "",
  cursor = true,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "waiting">("typing");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < text.length) {
        timer = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length + 1));
        }, speed);
      } else {
        timer = setTimeout(() => setPhase("pausing"), 0);
      }
    } else if (phase === "pausing") {
      timer = setTimeout(() => setPhase("deleting"), pauseAfterWrite);
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        timer = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, deleteSpeed);
      } else {
        timer = setTimeout(() => setPhase("waiting"), 0);
      }
    } else if (phase === "waiting") {
      timer = setTimeout(() => setPhase("typing"), pauseAfterDelete);
    }

    return () => clearTimeout(timer);
  }, [displayed, phase, text, speed, deleteSpeed, pauseAfterWrite, pauseAfterDelete]);

  const isDone = phase === "pausing";

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden>{displayed}</span>
      {cursor && (
        <span
          aria-hidden
          className={`ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-current align-middle ${
            isDone ? "animate-blink" : "animate-pulse"
          }`}
        />
      )}
    </span>
  );
}