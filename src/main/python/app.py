from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route("/react")
def my_react():
	return render_template('my_react.html', token="Hello Flask+React")

@app.route("/")
def index():
	return render_template('index.html')

@app.route("/landing")
def landing():
	return render_template('landing.html')
	
@app.route("/team")
def team():
	return render_template('team.html')

@app.route("/about")
def about():
	return render_template('about.html')

@app.route("/work")
def work():
	return render_template('work.html')

@app.route("/createEvent")
def createEvent():
	return render_template('calendar.html')

@app.route("/options")
def options():
	return render_template('createview.html')

@app.route("/testPage")
def testPage():
	return render_template('testPage.html')

@app.route("/availability")
def availability():
	return render_template('availability.html')
	
# @app.route("/1")
# def go_to_one():
# 	return redirect(url_for("d1"))


if __name__=='__main__':
	app.run(debug=True, host='0.0.0.0', port=8000)
