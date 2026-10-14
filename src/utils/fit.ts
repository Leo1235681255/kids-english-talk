/** Picks a font size class by word length so long Level 3 phrases ("Mid-Autumn Festival") still fit; sizes are [short, medium, long, very long]. */
export const fitText = (text: string, sizes: [string, string, string, string], limits: [number, number, number] = [8, 11, 16]) =>
  text.length <= limits[0] ? sizes[0] : text.length <= limits[1] ? sizes[1] : text.length <= limits[2] ? sizes[2] : sizes[3];
