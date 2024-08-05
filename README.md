## A Kanban app made with

_React, NextJS, TypeScript, Shadcn, Tailwind, CockroachDB, Prisma_

Getting Started:

After cloning this repository, in the project folder we need to install the dependencies. Use the command:
`npm i`

Now for running the project, if you installed the dependencies using yarn, run:
`npm run dev`

## The challenge

**Users should be able to:**

- [ ] View the optimal layout for the app depending on their device's screen size
- [ ] See hover states for all interactive elements on the page
- [ ] Create, read, update, and delete boards and tasks
- [ ] Receive form validations when trying to create/edit boards and tasks
- [ ] Mark subtasks as complete and move tasks between columns
- [ ] Hide/show the board sidebar
- [ ] Keep track of any changes, even after refreshing the browser

**_Nice to have_**

- [ ] Toggle the theme between light/dark modes
- [ ] Allow users to drag and drop tasks to change their status and re- [ ]order them in a column

### Expected Behaviour

**Boards**

- [ ] Clicking different boards in the sidebar will change to the selected board.
- [ ] Clicking "Create New Board" opens the "Add New Board" modal.
- [ ] Clicking in the dropdown menu "Edit Board" opens up the "Edit Board" modal where details can be changed.
- [ ] Columns are added and removed for the Add/Edit Board modals.
- [ ] Deleting a board deletes all columns and tasks and requires confirmation.

**Columns**

- [ ] A board needs at least one column before tasks can be added.
- [ ] Clicking "Add New Column" opens the "Edit Board" modal where columns are added.

**Tasks**

- [ ] Adding a new task adds it to the bottom of the relevant column.
- [ ] Updating a task's status will move the task to the relevant column. If you're taking on the drag and drop bonus, dragging a task to a different column will also update the status.
