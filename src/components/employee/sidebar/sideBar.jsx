import React from "react";
import Bio from "./bio-panel";
import { Row, Typography, Badge } from "antd";
import BroadcastPanel from "./broadcast-panel";
import { Scrollbars } from "react-custom-scrollbars";

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
			<Row>
				<Scrollbars style={{ width: 500, height: "48vh" }}>
					<Bio />
				</Scrollbars>
			</Row>

			<Row>
				<Title
					level={4}
					strong
					style={{ paddingTop: "1vh", paddingLeft: "15px" }}
				>
					Broadcasts
					<Badge className="floated" count={msgs.length} />
				</Title>
				<Row
					style={{
						maxHeight: "45vh",
						minHeight: "45vh",
						overflowY: "auto",
					}}
				>
					<BroadcastPanel Msgs={msgs} />
				</Row>
			</Row>
		</>
	);
}
