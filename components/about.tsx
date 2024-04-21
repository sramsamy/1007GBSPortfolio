"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import Image from "next/image";
// import introImage from "@/public/meAndBella.jpeg";
import introImage from "@/public/newProfilePic.png";
import { GiTriangleTarget } from "react-icons/gi";
import { recentTechs } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { HiDownload } from "react-icons/hi";
import { FaExternalLinkAlt } from "react-icons/fa";


export default function About() {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			className="px-4 mb-14 sm:mb-40 md:px-[18rem] py-8 md:py-0 md:mb-40 leading-8 text-center md:text-left scroll-mt-28 "
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<div className="flex items-center gap-4 text-center">
				<h1 className="text-blue-600 text-3xl mb-8">01.</h1>
				<SectionHeading>About me</SectionHeading>
			</div>
			<div className="flex flex-col md:flex-row justify-center md:justify-start gap-8 md:mt-14">
				<div className="md:w-[50%] text-left text-xl">
					<p className="mb-3">
						After studying a degree in{" "}
						<span className="font-medium">Biomedical Science</span>, I later
						discovered that my true passion lay in software development. So, I
						enrolled in a Bachelor of IT and fell in love with{" "}
						<span className="font-medium text-blue-600">building software</span>
						. <span className="">My favorite part of programming</span> is the
						joy I feel when seeing others interact with somerhing I've built. I
						also <span className=" text-blue-600">love</span> the feeling of
						finally figuring out a solution to a problem.
						<br />
						<br /> My core stack is{" "}
						<span className="font-medium text-blue-600">
							Larvel, PHP & SQlite{" "}
						</span>
						and I am also familiar with React, Next.js, Node.js, and MongoDB.
						I'm always looking to learn new technologies and I am currently
						looking for a{" "}
						<span className="font-medium">full-time position</span> as a
						software developer.
					</p>
					<p className="">
						<span className="">When I'm not coding</span>, I enjoy cooking,
						playing golf, watching F1, and playing with my dog. I also enjoy{" "}
						<span className="font-medium">learning new things</span> and I am
						currently learning how{" "}
						<span className="font-medium">to play the guitar</span>.
					</p>
					<br />
					<p>Here are some recent technologies I've been working with:</p>
					<div className="mt-10">
						<ul className="grid grid-cols-2 md:grid-cols-2 gap-2">
							{recentTechs.map((recentTech, index) => (
								<li key={index} className="flex items-center text-sm">
									<GiTriangleTarget className="text-blue-600 rotate-90 mr-2 text-xs" />
									<span>{recentTech}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="md:w-[40%] relative">
					<div id="box" className="relative rounded-xl overflow-hidden ml-8">
						<Image src={introImage} alt="Me and Bella" />
					</div>
				</div>
			</div>
			<div className="flex flex-col max-w-[75%]">
				<p className="mt-10">
					The link above will take you to my Linkedin profile (you can also
					click the LinkedIn icon on the left of the page), showcasing my work
					and education history. You will also see several groups that I have
					joined, showing my active engagement within the software development
					community. Feel free to explore my profile to gain a further
					understanding of my experience and education history, as well as my
					interests and skills.{" "}
				</p>
				<div className="max-w-[25%] whitespace-nowrap">
					<a
						href="https://www.linkedin.com/in/sachin-ramsamy/"
						target="_blank"
						download
						className="group mt-8 flex items-center text-blue-600 border border-blue-600 rounded-md px-4 py-3 gap-2 outline-none focus:scale-110 hover:scale-110 hover:text-blue-600 hover:border-blue-500 hover:bg-black active:scale-105 transition"
					>
						View my LinkedIn{" "}
						<FaExternalLinkAlt className="opacity-70 group-hover:translate-y-1 transition" />
					</a>
				</div>
			</div>
		</motion.section>
	);
}
