#
# Extra Credit for Exercise 16
#

from sys import argv

script, filename = argv
txt = open(filename)

print "I will now read and print the contents of %r:" % filename
print txt.read()

print "\nI will now close %r. . ." % filename
txt.close()
print ". . . %r has been successfully closed." % filename