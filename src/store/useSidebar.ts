import { backgrounds, randomImage } from "@/data/data";
import type { BackgroundItem } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ChangeBgState {
  // Value:
  isOpened: boolean;
  backgrounds: BackgroundItem[];

  //   Function:
  toggleView: VoidFunction;
  addRandomImage: VoidFunction;
  removeCard: (id: string) => void;
}

export const useChangeBgStore = create<ChangeBgState>()(
  persist(
    (set) => ({
      backgrounds,
      isOpened: false,

      toggleView: () =>
        set((state) => ({
          isOpened: !state.isOpened,
        })),

      removeCard: (id) =>
        set((state) => ({
          backgrounds: state.backgrounds.filter((item) => item.id !== id),
        })),

      addRandomImage: () => {
        const id = String(crypto.randomUUID()).slice(0, 8);
        const random =
          randomImage[Math.floor(Math.random() * randomImage.length)];
        set((state) => ({
          backgrounds: [
            ...state.backgrounds,
            {
              id,
              status: "loading",
              image: "",
            },
          ],
        }));

        setTimeout(() => {
          set((state) => ({
            backgrounds: state.backgrounds.map((item) =>
              item.id === id
                ? { ...item, status: "done", image: random }
                : item,
            ),
          }));
        }, 1000);
      },
    }),

    {
      name: "change-bg-store",
    },
  ),
);
