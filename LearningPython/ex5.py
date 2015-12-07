name = 'Daniel M. Heinrich'
age = 24 # at the time of writing
height = 68 #inches
weight = 130 #pounds
eyes = 'Green'
teeth = 'White'
hair = 'Brown'

print ""	# Creating a line break, there must be a better way!
print "Let's talk about %s." % name # %s prints strings of text
print "He's %d inches tall." % height # %d allows me to print only rational numbers
print "He's %d pounds heavy." % weight
print "Actually that's not too heavy."
print "He's got %s eyes and %s hair." % (eyes, hair)
print "His teeth are usually %s depending on the coffee." % teeth

# below, I am converting units to centimeters and kilos
print ""
print "His height in centimeters is %fcm." % (height * 2.54) # %f allows me to print irrational numbers
print "His weight in kilograms is %fkg." % (weight * 0.4536) # There are 0.4536 kg in a pound

# this line is tricky, try to get it exactly right
print ""
print "If I add %d, %d, and %d I get %d." % (age, height, weight, age + height + weight)
print ""