# 
# Exercise 33 http://learnpythonthehardway.org/book/ex33.html
#

i = 0			# declares 'i' as a variable equal to 0
numbers = [ ]	# declares 'numbers' as an empty list

while i < 6:						# while i is less than 6
	print "At the top i is %d" % i	# print the value of i
	numbers.append(i)				# insert the value of i into the list 'numbers'
	
	i = i + 1							# set the value of i as i + 1
	print "Numbers now: ", numbers		# print the contents of the list 'numbers'
	print "At the bottom i is %d" % i	# print the new value of i (after adding 1)


print "The numbers: "	# after the while loop has finished running (6 times)
						# print that string and then run the for loop below
						
for num in numbers:		# declares the variable 'num' inside the for loop and assigns
	print num			# 'num' the value of the next item in the list 'numbers' each time
						# the for loop executes; the for loop stops running after each item
						# in the list 'numbers' has executed

