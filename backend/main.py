from flask import Flask, render_template
app = Flask(__name__)
  
@app.route("/")
def index():
   return "Need to Link"
  
if __name__ == '__main__':
   app.run(debug = True)