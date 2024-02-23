import subprocess
from subprocess import Popen, CREATE_NEW_CONSOLE,call
import time
from pynput.keyboard import Key, Controller
from pynput.mouse import Controller as C2, Button
import pyautogui as pag

asakey = Controller()
asakey2 = C2()

class sex:
    
    def open_incognito():
        subprocess.call("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe")

        time.sleep(1)

        asakey.press(Key.ctrl);time.sleep(0.2);asakey.press(Key.shift);time.sleep(0.2);asakey.press('n')
        time.sleep(0.2)
        asakey.release(Key.ctrl);time.sleep(0.2);asakey.release(Key.shift);time.sleep(0.2);asakey.release('n')
    
    def search():
        sentence = pag.prompt(text="", title="Enter the Search Prompt")
        pag.moveTo(500,80,0.5)
        for i in sentence:
            asakey.press(i)
            asakey.release(i)
            time.sleep(0.1)
        asakey.press(Key.enter)
        asakey.release(Key.enter)

class install():
    
    def pip_install():
        
        Popen("cmd", creationflags=CREATE_NEW_CONSOLE)
        input = pag.prompt(text="", title="Enter the thing which you wanna install Prompt")
        
        try:
            sentence = input.lower()
        except Exception as error:
            print("Got",error,"Error in making it lower case!\nPlease give something or try to give better format.")
        
        for i in sentence:
            asakey.press(i)
            asakey.release(i)
            time.sleep(0.1)
        asakey.press(Key.enter)
        asakey.release(Key.enter)