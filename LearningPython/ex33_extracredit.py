# 
# Extra credit for Exercise 33
#
# Convert the while loop to a function and replace 6 with a variable
#

#i = 0			# declares 'i' as a variable equal to 0
#numbers = [ ]	# declares 'numbers' as an empty list

#while i < 6:						# while i is less than 6
#	print "At the top i is %d" % i	# print the value of i
#	numbers.append(i)				# insert the value of i into the list 'numbers'
#	
#	i = i + 1							# set the value of i as i + 1
#	print "Numbers now: ", numbers		# print the contents of the list 'numbers'
#	print "At the bottom i is %d" % i	# print the new value of i (after adding 1)
#
#
#print "The numbers: "	# after the while loop has finished running (6 times)
#						# print that string and then run the for loop below
#						
#for num in numbers:		# declares the variable 'num' inside the for loop and assigns
#	print num			# 'num' the value of the next item in the list 'numbers' each time
						# the for loop executes; the for loop stops running after each item
						# in the list 'numbers' has executed



### Define Variables ###

#i = 0
#numbers = []

### Define Functions ###

def loop1(input): # Runs the loop using while
	i = 0
	numbers = [ ]
	
	while i < input:
		print "At the top, i is %d" % i
		numbers.append(i)
		
		i = i + 1
		print "Numbers now:", numbers
		print "At the bottom, i is %d" % i

	print "The numbers: "
	for num in numbers:
		print num

	i = 0
	numbers = []

	return i, numbers

def loop2(input): # Runs the loop using for
	i = 0
	numbers = []
	
	for i in range(0, input):
		print "At the top, i is %d" % i
		numbers.append(i)
		
		# i = i + 1  This is no longer necessary, because the for loop adds 1 to i in each iteration
		print "Numbers now:", numbers
		print "At the bottom, i is %d" % i
		
	print "The numbers: "
	for num in numbers:
		print num
	
	i = 0
	numbers = []
	
	return i, numbers


### Running Program ###



runloop = int(raw_input("How many times would you like the loop to run?\n >"))
	
n = 0
while n < 1:

	forwhile = raw_input("Enter 1 to run using a while loop, or enter 2 to run using a for loop.\n >")
	
	if forwhile is '1':
		loop1(int(runloop))
		n = 5

	elif forwhile is '2':
		loop2(int(runloop))
		n = 5

	else:
		print "\n\nPlease enter either 1 or 2.\n"
