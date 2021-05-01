from tensorflow.keras.preprocessing.text import Tokenizer,tokenizer_from_json
from tensorflow.keras.preprocessing.sequence import pad_sequences
import nltk
import re
from nltk.corpus import stopwords
nltk.download('stopwords')
from nltk.stem.porter import PorterStemmer

import json

with open('./artifacts/tokenizer1.json') as f:
    data = json.load(f)
    tokenizer = tokenizer_from_json(data)

with open('./artifacts/tokenizer_insult.json') as f:
    data = json.load(f)
    tokenizer_data = tokenizer_from_json(data)

with open('./artifacts/tokenizer_2.json') as f:
    data = json.load(f)
    tokenizer_sar = tokenizer_from_json(data)

class preprocessing :
    def preprocessstpwrd(inpt):
        ps = PorterStemmer()
        corpuss = []
        reviews = re.sub('[^a-zA-Z]',' ', inpt)
        reviews = reviews.lower()
        reviews = reviews.split()
        reviews = [ps.stem(word) for word in reviews if not word in stopwords.words('english')]
        reviews = ' '.join(reviews)
        corpuss.append(reviews)
        seq = tokenizer.texts_to_sequences(corpuss)
        pad = pad_sequences(seq ,padding='pre')
        return pad
    def preprocessstpwrd_insult(inpt):
        ps = PorterStemmer()
        corpuss = []
        reviews = re.sub('[^a-zA-Z]',' ', inpt)
        reviews = reviews.lower()
        reviews = reviews.split()
        reviews = [ps.stem(word) for word in reviews if not word in stopwords.words('english')]
        reviews = ' '.join(reviews)
        corpuss.append(reviews)
        seq = tokenizer_data.texts_to_sequences(corpuss)
        pad = pad_sequences(seq ,padding='pre')
        return pad
    def preprocessstpwrd_sarcam(inpt):
        ps = PorterStemmer()
        corpuss = []
        reviews = re.sub('[^a-zA-Z]',' ', inpt)
        reviews = reviews.lower()
        reviews = reviews.split()
        reviews = [ps.stem(word) for word in reviews if not word in stopwords.words('english')]
        reviews = ' '.join(reviews)
        corpuss.append(reviews)
        seq = tokenizer_sar.texts_to_sequences(corpuss)
        pad = pad_sequences(seq ,padding='pre')
        return pad
    