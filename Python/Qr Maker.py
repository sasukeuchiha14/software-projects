import qrcode
import pyautogui as pag


link = pag.prompt(text="", title="Enter the Link of which you want Qr")
img = qrcode.make(link)
type(img)  # qrcode.image.pil.PilImage
file_format = pag.prompt(text="", title="Enter the File Name.Format")
img.save(file_format)