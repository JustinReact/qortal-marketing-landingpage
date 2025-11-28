import { useEffect, useState } from "react";

export function usePersistentState<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(defaultValue);
  const [hydrated, setHydrated] = useState(false);

  // Read from localStorage after mount
  useEffect(() => {
    if (typeof window === "undefined") return; // extra safety, though useEffect is client-only

    const saved = localStorage.getItem(key);
    if (saved != null) {
      try {
        setValue(JSON.parse(saved));
      } catch {
        // if parsing fails, fall back to defaultValue
        setValue(defaultValue);
      }
    }
    setHydrated(true);
  }, [key, defaultValue]);

  // Write to localStorage when value changes (and after we've hydrated)
  useEffect(() => {
    if (!hydrated || value === 8 || value === 9) return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore quota / private mode errors
    }
  }, [key, value, hydrated]);

  return [value, setValue, hydrated] as const;
}
