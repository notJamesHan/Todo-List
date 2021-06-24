/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//UI\r\n//Task Popups\r\nconst addProjectCancel = document.getElementById(\"addProject-Cancel\");\r\nconst addProjectBtn = document.getElementById(\"addProject\");\r\nconst addProjectPopup = document.getElementById(\"addProject-Popup\");\r\n\r\nconst addTaskBtn = document.getElementById(\"addTask\");\r\nconst addTaskCancel = document.getElementById(\"addTask-Cancel\");\r\nconst addTaskPopup = document.getElementById(\"addTask-Popup\");\r\n\r\nconst editTaskBtn = document.getElementById(\"editTask\");\r\nconst editTaskCancel = document.getElementById(\"editTask-Cancel\");\r\nconst editTaskPopup = document.getElementById(\"editTask-Popup\");\r\n\r\nfunction openProjectPopup() {\r\n  addProjectPopup.style.display = \"block\";\r\n}\r\n\r\nfunction openTaskPopup() {\r\n  addTaskPopup.style.display = \"block\";\r\n}\r\n\r\nfunction openEditPopup() {\r\n  editTaskPopup.style.display = \"block\";\r\n}\r\n\r\nfunction closeEditPopup() {\r\n  taskInputTitle.value = \"\";\r\n  taskInputDesc.value = \"\";\r\n  taskInputDate.value = \"\";\r\n  editTaskPopup.style.display = \"none\" \r\n}\r\n\r\nfunction closeTaskPopup() {\r\n  taskInputTitle.value = \"\";\r\n  taskInputDesc.value = \"\";\r\n  taskInputDate.value = \"\";\r\n  addTaskPopup.style.display = \"none\" \r\n}\r\n\r\nfunction closeProjectPopup() {\r\n  projectInput.value = \"\";\r\n  addProjectPopup.style.display = \"none\";\r\n}\r\n\r\naddProjectBtn.addEventListener(\"click\", () => {openProjectPopup(); editOrAdd = \"ADD\";});\r\naddProjectCancel.addEventListener(\r\n  \"click\", closeProjectPopup);\r\n\r\naddTaskBtn.addEventListener(\"click\", openTaskPopup);\r\naddTaskCancel.addEventListener(\r\n  \"click\", closeTaskPopup);\r\n\r\n//TodoList for PROJECT\r\nconst projectInput = document.querySelector(\"#addProject-Popup input\");\r\nconst projectList = document.getElementById(\"project-list\");\r\n\r\nfunction submitProject(event) {\r\n  event.preventDefault();\r\n  const newProject = projectInput.value;\r\n  if (!newProject == \"\") {\r\n    closeProjectPopup()\r\n  }\r\n  const newProjectObj = {\r\n    text: newProject,\r\n    id: Date.now(),\r\n  };\r\n  addProject(newProjectObj);\r\n}\r\n\r\nfunction addProject(newProject) {\r\n    const li = document.createElement(\"li\");\r\n    li.id = newProject.id;\r\n    const button = document.createElement(\"button\");\r\n    button.innerText = \"❌\";\r\n    button.addEventListener(\"click\", deleteProject);\r\n    const span = document.createElement(\"span\");\r\n    span.innerText = newProject.text;\r\n    li.appendChild(button);\r\n    li.appendChild(span);\r\n    projectList.appendChild(li);\r\n  }\r\n\r\n\r\n  function deleteProject(event) {\r\n    const li = event.target.parentElement;\r\n    li.remove();\r\n  }\r\n\r\naddProjectPopup.addEventListener(\"submit\", submitProject);\r\n\r\n\r\n\r\n//TODO list for FORMS\r\nconst taskInputTitle = document.querySelector(\"#addTask-Popup .taskInput-Title\");\r\nconst taskInputDesc = document.querySelector(\"#addTask-Popup .taskInput-Desc\");\r\nconst taskInputDate = document.querySelector(\"#addTask-Popup .taskInput-Date\");\r\n\r\nconst editInputTitle = document.querySelector(\"#editTask-Popup .taskInput-Title\");\r\nconst editInputDesc = document.querySelector(\"#editTask-Popup .taskInput-Desc\");\r\nconst editInputDate = document.querySelector(\"#editTask-Popup .taskInput-Date\");\r\n\r\nconst taskList = document.getElementById(\"task-list\");\r\n\r\nconst TASKS_KEY = \"task\";\r\nlet tasks = [];\r\n\r\nfunction saveTask() {\r\n  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));\r\n}\r\n\r\nfunction deleteTask(event) {\r\n  const li = event.target.parentElement.parentElement;\r\n  li.remove();\r\n  tasks = tasks.filter((tasks) => tasks.id !== parseInt(li.id));\r\n  saveTask();\r\n}\r\n\r\nfunction editTask(event) {\r\n  event.preventDefault();\r\n  const li = event.target.parentElement;\r\n  const newTaskTitle = editInputTitle.value;\r\n  const newTaskDesc = editInputDesc.value;\r\n  const newTaskDate = (editInputDate.value == 0) ? \"No Date\" : taskInputDate.value;\r\n  if (!newTaskTitle == \"\") {\r\n    closeEditPopup();\r\n  }\r\n  const newTaskObj = {\r\n    title: newTaskTitle,\r\n    desc: newTaskDesc,\r\n    date: newTaskDate,\r\n    id: Date.now(),\r\n  };\r\n  //tasks = tasks.filter((tasks) => tasks.id !== parseInt(li.id));\r\n  const found = tasks.indexOf((tasks) => tasks.id == parseInt(li.id));\r\n  li.remove();\r\n  console.log(found + \" asdasdsad\");\r\n  saveTask();\r\n}\r\n\r\nfunction submitTask(event) {\r\n  event.preventDefault();\r\n  const newTaskTitle = taskInputTitle.value;\r\n  const newTaskDesc = taskInputDesc.value;\r\n  const newTaskDate = (taskInputDate.value == 0) ? \"No Date\" : taskInputDate.value;\r\n  if (!newTaskTitle == \"\") {\r\n    closeTaskPopup();\r\n  }\r\n  const newTaskObj = {\r\n    title: newTaskTitle,\r\n    desc: newTaskDesc,\r\n    date: newTaskDate,\r\n    id: Date.now(),\r\n  };\r\n    tasks.push(newTaskObj);\r\n    addTask(newTaskObj);\r\n    saveTask();\r\n}\r\n\r\nfunction addTask(newTask) {\r\n    const li = document.createElement(\"div\");\r\n    const leftContainer = document.createElement(\"div\");\r\n    const rightContainer = document.createElement(\"div\");\r\n    li.id = newTask.id;\r\n    const checked = document.createElement(\"button\");\r\n    checked.innerText = \"❌\";\r\n    checked.addEventListener(\"click\", deleteTask);\r\n    const edit = document.createElement(\"button\");\r\n    edit.innerText = \"✏️️\"\r\n    edit.addEventListener(\"click\", () => {\r\n      editInputTitle.value = newTask.title;\r\n      editInputDesc.value = newTask.desc;\r\n      editInputDate.value = newTask.date;\r\n      openEditPopup();\r\n    });\r\n    const spanTitle = document.createElement(\"span\");\r\n    const spanDesc = document.createElement(\"span\");\r\n    const spanDate = document.createElement(\"span\");\r\n    li.classList.add(\"eachTasks\");\r\n    spanTitle.classList.add(\"title\");\r\n    spanDesc.classList.add(\"desc\");\r\n    spanDate.classList.add(\"date\");\r\n    leftContainer.classList.add(\"leftContainer\");\r\n    spanTitle.innerText = newTask.title;\r\n    spanDesc.innerText = newTask.desc;\r\n    spanDate.innerText = newTask.date;\r\n    leftContainer.appendChild(checked);\r\n    leftContainer.appendChild(spanTitle);\r\n    leftContainer.appendChild(spanDesc);\r\n    rightContainer.appendChild(spanDate);\r\n    rightContainer.appendChild(edit);\r\n    li.appendChild(leftContainer);\r\n    li.appendChild(rightContainer);\r\n    taskList.appendChild(li);\r\n  }\r\n\r\naddTaskPopup.addEventListener(\"submit\", submitTask);\r\neditTaskPopup.addEventListener(\"submit\", editTask);\r\n\r\nconst savedTask = localStorage.getItem(TASKS_KEY);\r\nif (savedTask) {\r\n  const parsedToDos = JSON.parse(savedTask);\r\n  toDos = parsedToDos;\r\n  parsedToDos.forEach(addTask);\r\n}\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;