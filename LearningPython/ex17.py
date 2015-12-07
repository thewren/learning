# 
# Exercise 17 http://learnpythonthehardway.org/book/ex17.html
#

from sys import argv
from os.path import exists  # exists is a handy library.  It checks to see if a file exists
							# based on its name in a string as an argument.  It returns True
							# if the file exists, and it returns False if it does not exist.

script, from_file, to_file = argv

print "Copying from %s to %s." % (from_file, to_file)

# we could do these two on one line too, how? - DONE
#input = open(from_file)
#indata = input.read()
indata = open(from_file).read()

print "The input file is %d bytes long" % len(indata)

print "Does the output file exist? %r" % exists(to_file)
print "Ready, hit RETURN to continue, CTRL-C to abort."
raw_input("\n>")

output = open(to_file, 'w')
output.write(indata)

print "Alright, all done."

output.close()
#input.close() - No longer needed because lines 15 and 16 were made a single line on line 17