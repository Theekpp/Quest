import { useState, useEffect } from "react";

interface TelegramLocation {
  latitude: number;
  longitude: number;
}

interface UseTelegramLocationResult {
  location: TelegramLocation | null;
  isLoading: boolean;
  error: string | null;
  requestLocation: () => void;
}

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        isVersionAtLeast: (version: string) => boolean;
        LocationManager?: {
          init: () => void;
          getLocation: (callback: (location: TelegramLocation | null) => void) => void;
          isLocationAvailable: boolean;
        };
      };
    };
  }
}

export function useTelegramLocation(): UseTelegramLocationResult {
  const [location, setLocation] = useState<TelegramLocation | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const requestLocation = () => {
    setIsLoading(true);
    setError(null);

    const telegram = window.Telegram?.WebApp;

    if (!telegram) {
      // Fallback to browser geolocation if not in Telegram
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            setIsLoading(false);
          },
          (err) => {
            setError(err.message);
            setIsLoading(false);
          }
        );
      } else {
        setError("Геолокация недоступна");
        setIsLoading(false);
      }
      return;
    }

    // Try Telegram Location Manager (newer API)
    if (telegram.LocationManager) {
      telegram.LocationManager.init();
      
      if (telegram.LocationManager.isLocationAvailable) {
        telegram.LocationManager.getLocation((loc) => {
          if (loc) {
            setLocation(loc);
            setIsLoading(false);
          } else {
            setError("Не удалось получить геолокацию");
            setIsLoading(false);
          }
        });
      } else {
        setError("Геолокация недоступна в Telegram");
        setIsLoading(false);
      }
    } else {
      // Fallback to browser geolocation
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            setIsLoading(false);
          },
          (err) => {
            setError(err.message);
            setIsLoading(false);
          }
        );
      } else {
        setError("Геолокация недоступна");
        setIsLoading(false);
      }
    }
  };

  // Auto-request location on mount
  useEffect(() => {
    requestLocation();
  }, []);

  return { location, isLoading, error, requestLocation };
}
