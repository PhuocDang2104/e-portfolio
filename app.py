from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route("/iot_challenge_product")
def iot_challenge_product():
    return render_template("iot_challenge_product.html")

@app.route("/klu_hackathon_project")
def klu_hackathon_project():
    return render_template("klu_hackathon_project.html")

@app.route("/intel_ai_project")
def intel_ai_project():
    return render_template("intel_ai_project.html")

@app.route("/rmit_hackathon_project")
def rmit_hackathon_project():
    return render_template("rmit_hackathon_project.html")

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)