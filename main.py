import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import numpy as np
import pandas as pd
import joblib
from X import X

app = FastAPI()
# app.mount("/", StaticFiles(directory="./client/build", html='index.html'), name="static")

def preprocess_input(df):
  df['px_area'] = df['pxw'] * df['pxh'] / (1024**2)
  df['battery_per_core'] = df['batCap']/ df['cpuCores']
  df['speed_per_core'] = df['clkSpeed']/ df['cpuCores']
  df['battery_per_ram'] = df['batCap']/ df['ram']
  df['speed_per_ram'] = df['clkSpeed']/ df['ram']
  df['battery_talk'] = df['batCap']/ df['tt']
  df['memory_per_ram'] = df['intMem']* 1024 / (df['ram'])
  return df
 
df_cols = ['battery_power','blue','clock_speed','dual_sim','fc','four_g',
           'int_memory','m_dep','mobile_wt','n_cores','pc','px_height',
           'px_width','ram','sc_h','sc_w','talk_time','three_g',
           'touch_screen','wifi']
 
dict_cols = ['batCap', 'blu', 'clkSpeed', 'dsim', 'fc', 'fourg', 
             'intMem', 'mobDepth', 'mobWeight', 'cpuCores', 'pc',
             'pxh', 'pxw', 'ram', 'sh', 'sw', 'tt', 'threeg',
             'tou', 'wif']


 
 
def get_prediction(X_in):
  d = pd.DataFrame(columns= df_cols)
 
  entries = [float(X_in[col]) for col in dict_cols]
  entries = pd.Series(entries, index = df_cols)
  d.loc[len(d)] = entries
 
  d = preprocess_input(d)
  filename = 'final_model.sav'
  model = joblib.load(filename)
  print( int(model.predict(d)))

@app.post('/api')
def predict(X_in:X):
   print(X_in)
   X_in = X_in.dict()
   X_in = preprocess_input(X_in)
   get_prediction(X_in)
   return {
      "ans": 'get_prediction(X_in)' 
   }

if __name__ =='__main__':
      uvicorn.run(app,host='127.0.0.1', port = 8000)
