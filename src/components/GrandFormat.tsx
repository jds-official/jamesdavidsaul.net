import Image from 'next/image';

export default function GrandFormat() {
  return (
    <div className="relative w-auto flex justify-center items-center">
      <a href="https://vegandj.biz" target="_blank" rel="noopener noreferrer">
        <Image
          className="w-[300px] h-[200px]"
          src="/images/grand-format.webp"
          alt="Grand Format Peanut Chews Logo"
          width={300}
          height={200}
        />
        <p className="font-script font-bold text-2xl relative bottom-5">
          Click for Grand Format, the vegan vinyl DJ in the Hudson Valley
        </p>
      </a>
    </div>
  );
}
