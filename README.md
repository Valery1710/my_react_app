Project Description
Application is deployed at:
https://valery1710.github.io/my_react_app/

Source code is available at:
https://github.com/Valery1710/my_react_app.git

The project can be launched using the commands npm i and npm start in the terminal of the VS Code editor.

This application is a project and vacancy management system developed using HTML, CSS, JavaScript, and React.
The app uses modular components, each of which functions independently across pages,
helping to optimize performance.

Application Pages Overview
Main Page – the home page.

Projects – a page with a form to create new projects.

Vacancies – a page with a form to create job vacancies.

1. Main Page
The main page serves as the application's homepage and provides key information
about ongoing and completed projects.

At the top, the header displays the company name "TROOD COMMUNITY", message and notification icons, 
and the username. Currently, the message and notification buttons are non-functional.

On the left side, there’s a navigation menu with the following items:

Main page – redirects to the homepage.

Projects – leads to the project creation page.

Vacancies – navigates to the vacancy list page.

Tests and Settings – currently listed without additional functionality.

The central area displays project blocks:

Projects under "Active projects" are ongoing.

Projects under "Passed projects" are considered completed (if their deadline 
is earlier than the current date).

Each project block contains:

Name – project title.

Id – unique project identifier.

Field – project field.

Deadline – project due date.

Description – project description.

The "Id" field ensures unique identification, since project names may be duplicated. 
It is automatically assigned upon creation.

Clicking on a project block redirects the user to the project editing page, 
where the following features are available:

Modify the Field, Experience, Deadline, and Description.

Click the "Update project" button at the bottom to save changes.

Click the "Delete project" button in the top right corner to delete the project.

Click the "Add vacancy" button at the bottom to associate new vacancies with the project.

2. Projects Page
Accessed via the "Projects" menu item or the "Create project" button in the top right corner of the Main Page.

This page contains a form to create a new project with the following input fields:

Name – project name.

Field – project field, selectable from:

"Design"

"Development"

"Marketing"

Experience – required experience.

Deadline – project deadline (format: dd.mm.yyyy).

Description – project description.

The "Name" field is mandatory. If left empty, an alert will appear:
"Please fill in the project name field".
Other fields are optional — a project can be saved without filling them in.

Click the "Create project" button at the bottom of the form to save the project.

3. Vacancies Page
This page contains a form to create a new job vacancy with the following input fields:

Name – vacancy title.

Field – vacancy field, selectable from:

"Design"

"Development"

"Marketing"

Experience – required experience.

Country – country name.

Description – vacancy description.

You can access this page by clicking the "Add vacancy" button either:

on the project detail page (which will associate the new vacancy with the selected project), or

in the top right corner of the Vacancies page.

The "Name" field is mandatory. If left empty, an alert will appear:
"Please fill in the project name field".
All other fields are optional — a vacancy can be saved without them.

Click the "Create vacancy" button at the bottom of the form to save the vacancy.

Technical Details
The application is built using React components.

Data includes:

 - array of project objects.

 - array of vacancy objects.

 - const variable for the selected project.

 - const variable for the selected vacancy.

Data handling:

 - Data is stored using MobX stores.

 - Data is saved in Local Storage.

 - Currently, no backend is used.

 - There are commented-out modules in the code prepared for backend integration.

Suggestions for Future Improvements
- Display a list of vacancies related to a project on its detailed page.

- Integrate a backend system.
- Add tooltip hints. For example, when hovering over a project card, suggest that the user view detailed project information.