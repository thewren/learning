# 
# Exercise 13 http://learnpythonthehardway.org/book/ex13.html
#

from sys import argv # import adds features into my script from the Python feature set.  Python doesn't give me all the features at once, but allows me to specify what I plan to use.
					 # argv is an "argument variable", this variable holds the arguments I pass to my python script when I run it


script, first, second, third = argv # this line "unpacks" the argv variable and
									# assigns it's contents to four variables:
									# script, first, second, third - in order

print "The script is called: ", script
print "The first variable is: ", first
print "The second variable is: ", second
print "The third variable is: ", third

#
# Extra credit begins below!
#

understand = raw_input(
	"Do you know what the third variable is?  "
	"Please name the third variable.  "
)
	
print "\nAccording to you, the third variable is named %r" % understand

verify = raw_input("\nAre you sure that that is the name of the third variable?  ")

print (
	"\nWhen asked if you were sure of the third variable's name, you said %r."
	"\nThe name of the third variable is %r,"
	"\nyou said that the name of the third variable is %r." % (verify, third, understand)
)