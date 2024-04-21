"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

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
			</div>
		</section>
	);
}
