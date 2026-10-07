import { ImageResponse } from 'next/og';

// The full logo's fine line work disappears at tab size, so the icon is a bold "AP" monogram.
export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export function Monogram({ px }: { px: number }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#2a2a28',
        color: '#ffffff',
        fontSize: px * 0.46,
        fontWeight: 800,
        letterSpacing: -px * 0.02,
        borderBottom: `${Math.round(px * 0.09)}px solid #9a8468`,
      }}
    >
      AP
    </div>
  );
}

export default function Icon() {
  return new ImageResponse(<Monogram px={size.width} />, size);
}
