# 
# Exercise 36 http://learnpythonthehardway.org/book/ex36.html
#

##### Imports #####

from random import *
from sys import exit

##### Variables #####

inventory = [] # A list of things that the player is carrying

			   # A list from which to randomly select a question, answers are separated
			   # by the : in the string
riddles = [
		   "What levels mountains,\ndries up oceans,\nand runs the clock?:time" ,
		   "What is 1 + 1?:2" ,
		   "What is 2 + 2?:4" ,
		   "What is 3 + 3?:6" ,
		   "What is 4 + 4?:8"
		   ]   

location = "first room" # Location denotes the room the player is in, defaults to the first room

end_game = 0 # If True, end the game

##### Functions #####

def first_room():
	"""The beginning of the game."""
	
	
	
	print "You see three doors in front of you.  Enter '1', '2', or '3' to enter"
	print "the corresponding door.  Press i to view your inventory."
	next = raw_input("\n> ")

	if next == "1":
		l = "riddle room"
		
	elif next == "2":
		l = "second room"
		
	elif next == "3":
		l = "key room"
	
	elif next == "i":
		print "You have the following items in your inventory: %s" % inventory
		l = "first room"
		
	else:
		print "Please select a valid room by entering room number 1, 2, or 3.\n"
		l = "first room"
	
	return l



def riddle_room():
	"""The riddle room: The sword is obtained here."""
	
	
	
	if "sword" in inventory:
		print "There is nothing in this room.  You return to the previous room."
		location = "first room"
	
	else:
	
		print ("A gnome appears and offers to give you a gift if you can correctly answer"
			   "three questions.")
		print "1: Alright, ask away!"
		print "2: No thank you, I'll return to the previous room."
		next = raw_input("\n> ")
		
		if "1" in next:
			location = riddle_game(0)
			
		elif "2" in next:
			location = "first room"
			
		else:
			print "Please choose your response carefully.\n"
			location = "riddle room"
	
	return location



def riddle_game(correct): # correct must be an integer
	"""Randomly selects and asks riddles to the player; verifies that their answers are correct."""
	
	
	
	while correct < 3:
		r = choice(riddles)
		q, a = r.split(":")
		
		print q
		input = raw_input("Enter your answer:\n> ")
		
		if input is a:
			print "Correct!"
			correct += 1
			print "Score: %d correct so far!" % correct
		
		else:
			print "Incorrect, please try again.\n"
	
	while correct == 3:
		answer = raw_input("Yes or no, is a sword a weapon?")
		answer = answer.lower()
		
		if answer is "yes" or "y":
			print "Correct!  You've received a sword!"
			inventory.append("sword")
			correct = 4
		
		elif answer is "no" or "n":
			print "Incorrect.  Please try again.\n"
		
		else:
			print "Please enter 'yes' or 'no'.\n"
		
	raw_input("Press any key to return to the first room.\n> ")
	
	location = "first room"
	
	return location

def key_room():
	"""The room in which a key is obtained."""
	
	
	
	if "key" in inventory:
		raw_input("There is nothing in this room.  Press any key to return to the first room.")
		location = "first room"
	
	else:
		raw_input("You see a key!  Press any key to pick up the key and return to the first room.")
		inventory.append("key")
		location = "first room"
	
	return location

def second_room():
	"""The room before the monster room."""
	
	
	
	print ("The room is empty.  There is another door on the other side of the room."
		   "You can hear scratching and gurgling coming from the other side of the door.")
	action = raw_input("1: I open the door.\n2:I return to the previous room.")
	
	if "1" in action and "key" in inventory and "sword" in inventory:
		print "You enter the door."
		l = "moster room"
		
	elif "1" in action:
		raw_input("You need a key and a sword before you can open this door!  Press any key to return to the first room.")
		l = "first room"	
		
	elif "2" in action:
		print "You return to the first room."
		l = "first room"
	
	else:
		print "Please enter a valid selection."
		l = "second room"
	
	return l	

def monster_room():

	

	raw_input("There is a huge monster!  You kill it with your sword.  Press any key to"
			  "enter the final room.")
	
	location = "final room"
	
	return location

def final_room():

	#global end_game

	print "You receive money!  And now you're free to spend it!"
	end_game = 1
	exit()
	
	return end_game


##### Running #####

while end_game == 0:
	if location == "first room":
		location = first_room()
		end_game = 0
		print location

	elif location == "riddle room":
		location = riddle_room()
		print location
	
	elif location == "second room":
		location = second_room()
		print location
	
	elif location == "key room":
		location = key_room()
		print location
	
	elif location == "monster room":
		location = monster_room()
		print location
	
	elif location == "final room":
		location = final_room()
		print location
	
	else:
		print "Game over.", location
		end_game = 1