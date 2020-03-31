from flask import Flask, render_template

# Create an instance of Flask
app = Flask(__name__.split('.')[0], static_folder='./d3_data_journalism/build/static', template_folder="./d3_data_journalism/build")

@app.route("/")
def home():
  return render_template("index.html")


@app.route('/time')
def time():
    return { 'data': 'data'}


if __name__ == "__main__":
    app.run()