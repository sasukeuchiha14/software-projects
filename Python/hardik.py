from subprocess import Popen, CREATE_NEW_CONSOLE
import time
from pynput.keyboard import Key, Controller
from pynput.mouse import Controller as C2
import pyautogui as pag

asakey = Controller()
asakey2 = C2()

class install():
    
    def pip_install():
        
        Popen("cmd", creationflags=CREATE_NEW_CONSOLE)
        input = pag.prompt(text="", title="Enter the thing which you wanna install (FULL Prompt)")
        
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