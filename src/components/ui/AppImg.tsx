import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface TAppImg {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
}

function AppImg({ src, alt, width, height, className = '' }: TAppImg) {
  return (
    <LazyLoadImage
      src={src || '/images/placeholder.jpg'}
      alt={alt}
      width={width}
      height={height}
      className={className}
      effect="blur"
      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = '/images/placeholder.jpg';
      }}
    />
  );
}

export default AppImg;
