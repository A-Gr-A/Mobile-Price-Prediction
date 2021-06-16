from flask import Flask, render_template, request, jsonify, make_response
##################################################################
import pandas as pd
import numpy as np
import joblib

##################################################################
app = Flask(__name__,static_folder='./client/build',static_url_path='/')
##################################################################
a = {'battery_power': 510,
 'blue': 1,
 'clock_speed': 2,
 'dual_sim': 1,
 'fc': 5,
 'four_g': 1,
 'int_memory': 45,
 'm_dep': 0.9,
 'mobile_wt': 168,
 'n_cores': 6,
 'pc': 16,
 'px_height': 483,
 'px_width': 754,
 'ram': 3919,
 'sc_h': 19,
 'sc_w': 4,
 'talk_time': 2,
 'three_g': 1,
 'touch_screen': 1,
 'wifi': 1}

filename = 'final_model.sav'

df_cols = ['battery_power','blue','clock_speed','dual_sim','fc','four_g',
           'int_memory','m_dep','mobile_wt','n_cores','pc','px_height',
           'px_width','ram','sc_h','sc_w','talk_time','three_g',
           'touch_screen','wifi']
def preprocess_input(df):
  df['px_area'] = df['px_width'] * df['px_height'] / (1024**2)
  df['battery_per_core'] = df['battery_power']/ df['n_cores']
  df['speed_per_core'] = df['clock_speed']/ df['n_cores']
  df['battery_per_ram'] = df['battery_power']/ df['ram']
  df['speed_per_ram'] = df['clock_speed']/ df['ram']
  df['battery_talk'] = df['battery_power']/ df['talk_time']
  df['memory_per_ram'] = df['int_memory']* 1024 / (df['ram'])
  return df

def get_prediction(X_in):
  d = pd.DataFrame(columns= df_cols)

  entries = [float(X_in[col]) for col in df_cols]
  entries = pd.Series(entries, index = df_cols)
  d.loc[len(d)] = entries

  d = preprocess_input(d)
  filename = 'final_model.sav'
  model = joblib.load(filename)
  return int(model.predict(d))
##################################################################

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
      result = get_prediction(request.json)
      print(result)
      return jsonify({"result":result})
  
if __name__ == '__main__':
   app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
   # app.run(debug = True)