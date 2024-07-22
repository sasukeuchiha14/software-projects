import qrcode
import pyautogui as pag
import winsound
import os

def create_qr_code():
    link = pag.prompt(text="", title="Enter the Link of which you want Qr")

    img = qrcode.make(link)
    img.show()

    file_format = pag.prompt(text="*.jpg / *.jpeg / *.png", title="Enter the File Name.Format")
    valid_formats = ["jpg", "jpeg", "png"]
    exit_commands = ["q", "quit", "exit", "close", "stop", "end", "cancel", "abort", "leave", "break"]

    try:
        file_name, file_extension = file_format.split(".")
    except ValueError:
        print("Invalid Format")
    else:
        if file_format.lower() in exit_commands:
            print("Exiting...")
        elif file_extension.lower() in valid_formats:
            try:
                img.save(file_format)
                print("QR code saved successfully.")
            except Exception as e:
                print(f"An error occurred while saving the QR code: {str(e)}")
        else:
            print("Invalid Format")
    finally:
        winsound.PlaySound("SystemExit", winsound.SND_ALIAS)

def delete_qr_code(file_name):
    try:
        os.remove(file_name)
        print("QR code deleted successfully.")
    except FileNotFoundError:
        print("QR code file not found.")
    except Exception as e:
        print(f"An error occurred while deleting the QR code: {str(e)}")

if __name__ == "__main__":
    create_qr_code()
    # delete_qr_code("qrcode.png")