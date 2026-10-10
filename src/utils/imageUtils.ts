import React from 'react';

/**
 * Fallback luxury image if any asset fails to load
 */
export const FALLBACK_IMAGE_PATH = 'assets/PRODUCTS/1ST1.jpeg';

/**
 * Fallback luxury image if any asset fails to load
 */
export const FALLBACK_IMAGE = getImageUrl(FALLBACK_IMAGE_PATH);

// Graceful SVG placeholder matching Blessed Boutique branding
export const SVG_PLACEHOLDER =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800"><rect width="600" height="800" fill="%23FCECE7"/><text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="22" fill="%23582C35" font-weight="700" letter-spacing="2">BLESSED BOUTIQUE</text><text x="50%" y="53%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14" fill="%237D4E56" letter-spacing="1">Elegant • Trendy • Affordable</text></svg>';

/**
 * Resolves any image URL appropriately across:
 * - Local Dev Server (Vite + Express)
 * - Cloud Run container preview
 * - GitHub Pages (root or subpath repository /<repo>/)
 * - External URLs
 */
export function getImageUrl(path?: string | null): string {
  // Strip leading slash and whitespace so it binds seamlessly with Vite base
  const rawBase = (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL || './';
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

  if (!path || typeof path !== 'string') {
    return `${base}${FALLBACK_IMAGE_PATH}`;
  }

  const trimmed = path.trim();
  if (
    trimmed.startsWith('http://') ||
    trimmed.startsWith('https://') ||
    trimmed.startsWith('data:') ||
    trimmed.startsWith('blob:')
  ) {
    return trimmed;
  }

  // Heal any legacy references to old removed folders
  let normalized = trimmed;
  if (normalized.includes('/Products/Roheenaz') || normalized.includes('/Products/Morja')) {
    normalized = FALLBACK_IMAGE_PATH;
  }

  const cleanPath = normalized.replace(/^\/+/, '');
  return `${base}${cleanPath}`;
}

/**
 * Error handler to prevent broken image icons in UI
 */
export function handleImageError(
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallback: string = FALLBACK_IMAGE_PATH
) {
  const target = e.currentTarget;
  if (!target.dataset.hasRetried) {
    target.dataset.hasRetried = 'true';
    target.src = getImageUrl(fallback);
  } else if (!target.dataset.hasSvgFallback) {
    target.dataset.hasSvgFallback = 'true';
    target.src = SVG_PLACEHOLDER;
  }
}
