# Drink Water Reminder

A simple Python application that reminds you to drink water at regular intervals.

## Features

- Displays desktop notifications reminding you to drink water
- Plays a sound alert to grab your attention
- Shows a hydration fact with each reminder
- Runs in the background while you work
- Reminds you every 30 minutes

## Requirements

- Python 3.x
- Required Python packages:
    - plyer
    - pygame

## Installation

1. Clone or download this repository
2. Install the required packages:
```
pip install plyer pygame
```
3. Make sure you have the following files in the correct location:
     - `water.mp3` - The sound file to play with reminders
     - `logo.ico` - The icon for notifications

## Usage

Simply run the script to start receiving water reminders:
```
python drink_water.py
```

The program will run continuously in the background, reminding you every 30 minutes to drink water.

## Customization

You can modify the following parameters in the script:
- Reminder interval (default: 30 minutes)
- Notification message
- Sound file
- Notification icon

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Hardik Garg