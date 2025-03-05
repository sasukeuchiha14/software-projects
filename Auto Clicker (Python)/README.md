# Auto Clicker

A simple, lightweight auto clicker program written in Python.

## Description

This auto clicker tool allows you to automatically simulate left mouse clicks at regular intervals. It runs in the background and can be toggled on/off with a keyboard shortcut.

## Features

- Toggle auto clicking with the 's' key
- Clicks at a rate of approximately 10 clicks per second
- Minimal resource usage
- Easy to use

## Requirements

- Python 3.x
- pynput library

## Installation

1. Ensure you have Python installed on your system
2. Install the required library:

```bash
pip install pynput
```

3. Download the `auto_clicker.py` file

## Usage

1. Run the script:

```bash
python auto_clicker.py
```

2. Press the 's' key to start/stop automatic clicking
3. To exit the program, terminate the process (Ctrl+C in the terminal or close the terminal)

## Customization

You can modify the following parameters in the code:

- Change the toggle key by modifying the `TOGGLE_KEY` variable
- Adjust the click interval by changing the `time.sleep()` value in the clicker function

## License

This project is open source and available for personal use.

## Disclaimer

This tool is meant for educational purposes. Use responsibly and at your own risk.