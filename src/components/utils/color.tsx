const fromHexToRgb = (hexColor: string) => {
  const sanitizedHexColor = hexColor.replace('#', '');
  if (sanitizedHexColor.length === 3 || sanitizedHexColor.length === 6) {
    const red = parseInt(sanitizedHexColor.substring(0, 2), 16);
    const green = parseInt(sanitizedHexColor.substring(2, 4), 16);
    const blue = parseInt(sanitizedHexColor.substring(4, 6), 16);
    return `${red}, ${green}, ${blue}`;
  }
  throw new Error('Bad color');
};

export const applyAlpha = (color: string, alpha: number): string => {
  try {
    if (color.startsWith('var(')) {
      return `rgba(${color}, ${alpha})`;
    } else {
      return `rgba(${fromHexToRgb(color)}, ${alpha})`;
    }
  } catch (e) {
    return color;
  }
};
