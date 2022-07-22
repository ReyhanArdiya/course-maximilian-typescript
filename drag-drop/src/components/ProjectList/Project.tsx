import {
	Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel
} from "@chakra-ui/react";
import { DragEventHandler } from "react";
import IProject, { ProjectStatus } from "../../models/Project";

export type ProjectProps = Omit<IProject, "persons">

const Project = ({
	title = "Project Title",
	description = "No description",
	people = 0,
	status = ProjectStatus.ACTIVE,
	id = ""
}: ProjectProps) => {
	const dragStartHandler: DragEventHandler = (e) => {
		e.dataTransfer.effectAllowed = "move";
		e.dataTransfer.setData("text/plain", id.toString());
	};

	return (
		<Accordion
			data-status={status}
			as="article"
			bg="orange.200"
			color="blackAlpha.800"
			w="full"
			allowToggle
			borderRadius="lg"
			draggable
			onDragStart={dragStartHandler}
			id={id.toString()}
		>
			<AccordionItem
				border={"none"}
				outline="none"
				borderTopRadius="inherit"
			>
				<AccordionButton
					p="7"
					borderRadius="inherit"
					justifyContent="center"
				>
					{title} - {people} People
				</AccordionButton>
				<AccordionPanel>{description}</AccordionPanel>
				<AccordionButton justifyContent="center">
					<AccordionIcon />
				</AccordionButton>
			</AccordionItem>
		</Accordion>
	);
};

export default Project;
