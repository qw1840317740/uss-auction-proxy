"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "velocity_favorites";

function getFavorites(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveFavorites(ids: string[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const toggle = useCallback((vehicleId: string) => {
    setFavorites((prev) => {
      const next = prev.includes(vehicleId)
        ? prev.filter((id) => id !== vehicleId)
        : [...prev, vehicleId];
      saveFavorites(next);
      return next;
    });
  }, []);

  const isFavorite = useCallback(
    (vehicleId: string) => favorites.includes(vehicleId),
    [favorites]
  );

  return { favorites, toggle, isFavorite };
}
