import random

user_wins = 0
computer_wins = 0
options = ["rock", "paper", "scissors"]

def print_score():
    print(f"Your score: {user_wins}")
    print(f"Computer score: {computer_wins}")

while True:
    user_input = input("\nType rock, paper, or scissors: ").lower()
    if user_input not in options:
        print("Invalid input. Try again.")
        continue

    random_number = random.randint(0, 2)
    computer_pick = options[random_number]
    print(f"Computer picked: {computer_pick}")

    if user_input == "rock" and computer_pick == "scissors":
        print("You win!")
        user_wins += 1
    elif user_input == "paper" and computer_pick == "rock":
        print("You win!")
        user_wins += 1
    elif user_input == "scissors" and computer_pick == "paper":
        print("You win!")
        user_wins += 1
    elif user_input == computer_pick:
        print("It's a tie!")
    else:
        print("You lose!")
        computer_wins += 1

    print_score()

    play_again = input("\nDo you want to play again? (yes/no): ").lower()
    if play_again.lower() not in ["y", "yes"]:
        break

print("\nThanks for playing!")
