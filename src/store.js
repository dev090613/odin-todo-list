let projects = [];

function getProjects() {
  return [ ...projects ];
}

function addProject(project) {
  if (projects.some( proj => proj.id === project.id ))
    throw new Error("project already exist.");

  projects = [ ...projects, project ]
}

function replaceProject(updatedProject) {
  if (!projects.some( proj => proj.id === updatedProject.id ))
    throw new Error("updatedProject is not in projects array")

  projects = projects.map( proj => 
    proj.id === updatedProject.id ? updatedProject : proj
  );
}

export { getProjects, addProject, replaceProject }
