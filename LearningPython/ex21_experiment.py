# 
# Exercise 21 http://learnpythonthehardway.org/book/ex21.html
#
# Conducting my own experiment: trying to retrieve input for the add function
#
# This experiment is not included in the book.
#

def add(a = int(raw_input("Enter A")), b = int(raw_input("Enter B"))):  # int() allows me to enter
																		# input that will be saved
																		# as an integer, in order
																		# to work with %d and also
																		# to operate as numbers
																		# in math
	print "ADDING %d + %d" % (a, b)
	return a + b

def subtract(a, b):
	print "SUBTRACTING %d - %d" % (a, b)
	return a - b

def multiply(a, b):
	print "MULTIPLYING %d * %d" % (a, b)
	return a * b

def divide(a, b):
	print "DIVIDING %d / %d" % (a, b)
	return a / b

print "Let's do some math with functions!\n"

age = add()#20, 4)
height = subtract(74, 6)
weight = multiply(65, 2)
iq = divide (100, 2)

print "Age: %d, height: %d, weight: %d, iq: %d" % (age, height, weight, iq)

# A puzzle for the extra credit, type it in anyway.
print "Here is a puzzle."

what = add(age, subtract(height, multiply (weight, divide (iq, 2))))

print "That becomes: ", what, "Can you do it by hand?"