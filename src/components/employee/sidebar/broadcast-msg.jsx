import React from "react";
import { Comment, Tooltip, Badge, Modal } from "antd";
import moment from "moment";
import { NotificationTwoTone, ScheduleTwoTone } from "@ant-design/icons";

function BroadcastMsg(props) {
	//props -> eventdate, msg, type, maybe createdate
	const type = props.type;
	var icon, showEvenDate;

	if (type === "Broadcast") {
		icon = <NotificationTwoTone style={{ marginTop: 15, fontSize: 24 }} />;
	} else {
		icon = <ScheduleTwoTone style={{ marginTop: 15, fontSize: 24 }} />;
		showEvenDate = [
			<Tooltip title="Event Date">
				<Badge color="cyan" text={props.eventDate} />
			</Tooltip>,
		];
	}

	const config = {
		maskClosable: true,
		title: props.type,
		content: (
			<>
				<p>{props.msg}</p>
			</>
		),
		okText: "Got it !",
	};

	return (
		<Comment
			className="hovernow"
			actions={showEvenDate}
			avatar={icon}
			content={<span className="broadcast-msg">{props.msg}</span>}
			datetime={
				<Tooltip title="Created time">
					<span>{moment().subtract(1, "days").fromNow()}</span>
				</Tooltip>
			}
			onClick={() => {
				Modal.info(config);
			}}
		/>
	);
}

export default BroadcastMsg;
