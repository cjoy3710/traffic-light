import React, { useState } from "react";

const TrafficLightHooks = () => {
	const [color, setColor] = useState("");

	let redExtraClass = "";
	if (color.clickedLight === "red") redExtraClass = "selected";
	let yellowExtraClass = "";
	if (color.clickedLight === "yellow") yellowExtraClass = "selected";
	let greenExtraClass = "";
	if (color.clickedLight === "green") greenExtraClass = "selected";
	return (
		<div>
			<div id="trafficTop" />
			<div id="container">
				<div
					className={"red light " + redExtraClass}
					onClick={() => setColor({ clickedLight: "red" })}
				/>
				<div
					className={"yellow light " + yellowExtraClass}
					onClick={() => setColor({ clickedLight: "yellow" })}
				/>
				<div
					className={"green light " + greenExtraClass}
					onClick={() => setColor({ clickedLight: "green" })}
				/>
			</div>
		</div>
	);
};

export default TrafficLightHooks;
