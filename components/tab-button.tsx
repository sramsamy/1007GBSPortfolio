import React from "react";

interface TabButtonProps {
	active: boolean;
	selectTab?: React.MouseEventHandler<HTMLButtonElement>;
	children: React.ReactNode;
}

function TabButton({active, selectTab, children }: TabButtonProps) {

    const buttonClasses = active ? 'text-white border-b border-blue-500' : 'text-slate-500'
	return (
		<button onClick={selectTab}>
			<p className={`font-semibold hover:text-blue-800 ${buttonClasses}`}>
				{children}
			</p>
		</button>
	);
}

export default TabButton;
