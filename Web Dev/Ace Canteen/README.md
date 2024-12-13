# Ace Canteen

Ace Canteen is a web application designed to provide a seamless and engaging online platform for students to explore, customize, and order delicious meals conveniently. The application includes features for both users and administrators, ensuring a smooth and efficient experience for everyone.

## Features

### User Features
- **Home Page**: Welcome page with carousel images and a marquee for announcements.
- **Menu**: View the weekly menu with options for breakfast, lunch, snacks, and dinner.
- **About Us**: Information about the vision and team behind Ace Canteen.
- **Contact Us**: Form to send inquiries, feedback, or complaints.

### Admin Features
- **Admin Login**: Secure login for administrators.
- **Dashboard**: Overview of users, orders, revenue, and customer messages.
- **Edit Menu**: Update the menu items for different weeks, days, and times.
- **Responses**: View messages sent by users through the contact form.

## Technologies Used
- **Frontend**: React, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Routing**: React Router

## Installation

1. Clone the repository:
    ```bash
    git clone --no-checkout https://github.com/sasukeuchiha14/Projects.git
    cd Projects
    git sparse-checkout init --cone
    git sparse-checkout set "Web Dev/Ace Canteen"
    git checkout main
    ```

2. Install dependencies:
    ```bash
    cd frontend
    npm install
    cd ..
    cd backend
    npm install
    ```

3. Start the development server:

    Terminal 1:
    ```bash
    cd frontend
    npm start
    ```
    Terminal 2:
    ```bash
    cd backend
    node server.js
    ```

4. Ensure MongoDB is running and connected.

## API Endpoints

- **GET /api/menu/:week**: Fetch menu data for a specific week.
- **POST /api/mail**: Submit a contact form message.
- **GET /api/mail**: Fetch all contact form messages.
- **POST /api/edit_menu**: Update menu items.

## Folder Structure

```
/ace-canteen/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── context/
│   │   │   ├── context.js
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   │   ├── login.js
│   │   │   │   ├── dashboard.js
│   │   │   │   ├── responses.js
│   │   │   │   ├── edit-menu.js
│   │   │   │   ├── ...
│   │   │   ├── Home.js
│   │   │   ├── Menu.js
│   │   │   ├── about_us.js
│   │   │   ├── Contact.js
│   │   │   ├── ...
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── ...
│   ├── package.json
├── backend/
│   ├── server.js
│   ├── package.json
├── README.md
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any inquiries, please contact us at [contact@acecanteen.com](mailto:hgarg7123+github@gmail.com).

## Live Preview

Experience the Ace Canteen web application in action by visiting the [live demo](https://ace-canteen.hardikgarg.me/).