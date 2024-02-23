import pyautogui as pag
import random
import time

c=int(input("For How many Hours you want : "))
a=c*3600
if c==0:
    b=int(input("For How many Minutes you want : "))
a=b*60
if b==0:
    a=int(input("For How many Minutes you want : "))
i=0
while i<a:
    x=random.randint(600,700)
    y=random.randint(200,600)
    pag.moveTo(x,y,0.5)
    time.sleep(2)
    i=i+2
