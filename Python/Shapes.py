import pyautogui as pag
import math
import turtle
from turtle import *

t = turtle.Turtle()
x = pag.prompt(text="", title="Enter the Shape")

if x.lower()=="heart":
    def hearta(k):
        return 15*math.sin(k)**3
    def heartb(k):
        return 12*math.cos(k)-5*\
            math.cos(2*k)-2*\
            math.cos(3*k)-\
            math.cos(4*k)
    speed(10000)
    bgcolor("black")
    for i in range(6000):
        goto(hearta(i)*20,heartb(i)*20)
        for j in range(5):
            color("#f72487")
        goto(0,0)
    done()

elif x.lower()=="virus":
    speed(50)
    color('cyan')
    bgcolor('black')
    b=200
    while b>0:
        left(b)
        forward(b*3)
        b=b-1

elif x.lower()=="tree":
    t.screen.bgcolor('black')
    t.pensize(2)
    t.color('green')
    t.left(90)
    t.backward(100)
    t.speed(1000)
    t.shape('turtle')
    def tree(i):
        if i<10:
            return
        else:
            t.forward(i)
            t.color('orange')
            t.circle(2)
            t.color('brown')
            t.left(30)
            tree(3*i/4)
            t.right(60)
            tree(3*i/4)
            t.left(30)
            t.backward(i)
    tree(100)
    turtle.done()

elif x.lower()=="circle":
    bgcolor('black')
    t.pensize(2)
    t.speed(100)
    for i in range(6):
        for color in ('red', 'magenta', 'blue', 'cyan', 'green', 'white', 'yellow'):
            t.color(color)
            t.circle(100)
            t.left(10)
        t.hideturtle()

elif x.lower()=="star":
    bgcolor('black')
    tracer(100)
    t.pensize(1)
    h=3.5
    col=['indigo','gold','blue','red','orange']
    for i in range(350):
        h=0.0049
        t.pencolor(col[i%5])
        t.begin_fill()
        t.fd(i)
        t.lt(300)
        t.circle(50)
        for j in range(2):
            t.fd(i*j)
            t.rt(109)
        t.end_fill()

else:
    print("No information regating it")
