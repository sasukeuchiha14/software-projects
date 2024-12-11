# To-do List

This To-do List application is a simple and efficient tool to manage your daily tasks. It allows users to add, edit, delete, and mark tasks as completed. The application is built using React and leverages local storage to persist data across sessions.

## Features

- **Add Tasks**: Easily add new tasks to your to-do list.
- **Edit Tasks**: Modify existing tasks.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Mark as Completed**: Check off tasks that have been completed.
- **Persist Data**: Tasks are saved in local storage, so they persist even after closing the browser.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Icons**: React Icons
- **State Management**: React useState, useEffect
- **Unique IDs**: uuid

## Installation

1. Clone the repository:
    ```bash
    git clone --no-checkout https://github.com/sasukeuchiha14/Projects.git
    cd Projects
    git sparse-checkout init --cone
    git sparse-checkout set "Web Dev/To-do List"
    git checkout main
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

## Folder Structure

```
/to-do-list/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   ├── ...
├── package.json
├── tailwind.config.js
├── README.md
```

## Live Preview

Experience the To-do List application in action by visiting the [live demo](https://todo.hardikgarg.me/).