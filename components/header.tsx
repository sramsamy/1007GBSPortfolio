"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/SR.png";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSectionContext();
	const filteredLinks = links.filter((link) => link.name !== "Contact");

	return (
		<header className="z-[999] relative px-4">
			<motion.div
				className="sm:flex top-0 left-0 h-12 py-2 pl-2 sm:h-[initial] sm:py-0 hidden"
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
			>
				<Image width={50} height={50} src={logo} alt="Logo" />
			</motion.div>
			<motion.div
				className="mt-6 fixed top-0 justify-end right-0 w-full bg-slate-950 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:h-[3.25rem] sm:w-[42rem] sm:rounded-full"
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
			>
				<nav className=" flex fixed top-0 h-12 py-2 sm:h-[initial] sm:py-0 justify-end">
					<ul className="flex w-[22rem flex-wrap items-center justify-center gap-y-1 text-sm font-medium text-slate-400 sm:w-[initial sm:flex-nowrap sm:gap-5 mr-5 text-base">
						{filteredLinks.map((link) => (
							<motion.li
								className="h-3/4 flex items-center justify-center relative"
								key={link.hash}
								initial={{ y: -100, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
							>
								<Link
									className={clsx(
										"flex w-full items-center justify-center px-2 py-3 hover:text-blue-600 transition gap-2",
										{
											"text-blue-600": activeSection === link.name,
										}
									)}
									href={link.hash}
									onClick={() => {
										setActiveSection(link.name);
										setTimeOfLastClick(Date.now());
									}}
								>
									<span className="text-blue-600">0{link.num}.</span>
									{link.name}
									{link.name === activeSection && (
										<motion.span
											className="bg-slate-900 rounded-full absolute inset-0 -z-10"
											layoutId="activeSection"
											transition={{
												type: "spring",
												stiffness: 380,
												damping: 30,
											}}
										></motion.span>
									)}
								</Link>
							</motion.li>
						))}
					</ul>
				</nav>
			</motion.div>
		</header>
	);
}
