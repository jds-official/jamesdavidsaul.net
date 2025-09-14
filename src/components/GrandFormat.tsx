import Image from 'next/image';

export default function GrandFormat() {
  const linkText = `I'm also Grand Format, the vegan vinyl DJ in the Hudson Valley
`;
  return (
    <div className="relative w-80 flex justify-center">
      <a
        href="https://vegandj.biz"
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        aria-label={linkText}
      >
        <Image
          className="m-[0_auto] md:w-full"
          src="/images/grand-format.webp"
          alt="Grand Format Peanut Chews Logo"
          width={400}
          height={200}
        />
        <p className="font-script font-bold text-2xl relative mt-4 leading-10">
          {linkText}
        </p>
      </a>
    </div>
  );
}
