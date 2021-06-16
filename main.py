import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import numpy as np
import pandas as pd
import joblib
from X import X
app = FastAPI()
app.mount("/home" , StaticFiles(directory="./client/build", html='index.html'), name="static")

def preprocess_input(df):
  df['px_area'] = df['px_width'] * df['px_height'] / (1024**2)
  df['battery_per_core'] = df['battery_power']/ df['n_cores']
  df['speed_per_core'] = df['clock_speed']/ df['n_cores']
  df['battery_per_ram'] = df['battery_power']/ df['ram']
  df['speed_per_ram'] = df['clock_speed']/ df['ram']
  df['battery_talk'] = df['battery_power']/ df['talk_time']
  df['memory_per_ram'] = df['int_memory']* 1024 / (df['ram'])
  return df
 
df_cols = ['battery_power','blue','clock_speed','dual_sim','fc','four_g',
           'int_memory','m_dep','mobile_wt','n_cores','pc','px_height',
           'px_width','ram','sc_h','sc_w','talk_time','three_g',
           'touch_screen','wifi']
 
def get_prediction(X_in):
  d = pd.DataFrame(columns = df_cols)
 
  entries = [float(X_in[col]) for col in df_cols]
  entries = pd.Series(entries, index = df_cols)
  d.loc[len(d)] = entries
 
  d = preprocess_input(d)
  filename = 'final_model.sav'
  model = joblib.load(filename)
  return int(model.predict(d))

@app.post('/api')
def predict(X_in:X):
   X_in = X_in.dict()
   X_in = preprocess_input(X_in)
   
   print(X_in)
   return {
      "ans": get_prediction(X_in) 
   }

if __name__ =='__main__':
      uvicorn.run(app,host='127.0.0.1', port = 8000)
