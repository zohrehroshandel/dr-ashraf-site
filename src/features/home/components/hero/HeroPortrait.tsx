import Image from "next/image";

type HeroPortraitProps = {
	imageSrc: string;
	alt: string;
	tagline: string;
};

export function HeroPortrait({ imageSrc, alt, tagline }: HeroPortraitProps) {
	return (
		<div className="relative mx-auto flex w-full max-w-sm items-center justify-center sm:max-w-md">
			<div
				aria-hidden="true"
				className="absolute -inset-2 rounded-full bg-linear-to-tr from-[#70458f]/20 via-[#eedef7]/60 to-transparent blur-lg"
			/>

			<div className="relative aspect-square w-64 overflow-hidden rounded-full border-4 border-white bg-[#ece4f2] shadow-[0_20px_50px_-15px_rgba(75,40,107,0.28)] sm:w-80 lg:w-96">
				<Image
					src={imageSrc}
					alt={alt}
					fill
					priority
					sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
					className="object-cover object-top"
				/>
			</div>
			<div
				dir="ltr"
				className="absolute -bottom-3 rounded-full border border-[#eedef7] bg-white/95 px-5 py-2 shadow-md backdrop-blur-sm sm:bottom-0 sm:px-6 sm:py-2.5"
			>
				<p className="text-xs font-bold tracking-wider text-[#70458f] sm:text-sm">
					{tagline}
				</p>
			</div>
		</div>
	);
}
