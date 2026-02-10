import { initialBackgrounds, randomImage } from "@/data/data";
import type { BackgroundItem } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ChangeBgState {
  // Value:
  isOpened: boolean;
  initialBackgrounds: BackgroundItem[];

  //   Function:
  toggleView: VoidFunction;
  addRandomImage: VoidFunction;
  removeCard: (id: string) => void;
}

export const useChangeBgStore = create<ChangeBgState>()(
  persist(
    (set) => ({
      initialBackgrounds,
      isOpened: false,

      toggleView: () =>
        set((state) => ({
          isOpened: !state.isOpened,
        })),

      removeCard: (id) =>
        set((state) => ({
          initialBackgrounds: state.initialBackgrounds.filter(
            (item) => item.id !== id,
          ),
        })),

      addRandomImage: () =>
        set((state) => ({
          initialBackgrounds: [
            ...state.initialBackgrounds,
            {
              id: String(crypto.randomUUID()).slice(0, 8),
              status: "loading",
              image:
                randomImage[Math.floor(Math.random() * randomImage.length)],
            },
          ],
        })),
    }),

    {
      name: "change-bg-store",
    },
  ),
);
