# Minigames.io

A collection of classic mini-games built with Python and Pygame.

## Overview

Minigames.io is a desktop application that provides a hub for multiple classic games in one place. The application features a space-themed main menu with a starfield background animation that gives users access to various games including Snake, Puzzle, TicTacToe, Flappy Bird, and Ping-Pong.

## Games Available

- **Snake** - Control a snake to eat food and grow longer without hitting walls or yourself
- **Puzzle** - A sliding puzzle game where you rearrange tiles to solve the puzzle
- **TicTacToe** - Classic X's and O's game played on a 3x3 grid
- **Flappy Bird** - Navigate a bird through pipes by tapping to make it fly
- **Ping-Pong** - A two-player game where you bounce a ball back and forth

## Screenshots

*[Screenshots would be added here]*

## Installation

1. Ensure you have Python 3.x installed
2. Install Pygame:
```
pip install pygame
```
3. Clone this repository:
```
git clone https://github.com/sasukeuchiha14/software-projects.git
cd MiniGames.io (Python)
git sparse-checkout init --cone
git sparse-checkout set "Minigames.io (Python)"
git checkout main
```
4. Navigate to the project directory and run the main file:
```
cd "Minigames.io (Python)"
python Minigame_true.py
```

## Controls

### Main Menu
- Click on game buttons to launch individual games
- ESC key to exit

### Snake
- WASD or Arrow Keys to control the snake's direction

### Puzzle
- Click and drag tiles to move them

### TicTacToe
- Click on the grid to place X or O
- Press R to restart the game

### Flappy Bird
- SPACE or UP Arrow to make the bird flap
- ESC key to return to the main menu

### Ping-Pong
- Player 1: W (up) and S (down)
- Player 2: UP and DOWN arrow keys
- P to start the game
- R to restart the game

## Project Structure

```
Minigames.io/
├── Minigame_true.py     # Main application file
├── fonts/               # Font files
├── images/              # Image assets
├── games/               # Individual game files
│   ├── snake.py
│   ├── puzzle.py
│   ├── TicTacToe.py
│   ├── pingpong.py
│   └── flappy/          # Flappy Bird game directory
│       ├── main.py
│       └── gallery/     # Flappy Bird assets
├── README.md            # This file
```

## Credits

This project combines several classic game implementations in Python with a custom menu system.

## License

This project is open source and available for personal use.