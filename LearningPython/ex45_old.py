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

class Room(object):
	
	def __init__(self):
		self.loss_blurbs = ex45_extrafile.loss_blurbs
	
	def print_loss_blurb(self):
		print self.loss_blurbs[randint(0,len(ex45_extrafile.loss_blurbs)-1)]
	
	def user_selection(self):
		self.input = raw_input("\n > ").lower()
		return self.input
	
	#def run(self):
		#print "hello"
		#next_quiz = "start"	
		#while next_quiz != "quit":
		#	next_quiz = getattr(self, self.quiz)
		#	self.quiz = next_quiz.run()


class StartRoom(Room):
	
	def __init__(self, quiz):
		self.quiz = quiz
	
	def run(self):
		print """
		Welcome to the quiz game!  Where taking quizes is a game . . . Why not?
		
		-------
		
		You will be given three quizes.  One quiz will be word-related, one quiz will be
		in mathematics, and one quiz will be about something else.  Your score on each quiz
		as well as your comprehensive score will be tracked and reported at the end of the
		three quizes.
	
		-------
		
		Are you ready to begin? (Yes/No)
		"""
		
		self.input = self.user_selection()
		
		if self.input == "yes":
			print "yes, ", self.quiz
			self.quiz = "Words"
			#return self.quiz
		
		elif self.input == "no":
			print "no"
			self.quiz = "StartRoom"
			#return self.quiz
		
		else:
			print "Please enter Yes or No."
		
		## Running sequence - I should probably make this into it's own class
		#next_quiz = "start"
		#while next_quiz != "quit":
		#	next_quiz = getattr(self, self.quiz)
		#	self.quiz = next_quiz.run()
		
		#self.quiz.run()

class Words(Room):
	
	def run(self):
		print "Running Words"
		return "quit"




##### RUNNING #####


testing = StartRoom(quiz)
testing.run()