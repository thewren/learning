# 
# Exercise 6 http://learnpythonthehardway.org/book/ex6.html
# 

x = "There are %d types of people." % 10 # %d places the number on the right of the string inside the string, the number will only display as a whole number, because %d cannot handle irrational numbers
binary = "binary" # defines the variable 'binary' equal to the word "binary"
do_not = "don't" # defines the variable 'do_not' as the word "don't"
y = "Those who know %s and those who %s." % (binary, do_not) # sets a variable y equal to a string which prints the variables 'binary' and 'do_not as strings because %s can only print strings

print x # because the variable 'x' is a string, this print function prints the string to which x equates
print y

print "I said: %r." % x # %r prints the variable x in quotes (' ') because %r prints items the way in which the python interpreter reads them; x is a string, so it is displayed in quotes
print "I also said: '%s'." % y # %s prints the string, and the single quotes appear because I write them into the printed string manually

hilarious = False # declares the variable hilarious equal to the boolean value of false
joke_evaluation = "Isn't that joke so funny?! %r"

print joke_evaluation % hilarious # %r is defined in the variable 'joke_evaluation' when joke_evaluation is declared, so when I print it, I have to give the %r something to correlate to, which in this case is the variable 'hilarious'.  If I don't correlate %r to a variable, then python will literally print %r at the end of the original string

w = "This is the left side of. . ."
e = "a string with a right side."

print w + e # this prints the two variables with no spaces in between