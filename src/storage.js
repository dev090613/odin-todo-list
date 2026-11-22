const STORAGE_KEY = "odin-todo-list:projects:v1";

function loadProjects() {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw === null)
    return [];

  const projects = JSON.parse(raw);
  if (!Array.isArray(projects))
    throw new Error("parsed projects is not array");
    
  return projects;
}

function saveProjects(projects) {
  if (!Array.isArray(projects))
    throw new Error("projects is not array.")
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

export { loadProjects, saveProjects }
