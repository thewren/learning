"""A simple weapp2 server"""

import webapp2



class MainPage(webapp2.RequestHandler):

#
# Respond to a GET request with an HTTP header that describes the content in the response,
# which is a text message that says Hello World
def get(self):
		self.response.headers['Content-Type'] = 'text/plain'
		self.response.write('Hello, World!')



application = webapp2.WSGIApplication([
	('/', MainPage),
], debug=True)