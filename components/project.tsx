"use client";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
	title,
	description,
	tags,
	imageUrl,
}: ProjectProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.div
			ref={ref}
			style={{
				scale: scaleProgress,
				opacity: opacityProgress,
			}}
			className="group mb-3 sm:mb-8 last:mb-0"
		>
			<section className="bg-slate-950 max-w-[50rem] border border-blue-600 rounded-lg sm:pr-8 relative sm:h-[21em]  hover:bg-slate-800 transition sm:group-even:pl-8 ">
				<div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[60%] flex flex-col h-full sm:group-even:ml-[18rem]">
					<h3 className="text-l font-semibold text-blue-700">{title}</h3>
					<p className="mt-2 leading-relaxed text-slate-300 mb-2 text-sm">
						{description}
					</p>
					<ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
						{tags.map((tag, index) => (
							<li
								className="bg-slate-800/[0.7] px-3 py-1 text-[0.6rem] uppercase tracking-wider text-white rounded-full"
								key={index}
							>
								{" "}
								{tag}
							</li>
						))}
					</ul>
				</div>
				<Image
					src={imageUrl}
					alt={description}
					quality={95}
					className="absolute hidden sm:block top-8 -right-40 max-w-[28.25rem] rounded-t-lg shadow-2xl
                transition 
                group-hover:scale-[1.04]
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2
                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2
                group-even:right-[initial] group-even:-left-40"
				/>
			</section>
		</motion.div>
	);
}
