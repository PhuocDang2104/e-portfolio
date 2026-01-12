"use client";

import { useState } from "react";

import { homeAsk } from "../../lib/api/ai";

type SparklesProps = {
  size?: number;
  className?: string;
};

function SparklesIcon({ size = 18, className }: SparklesProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2.5l1.6 3.8 3.9 1.6-3.9 1.6L12 13.3l-1.6-3.8-3.9-1.6 3.9-1.6L12 2.5z"
        fill="currentColor"
      />
      <path
        d="M19 12.2l.9 2.2 2.2.9-2.2.9-.9 2.2-.9-2.2-2.2-.9 2.2-.9.9-2.2z"
        fill="currentColor"
      />
      <path
        d="M4.2 14.5l.7 1.7 1.7.7-1.7.7-.7 1.7-.7-1.7-1.7-.7 1.7-.7.7-1.7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function HomeAsk() {
  const [askValue, setAskValue] = useState("");
  const [askResponse, setAskResponse] = useState<string | null>(null);
  const [askError, setAskError] = useState<string | null>(null);
  const [askLoading, setAskLoading] = useState(false);

  const handleAskSubmit = async () => {
    const trimmed = askValue.trim();
    if (!trimmed || askLoading) return;
    setAskLoading(true);
    setAskResponse(null);
    setAskError(null);
    try {
      const response = await homeAsk(trimmed);
      setAskResponse(response.message);
      setAskValue("");
    } catch {
      setAskError("Không thể kết nối Groq lúc này. Vui lòng thử lại sau.");
    } finally {
      setAskLoading(false);
    }
  };

  return (
    <div className="home-ask-stack reveal">
      <div className="home-ask">
        <SparklesIcon size={18} className="home-ask__icon" />
        <input
          className="home-ask__input"
          placeholder="Hôm nay bạn thế nào? Chia sẻ hay muốn hỏi gì không?"
          value={askValue}
          onChange={(event) => setAskValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              handleAskSubmit();
            }
          }}
          aria-label="Hỏi nhanh MeetMate"
          disabled={askLoading}
        />
        <button
          className="home-ask__btn"
          type="button"
          onClick={handleAskSubmit}
          disabled={askLoading || !askValue.trim()}
        >
          {askLoading ? "Đang gửi..." : "Gửi"}
        </button>
      </div>
      {(askResponse || askError) && (
        <div
          className={`home-ask-response ${askError ? "home-ask-response--error" : ""}`}
          role="status"
          aria-live="polite"
        >
          <div className="home-ask-response__label">MeetMate AI</div>
          <div className="home-ask-response__text">{askError ?? askResponse}</div>
        </div>
      )}
    </div>
  );
}
