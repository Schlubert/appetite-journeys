// Helper function to create correct asset paths for GitHub Pages
export const getAssetPath = (path: string) => {
  const basePath = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Combine base path with asset path and normalize slashes
  return `${basePath}${cleanPath}`.replace(/\/+/g, '/');
};

// Specific helper for images
export const getImagePath = (imageName: string) => {
  return getAssetPath(`images/${imageName}`);
};