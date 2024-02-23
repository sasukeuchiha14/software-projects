import time
from pynput.keyboard import Key, Controller
from pynput.mouse import Controller as C2, Button
import random
import pyautogui as pag
import subprocess

asakey = Controller()
asakey2 = C2()

subprocess.call("C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe")

pag.moveTo(754,180,0.5)

for i in range(35):
    
    x=random.randint(4,7)
    
    sentence_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnaopqrstuvwxyz1234567890 "
    sentence = ''.join(random.sample(sentence_letters,x))
    
    asakey2.click(Button.left, 1)
    time.sleep(0.5)
    
    if i!=0:
        for i in range(x+1):
            asakey.press(Key.backspace)
            asakey.release(Key.backspace)
    
    time.sleep(1)
    
    for j in sentence:
        asakey.press(j)
        asakey.release(j)
        delay = random.uniform(0.1,0.2)
        time.sleep(delay)

    time.sleep(0.5)

    asakey.press(Key.enter)
    asakey.press(Key.enter)
    
    y=random.randint(4,7)
    time.sleep(y)
