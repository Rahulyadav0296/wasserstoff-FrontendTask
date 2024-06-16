import Image from "next/image";

function Artist({ className, src, alt, props }) {
  return (
    <div className={className}>
      <Image src={src} alt={alt} {...props} />
    </div>
  );
}

export default Artist;
