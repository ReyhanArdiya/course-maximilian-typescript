import React, { ReactNode, useContext, useState } from "react";
import Project, { ProjectStatus } from "../models/Project";

export interface IProjectContext {
	projects: Project[];
	projectAdded(...projectData: ConstructorParameters<typeof Project>): void;
	selectActiveProjects(): Project[];
	selectFinishedProjects(): Project[];
	selectProjectById(projectId: Project["id"]): Project | undefined;
	projectUpdated(
		projectId: Project["id"],
		newProjectData: Project
	): Project | void;
}

const ProjectContext = React.createContext<IProjectContext>({
	projects: [],
	projectAdded() {
		return;
	},
	selectActiveProjects() {
		return [] as Project[];
	},
	selectFinishedProjects() {
		return [] as Project[];
	},
	selectProjectById() {
		return {} as Project;
	},
	projectUpdated() {
		return {} as Project;
	}
});

export const ProjectContextProvider = ({
	children
}: {
	children: ReactNode;
}) => {
	const [projects, setProjects] = useState<Project[]>([]);

	const value: IProjectContext = {
		projects,
		projectAdded(...projectData: ConstructorParameters<typeof Project>) {
			const newProject = new Project(...projectData);

			setProjects(projects => [...projects, newProject]);
		},
		selectActiveProjects() {
			return projects.filter(p => p.status === ProjectStatus.ACTIVE);
		},
		selectFinishedProjects() {
			return projects.filter(p => p.status === ProjectStatus.FINISHED);
		},
		selectProjectById: function (projectId: string | number) {
			return projects.find(p => p.id.toString() === projectId);
		},
		projectUpdated: function (
			projectId: string | number,
			newProjectData: Project
		): void | Project {
			setProjects(projects => {
				const oldProjectI = projects.findIndex(p => p.id === projectId);
				const newProjects = [...projects];
				newProjects[oldProjectI] = newProjectData;

				return newProjects;
			});

			return newProjectData;
		}
	};

	return (
		<ProjectContext.Provider value={value}>
			{children}
		</ProjectContext.Provider>
	);
};

export const useProject = () => useContext(ProjectContext);

export default ProjectContext;
