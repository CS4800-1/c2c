from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route("/")
def index():
	return render_template('index.html', token="Hello Flask+React from c2c")

@app.route("/firstCal")
def firstCal():
	return render_template('firstCal.html')

@app.route("/landing")
def landing():
	return render_template('landing.html')
	
@app.route("/team")
def team():
	return render_template('team.html')

@app.route("/about")
def about():
	return render_template('about.html')

@app.route("/howItWorks")
def work():
	return render_template('work.html')

@app.route("/getStarted")
def options():
	return render_template('getStarted.html')

#user makes event
@app.route("/createEvent")
def createEvent():
	return render_template('calendar.html')

#user adds times to event
@app.route("/userAvailability")
def userAvailability():
	return render_template('userAvailability.html')

@app.route("/groupAvailability")
def groupAvailability():
	return render_template('groupAvailability.html')

@app.route("/TEST")
def testPage():
	return render_template('testPage.html')

if __name__=='__main__':
	app.run(debug=True, host='0.0.0.0', port=8000)
