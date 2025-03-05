import subprocess
import pygame
import random
import sys
import time

pygame.init()

screen = pygame.display.set_mode([1200, 800])
height = pygame.display.Info().current_h
width = pygame.display.Info().current_w
pygame.display.set_caption('MINIGAMES')
clock = pygame.time.Clock()

colors = [(255, 0, 0), (0, 255, 0), (0, 0, 255)] 
color_index = 0
color_shift_speed = 10


star_field_slow = []
star_field_medium1 = []
star_field_medium2 = []
star_field_medium3 = []
star_field_fast = []
asteroid_field = []

for slow_stars in range(60):
    star_loc_x = random.randrange(0, width)
    star_loc_y = random.randrange(0, height)
    star_field_slow.append([star_loc_x, star_loc_y])

for medium1_stars in range(45):
    star_loc_x = random.randrange(0, width)
    star_loc_y = random.randrange(0, height)
    star_field_medium1.append([star_loc_x, star_loc_y])

for medium2_stars in range(35):
    star_loc_x = random.randrange(0, width)
    star_loc_y = random.randrange(0, height)
    star_field_medium2.append([star_loc_x, star_loc_y])

for medium3_stars in range(20):
    star_loc_x = random.randrange(0, width)
    star_loc_y = random.randrange(0, height)
    star_field_medium3.append([star_loc_x, star_loc_y])

for fast_stars in range(10):
    star_loc_x = random.randrange(0, width)
    star_loc_y = random.randrange(0, height)
    star_field_fast.append([star_loc_x, star_loc_y])


WHITE = (255, 255, 255)
LIGHTGREY = (192, 192, 192)
DARKGREY = (128, 128, 128)
BLACK = (0, 0, 0)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)
YELLOW = (255, 255, 0)
MAGENTA = (255, 0, 255)
CYAN = (0, 255, 255)
colors = [RED,GREEN,BLUE]
color_index = 0

color_shift_speed = 0.10

pixel_font="fonts\BACKTO1982.TTF"
pixel_font2="fonts\yoster.ttf"
font = pygame.font.Font(pixel_font, 72)
button_font = pygame.font.Font(pixel_font2, 24)
update_font = pygame.font.Font(pixel_font2, 34)

color_index = (color_index + color_shift_speed) % len(colors)
current_color = colors[int(color_index)]
title_text = font.render("MINIGAMES", True, current_color)


button1_rect = pygame.Rect(100, 200, 200, 100)
button2_rect = pygame.Rect(310, 220, 200, 100)
button3_rect = pygame.Rect(520, 240, 200, 100)
button4_rect = pygame.Rect(100, 320, 200, 100)                                 
button5_rect = pygame.Rect(310, 340, 200, 100)
button6_rect = pygame.Rect(520, 360, 200, 100)
info_rect = pygame.Rect(1130, 720, 50, 50)

asteroid_surface = pygame.image.load('images/asteroid1.png').convert_alpha()
asteroid_x = title_text.get_width() // 2 - 40
asteroid_y = 40
asteroid_surface = pygame.transform.scale(asteroid_surface,(100,100))

controler_surface = pygame.image.load('images/controler1.png').convert_alpha()
contorler_x = title_text.get_width() + 300
controler_y = 30
controler_surface = pygame.transform.scale(controler_surface,(100,100))
controler_surface = pygame.transform.rotate(controler_surface,-20)

border_surface = pygame.image.load('images/bordered.png').convert_alpha()
border_surface_loading = pygame.transform.scale(border_surface,(700,130))

info_icon_surface = pygame.image.load('images/info.png').convert_alpha()
info_x = 1130
info_y = 720
info_icon_surface=pygame.transform.scale(info_icon_surface,(50,50))

info_surface = pygame.Rect(350,150,500,500)



update_board_surface = pygame.Surface((300,300))
update_board_header_surface = pygame.Surface((300,50))
update_board_surface.fill((20,20,20))
update_board_header_surface.fill((60,20,20))

running = True
loading = True
info = False

