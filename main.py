from flask import Flask, render_template, request
app = Flask(__name__,static_folder='./client/build',static_url_path='/')

@app.route("/")
def index():
   return app.send_static_file('index.html')

@app.route("/api",methods=['GET','POST'])
def methodhanlers():
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
   app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
   # app.run(debug = True)