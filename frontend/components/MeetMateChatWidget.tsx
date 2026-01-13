"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type MutableRefObject } from "react";

import { homeAsk } from "../lib/api/ai";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  ts: number;
};

const QUICK_PROMPTS = [
  "Who are you and what do you build?",
  "What is your most standout project?",
  "What are your core skills?",
  "How can I reach you quickly?",
];

const MOCK_RESPONSES: Record<string, string> = {
  "Who are you and what do you build?":
    "I'm Phuoc Dang, an AI & Embedded Software Engineer focused on reliable AI systems, agentic RAG, and production-ready backend services.",
  "What is your most standout project?":
    "VNPT AI Hackathon — MeetMate SAAR. I led the stage-aware agentic RAG architecture, safety checks, and real-time orchestration for enterprise rollout.",
  "What are your core skills?":
    "Strongest areas: LLM/RAG systems, backend APIs (FastAPI/Flask), ML/DL pipelines, vector search with PostgreSQL/pgvector, and production deployment.",
  "How can I reach you quickly?":
    "Email: phuoc.dang2104@gmail.com • GitHub: PhuocDang2104 • LinkedIn: Phuoc Dang."
};
const DEFAULT_MOCK_RESPONSE =
  "I can share project highlights, technical deep dives, or help you find the right section of the portfolio.";
const SOUND_KEY = "uehg-ai-sound";
const SESSION_KEY = "uehg-ai-session";

const createId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const MeetMateChatWidget = () => {
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

  const playAudio = (ref: MutableRefObject<HTMLAudioElement | null>, src: string) => {
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
    const response = await homeAsk(text, sessionId);
    return response.message?.trim() || DEFAULT_MOCK_RESPONSE;
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
        text: MOCK_RESPONSES[text.trim()] ?? DEFAULT_MOCK_RESPONSE,
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
      <button aria-label="Open AI assistant" onClick={handleOpen} className="ai-chat-fab__button">
        <div className="ai-chat-fab__icon">
          <img src="/assets/Phuoc_chatbot.png" alt="AI assistant" draggable={false} />
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
              <span>Phước's AI Assistant</span>
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
                Sound
              </label>
              <button aria-label="Close" onClick={handleClose} className="ai-chat-close">
                ×
              </button>
            </div>
          </div>

          <div className="ai-chat-intro">
            I am an AI chatbot on behalf of Dang Nhu Phuoc. Feel free to ask.
          </div>

          <div ref={listRef} className="ai-chat-messages">
            <div className="ai-chat-suggestions">
              <div className="ai-chat-suggestions__label">Suggested questions</div>
              <div className="ai-chat-suggestions__list">
                {QUICK_PROMPTS.map((prompt) => (
                  <button key={prompt} onClick={() => sendMessage(prompt)} type="button">
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
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
                <span>Typing...</span>
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
                placeholder="Ask about projects, skills, or how to get in touch..."
              />
              <button onClick={() => sendMessage(input)} type="button">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetMateChatWidget;
