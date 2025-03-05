# Hangman Game

A simple command-line Hangman game implemented in Python.

## Description

This Hangman game allows users to play the classic word-guessing game in a terminal interface. One player enters a word, which is then hidden from view, and another player tries to guess the word one letter at a time.

## Features

- Clean terminal interface
- Visual hangman figure that progresses with wrong guesses
- Letter-by-letter word display
- Win/lose conditions
- Support for any word length

## How to Play

1. Run the script: `python hangman.py`
2. The first player enters a word to be guessed
3. The screen clears to hide the word
4. The second player guesses one letter at a time
5. For each correct guess, the letter is revealed in the word
6. For each incorrect guess, a part of the hangman is drawn
7. The game ends when either:
    - The player guesses all unique letters (win)
    - The hangman is fully drawn after 6 wrong guesses (lose)

## Requirements

- Python 3.10 or higher (uses match-case statements)
- Terminal/console that supports ANSI escape codes for screen clearing

## Installation

No additional packages are required. Simply Download the `hangman.py` file

## Usage

Run the script in a terminal or command prompt:

```bash
python hangman.py
```

## License

This project is open source and available for personal use.