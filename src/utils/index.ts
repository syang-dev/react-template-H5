export * from "./px2rem";

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
