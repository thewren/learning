# 
# Exercise 11 http://learnpythonthehardway.org/book/ex11.html
#

print "How old are you?",
age = raw_input()
print "How tall are you?",
height = raw_input()
print "How much do you weigh?",
weight = raw_input()

print "So you're %r old, %r tall, and %r heavy." % (age, height, weight)
	# In the line above, %r returns data the way in which python interprets the data.
	#
	# If %r is replaced with %s, the input will be returned as a string and the single
	# quotes will be gone.
	#
	# If %r is replaced with %d, an error will return because apparently raw_input()
	# cannot store data as an integer.
	