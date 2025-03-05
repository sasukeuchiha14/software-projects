import qrcode
import easygui
import pyautogui as pag
import winsound
import tkinter as tk
from tkinter import filedialog

def create_qr_code():
    
    # Get the link from the user
    link = pag.prompt(text="", title="Enter the Link of which you want Qr")

    img = qrcode.make(link)         # Create the QR code
    img.show()                      # Show the QR code

    # Save QR code option
    save_choices = ["✅", "❌"]
    selected_save_choice = easygui.buttonbox("\nDo you want to Save the QR?\nPlease Select an option:", choices=save_choices, title="Save?", default_choice=save_choices[1], cancel_choice=save_choices[1])

    if selected_save_choice == "✅":
        
        # Get the file name from the user
        file_format = pag.prompt(text="Enter the File Name (without spaces):", title="File Name")

        try:
            # Get the folder where the QR code will be saved
            root = tk.Tk()
            root.withdraw()
            folder_selected = filedialog.askdirectory()

            # Save the QR code if a folder is selected
            if folder_selected:
                
                # Get the file format from the user
                save_format_choices = [".png", ".jpg", ".jpeg"]
                selected_save_format_choice = easygui.buttonbox("\nPlease Select an option for the file format:", choices=save_format_choices, title="File Format", default_choice=save_format_choices[0], cancel_choice=save_format_choices[0])

                # Save the QR code
                img.save(folder_selected + "/" + file_format + selected_save_format_choice)
                print("QR code saved successfully.")

            else:
                print("No folder selected. QR code not saved.")

        # Handle exceptions while saving the QR code
        except Exception as e:
            print(f"An error occurred while saving the QR code: {str(e)}")

    else:
        print("QR code not saved.")
    
    # Play the system exit sound to indicate the end of the program
    winsound.PlaySound("SystemExit", winsound.SND_ALIAS)

# Run the program if it is the main program
if __name__ == "__main__":
    create_qr_code()