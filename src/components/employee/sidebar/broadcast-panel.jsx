import React from "react";
import "./broadcast.css";
import BroadcastMsg from "./broadcast-msg";

const BroadcastPanel = (props) => {
	console.log(props.Msgs.count);
	return (
		<>
			<div className="broadcast-panel-body">
				{props.Msgs.map((msg) => (
					<BroadcastMsg
						key={msg.eventDate}
						type={msg.type}
						msg={msg.msg}
						eventDate={msg.eventDate}
					/>
				))}
			</div>
		</>
	);
};

export default BroadcastPanel;
