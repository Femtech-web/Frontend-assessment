export const formatFileSize = (size: number): string => {
  if (size < 1024) return `${size} bytes`;
  else if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
  else return `${(size / (1024 * 1024)).toFixed(2)} MB`;
};