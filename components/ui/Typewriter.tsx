"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  /** ms entre caracteres */
  speed?: number;
  /** ms que el cursor parpadea tras terminar */
  delay?: number;
  className?: string;
  /** Muestra el cursor con parpadeo */
  cursor?: boolean;
};

export function Typewriter({
  text,
  speed = 55,
  delay = 1200,
  className = "",
  cursor = true,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    setDisplayed("");
    setDone(false);
    /* eslint-enable react-hooks/set-state-in-effect */
    let cancelled = false;
    let i = 0;

    const step = () => {
      if (cancelled) return;
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        setDone(true);
        return;
      }
      timer = window.setTimeout(step, speed);
    };

    let timer = window.setTimeout(step, speed);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [text, speed]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden>{displayed}</span>
      {cursor && (
        <span
          aria-hidden
          className={`ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-current align-middle ${
            done ? "animate-blink" : "animate-pulse"
          }`}
        />
      )}
      {!cursor && done === false && delay > 0 ? null : null}
    </span>
  );
}
