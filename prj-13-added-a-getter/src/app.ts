/// <reference path="models/drag-drop.interfaces.ts" />
/// <reference path="models/project-model.ts" />
/// <reference path="store/project.ts" />
/// <reference path="utils/validation.ts" />
/// <reference path="decorators/autobind.ts" />
/// <reference path="components/project-list.ts" />
/// <reference path="components/project-input.ts" />

namespace App {


	new ProjectInput();
	new ProjectList("active");
	new ProjectList("finished");
}

interface A extends B{

}

interface B {

}
