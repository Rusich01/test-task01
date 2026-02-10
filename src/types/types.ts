export type BackgroundStatus = "loading" | "done";

export interface BackgroundItem {
  id: string;
  status: BackgroundStatus;
  image?: string;
}
