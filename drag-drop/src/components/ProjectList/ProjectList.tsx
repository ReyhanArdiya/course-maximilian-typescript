import {
	ChakraProps,
	Heading,
	ListItem,
	UnorderedList,
	VStack
} from "@chakra-ui/react";
import { DragEventHandler, useState } from "react";
import { ProjectStatus } from "../../models/Project";
import { useProject } from "../../store/project-context";
import Project, { ProjectProps } from "./Project";

export interface ProjectListProps {
	projects: ProjectProps[];
	title: string;
	status: ProjectStatus;
}

const ProjectList = ({ projects, title, status }: ProjectListProps) => {
	const projectComps = projects.map(
		({ title, description, people, id, status }, i) => (
			<ListItem key={i} w="full" id={id ? id.toString() + i : ""}>
				<Project
					description={description}
					people={people}
					title={title}
					status={status}
					id={id}
				/>
			</ListItem>
		)
	);

	const { projectUpdated, selectProjectById } = useProject();

	const [bg, setBg] = useState("");

	const borderStyle: ChakraProps = {
		borderRadius: "lg",
		borderColor: "orange.200",
		borderStyle: "solid",
		borderWidth: "thin"
	};

	const dragOverHandler: DragEventHandler = e => {
		if (e.dataTransfer && e.dataTransfer.types[0] === "text/plain") {
			e.preventDefault();
			setBg("purple.200");
		}
	};

	const dropHandler: DragEventHandler = e => {
		const projectId = e.dataTransfer.getData("text/plain");

		const oldProject = selectProjectById(projectId);

		console.log(oldProject);

		if (oldProject) {
			oldProject.status = status;
			projectUpdated(projectId, oldProject);
		}

		setBg("");
	};

	const dragLeaveHandler: DragEventHandler = () => {
		setBg("");
	};

	return (
		<VStack {...borderStyle} w="sm">
			<Heading
				size="2xl"
				py="5"
				bg="orange.300"
				w="full"
				borderRadius="inherit"
				color="white"
				textAlign="center"
			>
				{title}
			</Heading>
			<UnorderedList
				spacing={5}
				listStyleType="none"
				justifyContent="flex-start"
				display="flex"
				flexDirection="column"
				alignItems="center"
				p="2"
				// shadow="lg"
				m="0"
				w="full"
				h="max-content"
				maxH="md"
				maxW="full"
				overflow="scroll"
				sx={{
					"::-webkit-scrollbar": {
						display: "none"
					}
				}}
				onDragOver={dragOverHandler}
				onDragLeave={dragLeaveHandler}
				onDrop={dropHandler}
				bg={bg}
			>
				{projectComps}
			</UnorderedList>
		</VStack>
	);
};

export default ProjectList;
