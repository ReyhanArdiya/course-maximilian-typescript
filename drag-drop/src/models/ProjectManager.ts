import Project from "./Project";

class ProjectManager {
	private static  _instance: ProjectManager;
	private _projects: Project[] = [];
	private subs: (() => void)[] = [];

	private constructor() {
		// console.log("meow!");
	}

	static get instance(): ProjectManager {
		if (!ProjectManager._instance) {
			ProjectManager._instance = new ProjectManager();
		}

		return ProjectManager._instance;
	}

	get projects() {
		return this._projects;
	}

	public sub(cb: () => void) {
		this.subs.push(cb);
	}

	private callSubs() {
		[...this.subs].forEach(sub => sub());
	}

	projectAdded(project: Project) {
		this._projects.push(project);

		this.callSubs();
	}
}

const { instance } = ProjectManager;
const projects = instance.projects;

instance.sub(() => console.log("sub 1", projects));
instance.sub(() => console.log("sub 2", projects));
instance.sub(() => console.log("sub 3", projects));

// instance.projectAdded({description: "e" , people: 2, title: "meow!"});
// instance.projectAdded({description: "2e" , people: 2, title: "meow!"});