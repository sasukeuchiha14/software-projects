# Auto Search Script for Microsoft Edge

This Python script automates search actions in Microsoft Edge browser. It generates random search queries and executes them automatically, which can be useful for tasks like accumulating search rewards points.

## Features

- Automatically opens Microsoft Edge browser
- Performs 35 random searches (configurable)
- Generates random search queries of varying lengths
- Simulates human-like typing with random delays
- Customizable wait times between searches
- Emergency stop with ESC key
- Multiple shutdown options after completion:
    - Sleep
    - Hibernate
    - Shutdown
    - No action

## Requirements

- Python 3.x
- Required Python packages:
    - pynput
    - pyautogui
    - easygui
    - random
    - time
    - subprocess
    - os

## Installation

1. Clone this repository or download the script
2. Install the required dependencies:

```bash
pip install pynput pyautogui easygui
```

## Usage

Simply run the script:

```bash
python Edge.py
```

The script will:
1. Display a dialog box asking for shutdown preference
2. Open Microsoft Edge
3. Navigate to the search bar
4. Perform random searches
5. Close the browser after completion
6. Execute the selected shutdown option

## Customization

You can modify the following parameters in the script:
- Number of searches (change the range in the for loop)
- Search word length (modify the random.randint values)
- Delay between keystrokes and searches
- Browser path (if not using the default installation path)

## Note

This script uses mouse and keyboard automation. Do not interact with your computer while the script is running unless you want to stop it by pressing ESC.

## License

Free to use for personal purposes.