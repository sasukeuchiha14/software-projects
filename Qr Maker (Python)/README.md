# QR Maker

A simple Python application to generate and save QR codes from links.

## Description

QR Maker is a user-friendly tool that creates QR codes from user-provided links. It offers a convenient interface to generate, display, and save QR codes in various formats.

## Features

- Generate QR codes from any URL or text
- Preview QR codes instantly
- Save QR codes in different formats (.png, .jpg, .jpeg)
- Choose custom filenames and save locations

## Requirements

- Python 3.x
- Required libraries:
    - qrcode
    - easygui
    - pyautogui
    - winsound
    - tkinter

## Installation

1. Clone the repository or download the source code
2. Install required libraries:

```bash
pip install qrcode easygui pyautogui
```

## Usage

1. Run the script:

```bash
python "Qr Maker.py"
```

2. Enter the link you want to convert to a QR code
3. The QR code will be displayed on screen
4. Choose whether to save the QR code
5. If saving:
     - Enter a filename (without spaces)
     - Select a save location
     - Choose a file format (.png, .jpg, or .jpeg)

## How It Works

The program uses the `qrcode` library to generate QR codes from user input, then provides options for displaying and saving the generated images using a simple GUI built with `easygui`, `pyautogui`, and `tkinter`.

## License

This project is open source and available for personal use.