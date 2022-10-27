from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route("/")
def d1():
	return render_template('index.html')
	# return "Desktop - 1"

@app.route("/2")
def d2():
	return "Desktop - 2"

@app.route("/3")
def d3():
	return "Desktop - 3"

@app.route("/1")
def go_to_one():
	return redirect(url_for("d1"))


if __name__=='__main__':
	app.run(debug=True, host='0.0.0.0', port=8000)