"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => {
		return {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.05 * index,
			},
		};
	},
};

export default function Skills() {
	const { ref } = useSectionInView("Skills");

	return (
		<section
			ref={ref}
			id="skills"
			className="mb-28 max-w-[53rem] scroll-mt-28 text-cetner sm:mb-40 mt-40"
		>
			<div className="flex items-center gap-4 text-center">
				<h1 className="text-blue-600 text-3xl mb-8">04.</h1>
				<SectionHeading>Skills</SectionHeading>
			</div>
			<ul className="flex flex-wrap justify-center gap-2 text-lg text-blue-600 mt-14">
				{skillsData.map((skill, index) => (
					<motion.li
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate"
						viewport={{
							once: true,
						}}
						custom={index}
						key={index}
						className="bg-slate-950  border border-blue-600 rounded-xl px-5 py-3"
					>
						{skill}
					</motion.li>
				))}
			</ul>
		</section>
	);
}
