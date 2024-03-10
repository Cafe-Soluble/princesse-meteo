from flask import Flask, render_template, url_for
import datetime

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    # Obtenir la date actuelle
    today = datetime.date.today()
    return render_template("index.html", today=today)


@app.route('/subtitles')
def subtitles():
    return render_template('subtitles.html')

@app.route('/test')
def test():
    return render_template('test.html')