from flask import Flask, render_template, request
app = Flask(__name__)
  
@app.route("/api",methods=['GET','POST'])
def index():
   if request.method =='GET':
      print("in get request")
      return {
         "user":"guest",
         "id":1,
         "title":"backend server"
      }
   if request.method == 'POST':
      print('in post request')
      print(type(request.json))
      print(request.json)
      return "success"
  
if __name__ == '__main__':
   app.run(debug = True)