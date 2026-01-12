"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  ts: number;
};

type ChatResponse = {
  answer?: string;
  context?: string[];
};

const QUICK_PROMPTS = [
  "Bạn là ai và bạn làm những gì?",
  "Tóm tắt dự án VNPT AI Hackathon.",
  "Các kỹ năng nổi bật của bạn là gì?",
  "Làm sao để liên hệ nhanh?",
];

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";
const SOUND_KEY = "uehg-ai-sound";
const SESSION_KEY = "uehg-ai-session";

const createId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const UEHGAIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    const saved = localStorage.getItem(SOUND_KEY);
    return saved ? saved === "true" : true;
  });
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const openAudioRef = useRef<HTMLAudioElement | null>(null);
  const sendAudioRef = useRef<HTMLAudioElement | null>(null);
  const sessionIdRef = useRef<string | null>(null);

  useEffect(() => {
    localStorage.setItem(SOUND_KEY, String(soundEnabled));
  }, [soundEnabled]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem(SESSION_KEY);
    if (saved) {
      sessionIdRef.current = saved;
      return;
    }
    const id = createId();
    localStorage.setItem(SESSION_KEY, id);
    sessionIdRef.current = id;
  }, []);

  const playAudio = (ref: React.MutableRefObject<HTMLAudioElement | null>, src: string) => {
    if (!soundEnabled) return;
    let audio = ref.current;
    if (!audio) {
      audio = new Audio(src);
      audio.preload = "auto";
      ref.current = audio;
    }
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  const scrollToBottom = () => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const fetchAnswer = async (text: string) => {
    const sessionId = sessionIdRef.current ?? createId();
    const response = await fetch(`${API_BASE}/api/v1/chatbot/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: text, session_id: sessionId }),
      cache: "no-store"
    });
    if (!response.ok) {
      throw new Error("Chat API error");
    }
    const data = (await response.json()) as ChatResponse;
    return data.answer ?? "Xin lỗi, hiện chưa có câu trả lời phù hợp.";
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    const userMsg: ChatMessage = {
      id: createId(),
      role: "user",
      text: text.trim(),
      ts: Date.now()
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    playAudio(sendAudioRef, "/sounds/send.mp3");

    try {
      const replyText = await fetchAnswer(text.trim());
      const botMsg: ChatMessage = {
        id: createId(),
        role: "assistant",
        text: replyText,
        ts: Date.now()
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const botMsg: ChatMessage = {
        id: createId(),
        role: "assistant",
        text: "Không thể kết nối AI lúc này. Vui lòng thử lại sau.",
        ts: Date.now()
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage(input);
    }
    if (e.key === "Escape" && isOpen) setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
    playAudio(openAudioRef, "/sounds/open.mp3");
  };
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, [isOpen]);

  const icon = (
    <div className="ai-chat-fab">
      <div className="ai-chat-fab__hint">Ask me!</div>
      <button aria-label="Mở trợ lý AI" onClick={handleOpen} className="ai-chat-fab__button">
        <div className="ai-chat-fab__icon">
          <img src="/assets/music-assistant.png" alt="AI assistant" draggable={false} />
          <span className="ai-chat-fab__glow" />
        </div>
      </button>
    </div>
  );

  if (!isOpen) return icon;

  return (
    <>
      {icon}
      <div ref={containerRef} className="ai-chat-window" role="dialog" aria-label="AI chat">
        <div className="ai-chat-window__inner">
          <div className="ai-chat-header">
            <div className="ai-chat-title">
              <span>MeetMate AI Assistant</span>
              <div className="ai-chat-eq">
                {[1, 2, 3].map((i) => (
                  <span key={i} style={{ animationDelay: `${i * 120}ms` }} />
                ))}
              </div>
            </div>
            <div className="ai-chat-controls">
              <label className="ai-chat-sound">
                <input
                  type="checkbox"
                  checked={soundEnabled}
                  onChange={(e) => setSoundEnabled(e.target.checked)}
                />
                Âm thanh
              </label>
              <button aria-label="Đóng" onClick={handleClose} className="ai-chat-close">
                ×
              </button>
            </div>
          </div>

          <div className="ai-chat-prompts">
            {QUICK_PROMPTS.map((prompt) => (
              <button key={prompt} onClick={() => sendMessage(prompt)} type="button">
                {prompt}
              </button>
            ))}
          </div>

          <div ref={listRef} className="ai-chat-messages">
            {messages.map((m) => (
              <div key={m.id} className={`ai-chat-bubble ai-chat-bubble--${m.role}`}>
                {m.text.split("\n").map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            ))}
            {isTyping && (
              <div className="ai-chat-bubble ai-chat-bubble--assistant ai-chat-typing">
                <div className="ai-chat-eq">
                  {[1, 2, 3].map((i) => (
                    <span key={i} style={{ animationDelay: `${i * 120}ms` }} />
                  ))}
                </div>
                <span>Đang soạn...</span>
              </div>
            )}
          </div>

          <div className="ai-chat-input">
            <div className="ai-chat-input__inner">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Hỏi về dự án, kỹ năng, hoặc cách liên hệ..."
              />
              <button onClick={() => sendMessage(input)} type="button">
                Gửi
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UEHGAIChatWidget;
