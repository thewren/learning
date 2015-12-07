Python built-in functions

print "your text" # prints <your text> in the terminal
print 'your text' #alternative to use " marks
print """your text""" # prints <your text> exactly as typed; all the formatting I enter
					  # between the tripple quotes will be interpreted by python as formatting
print "text" + "text" # will print two strings connected together with a space ' ' between
print "text", [var] # if [var] is a string, python will print them with a space ' ' between


def [function]([arguments]) # This is how to define a function.  [function] is what the
							# function will be named, and how it will be called.
							# [arguments] are arguments that the function works with.
							# A function can have multiple arguments, written as such:
							# def [function]([arg1], arg2]
							
float(value) # floats the value, floating = irrational numbers; numbers with decimals
int(value) # converts <value> into an integer; integers are rational; cannot hold decimals
str(value) # converts <value> into a string

len([var]) # counts the number of characters in the string [var]


raw_input("prompt") # Prompts the user for a <value>.  The <value> is not evaluated.
					# The "prompt" is a message that is displayed to the user; a prompt
					# to get them to enter a value
					
[var] = raw_input("prompt") # assigns the value of the raw_input to a variable
[var] = "string" # assigns the value of a string to a variable
[var] = 1 # assigns the value of an integer to a variable
[var] = 1.0 # assigns the value of a float to a variable
[obj] = [obj] # assigns the value of the object on the right to the object on the left

[]1 , []2 # stops running function 1 and starts running function 2
		  # separates items in a list
		  # assigns multiple values
		  
"text %d" % d # inserts an integer into a string
"text %s" % s # inserts a string into a string
"text %r" % r # inserts a value into a string which is uninterpreted by python
"text %s text %d" % (<str>, <int>) # inserts a string, then an integer into a string

open([filename], '[mode]') # Opens a file so that operations can be done to it.
						   # If a file is not open, no operations may be performed on it.
'[mode]' can be:
	r	# read only; the file can only be read
	w	# write only; the file may only be written to
	r+	# read and write mode

f = open ([filename], '[mode]') # Assigns the open file to the variable f.
								# Below, f represents a variable to which a file has been opened.

f.read() # Reads the document; the data may be printed or stored in another variable.
f.close() # Closes the open file; important because the file cannot open again later
		  # if it is already open.  A file can't be read after it has been written to,
		  # closing and opening the written-to file will refresh the file, allowing it
		  # to again be read.
f.write("string") # Writes the <string> to the file.
f.tell() # Tells what byte/position we are in the file - 1 character is 1 byte in ASCII
f.readline() # reads the line where the cursor is
f.flush() #reloads the file so that it will print correctly after writing something new
f.seek([integer]) # will place the cursor on the character/byte whose place corresponds
				  # with the integer
f.truncate() # empties the whole file

\n # line break
\\ # prints one backslash
\' # prints one single quote
\" # prints one double quote
\a # ASCII Bell (BEL)
\b # ASCII Backspace (BS)
\f # ASCII FormFeed (FF)
\N{name} # Character named name in Unicode database (Unicode only)
\r # ASCII Carriage Return (CR), moves the cursor back to the beginning of the file
\t # ASCII Horizontal Tab (TAB), four spaces



from [library] import [module] # imports one [module] from all the librarie's modules
import [module] # imports the whole module and allows use of all the modules in the module group

from sys import argv # imports argv module

from os.path import exist # allows use of the exist() function; exist() returns True if a
						  # file exists and False if it doesn't