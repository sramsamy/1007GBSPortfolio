import React from "react";
import '../public/css/styles.css'
type SectionHeadingProps = {
	children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
	return (
		<div>
			<h2 className="text-4xl font-medium text-slate-200 capitalize mb-8">
				{children}
			</h2>
		</div>
	);
}
