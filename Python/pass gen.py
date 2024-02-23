import random

lower = "abcdefghijklmnopqrstuvwxyz"
upper = "ABCDEFGHIJKLMONPQRSTUVWXYZ"
number = "0123456789"
symbols = "!@#$%&*"

all = lower + upper + number + symbols
length = 16
password = ''.join(random.sample(all,length))

print(password)