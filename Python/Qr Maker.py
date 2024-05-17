import qrcode
import pyautogui as pag
import winsound

link = pag.prompt(text="", title="Enter the Link of which you want Qr")

img = qrcode.make(link)
img.show()

file_format = pag.prompt(text=" *.jpg / *.jpeg /*.png ", title="Enter the File Name.Format")

try:
    file_name,format = file_format.split(".")
except:
    print("Invalid Format")
else:
    if file_format.lower() == "q" or file_format.lower() == "quit" or file_format.lower() == "exit" or file_format.lower() == "close" or file_format.lower() == "stop" or file_format.lower() == "end" or file_format.lower() == "cancel" or file_format.lower() == "abort" or file_format.lower() == "leave" or file_format.lower() == "break":
        print("Exiting...")
    elif format == "jpg" or format == "jpeg" or format == "png":
        img.save(file_format)
    else:
        print("Invalid Format")
finally:
    winsound.PlaySound("SystemExit", winsound.SND_ALIAS)