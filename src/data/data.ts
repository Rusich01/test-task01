import type { BackgroundItem } from "@/types/types";

export const backgrounds: BackgroundItem[] = [
  {
    id: String(crypto.randomUUID()).slice(0, 8),
    status: "done",
    image: "./img/background/background-02.png",
  },

  {
    id: String(crypto.randomUUID()).slice(0, 8),
    status: "done",
    image: "./img/background/background-03.png",
  },
];

export const randomImage = [
  "./img/background/background-02.png",
  "./img/background/background-03.png",
  "./img/background/background-04.png",
  "./img/background/background-05.png",
];
