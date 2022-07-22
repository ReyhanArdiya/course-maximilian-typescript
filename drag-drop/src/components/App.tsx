import { Center, HStack, Stack } from "@chakra-ui/react";
import { ProjectStatus } from "../models/Project";
import { useProject } from "../store/project-context";
import Form from "./Form/Form";
import ProjectList from "./ProjectList/ProjectList";

const App = () => {
	const {  selectActiveProjects, selectFinishedProjects } = useProject();

	return (
		<Stack justify={"start"} minH="100vh" align="center" spacing={10} my="5">
			<Form />
			<HStack spacing={5} justify="center" w="full" align="start">
				<Center>
					<ProjectList status={ProjectStatus.ACTIVE} title="Active" projects={selectActiveProjects()} />
				</Center>
				<Center>
					<ProjectList status={ProjectStatus.FINISHED} title="Finished" projects={selectFinishedProjects()} />
				</Center>
			</HStack>
		</Stack>
	);
};

export default App;
