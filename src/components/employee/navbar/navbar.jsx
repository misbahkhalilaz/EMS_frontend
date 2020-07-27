import React from "react";
import { Col, Row, Button, Badge, Space, Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

const menu = (
	<Menu>
		<Menu.Item key="1" icon={<UserOutlined />}>
			1st menu item
		</Menu.Item>
		<Menu.Item key="2" icon={<UserOutlined />}>
			2nd menu item
		</Menu.Item>
		<Menu.Item key="3" icon={<UserOutlined />}>
			3rd item
		</Menu.Item>
	</Menu>
);

export default function NavBar(props) {
	return (
		<>
			<Col offset={1} span={15}>
				<Space align="start" size="large">
					<Badge count={1}>
						<Button type="primary">Button</Button>
					</Badge>
					<Badge>
						<Button type="primary">Button</Button>
					</Badge>
					<Badge>
						<Button type="primary">Button</Button>
					</Badge>
					<Badge>
						<Button type="primary">Button</Button>
					</Badge>
				</Space>
			</Col>
			<Col span={7}>
				<Row justify="end">
					<Dropdown.Button
						overlay={menu}
						placement="bottomCenter"
						icon={<UserOutlined />}
					>
						Dropdown
					</Dropdown.Button>
				</Row>
			</Col>
		</>
	);
}
