# 
# Exercise 44 http://learnpythonthehardway.org/book/ex44.html
#


##  Implicit Inheritance
##  Implicitly call a function from a parent class using a child class
class Parent(object):
	
	def implicit(self):
		print "PARENT implicit()"

class Child(Parent):
	pass

dad = Parent()
son = Child()

dad.implicit()  ## The object of Parent, dad, calls the function in Parent, implicit
son.implicit()  ## The object of Child, son, calls the function in Parent, implicit

print "\n ------- \n"

## Override Explicitly
## Override the functionality of the override() function by naming a second function override()
## in the class Child(Parent); identically naming another function in a class that inherits from
## a parent will over-write the functionality of the parent function
class Parent(object):
	
	def override(self):
		print "PARENT override()"
	
class Child(Parent):
	
	def override(self):
		print "CHILD override()"

dad = Parent()
son = Child()

dad.override()
son.override()

print "\n ------- \n"

## Alter Before Or After
## Run Parent.altered() within Child.altered() after over-writing Parent.altered
class Parent(object):
	
	def altered(self):
		print "PARENT altered()"
	
class Child(Parent):
	
	def altered(self):  # This over-writes the altered() function from the class Parent(object)
		print "CHILD, BEFORE PARENT altered()" # Prints a new string, having over-written Parent.altered()
		super(Child, self).altered() # Super is a built-in python function that recognizes the parent class of
									 # Child, it runs altered() as though running it from the parent class
		print "CHILD, AFTER PARENT altered()" # continues to run Child.altered() after completely executing Parent.altered()

dad = Parent()
son = Child()

dad.altered()
son.altered()

