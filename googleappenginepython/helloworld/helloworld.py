#
# Completed steps of helloworld.py - continue in the guestbook/ directory.
#
"""A simple weapp2 server"""

import webapp2



class MainPage(webapp2.RequestHandler):

#
# Respond to a GET request with an HTTP header that describes the content in the response,
# which is a text message that says Hello World
	def get(self):
		self.response.headers['Content-Type'] = 'text/plain'
		self.response.write('Hello, World!')

class OtherPage(webapp2.RequestHandler):

	def get(self):
		self.response.write('This is the other page. This page has no HTTP header.')

application = webapp2.WSGIApplication([

	('/', MainPage),
	('/other', OtherPage)


], debug=True)