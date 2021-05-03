from flask import Flask,Request,request,jsonify
from tensorflow import keras
import numpy as np
from preprocessing import preprocessing 
from Scraping import get_data,get_tweet
model1 = keras.models.load_model('./artifacts/model_2.h5')
model_insult = keras.models.load_model('./artifacts/Insult.h5')
model_clickbait = keras.models.load_model('./artifacts/clickbait.h5')
model_racsim = keras.models.load_model('./artifacts/Racsim.h5')
model_sar = keras.models.load_model('./artifacts/sarcasm_model.h5')



app = Flask(__name__)
app.config['Debug'] = True



@app.route('/', methods = ['POST'])
def home():
    data = request.json
    ss = get_data(data['link'])
    heading = ss[0]
    s = preprocessing.preprocessstpwrd(ss[0])
    c = preprocessing.preprocessstpwrd_insult(ss[0])
    v =preprocessing.preprocessstpwrd_sarcam(ss[0])
    pred = model1.predict([s])
    insult = model_insult([c])
    click = model_clickbait([c])
    rax = model_racsim([c])
    sar = model_sar([v])
    print(ss ,s )
    for i in pred:
       newpred = pred[0]
    if newpred > 0.5:
        x = int(newpred*100)
        result = ''
        if x > 65:
            result = 'true'
        elif x > 50:
            if x < 65:
                result = 'Partially True'
        elif x > 35 :
            if x < 50 :
                result = 'Parially False'
        else : 
            result = 'False' 
        return jsonify({
            "Headline":ss[0],
            "Result":result,
            "Para":ss[1],
            "IsInsult": str(int(insult[0]*100)) ,
            "Clickbait": str(int(click[0]*100)) ,
            "Racsim": str(int(rax[0]*100)) ,
            "Sarcasm" : str(int(sar[0]*100)) 
        })
    else:
        x = int(newpred*100)
        result = ''
        if x > 65:
            result = 'true'
        elif x > 50:
            if x < 65:
                result = 'Partially True'
        elif x > 35 :
            if x < 50 :
                result = 'Parially False'
        else : 
            result = 'False' 
        return jsonify({
            "Headline":ss[0],
            "Result":result,
            "Para":ss[1],
            "IsInsult": str(int(insult[0]*100)) ,
            "Clickbait": str(int(click[0]*100)) ,
            "Racsim": str(int(rax[0]*100)) ,
            "Sarcasm" : str(int(sar[0]*100)) 
        })
    
@app.route('/tweet', methods= ['POST'])
def insult():
    data = request.json
    ss = get_tweet(data['tweet'])
    heading = ss
    s = preprocessing.preprocessstpwrd(ss[1])
    c = preprocessing.preprocessstpwrd_insult(ss[1])
    v =preprocessing.preprocessstpwrd_sarcam(ss[1])
    pred = model1.predict([s])
    insult = model_insult([c])
    click = model_clickbait([c])
    rax = model_racsim([c])
    sar = model_sar([v])
    print(ss ,s )
    for i in pred:
       newpred = pred[0]
    if newpred > 0.5:
        x = int(newpred*100)
        if x > 65:
            result = 'true'
        elif x > 50:
            if x < 65:
                result = 'Partially True'
        elif x > 35 :
            if x < 50 :
                result = 'Parially False'
        else : 
            result = 'False' 
        return jsonify({
            "Headline":ss[1],
            "Result":result,
            "IsInsult": str(int(insult*100)) ,
            "Clickbait": str(int(click*100)) ,
            "Racsim": str(int(rax*100)) ,
            "Sarcasm" : str(int(sar*100)) 
        })
    else:
        x = int(newpred*100)
        result = ''
        if x > 65:
            result = 'true'
        elif x > 50:
            if x < 65:
                result = 'Partially True'
        elif x > 35 :
            if x < 50 :
                result = 'Parially False'
        else : 
            result = 'False' 
        return jsonify({
            "Headline":ss[1],
            "Result":result,
            "IsInsult": str(int(insult*100)) ,
            "Clickbait": str(int(click*100)),
            "Racsim": str(int(rax*100)),
            "Sarcasm" : str(int(sar*100)) 
        })
@app.route('/fact', methods= ['POST'])
def fact():
    data = request.json
    ss = data['fact']
    heading = ss
    s = preprocessing.preprocessstpwrd(ss)
    c = preprocessing.preprocessstpwrd_insult(ss)
    v =preprocessing.preprocessstpwrd_sarcam(ss)
    pred = model1.predict([s])
    insult = model_insult([c])
    click = model_clickbait([c])
    rax = model_racsim([c])
    sar = model_sar([v])
    print(ss ,s )
    for i in pred:
       newpred = pred[0]
    if newpred > 0.5:
        x = int(newpred*100)
        result = ''
        if x > 65:
            result = 'true'
        elif x > 50:
            if x < 65:
                result = 'Partially True'
        elif x > 35 :
            if x < 50 :
                result = 'Parially False'
        else : 
            result = 'False' 
        return jsonify({
            "Headline":ss,
            "Result":result,
            "IsInsult": int(insult*100),
            "Clickbait": int(click*100),
            "Racsim": int(rax*100),
            "Sarcasm" : int(sar*100)
        })
    else:
        x = int(newpred*100)
        result = ''
        if x > 65:
            result = 'true'
        elif x > 50:
            if x < 65:
                result = 'Partially True'
        elif x > 35 :
            if x < 50 :
                result = 'Parially False'
        else : 
            result = 'False' 
        return jsonify({
            "Headline":ss,
            "Result":result,
            "IsInsult": int(insult*100),
            "Clickbait": int(click*100),
            "Racsim": int(rax*100),
            "Sarcasm" : int(sar*100)
        })
    

app.run()