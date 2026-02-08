type BackgroundStatus = "loading" | "done";

interface BackgroundItem {
  id: string;
  status: BackgroundStatus;
  image: string;
}

export const listBackground: BackgroundItem[] = [
  {
    id: "1",
    status: "done",
    image: "./img/background/background-01.png",
  },
  {
    id: "2",
    status: "done",
    image: "./img/background/background-02.png",
  },
  {
    id: "3",
    status: "done",
    image: "./img/background/background-03.png",
  },
  {
    id: "4",
    status: "done",
    image: "./img/background/background-04.png",
  },
  {
    id: "5",
    status: "done",
    image: "./img/background/background-05.png",
  },
];
