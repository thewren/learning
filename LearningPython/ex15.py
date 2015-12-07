# 
# Exercise 15 http://learnpythonthehardway.org/book/ex15.html
#

from sys import argv # Retrieves functions from the sys library, specifically the argv functions.
					 # argv is an "argument variable" and it holds arguments I pass to the script
					 # when I run the script

script, filename = argv # argv will hold arguments in two variables: script and filename

txt = open(filename) # txt is a variable that holds a file object which is named on line 9

print "Here's your file %r: " % filename # prints the name of the file name that is about to be printed
print txt.read() # prints the contents of the file

print "Type the filename again:" # prompts the user to enter a new file name
file_again = raw_input("> ") # stores the entered file name as a string in a variable called file_again

txt_again = open(file_again) # converts the string created above into a file object called text_again

print txt_again.read() # prints the content of the file object text_again

#
# Extra credit begins below!
#

txt.close()			# closes one of the files opened in the course of this script
txt_again.close()	# closes the other file which was opened