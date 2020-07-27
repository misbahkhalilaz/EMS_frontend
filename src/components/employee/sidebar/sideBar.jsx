import React from "react";
import Bio from "./bio-panel";
import { Row, Typography, Badge } from "antd";
import BroadcastPanel from "./broadcast-panel";

const { Title } = Typography;

var msgs = [
	{
		type: "Broadcast",
		msg: "dgadajdgajhgdjsadhgsjdgjhadjhdgasjdgjsagdhasgdjhsadgas",
		eventDate: "23/10/2020",
	},
	{
		type: "Event",
		msg: "dgadajdgajhgdjsadhgsjdgjhadjhdgasjdgjsagdhasgdjhsadgas",
		eventDate: "24/10/2020",
	},
	{
		type: "Broadcast",
		msg: "dgadajdgajhgdjsadhgsjdgjhadjhdgasjdgjsagdhasgdjhsadgas",
		eventDate: "21/100/2020",
	},
	{
		type: "Broadcast",
		msg: "dgadajdgajhgdjsadhgsjdgjhadjhdgasjdgjsagdhasgdjhsadgas",
		eventDate: "21/10/2020",
	},
	{
		type: "Broadcast",
		msg: "dgadajdgajhgdjsadhgsjdgjhadjhdgasjdgjsagdhasgdjhsadgas",
		eventDate: "21/19/2020",
	},
	{
		type: "Broadcast",
		msg: "dgadajdgajhgdjsadhgsjdgjhadjhdgasjdgjsagdhasgdjhsadgas",
		eventDate: "21/12/2020",
	},
	{
		type: "Broadcast",
		msg: "dgadajdgajhgdjsadhgsjdgjhadjhdgasjdgjsagdhasgdjhsadgas",
		eventDate: "21/15/2020",
	},
	{
		type: "Broadcast",
		msg: "dgadajdgajhgdjsadhgsjdgjhadjhdgasjdgjsagdhasgdjhsadgas",
		eventDate: "21/13/2020",
	},
];

export default function SideBar(props) {
	return (
		<>
			<Row style={{ maxHeight: "48vh" }}>
				<Bio />
			</Row>

			<Row style={{ maxHeight: "5vh" }}>
				<Title level={4} strong>
					Broadcasts
					<Badge className="floated" count={msgs.length} />
				</Title>

				<Row
					style={{
						scrollBehavior: "smooth",
						maxHeight: "47vh",
						minHeight: "47vh",
						overflowY: "auto",
					}}
				>
					<BroadcastPanel Msgs={msgs} />
				</Row>
			</Row>
		</>
	);
}
