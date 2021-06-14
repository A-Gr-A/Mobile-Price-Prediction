from flask import Flask, render_template
app = Flask(__name__)
  
@app.route("/api")
def index():
   return {
      "user":"guest",
       "id":1,
       "title":"backedn server"
   }
  
if __name__ == '__main__':
   app.run(debug = True)