import Image from 'next/image';

export default function GrandFormat() {
  return (
    <div className="relative md:w-[350px] flex justify-center">
      <a href="https://vegandj.biz" target="_blank" rel="noopener noreferrer">
        <Image
          className="w-[300px] m-[0_auto] md:w-full"
          src="/images/grand-format.webp"
          alt="Grand Format Peanut Chews Logo"
          width={400}
          height={200}
        />
        <p className="font-script font-bold text-2xl relative mt-4 leading-10">
          Click for Grand Format, the vegan vinyl DJ in the Hudson Valley
        </p>
      </a>
    </div>
  );
}
