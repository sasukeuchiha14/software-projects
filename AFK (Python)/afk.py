import pyautogui as pag
import random
import time

b=int(input("For How many Hours you want : "))
a=b*3600
c=int(input("For How many Minutes you want : "))
a+=c*60
d=int(input("For How many Seconds you want : "))
a+=d

i=0
while i<(a-2):
    x=random.randint(1,1919)
    y=random.randint(1,1079)
    pag.moveTo(x,y,0.5)
    time.sleep(2)
    i=i+2