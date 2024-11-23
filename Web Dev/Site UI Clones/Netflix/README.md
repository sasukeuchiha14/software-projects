# Netflix India Clone

This project is a clone of the Netflix India landing page. It is built using HTML and CSS to replicate the look and feel of the original site.

## Features

- **Responsive Design**: The page is designed to be responsive and works well on different screen sizes.
- **Sections**:
    - **Header**: Includes the Netflix logo, language selection, and sign-in button.
    - **Main Content**: Features a background image, promotional text, and an email input for starting a membership.
    - **TV Section**: Highlights the ability to watch on TV with an embedded video.
    - **Mobile Section**: Showcases the ability to download shows on mobile devices.
    - **Everywhere Section**: Emphasizes the ability to watch on various devices.
    - **Kids Section**: Promotes the creation of profiles for kids.
    - **FAQ Section**: Contains frequently asked questions with expandable answers.
    - **Footer**: Includes links to various Netflix pages and a language selector.

## Technologies Used

- **Frontend**: HTML, CSS

## Installation

1. Clone the repository:
    ```bash
    git clone --no-checkout https://github.com/sasukeuchiha14/Projects.git
    cd Projects
    git sparse-checkout init --cone
    git sparse-checkout set "Web Dev/Site UI Clones/Netflix"
    git checkout main
    ```

2. Open `index.html` in your browser to view the site.

## Folder Structure

```
/Netflix/
├── assets/
│   ├── images/
│   │   ├── background.jpg
│   │   ├── logo.png
│   │   ├── favicon.ico
│   │   ├── tv.png
│   │   ├── mobile.png
│   │   ├── device-pile-in.png
│   │   ├── children.png
│   │   ├── plus-line-icon.png
│   ├── videos/
│   │   ├── video-in-tv.m4v
│   │   ├── video-devices-in.m4v
├── index.html
├── style.css
├── README.md
```