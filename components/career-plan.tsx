"use client";
import React, { useTransition, useState } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import TabButton from "./tab-button";
import { careerPlanData } from "@/lib/data";

interface tabProps {
	startTransition: boolean;
	setOpenPopup: boolean;
}

export default function CareerPlan() {
	const { ref } = useSectionInView("Career Plan", 0.5);
	const [tab, setTab] = useState("");
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
		<section
			ref={ref}
			id="careerPlan"
			className="px-4 mb-14 md:px-[18rem] py-8 md:py-0 md:mb-40 leading-8 text-center md:text-left scroll-mt-28 "
		>
			<div className="flex items-center gap-4 text-center">
				<h1 className="text-blue-600 text-3xl mb-8">02.</h1>
				<SectionHeading>Career Plan</SectionHeading>
			</div>
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-2 xl">
				<p>
					Navigate the following tabs to view my comprehensive career plan,
					where I strategically chart my path towards success.
				</p>
			</div>
			<div className="flex flex-col mt-8">
				<TabButton
					selectTab={() => handleTabChange("selfAwareness")}
					active={tab === "selfAwareness"}
				>
					01. Self Awareness
				</TabButton>
				<TabButton
					selectTab={() => handleTabChange("exploreYourOptions")}
					active={tab === "exploreYourOptions"}
				>
					02. Explore your Options
				</TabButton>
			</div>
			{/* Display different answer paragraphs based on the active tab */}
			<div className="career-plan-answers">
				{tab === "selfAwareness" && (
					<p className="answer-paragraph">
						Hello there
					</p>
				)}
				{tab === "exploreYourOptions" && (
					<p className="answer-paragraph">
						Whats up
					</p>
				)}
			</div>
		</section>
	);
}
