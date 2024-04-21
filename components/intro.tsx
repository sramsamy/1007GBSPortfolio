"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
	return (
		<section
			id="home"
			className="h-screen text-left sm:mb:0 sm:mt-4 flex flex-col justify-center sm:flex-row scroll-mt-[100rem]"
		>
			<motion.div
				className="ml-4 absolute left-0 w-16 hidden xl:flex pl-4 p sm:mb-0 sm:mt-0"
				initial={{ opacity: 0, y: -100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1 }}
			>
				{/* Social Media Links */}
				<div className="fixed mt-32 flex flex-col items-center space-y-4 pl-6">
					{/* social media icons */}
					<a
						href="https://www.linkedin.com/in/sachin-ramsamy/"
						target="_blank"
						className="text-xl text-slate-400 p-2 outline-none focus:scale-110 hover:scale-110 hover:text-blue-600 hover:-translate-y-1 active:scale-105 transition"
					>
						<FiLinkedin />
					</a>
					<a
						href="https://github.com/sramsamy"
						target="_blank"
						className="text-xl text-slate-400 p-2 outline-none focus:scale-110 hover:scale-110 hover:text-blue-600 hover:-translate-y-1 active:scale-105 transition"
					>
						<FiGithub />
					</a>
					<a
						href="https://www.instagram.com/sachinramsamy__/"
						target="_blank"
						className="text-xl text-slate-400 p-2 outline-none focus:scale-110 hover:scale-110 hover:text-blue-600 hover:-translate-y-1 active:scale-105 transition"
					>
						<FiInstagram />
					</a>
				</div>
			</motion.div>
			<div className="flex flex-col mt-32 sm:flex-row ">
				<motion.h1
					className="mb-10 px-4 font-medium !leading-[1.5]"
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
				>
					<p className="text-blue-600 mb-4 text-xl">Hi, my name is</p>
					<p className="text-slate-200 font-bold text-7xl mb-4">
						{" "}
						Sachin Ramsamy.
					</p>
					<p className="text-slate-300 font-bold text-6xl mb-8">
						{" "}
						Aspiring full-stack developer.
					</p>
					<p className=" text-slate-300 mb-4 text-l">
						I'm a student at{" "}
						<span className="text-blue-600">Griffith University</span> who's
						passion is to bridge
						<br /> the gap between humans and technology by designing
						<br /> and developing user friendly and intuitive apps.
					</p>

					<motion.div
						className="flex items-center sm:flex-row gap-6 text-xs font-medium"
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
					>
						<Link
							href="#contact"
							className="group mt-8 flex items-center border border-slate-400 rounded-md text-slate-400 px-4 py-3 gap-2 outline-none focus:scale-110 hover:scale-110 hover:bg-black hover:text-slate-300 hover:border-slate-300 active:scale-105 transition"
							onClick={() => {
								setActiveSection("Contact");
								setTimeOfLastClick(Date.now());
							}}
						>
							Contact me{" "}
							<BsArrowRight className="opacity-70 group-hover:translate-x-1" />
						</Link>
						<a
							href="/Cirriculum Vitae of Sachin Ramsamy.pdf"
							download
							className="group mt-8 flex items-center text-blue-600 border border-blue-600 rounded-md px-4 py-3 gap-2 outline-none focus:scale-110 hover:scale-110 hover:text-blue-600 hover:border-blue-500 hover:bg-black active:scale-105 transition"
						>
							Resume{" "}
							<HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
						</a>
					</motion.div>
				</motion.h1>
			</div>
			<motion.div
				className="my-[160px] fixed flex-col right-0 xl:flex hidden pl-4 p"
				initial={{ opacity: 0, y: -100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1 }}
			>
				<div className="pb-24 fixed flex right-0 lg:flex rotate-90 ">
					<a
						href="mailto:sachin_drz125@hotmail.com"
						className="text-l text-slate-400 p-2 outline-none focus:scale-110 hover:scale-110 hover:text-blue-700 hover:-translate-y-1 active:scale-105 transition"
					>
						sachin_drz125@hotmail.com
					</a>
				</div>
			</motion.div>
		</section>
	);
}
