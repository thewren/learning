import config

import webapp2
import jinja2

from random import randint






class Home(webapp2.RequestHandler):
	
	def get(self):

		

		template = config.JINJA_ENVIRONMENT.get_template('templates/home.html')
		return self.response.write(template.render())



#
# Run the application
#

application = webapp2.WSGIApplication([

	('/', Home)

])