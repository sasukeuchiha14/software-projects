import time
from pynput import keyboard
from pynput.keyboard import Key, Controller
from pynput.mouse import Controller as C2, Button
import random
import pyautogui as pag, easygui
import subprocess ,os

# Keyboard and Mouse Controllers for the program - pynput
asakey = Controller()
asakey2 = C2()

# Closing choices for the program - pop-up window
choices = ["Sleep", "Hubernate", "Shutdown", "None"]
selected_choice = easygui.buttonbox("How you want to exit the program?\nPlease select the option:", choices=choices, title="Way to close", default_choice=choices[3], cancel_choice=choices[3])

# Listener for the escape key
exit_flag = False

def on_press(key):
    global exit_flag
    if key == keyboard.Key.esc:
        exit_flag = True
        return False    # Stop the listener

def on_release(key):
    pass

# Start the listener
listener = keyboard.Listener(on_press=on_press, on_release=on_release)
listener.start()

# Open Edge Browser
subprocess.call("C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe")

# Move the mouse to the search bar
pag.moveTo(600,145,0.5)

time.sleep(5)

# Do the Searches
for i in range(35):
    
    # Print the ongoing search number
    print("Ongoing Search Number: ",i+1)

    # Exit the loop if the user presses the escape key
    if exit_flag:
        break 

    # Creates a random word of random length between 4 and 7
    x=random.randint(4,7)
    sentence_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnaopqrstuvwxyz1234567890 "
    sentence = ''.join(random.sample(sentence_letters,x))

    # Clicks on the search bar
    asakey2.click(Button.left, 1)
    time.sleep(0.5)

    # Deletes the previous word
    if i!=0:
        for i in range(x+1):
            asakey.press(Key.backspace)
            asakey.release(Key.backspace)

    time.sleep(1)

    # Types the new word
    for j in sentence:
        asakey.press(j)
        asakey.release(j)
        delay = random.uniform(0.1,0.2)
        time.sleep(delay)

    time.sleep(0.5)

    # Presses the enter key to search
    asakey.press(Key.enter)
    asakey.press(Key.enter)

    # Waits for a random time between 4 and 7 seconds
    y=random.randint(7,10)
    time.sleep(y)

# Close the Edge Browser after 2 seconds
time.sleep(2)
subprocess.call("taskkill /F /IM msedge.exe")

time.sleep(5)

# Clean up the listener and join the thread to the main thread to prevent the program from closing before the listener stops
listener.stop()
listener.join()

time.sleep(1)

# Closing choices
if selected_choice == "Sleep":
    os.system("RUNDLL32.EXE powrprof.dll,SetSuspendState Sleep")                        # Put the system to sleep mode
elif selected_choice == "Hubernate":
    os.system("RUNDLL32.EXE powrprof.dll,SetSuspendState Hibernate")                    # Hibernate the system
elif selected_choice == "Shutdown":
    os.system('shutdown /s /f /t 10 /c "Shutdown after Running the Edge.py Program"')   # Shut down the system
else:
    os.system("taskkill /f /im cmd.exe")                                                # Kill terminal
    print("Program Executed Successfully")