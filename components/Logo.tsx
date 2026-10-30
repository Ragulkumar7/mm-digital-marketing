import Image from "next/image";

type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`.trim()}>
      <Image
        src="/images/mm-digital-marketing-logo.jpeg"
        alt="MM Brandvista"
        width={512}
        height={512}
        priority
        sizes="(min-width: 640px) 56px, 48px"
        className="h-12 w-12 object-contain sm:h-14 sm:w-14"
      />
    </span>
  );
}
