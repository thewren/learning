# 
# Exercise 40 http://learnpythonthehardway.org/book/ex40.html
#

class Song(object):
	
	def __init__(self, lyrics):
		self.lyrics = lyrics
		
	def sing_me_a_song(self):
		for line in self.lyrics:
			print line

happy_bday = Song(["Happy birthday to you",
				   "I don't want to get sued",
				   "So I'll stop right there"])

bulls_on_parade = Song(["They rally around the family",
						"With pockets full of shells"])

happy_bday.sing_me_a_song()

bulls_on_parade.sing_me_a_song()

##### Extra Credit #####

a = "Lyrics line one", "Lyrics line two", "Lyrics line three"

ex1 = Song(a)

ex1.sing_me_a_song()

b = "First line of lyrics"
c = "Second line of lyrics"
d = "Third line of lyrics"

e = b, c, d

ex2 = Song(e)

ex2.sing_me_a_song()

ex3 = Song(["I'm singing a song\nSinging a song\nSong"])

ex3.sing_me_a_song()

ex4 = Song([d])

ex4.sing_me_a_song()

#####

class Song2(object):
	def __init__(self):
		pass
	
	def sing_me_a_song(self, lyrics):
		self.lyrics = lyrics
		print lyrics

test = Song2()

test.sing_me_a_song("lalala")

test2 = Song2()

test2.sing_me_a_song("loolooloo")