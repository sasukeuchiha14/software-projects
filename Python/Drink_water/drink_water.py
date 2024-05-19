from plyer import notification
from pygame import mixer
import time
import threading

def play_sound():
    mixer.init()
    mixer.music.load("e:\\Projects\\Python\\Drink_water\\water.mp3")
    mixer.music.play()
    time.sleep(5)
    mixer.music.stop()

def show_notification():
    notification.notify(
        title = "Drink Water Reminder",
        message = "Fact: Men should have about 2.6 litres (10 cups) of fluids a day.",
        app_icon = "e:\\Projects\\Python\\Drink_water\\logo.ico",
        timeout = 5
    )

if __name__ == "__main__":
    while True:
        sound_thread = threading.Thread(target=play_sound)
        notification_thread = threading.Thread(target=show_notification)

        sound_thread.start()
        notification_thread.start()

        sound_thread.join()
        notification_thread.join()
        time.sleep(60*60) # 1 hour