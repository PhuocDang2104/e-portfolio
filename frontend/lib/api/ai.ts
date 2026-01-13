export type HomeAskResponse = {
  message: string;
  confidence?: number;
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

export async function homeAsk(message: string, sessionId?: string): Promise<HomeAskResponse> {
  const response = await fetch(`${API_BASE}/api/v1/chat/home`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, session_id: sessionId }),
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return (await response.json()) as HomeAskResponse;
}
