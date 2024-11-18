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
    git sparse-checkout set "Web Dev/ace-canteen"
    git checkout main
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Ensure MongoDB is running and connected.

## API Endpoints

- **GET /api/menu/:week**: Fetch menu data for a specific week.
- **POST /api/mail**: Submit a contact form message.
- **GET /api/mail**: Fetch all contact form messages.
- **POST /api/edit_menu**: Update menu items.

## Folder Structure

```
/Projects/Web Dev/ace-canteen/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   ├── index.js
│   ├── ...
├── server.js
├── package.json
├── README.md
```

## Contributing

Contributions are Welcome! Please fork the repository and create a pull request with your changes.

<!-- ## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details. -->

## Contact

For any inquiries, please contact us at [hgarg7123@gmail.com](mailto:hgarg7123+github@gmail.com).
