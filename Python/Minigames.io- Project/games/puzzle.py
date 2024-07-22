import pygame
import random
import pyautogui
from pygame.locals import *


class Tiles:
	def __init__(self, screen, start_position_x,start_position_y, num, mat_pos_x, mat_pos_y):
		self.color = (0, 255, 0)
		self.screen = screen
		self.start_pos_x = start_position_x
		self.start_pos_y = start_position_y
		self.num = num
		self.width = tile_width
		self.depth = tile_depth
		self.selected = False
		self.position_x = mat_pos_x
		self.position_y = mat_pos_y
		self.movable = False

	def draw_tyle(self):
		pygame.draw.rect(self.screen, self.color, pygame.Rect(
			self.start_pos_x, self.start_pos_y, self.width, self.depth))
		numb = font.render(str(self.num), True, (125, 55, 100))
		screen.blit(numb, (self.start_pos_x + 40, self.start_pos_y + 10))

	def mouse_hover(self, x_m_motion, _motion):
		if x_m_motion > self.start_pos_x and x_m_motion < self.start_pos_x + self.width and y_m_motion > self.start_pos_y and y_m_motion < self.start_pos_y + self.depth:
			self.color = (255, 255, 255)
		else:
			self.color = (255, 165, 0)

	def mouse_click(self, x_m_click, y_m_click):
		if x_m_click > self.start_pos_x and x_m_click < self.start_pos_x + self.width and y_m_click > self.start_pos_y and y_m_click < self.start_pos_y + self.depth:
			self.selected = True
		else:
			self.selected = False

	def mouse_click_release(self, x_m_click_rel, y_m_click_rel):
		if x_m_click_rel > 0 and y_m_click_rel > 0:
			self.selected = False

	def move_tyle(self, x_m_motion, y_m_motion):
		self.start_pos_x = x_m_motion
		self.start_pos_y = y_m_motion


def create_tyles():
	i = 1
	while i <= tile_count:
		r = random.randint(1, tile_count)
		if r not in tile_no:
			tile_no.append(r)
			i += 1
	tile_no.append("")
	k = 0
	for i in range(0, rows):
		for j in range(0, cols):
			if (i == rows - 1) and (j == cols - 1):
				pass
			else:
				t = Tiles(screen, tile_print_position[(
					i, j)][0], tile_print_position[(i, j)][1],
						tile_no[k], i, j)
				tiles.append(t)
			matrix[i][j] = tile_no[k]
			k += 1
	check_mobility()

def check_mobility():
	for i in range(tile_count):
		tile = tiles[i]
		row_index = tile.position_x
		col_index = tile.position_y
		adjacent_cells = []
		adjacent_cells.append([row_index-1, col_index, False]) 
		adjacent_cells.append([row_index+1, col_index, False]) 
		adjacent_cells.append([row_index, col_index-1, False]) 
		adjacent_cells.append([row_index, col_index+1, False]) 
		for i in range(len(adjacent_cells)):
			if (adjacent_cells[i][0] >= 0 and adjacent_cells[i][0] < rows) and (adjacent_cells[i][1] >= 0 and adjacent_cells[i][1] < cols):
				adjacent_cells[i][2] = True

		for j in range(len(adjacent_cells)):
			if adjacent_cells[j][2]:
				adj_cell_row = adjacent_cells[j][0]
				adj_cell_col = adjacent_cells[j][1]
				for k in range(tile_count):
					if adj_cell_row == tiles[k].position_x and adj_cell_col == tiles[k].position_y:
						adjacent_cells[j][2] = False

				false_count = 0

				for m in range(len(adjacent_cells)):
					if adjacent_cells[m][2]:
						tile.movable = True
						break
					else:
						false_count += 1

				if false_count == 4:
					tile.movable = False


def isGameOver():
	global game_over, game_over_banner
	allcelldata = ""
	for i in range(rows):
		for j in range(cols):
			allcelldata = allcelldata + str(matrix[i][j])

	if allcelldata == "12345678 ":
		game_over = True
		game_over_banner = "Game Over"

		print("Game Over")

		for i in range(tile_count):
			tiles[i].movable = False
			tiles[i].selected = False


page_width, page_depth = pyautogui.size()
page_width = int(page_width * .8)
page_depth = int(page_depth * .8)

