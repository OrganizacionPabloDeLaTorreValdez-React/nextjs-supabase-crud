import Image from "next/image";

function CustomImage({
  src,
  alt,
  priority,
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={650}
      height={366}
      sizes="(min-width: 700px) 650px, calc(92.11vw + 24px)"
      className="w-full h-auto"
      priority={!!priority}
    />
  );
}

export default CustomImage;