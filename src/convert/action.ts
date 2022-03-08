import * as jpeg from 'jpeg-js';
import fs from 'fs';
import sharp from 'sharp';

type Pixel = {
  r: number;
  b: number;
  g: number;
};

export async function action(dir: string, options: { brightness: number; width: number }) {
  options.width = +options.width || 75;
  await sharp(dir).resize({ width: options.width }).toFile('TEMP-PHOTO-FILE.jpeg');

  const scale = defaultScale
    .join('')
    .substring(0, (+options.brightness || 0.8) * defaultScale.length)
    .split('');

  const img = jpeg.decode(fs.readFileSync('TEMP-PHOTO-FILE.jpeg'));
  fs.unlinkSync('TEMP-PHOTO-FILE.jpeg');

  const pxls: number[] = [];
  for (let i = 0; i < img.data.length; i += 4) {
    pxls.push(
      greyscale({
        r: img.data[i],
        b: img.data[i] + 1,
        g: img.data[i] + 2,
      }),
    );
    pxls.push(
      greyscale({
        r: img.data[i],
        b: img.data[i] + 1,
        g: img.data[i] + 2,
      }),
    );
  }

  let frame = '';
  for (const px of pxls) {
    if (frame.length % (options.width * 2 + 1) === 0) frame += '\n';
    frame += determine(px, scale);
  }
  console.log(frame);
}

function greyscale(px: Pixel) {
  return Math.round(0.299 * px.r + 0.587 * px.g + 0.114 * px.b);
}

function determine(px: number, scale: string[]) {
  const num = px > 250 ? 254 : px;
  return scale[Math.floor(num / (255 / scale.length))];
}

// prettier-ignore
const defaultScale = [' ', '-', '_', '+', '<', '>', 'i', '!', 'l', 'I', '?', '/', '|', '(', ')', '1', '{', '}', '[', ']', 'r', 'c', 'v', 'u', 'n', 'x', 'z', 'j', 'f', 't', 'L', 'C', 'J', 'U', 'Y', 'X', 'Z', 'O', '0', 'Q', 'o', 'a', 'h', 'k', 'b', 'd', 'p', 'q', 'w', 'm', '*', 'W', 'M', 'B', '8', '&', '%', '$', '#', '@'] as const;
