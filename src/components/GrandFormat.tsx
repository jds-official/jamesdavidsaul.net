import Image from 'next/image';

export default function GrandFormat() {
  return (
    <div>
      <a href="https://vegandj.biz" target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/grand-format.webp"
          alt="Grand Format Peanut Chews Logo"
          width={300}
          height={100}
        />
        <p className="font-script font-bold text-2xl relative bottom-5 w-2/3 xl:w-full">
          Or click for Grand Format, the vegan vinyl DJ in the Hudson Valley
        </p>
      </a>
    </div>
  );
}
