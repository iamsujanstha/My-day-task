export const clx = (...args: unknown[]) => {
  return args
    .flat()
    .filter((x) => typeof x === "string")
    .join(" ")
    .trim();
};
