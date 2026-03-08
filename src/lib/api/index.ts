const PREFIX = "admanage_";

export const storage = {
  getItem<T>(key: string, fallback: T): T {
    if (typeof window === "undefined") return fallback;
    try {
      const raw = localStorage.getItem(PREFIX + key);
      return raw ? (JSON.parse(raw) as T) : fallback;
    } catch {
      return fallback;
    }
  },

  setItem<T>(key: string, value: T): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  },

  removeItem(key: string): void {
    if (typeof window === "undefined") return;
    localStorage.removeItem(PREFIX + key);
  },
};
