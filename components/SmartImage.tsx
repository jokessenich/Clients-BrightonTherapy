import Image from 'next/image';
import type { ImageProps } from 'next/image';

export type ImageRef = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type Props = Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> & {
  image: ImageRef;
  alt?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  fill?: boolean;
};

/**
 * Thin wrapper around next/image that unpacks our IMAGES registry objects
 * and enforces alt text presence. Falls back to registry alt if none provided.
 */
export default function SmartImage({
  image,
  alt,
  fill,
  sizes,
  ...rest
}: Props) {
  if (fill) {
    return (
      <Image
        src={image.src}
        alt={alt ?? image.alt}
        fill
        sizes={sizes ?? '100vw'}
        {...rest}
      />
    );
  }
  return (
    <Image
      src={image.src}
      alt={alt ?? image.alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      {...rest}
    />
  );
}
