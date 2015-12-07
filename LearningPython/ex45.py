# 
# Exercise 45 http://learnpythonthehardway.org/book/ex45.html
#
# Make a quiz game that contains three phases: Phase 1 - words, phase 2 - math, phase 3 - ?
#

###### IMPORTS #####

from sys import exit
from random import *
import ex45_extrafile # I need to use an extra file, so I'm reading loss_blurbs from
					  # variables defined in this file


##### VARIABLES #####

inventory = []
quiz = "start"

##### CLASSES #####

class Quiz(object):
	
	def __init__(self):
		self.lossquips = ex45_extrafile.loss_blurbs#[randint(0,len(ex45.extrafile.loss_blurbs))]

	def print_lossquip(self):
		quip = self.lossquips[randint(0, len(ex45_extrafile.loss_blurbs) - 1)]
		print quip
	
	def generate_wronganswers(self, wronganswers): # wronganswers should be a list
		rand1 = randint(0, len(wronganswers) - 1)
		rand2, rand3 = rand1 - 1, rand1 - 2
		
		if rand2 <= 0:
			rand2, rand3 = rand1 + 1, rand1 + 2
		
		wa1, wa2, wa3 = wronganswers[rand1], wronganswers[rand2], wronganswers[rand3]
		
		return wa1, wa2, wa3				
	
	def pose_question(self, questionanswer): # questionanswer should be a list
		q, a = questionanswer.split(':')
		wa1, wa2, wa3 = self.generate_wronganswers(ex45_extrafile.word_incorrectanswers)
		
		print "\n- - - - -\n%s\n- - - - -\n\n1) %s\n2) %s\n3) %s\n4) %s\n" % (q, a, wa1, wa2, wa3)
		
		input = raw_input("Please select your answer >  ")
		
		while True:
			if input == '1' or input == '2' or input == '3' or input == '4':
				break
			else:
				input = raw_input("Please enter a number between 1 and 4 >  ")
		return input
	
	def check_answer(self, useranswer): # useranswer should be the returned value of pose_question()
			ua = useranswer
			if ua == '1':  # 1 is always the correct answer; until I code a better system }=D
				print "Your answer, %s, is correct!" % ua
				return 1 # 1 point for the correct answer
			else:
				print "Your answer, %s, is incorrect.\n\n%s" % (ua, self.lossquips[randint(0, len(self.lossquips) - 1)])
				return 0 # 0 points for an incorrect answer
	
	def display_score(self, score): # score should be the returned value of check_answer()
		s = score
		### RESUME ###
		### RESUME ###
		### RESUME ###



class WordsQuiz(Quiz):
	
	def __init__(self):
		self.questionlist = ex45_extrafile.wordlist
		self.incorrectanswers = ex45_extrafile.word_incorrectanswers
		super(WordsQuiz, self).__init__()  # This super() is necessary in order for WordsQuiz to inherit self.lossquips
	
	def print_wordlist(self):
		questionlist = self.questionlist
		q, a = questionlist[randint(0, len(questionlist)-1)].split(':')
		print questionlist, q, a

class MathQuiz(Quiz):
	
	def __init__(self):
		self.questionlist = ex45_extrafile.mathlist
		self.incorrectanswers = ex45_extrafile.math_incorrectanswers
		
		
		


##### RUNNING #####

test = WordsQuiz()
t = test.pose_question(ex45_extrafile.wordlist[randint(0, len(ex45_extrafile.wordlist) - 1)])
test.check_answer(t)

#wordtest = WordsQuiz()
#wordtest.print_wordlist()