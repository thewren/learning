# 
# Exercise 27 http://learnpythonthehardway.org/book/ex27.html
#


# Allows me to use the shuffle() function to randomize questions
from random import *


########### Variables, defined ###########

questions_total = 5 # Total number of questions to be asked
questions_correct = 0 # Number of questions which the user correctly answers
questions_asked = 0 # Number of questions which have been asked; quiz ends when asked == total

question_list = [
	"1 == 0:False" ,
	"1 == 1:True" ,
	"0 == 1:False" ,
	"0 == 0:True"
]


########### Functions, defined ###########

def question_splitter(questions):
	"""Splits the question (left) from the answer (right) around the colon character."""
	q, a = questions.split(':')
	return q, a

def answer_check(user_answer, answer):
	"""Checks to see if the user's answer is correct."""

	
	if user_answer is not 'T' and user_answer is not 't' and user_answer is not 'F' and user_answer is not 'f':
		print "Please answer (T)rue or (F)alse."
		a = "invalid"
	elif user_answer is 'T' or user_answer is 't':
		user_answer = "True"
		if user_answer == answer:
			print "Correct!"
			a = "correct"

		else:
			print "Incorrect."
			a = "incorrect"
	
	elif user_answer is 'F' or user_answer is 'f':
		user_answer = "False"
		if user_answer == answer:
			print "Correct!"
			a = "correct"
		else:
			print "Incorrect."
			a = "incorrect"
	return a	


def question_ask():
		c = 'z'
		question_given = choice(question_list)
		q, a = question_splitter(question_given)
		print "\nIs it true that %r?" % q
		user_answer = raw_input("(T)rue or (F)alse?\n >")
		c = answer_check(user_answer, a)
		return c
		

		


########### Running Program ###########

while questions_asked < questions_total:
	g = question_ask()
	questions_asked += 1
	if g == "correct":
		questions_correct += 1
	elif g == "invalid":
		questions_asked += -1
		questions_correct += 0
	else:
		questions_correct += 0
else:
	print "The quiz has ended!  You have scored %d/%d." % (questions_correct, questions_asked)