while running:
    if loading == True:
        loading_screen =pygame.Surface((1200,800))
        loading_screen.fill((10,10,10))
        loading_text= font.render("Loading . . .",True,WHITE)
        screen.blit(border_surface_loading,(300-108/2,288))
        screen.blit(loading_text,(300-69/2,310))
        
        pygame.display.update()
        time.sleep(1.5)
        loading = False
    
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            print ("Exiting!")
            running = False 
        if event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE:
            print ("Exiting!")
            running = False
        elif event.type == pygame.MOUSEBUTTONDOWN:
            if info == False:
                if button1_rect.collidepoint(event.pos):
                
                    subprocess.Popen(["python", "games/snake.py"])
                elif button2_rect.collidepoint(event.pos):
                
                    subprocess.Popen(["python", "games/puzzle.py"])
                elif button3_rect.collidepoint(event.pos):
                
                    subprocess.Popen(["python", "games/TicTacToe.py"])
                elif button4_rect.collidepoint(event.pos):
                
                    subprocess.Popen(["python", "games/flappy/main.py"])
                elif button5_rect.collidepoint(event.pos):
                
                    subprocess.Popen(["python", "games/pingpong.py"])
                '''elif button6_rect.collidepoint(event.pos):
                
                    subprocess.Popen(["python", "game2.py"])'''
            
            elif info_rect.collidepoint(event.pos):
                
                info = True

               
    screen.fill(BLACK)
    

    for star in star_field_slow:
        star[1] += 0.5
        if star[1] > height:
            star[0] = random.randrange(0, width)
            star[1] = random.randrange(-20, -5)
        pygame.draw.circle(screen, DARKGREY, star, 3)

    for star in star_field_medium1:
        star[1] += 1
        if star[1] > height:
            star[0] = random.randrange(0, width)
            star[1] = random.randrange(-20, -5)
        pygame.draw.circle(screen, WHITE, star, 2)

    for star in star_field_medium2:
        star[1] += 3
        if star[1] > height:
            star[0] = random.randrange(0, width)
            star[1] = random.randrange(-20, -5)
        pygame.draw.circle(screen, CYAN, star, 2)

    for star in star_field_medium3:
        star[1] += 6
        if star[1] > height:
            star[0] = random.randrange(0, width)
            star[1] = random.randrange(-20, -5)
        pygame.draw.circle(screen, LIGHTGREY, star, 2)

    for star in star_field_fast:
        star[1] += 8
        if star[1] > height:
            star[0] = random.randrange(0, width)
            star[1] = random.randrange(-20, -5)
        pygame.draw.circle(screen, YELLOW, star, 1)
    
  
    screen.blit(asteroid_surface,(asteroid_x,asteroid_y))
    screen.blit(controler_surface,(contorler_x,controler_y))    

  

    screen.blit(update_board_surface,(850,150))
    screen.blit(update_board_header_surface,(850,150))
    update_text = update_font.render("Updates", True, WHITE)
    screen.blit(update_text,(920 , 160 ))
    
    screen.blit(title_text, (width // 2 - title_text.get_width() // 2, 50))

    color_index = (color_index + color_shift_speed) % len(colors)
    current_color = colors[int(color_index)]
    title_text = font.render("MINIGAMES", True, current_color)

    pygame.draw.rect(screen, (255,255,255), button1_rect)
    pygame.draw.rect(screen, (255,255,255), button2_rect)
    pygame.draw.rect(screen, (255,255,255), button3_rect)
    pygame.draw.rect(screen, (255,255,255), button4_rect)
    pygame.draw.rect(screen, (255,255,255), button5_rect)
    pygame.draw.rect(screen, (255,255,255), button6_rect)
    pygame.draw.rect(screen, BLACK, info_rect)
    

    screen.blit(info_icon_surface,(info_x,info_y))

    button1_text = button_font.render("Snake", True, (0, 0, 0)) 
    button2_text = button_font.render("Puzzle", True, (0, 0, 0))
    button3_text = button_font.render("TicTacToe", True, (0, 0, 0))
    button4_text = button_font.render("Flappy Bird", True, (0, 0, 0))
    button5_text = button_font.render("Ping-Pong", True, (0, 0, 0))
    button6_text = button_font.render("SOON", True, (0, 0, 0))
    
    #button2_text = button_font.render("Button 2", True, (0, 0, 0))


    screen.blit(button1_text, (button1_rect.centerx - button1_text.get_width() // 2, button1_rect.centery - button1_text.get_height() // 2))
    screen.blit(button2_text, (button2_rect.centerx - button2_text.get_width() // 2, button2_rect.centery - button2_text.get_height() // 2))
 
    screen.blit(button3_text, (button3_rect.centerx - button3_text.get_width() // 2, button3_rect.centery - button3_text.get_height() // 2))
    screen.blit(button4_text, (button4_rect.centerx - button4_text.get_width() // 2, button4_rect.centery - button4_text.get_height() // 2))
    screen.blit(button5_text, (button5_rect.centerx - button5_text.get_width() // 2, button5_rect.centery - button5_text.get_height() // 2))
    screen.blit(button6_text, (button6_rect.centerx - button6_text.get_width() // 2, button6_rect.centery - button6_text.get_height() // 2))

    pygame.display.flip()
    
    if info == True:
        pygame.draw.rect(screen,LIGHTGREY,info_surface)
        pygame.display.flip()

        if info_rect.collidepoint(event.pos):
                
            info = False

    
   

    
    clock.tick(60)


pygame.quit()
sys.exit()