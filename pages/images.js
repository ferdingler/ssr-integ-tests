import Image from 'next/image';

// import avifImage from '../public/small-pillars-of-creation.avif';
// import jpegImage from '../public/small-pillars-of-creation.jpeg';
// import pngImage from '../public/small-pillars-of-creation.png';
// import webpImage from '../public/small-pillars-of-creation.webp';

export default function Redirects() {
  return (
    <>
      <h1>Images</h1>
      <h2> Small</h2>
      <Image
        src="/small-pillars-of-creation.avif"
        width={600}
        height={300}
        quality={100}
        alt="pillars"
      />
      <Image
        src="/small-pillars-of-creation.jpeg"
        width={600}
        height={300}
        quality={100}
        alt="pillars"
      />
      <Image
        src="/small-pillars-of-creation.png"
        width={600}
        height={300}
        quality={100}
        alt="pillars"
      />
      <Image
        src="/small-pillars-of-creation.webp"
        width={600}
        height={300}
        quality={100}
        alt="pillars"
      />
      <h2> Large</h2>
      <Image
        src="/large-pillars-of-creation.avif"
        width={600}
        height={300}
        quality={100}
        alt="pillars"
      />
      <Image
        src="/large-pillars-of-creation.jpeg"
        width={600}
        height={300}
        quality={100}
        alt="pillars"
      />
      <Image
        src="/large-pillars-of-creation.png"
        width={600}
        height={300}
        quality={100}
        alt="pillars"
      />
      <Image
        src="/large-pillars-of-creation.webp"
        width={600}
        height={300}
        quality={100}
        alt="pillars"
      />
    </>
  );
}
