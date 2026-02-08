import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ChangeBgState {
  // Value:
  isOpened: boolean;

  //   Function:
  toggleView: VoidFunction;
}

export const useChangeBgStore = create<ChangeBgState>()(
  persist(
    (set) => ({
      isOpened: false,

      toggleView: () =>
        set((state) => ({
          isOpened: !state.isOpened,
        })),
    }),
    {
      name: "change-bg-store",
    },
  ),
);