tiles = []
tile_width = 200
tile_depth = 200

rows, cols = (3, 3)
tile_count = rows * cols - 1 
matrix = [["" for i in range(cols)] for j in range(rows)]
tile_no = []
tile_print_position = {(0, 0): (100, 50),
					(0, 1): (305, 50),
					(0, 2): (510, 50),
					(1, 0): (100, 255),
					(1, 1): (305, 255),
					(1, 2): (510, 255),
					(2, 0): (100, 460),
					(2, 1): (305, 460),
					(2, 2): (510, 460)}

mouse_press = False
x_m_click, y_m_click = 0, 0
x_m_click_rel, y_m_click_rel = 0, 0
game_over = False
game_over_banner = ""

pygame.init()
game_over_font = pygame.font.Font('freesansbold.ttf', 70)
move_count = 0
move_count_banner = "Moves : "
move_count_font = pygame.font.Font('freesansbold.ttf', 40)
screen = pygame.display.set_mode((page_width, page_depth))
pygame.display.set_caption("Puzzle Game")
font = pygame.font.Font('freesansbold.ttf', 200)

create_tyles()

running = True
while running:
	screen.fill((0, 0, 0)) 
	
	pygame.draw.rect(screen, (165, 42, 42), pygame.Rect(95, 45, 620, 620))
	game_over_print = game_over_font.render(
		game_over_banner, True, (255, 255, 0))

	screen.blit(game_over_print, (950, 100))

	if move_count == 0:
		move_count_render = move_count_font.render(
			move_count_banner, True, (0, 255, 0))
	else:
		move_count_render = move_count_font.render(
			move_count_banner + str(move_count), True, (0, 255, 0))
	screen.blit(move_count_render, (1050, 200))

	for event in pygame.event.get():
		if event.type == pygame.QUIT:
			running = False
		if event.type == pygame.MOUSEMOTION:
			x_m_motion, y_m_motion = pygame.mouse.get_pos()
			for i in range(tile_count):
				tiles[i].mouse_hover(x_m_motion, y_m_motion)
			for i in range(tile_count):
				if tiles[i].selected and mouse_press:
					tiles[i].move_tyle(x_m_motion, y_m_motion)
		if event.type == pygame.MOUSEBUTTONDOWN:
			mouse_press = True
			x_m_click, y_m_click = pygame.mouse.get_pos()
			for i in range(tile_count):
				tiles[i].mouse_click(x_m_click, y_m_click)
		if event.type == pygame.MOUSEBUTTONUP:
			mouse_press = False
			x_m_click_rel, y_m_click_rel = pygame.mouse.get_pos()
			x_m_click, y_m_click = 0, 0
			cell_found = False
			for i in range(0, rows):
				for j in range(0, cols):
					tile_start_pos_x = tile_print_position[(i, j)][0]
					tile_start_pos_y = tile_print_position[(i, j)][1]

					if (x_m_click_rel > tile_start_pos_x and x_m_click_rel < tile_start_pos_x + tile_width) and (y_m_click_rel > tile_start_pos_y and y_m_click_rel < tile_start_pos_y + tile_depth):
						if matrix[i][j] == "":
							for k in range(tile_count):
								if game_over == False:
									if tiles[k].selected:
										if tiles[k].movable:
											cell_found = True
											dummy = matrix[tiles[k].position_x][tiles[k].position_y]
											matrix[tiles[k].position_x][tiles[k].position_y] = matrix[i][j]
											matrix[i][j] = dummy
											tiles[k].position_x = i
											tiles[k].position_y = j
											tiles[k].start_pos_x = tile_print_position[(
												i, j)][0]
											tiles[k].start_pos_y = tile_print_position[(
												i, j)][1]
											move_count += 1
											isGameOver()
											check_mobility()

					if cell_found == False:
						for k in range(tile_count):
							if tiles[k].selected:
								mat_pos_x = tiles[k].position_x
								mat_pos_y = tiles[k].position_y
								tiles[k].start_pos_x = tile_print_position[(
									mat_pos_x, mat_pos_y)][0]
								tiles[k].start_pos_y = tile_print_position[(
									mat_pos_x, mat_pos_y)][1]
								break

	for i in range(tile_count):
		tiles[i].draw_tyle()

	pygame.display.flip()
pygame.display.update()
