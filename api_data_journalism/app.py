from flask import Flask, Blueprint, render_template

# Create an instance of Flask
app = Flask(__name__.split('.')[0], static_url_path='', static_folder='client/build')

@app.route("/")
def home():
  return app.send_static_file('index.html')


@app.route('/time')
def time():
    return { 'data': 'data'}


if __name__ == "__main__":
    app.run()