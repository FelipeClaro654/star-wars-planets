export const getIdFromUrl = (urlString: string) => {
  return urlString.split("/").filter(Boolean).pop();
};
