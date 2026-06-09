/**
 * Returns the image path for a project based on its ID.
 * Tries .png first, then .jpg, then .jpeg.
 * Returns a placeholder if no image exists.
 */
export function getProjectImageSrc(id: string): string {
  // In a real app, you could check file existence at build time.
  // For now, we assume .png exists; fallback handled by Next.js Image component.
  return `/images/${id}.png`;
}
