import { ReactNode } from "react";

export function parseUrlsInText(text: string): ReactNode[] {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted hover:decoration-solid text-white/80 hover:text-white transition-colors"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}
