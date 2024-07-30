import time, os

# Function to clear the screen
def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

clear_screen()

print("\nWelcome to Hangman!\n")
word=input("Enter a word to be guessed: ").lower()

time.sleep(1)

clear_screen()

print("\nWelcome to Hangman!\n")
hidden_word = "*" * len(word)
print("Enter a word to be guessed: {}".format(hidden_word), end="")

time.sleep(1)

# Function to print the hangman figure based on the number of wrong guesses
def printHangman(wrong):
    match wrong:
        case 0:
            print("\n +---+")
            print(" |     ")
            print(" |     ")
            print(" |     ")
            print("===")
        case 1:
            print("\n +---+")
            print(" |   O ")
            print(" |           Wrong guesses: {}".format(wrong))
            print(" |     ")
            print("===")
        case 2:
            print("\n +---+")
            print(" |   O ")
            print(" |   |       Wrong guesses: {}".format(wrong))
            print(" |     ")
            print("===")
        case 3:
            print("\n +---+")
            print(" |   O ")
            print(" |  /|       Wrong guesses: {}".format(wrong))
            print(" |     ")
            print("===")
        case 4:
            print("\n +---+")
            print(" |   O ")
            print(" |  /|\      Wrong guesses: {}".format(wrong))
            print(" |     ")
            print("===")
        case 5:
            print("\n +---+")
            print(" |   O ")
            print(" |  /|\      Wrong guesses: {}".format(wrong))
            print(" |  /  ")
            print("===")
        case 6:
            print("\n +---+")
            print(" |   O ")
            print(" |  /|\      Wrong guesses: {}".format(wrong))
            print(" |  / \ ")
            print("===")
        case _:
            print("Error")

# Function to print the word with guessed letters and underscores for unguessed letters
def printWord(guessed_letters):
    counter=0
    right_letters=0
    for char in word:
        if char in guessed_letters:
            print(char, end=" ")
            right_letters+=1
        else:
            print("_", end=" ")
        counter+=1
    return right_letters

# Function to print lines below the word
def printLines():
    print("\r")
    for i in range(0, len(word)):
        print("\u203E", end=" ")
        
unique_characters = len(set(word))

amount_of_times_wrong = 0
current_guess_index = 0
currnt_letters_guessed = []
currnt_letters_right = 0

while (amount_of_times_wrong != 6 and currnt_letters_right != unique_characters):

    clear_screen()
    
    print("HANGMAN")    
    print("\n")
    printHangman(amount_of_times_wrong)
    print("\n")
    printWord(currnt_letters_guessed)
    printLines()
    print("\n")
    
    guess = ""
    while(len(guess)!=1):
        guess = input("Enter a single letter: ").lower()
    
    print("\n")
    print("Checking   ", end="")
    time.sleep(0.25)
    print("\rChecking.  ", end="")
    time.sleep(0.25)
    print("\rChecking.. ", end="")
    time.sleep(0.25)
    print("\rChecking...", end="")
    time.sleep(0.25)
    print("\rChecking   ", end="")
    time.sleep(0.25)
    print("\rChecking.  ", end="")
    time.sleep(0.25)
    print("\rChecking.. ", end="")
    time.sleep(0.25)
    print("\rChecking...", end="")
    time.sleep(0.25)
    
    if guess in word:
        currnt_letters_guessed.append(guess)
        currnt_letters_right +=1
        if currnt_letters_right == unique_characters:
            clear_screen()
            print("\n")
            printHangman(amount_of_times_wrong)
            print("\n")
            printWord(currnt_letters_guessed)
            printLines()
            print("\n")
            print("You won!")
            print("\n")
            break
    else:
        amount_of_times_wrong+=1
        if amount_of_times_wrong == 6:
            clear_screen()
            print("\n")
            printHangman(amount_of_times_wrong)
            print("\n")
            printWord(currnt_letters_guessed)
            printLines()
            print("\n")
            print("You lost! The word was: {}".format(word))
            print("\n")
            break