from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def main():
	return render_template('zmain.html', text = 'This is the song that never ends.')

if __name__ == '__main__':
	app.run()