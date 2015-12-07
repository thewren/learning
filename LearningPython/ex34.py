# 
# Exercise 34 http://learnpythonthehardway.org/book/ex34.html
#


##### Variables #####

list = []
run_again = False


##### Functions #####

def prompt_list_item():
	"""Prompts the user for a new list item, and adds it into the list 'list.'"""
	
	item = raw_input("\nEnter a new item for the list.\n >")
	list.append(item)
	print "Your item has been added to the list."
	
def print_list():
	"""Prints the entire list."""
	print "The list is:\n", list
	
def print_list_item(num):
	"""Prints one item from the list."""
	print list[num - 1]
	
	
	
##### Main #####

while run_again is False:
	action = raw_input("\nEnter 'a' to add a new item to the list.\n"
					   "Enter 'p' to print the entire list.\nEnter"
					   " 's' to print only one list item.\nEnter 'q'"
					   "to quit.\n >")
	
	if action is 'a':
		prompt_list_item()
		
	elif action is 'p':
		print_list()
		
	elif action is 's':
		i = int(raw_input("\nWhich list item would you like to print?\n >"))
		print_list_item(i)
	
	elif action is 'q':
		print "\nTerminating . . . thank you!\n"
		run_again = True
		
	else:
		print "\nPlease enter a valid option.\n\n"
		