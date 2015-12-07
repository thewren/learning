#
# Written by Daniel Heinrich on November 4, 2012 as part of
# my application for the Technical Writer position
#

previous_number = 0
current_number = 1


def fibonacci(current_number, previous_number):
	next_number = current_number + previous_number
	return current_number, next_number

print "Welcome to the Fibonacci counting program.  How many cycles would you like the Fibonacci sequence to count?"
cycles = int(raw_input("\nEnter an integer. >"))

print previous_number
print current_number

for i in range (0, cycles-2):
	c, n = fibonacci(current_number, previous_number)
	print n
	previous_number, current_number = c, n