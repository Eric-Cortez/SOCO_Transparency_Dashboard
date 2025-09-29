// Color theme constants for consistent chart styling
// Professional law enforcement/government theme - balanced opacity for visibility

// Primary navy/steel blue gradient - professional and visible
export const PRIMARY_NAVY = [
    '#3b82f6', // blue-500
    '#2563eb', // blue-600
    '#1d4ed8', // blue-700
    '#1e40af', // blue-800
    '#1e3a8a', // blue-900
    '#172554', // blue-950
    '#1f2937', // gray-800
    '#111827'  // gray-900
];

// Secondary steel/slate gradient - professional with good contrast
export const SECONDARY_STEEL = [
    '#64748b', // slate-500
    '#475569', // slate-600
    '#334155', // slate-700
    '#1e293b', // slate-800
    '#0f172a', // slate-900
    '#374151', // gray-700
    '#1f2937', // gray-800
    '#111827'  // gray-900
];

// Tertiary professional teal/cyan - sophisticated and visible
export const TERTIARY_PROFESSIONAL = [
    '#14b8a6', // teal-500
    '#0d9488', // teal-600
    '#0f766e', // teal-700
    '#115e59', // teal-800
    '#134e4a', // teal-900
    '#0891b2', // sky-600
    '#0c4a6e', // sky-900
    '#075985'  // sky-800
];

// Accent charcoal/dark grays - visible supporting data
export const ACCENT_CHARCOAL = [
    '#6b7280', // gray-500
    '#4b5563', // gray-600
    '#374151', // gray-700
    '#1f2937', // gray-800
    '#111827', // gray-900
    '#52525b', // zinc-600
    '#3f3f46', // zinc-700
    '#27272a'  // zinc-800
];

// Secondary teal/cyan gradient for variety
export const TEAL_MONOCHROME = [
    '#ccfbf1', // teal-100
    '#99f6e4', // teal-200
    '#5eead4', // teal-300
    '#2dd4bf', // teal-400
    '#14b8a6', // teal-500
    '#0d9488', // teal-600
    '#0f766e', // teal-700
    '#115e59', // teal-800
    '#134e4a', // teal-900
    '#042f2e'  // teal-950
];

// Slate monochrome for neutral charts
export const SLATE_MONOCHROME = [
    '#94a3b8', // slate-400
    '#64748b', // slate-500
    '#475569', // slate-600
    '#334155', // slate-700
    '#1e293b', // slate-800
    '#0f172a', // slate-900
    '#020617'  // slate-950
];

// Blue and Orange palette for pie charts - high contrast and accessible
export const BLUE_ORANGE_PALETTE = [
    '#3b82f6', // blue-500 - primary blue
    '#ea580c', // orange-600 - vibrant orange
    '#2563eb', // blue-600 - deeper blue
    '#f97316', // orange-500 - lighter orange
    '#1d4ed8', // blue-700 - even deeper blue
    '#c2410c', // orange-700 - deeper orange
    '#1e40af', // blue-800 - navy blue
    '#9a3412', // orange-800 - dark orange
    '#1e3a8a', // blue-900 - darkest blue
    '#7c2d12', // orange-900 - darkest orange
];

// Get colors based on data length to ensure good distribution
export const getColorPalette = (dataLength, theme = 'primary') => {
    const themes = {
        primary: PRIMARY_NAVY,
        secondary: SECONDARY_STEEL,
        tertiary: TERTIARY_PROFESSIONAL,
        accent: ACCENT_CHARCOAL,
        blueOrange: BLUE_ORANGE_PALETTE
    };

    const selectedTheme = themes[theme] || themes.primary;

    // If we need more colors than available, interpolate
    if (dataLength <= selectedTheme.length) {
        return selectedTheme.slice(0, dataLength);
    }

    // For more items, distribute colors evenly across the range
    const step = Math.floor(selectedTheme.length / dataLength);
    const colors = [];
    for (let i = 0; i < dataLength; i++) {
        const index = Math.min(i * step, selectedTheme.length - 1);
        colors.push(selectedTheme[index]);
    }

    return colors;
};

// Specific color schemes for different chart types - professional law enforcement theme
export const CHART_THEMES = {
    PIE_CHARTS: 'blueOrange',     // Blue and orange for pie charts - high contrast and accessible
    BAR_CHARTS: 'secondary',      // Steel grays for bar charts - professional
    LOCATION_CHARTS: 'primary',   // Navy blues for location data - consistent with primary theme
    AGENCY_CHARTS: 'accent'       // Charcoal grays for agency data - neutral but strong
};