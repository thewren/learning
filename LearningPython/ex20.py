# 
# Exercise 20 http://learnpythonthehardway.org/book/ex20.html
#

from sys import argv

script, input_file = argv

def print_all(f):
	print f.read()

def rewind(f):
	f.seek(0) # the seek() function returns the 'cursor' to a character number.
			   # Character number 0 is the beginning of the document.
			   # If I 'seek' too far - ie seek(12023412), then blank lines will be returned below.

def print_a_line(line_count, f):
	print line_count, f.readline()

current_file = open(input_file)

print "First let's print the whole file:\n"

print_all(current_file)

print "\nNow let's rewind, kind of like a tape.\n"

rewind(current_file) # without this function, we would print 3 (blank, undefined) lines
					 # from the end of the .txt file.  This function returns us to the
					 # beginning of the file.

print "\nLet's print three lines:\n"

current_line = 1
print_a_line(current_line, current_file)

current_line += 1 # See how this is different, but does the same as line 38?
print_a_line(current_line, current_file)

current_line = current_line + 1
print_a_line(current_line, current_file)