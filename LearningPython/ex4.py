#
# Exercise 4 http://learnpythonthehardway.org/book/ex4.html
#

cars = 100				# This is not a floating point number.  Only whole numbers (1, 2, etc.) are possible.
space_in_a_car = 4.0	# This is a floating point number.  Fractions (4.1, 4.2, etc) are possible.
drivers = 30
passengers = 90
cars_not_driven = cars - drivers
cars_driven = drivers
carpool_capacity = cars_driven * space_in_a_car
average_passengers_per_car = passengers / cars_driven


print "There are", cars, "cars available."
print "There are", drivers, "drivers available."
print "There will be", cars_not_driven, "empty cars today."
print "We can transport", carpool_capacity, "people today."
print "We have", passengers, "to carpool today."
print "We need to put about", average_passengers_per_car, "in each car."