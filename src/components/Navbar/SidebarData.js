import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
	{
		title: "Home",
		path: "/",
		icon: <AiIcons.AiFillHome />,
		cName: "nav-text",
	},
	{
		title: "About",
		path: "/about",
		icon: <RiIcons.RiGalleryLine />,
		cName: "nav-text",
	},
	{
		title: "Contact",
		path: "/contact",
		icon: <IoIcons.IoMdPeople />,
		cName: "nav-text",
	},
	{
		title: "Support",
		path: "/support",
		icon: <IoIcons.IoMdHelp />,
		cName: "nav-text",
	},
	{
		title: "Messages",
		path: "/messages",
		icon: <FaIcons.FaEnvelopeOpenText />,
		cName: "nav-text",
	},
];
