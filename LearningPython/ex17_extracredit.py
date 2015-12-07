#
# Extra Credit for Exercise 17
#
# Write a one-line program which performs the same function as regular ex17
#

# from sys import argv; script, from_file, to_file = argv; open(to_file, 'w').write(open(from_file).read());

from sys import argv; open(argv[2], 'w').write(open(argv[1]).read());