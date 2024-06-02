"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { HiDownload } from "react-icons/hi";

export default function Projects() {
	const { ref } = useSectionInView("Projects", 0.5);

	return (
		<section ref={ref} id="projects" className="scroll-mt-28 mb-48 ">
			<div className="flex items-center gap-4 text-center">
				<h1 className="text-blue-600 text-3xl mb-8">03.</h1>
				<SectionHeading>Projects</SectionHeading>
			</div>
			<div className="mt-14">
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
				<div className="flex">
					<a
						href="/Ramsamy_s5305737_SolutionsPaper.pdf"
						download
						className="group flex items-center text-blue-600 border border-blue-600 rounded-md px-4 py-3 gap-2 outline-none focus:scale-110 hover:scale-110 hover:text-blue-600 hover:border-blue-500 hover:bg-black active:scale-105 transition"
					>
						Download Solutions Paper{" "}
						<HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
					</a>
				</div>
			</div>
		</section>
	);
}
