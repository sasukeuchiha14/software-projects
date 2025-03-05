# AFK Mouse Mover

A simple Python script to automate random mouse movements, preventing your system from going into sleep mode or showing you as away/inactive in applications.

## Description

This script uses PyAutoGUI to move your mouse cursor to random positions on your screen at regular intervals. It's useful for:

- Preventing your computer from going to sleep
- Keeping your status as "active" in messaging applications
- Simulating user activity during presentations or demos

## Requirements

- Python 3.x
- PyAutoGUI library

## Installation

1. Make sure you have Python installed on your system.
2. Install the required dependency:

```bash
pip install pyautogui
```

## Usage

1. Run the script:

```bash
python afk.py
```

2. Enter the duration you want the script to run:
    - Hours
    - Minutes
    - Seconds

The script will then move your mouse cursor to random positions across your screen every 2 seconds for the specified duration.

## How It Works

The script calculates the total runtime in seconds based on your input, then enters a loop that:
1. Generates random X and Y coordinates within a 1920×1080 resolution screen
2. Moves the cursor to those coordinates over 0.5 seconds
3. Waits for 2 seconds before repeating

## Notes

- The script assumes a screen resolution of 1920×1080. If your resolution is different, you may want to adjust the random coordinate ranges.
- To stop the script before it completes its duration, press CTRL+C in the terminal.

## License

This project is open source and available for personal use.