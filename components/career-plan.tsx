"use client";
import React, { useTransition, useState } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import TabButton from "./tab-button";
import { careerPlanData } from "@/lib/data";
import { GiTriangleTarget } from "react-icons/gi";
import { motion } from "framer-motion";

interface tabProps {
	startTransition: boolean;
	setOpenPopup: boolean;
}

export default function CareerPlan() {
	const { ref } = useSectionInView("Career Plan", 0.5);
	const [tab, setTab] = useState("selfAwareness");
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id: React.SetStateAction<string>) => {
		startTransition(() => {
			setTab(id);
		});
	};

	const currentCareerPlan = careerPlanData.find((item) => item.id === tab);

	// If no data is found, provide a default value
	const answer = currentCareerPlan ? currentCareerPlan.answer : "";

	return (
		<motion.section
			ref={ref}
			id="careerPlan"
			className="h-screen px-4 mb-14 sm:mb-40 md:mt-28 md:px-[14rem] py-8 md:py-0 md:mb-40 leading-8 text-center md:text-left scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
		>
			<div className="flex items-center gap-4 text-center">
				<h1 className="text-blue-600 text-3xl mb-8">02.</h1>
				<SectionHeading>Career Plan</SectionHeading>
			</div>
			<p className="text-xl">
				Navigate the following tabs to view my comprehensive career plan, where
				I strategically chart my path towards success.
			</p>
			<div className="flex">
				<motion.div
					className="w-[30%] flex flex-col mt-8 gap-4"
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1 }}
				>
					<TabButton
						selectTab={() => handleTabChange("selfAwareness")}
						active={tab === "selfAwareness"}
					>
						<span className="whitespace-nowrap">01. Self Awareness</span>
					</TabButton>
					<TabButton
						selectTab={() => handleTabChange("exploreYourOptions")}
						active={tab === "exploreYourOptions"}
					>
						<span className="whitespace-nowrap">02. Explore your Options</span>
					</TabButton>
					<TabButton
						selectTab={() => handleTabChange("experienceAndInsight")}
						active={tab === "experienceAndInsight"}
					>
						<span className="whitespace-nowrap">
							03. Gain Experience & Insight
						</span>
					</TabButton>
					<TabButton
						selectTab={() => handleTabChange("evidenceYourSkills")}
						active={tab === "evidenceYourSkills"}
					>
						<span className="whitespace-nowrap">04. Evidence Your Skills</span>
					</TabButton>
					<TabButton
						selectTab={() => handleTabChange("developNetworks")}
						active={tab === "developNetworks"}
					>
						<span className="whitespace-nowrap">05. Develop Networks</span>
					</TabButton>
				</motion.div>
				<motion.div
					className="flex-col mt-8 bg-slate-950"
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.5 }}
				>
					{tab === "selfAwareness" && (
						<div className="w-[70%] mx-auto px-4">
							<p className="text-xl tracking-wide">
								To understand the complexities of my professional trajectory,
								self-awareness is an important trait to develop as it allows us
								to find a career that matches our interests, values, skills,
								personality, and strengths. I leveraged the insights from the
								<a
									className="text-blue-600 hover:text-blue-500"
									href="https://www.truity.com/test/holland-code-career-test"
									target="_blank"
								>
									{" "}
									Holland Code
								</a>{" "}
								career test, where I’ve confirmed my passion for theory,
								research, and intellectual inquiry, particularly in the realms
								of science and technology. This aligns closely with my
								aspiration to thrive as a full stack developer. Utilising
								resources likes Griffith University’s{" "}
								<a
									href="/Defining-Your-Values.pdf"
									download
									className=" text-blue-600 hover:text-blue-500"
								>
									“Defining your Values”
								</a>{" "}
								worksheet, I’ve been able to explore my core values. The
								following values resonate deeply with me:{" "}
							</p>
							<ul className="grid grid-cols-3 md:grid-cols-3 gap-2 mt-4 mb-4 ">
								<li className="flex items-center text-xl">
									<GiTriangleTarget className="text-blue-600 rotate-90 mr-2 text-xs" />
									Diversity
								</li>
								<li className="flex items-center text-xl">
									<GiTriangleTarget className="text-blue-600 rotate-90 mr-2 text-xs" />
									Adventurous Spirit
								</li>
								<li className="flex items-center text-xl">
									<GiTriangleTarget className="text-blue-600 rotate-90 mr-2 text-xs" />
									Problem-Solving
								</li>
								<li className="flex items-center text-xl">
									<GiTriangleTarget className="text-blue-600 rotate-90 mr-2 text-xs" />
									Moral fulfillment
								</li>
								<li className="flex items-center text-xl">
									<GiTriangleTarget className="text-blue-600 rotate-90 mr-2 text-xs" />
									Continuous Learning
								</li>
								<li className="flex items-center text-xl">
									<GiTriangleTarget className="text-blue-600 rotate-90 mr-2 text-xs" />
									Teamwork
								</li>
								<li className="flex items-center text-xl">
									<GiTriangleTarget className="text-blue-600 rotate-90 mr-2 text-xs" />
									Honesty
								</li>
								<li className="flex items-center text-xl">
									<GiTriangleTarget className="text-blue-600 rotate-90 mr-2 text-xs" />
									Analytical Skills
								</li>
								<li className="flex items-center text-xl">
									<GiTriangleTarget className="text-blue-600 rotate-90 mr-2 text-xs" />
									Respect for Others
								</li>
							</ul>
							<p
								className="text-xl tracking-wide
"
							>
								Through introspection, I’ve scrutinised past achievements to
								reveal the skills that propelled me forward, shaping the way for
								informed skill development and enhancement. By undertaking the
								MBTI personality test, I’ve gained insights into how my
								personality traits intersect with career choices, providing an
								understanding of my professional compatibility. Lastly, through
								the{" "}
								<a
									href="https://www.viacharacter.org/"
									target="_blank"
									className="	text-blue-600
									hover:text-blue-500"
								>
									scientific survey tool
								</a>{" "}
								on the Institute of Character, I’ve identified my top strengths
								– Kindness, forgiveness, curiosity humility and leadership. –
								alongside areas for growth such as creativity and spirituality.
								This comprehensive understanding serves as a compass guiding my
								career path, ensuring alignment with my intrinsic attributes and
								aspirations.
							</p>
						</div>
					)}
					{tab === "exploreYourOptions" && (
						<div className="w-[80%] mx-auto px-4">
							<p
								className="text-xl tracking-wide
"
							>
								To thoroughly explore my career options and ensure a
								well-informed decision-making process, I’ve dedicated myself to
								comprehensive research and active engagement within the software
								development industry. Throughout my degree, I’ve remained
								attuned to the dynamic landscape of the Australian job market,
								particularly noting the growing opportunities within the
								software development industry. <br />
								<br />
								Using a proactive approach has helped me align my educational
								pursuits with the evolving demands of the field. Early exposure
								to
								<a
									href="https://sfia-online.org/en/sfia-8/skills/programming-software-development"
									target="_blank"
									className="text-blue-600
									hover:text-blue-500"
								>
									{" "}
									SFIA{" "}
								</a>
								has provided me with a foundational understanding of the
								essential skills and competencies valued in the digital realm.
								Over the past two and a half years, both within and outside the
								university setting, I’ve diligently improved these skills,
								recognising their important role in my career advancement.
								Additionally, visiting platforms like{" "}
								<a
									href="https://www.qilt.edu.au/"
									target="_blank"
									className="text-blue-600
									hover:text-blue-500"
								>
									QILT
								</a>
								, LinkedIn, Seek and indeed, I’ve gathered valuable insights
								into job satisfaction among graduates, industry expectations and
								skill requirements. Doing this on a regular basis has not only
								kept me up to date with potential job outcomes but has also
								enabled me to identify areas for skill developments, which I’ve
								actively pursued. <br />
								<br />
								I’ve also attended several networking events which has helped
								facilitate meaningful interactions with seasoned professionals,
								offering firsthand perspectives on career trajectories, skill
								development pathways and emerging trends within the software
								development realm.
							</p>
						</div>
					)}
					{tab === "experienceAndInsight" && (
						<div className="w-[80%] mx-auto px-4">
							<p
								className="text-xl tracking-wide
"
							>
								Gaining insight and experience within my industry is invaluable
								and hence, I’ve pursued various avenues to develop my skills and
								secure meaningful opportunities. Since my second year, I’ve
								persistently applied for internships, recognising their
								significance in bridging the gap between theory and practice.
								While securing a placement proved challenging, I capitalised on
								a fortunate opportunity to contribute to the design and
								development of a{" "}
								<a
									href="#projects"
									className="text-blue-600
									hover:text-blue-500"
									target="_blank"
								>
									software system
								</a>{" "}
								for a real-world company, leveraging networking and skill
								showcasing efforts. <br />
								<br /> Valuing continuous growth, I actively engage in
								networking events and conversations with industry professionals,
								encouraging connections and staying up to date on industry
								trends. Furthermore, I’ve undertaken projects both within and
								outside academia to demonstrate my capabilities to potential
								employers, emphasising practical proficiency and problem-solving
								skills. I believe that showcasing my proficiency in programming
								languages and frameworks to potential employers requires extra
								effort outside of university projects and so it important to
								dedicate time for this. Additionally, complimenting university
								education, I’ve pursued courses like{" "}
								<a
									href="https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/?practice-assessment-type=certification"
									target="_blank"
									className="text-blue-600
									hover:text-blue-500"
								>
									Microsoft Azure fundamentals
								</a>{" "}
								and utilised platforms like Udemy for active learning,
								supplementing my skill set and enhancing employability
								prospects.
							</p>
						</div>
					)}
					{tab === "evidenceYourSkills" && (
						<div className="w-[80%] mx-auto px-4">
							<p
								className="text-xl tracking-wide
"
							>
								It’s important to make sure my skills are well-evidenced and
								aligned with industry expectation, hence, I’ve adopted proactive
								measures to identify and document them effectively. By using
								resources such as
								<a
									href="https://labourmarketinsights.gov.au/occupation-profile/software-and-applications-programmers?occupationCode=2613#skillsAndKnowledge"
									target="_blank"
									className="text-blue-600
									hover:text-blue-500"
								>
									{" "}
									labour market insights
								</a>
								, I’ve gained valuable insights into the skills sought after by
								employers in the software development field. This data-driven
								approach enables me to align my skill development efforts with
								industry demands. Acknowledging the significance of soft skills
								alongside technical competencies, I’ve dedicated efforts towards
								enhancing skills like teamwork, communication, problem solving,
								adaptability and time management. These skills are essential for
								success in any professional setting and are highly valued by
								employers. <br />
								<br /> I’ve carefully documented my skills development journey,
								highlighting achievements, experiences, and instances where
								these skills were applied. This documentation includes examples
								such as successful completion of group assignments, customer
								counselling experiences as a pharmacy assistant demonstrating
								communications skills and leadership roles in university group
								projects showcasing teamwork abilities. By actively seeking
								insights, prioritising transferable skills and maintaining
								comprehensive records of skill acquisition and application, I
								consciously make the effort to evidence my skills and
								competencies to prospective employers in the software
								development industry.
							</p>
						</div>
					)}
					{tab === "developNetworks" && (
						<div className="w-[80%] mx-auto px-4">
							<p
								className="text-xl tracking-wide
"
							>
								To expand my professional network, I’ve actively engaged in
								various activities:
							</p>

							<ul className="mt-4 mb-4">
								<li className="text-xl">
									<span className="text-blue-600">01.</span> Last year I joined
									the{" "}
									<a
										href="https://griffithtech.org/"
										target="_blank"
										className="text-blue-600
									hover:text-blue-500"
									>
										Griffith Technology Association
									</a>{" "}
									where I contributed to event planning allowing me to connect
									with peers and industry professionals, supporting meaningful
									relationships within the technology area.{" "}
								</li>
								<li className="text-xl">
									<span className="text-blue-600">02.</span> Through the{" "}
									<a
										href="https://www.griffith.edu.au/careers-employment/industry-mentoring-program"
										target="_blank"
										className="text-blue-600
									hover:text-blue-500"
									>
										Griffith Industry Mentoring Program
									</a>
									, I’ve benefited from guidance and mentorship from seasoned
									professionals, enriching my network and gaining valuable
									industry insights.
								</li>
								<li className="text-xl">
									<span className="text-blue-600">03.</span> Attending events
									like the Anonyome internship open house and the Westpac
									Hackathon has enabled me to forge connections with industry
									experts, broadening my network and facilitating knowledge
									exchange.{" "}
								</li>
							</ul>
							<p
								className="text-xl tracking-wide
"
							>
								Moving forward, I am to further leverage platforms like LinkedIn
								and actively participate in more networking opportunities to
								continue expanding my professional connections.
							</p>
						</div>
					)}
				</motion.div>
			</div>
			
		</motion.section>
	);
}
