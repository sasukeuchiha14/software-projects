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
    if format == "jpg" or format == "jpeg" or format == "png":
        img.save(file_format)
    else:
        print("Invalid Format")
finally:
    winsound.PlaySound("SystemExit", winsound.SND_ALIAS)