import React from "react";
import "./broadcast.css";
import BroadcastMsg from "./broadcast-msg";
import Scrollbars from "react-custom-scrollbars";

const BroadcastPanel = (props) => {
	console.log(props.Msgs.count);
	return (
		<>
			<Scrollbars
				style={{ width: 500, height: "45vh" }}
				className="broadcast-panel-body"
			>
				{props.Msgs.map((msg) => (
					<BroadcastMsg
						key={msg.eventDate}
						type={msg.type}
						msg={msg.msg}
						eventDate={msg.eventDate}
					/>
				))}
			</Scrollbars>
		</>
	);
};

export default BroadcastPanel;
