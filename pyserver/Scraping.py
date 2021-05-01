import requests
from bs4 import BeautifulSoup
import tweepy
import sys
import validators
page = requests.get("https://www.dataquest.io/blog/web-scraping-tutorial-python/")
soup = BeautifulSoup(page.content, 'html.parser')
from flask import jsonify
import tweepy

API_KEY = "SifRZ47O1FRvfcSBBS4nuaPL4"
API_SECRET = "i1m3SUqvYSsq1GnSGb4g5yfnWJhZjTZAflqWxgZWeC5XcWXziv"
ACCESS_TOKEN = "1336704180879241222-Xp1RBL4PjtxMaXGa5OelkdS4SZ91UZ"
ACCESS_TOKENSECRET = "rezVwo0mhlycAnM3B4RkO0U5VezaIL0WBiDezKxBN805l"

auth = tweepy.OAuthHandler(API_KEY, API_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKENSECRET)
api = tweepy.API(auth)

soup.find_all('p')

def get_data(input_):
    try : 
        valid = validators.url(input_)
        if valid == False:
            d = ['Url is not valid', 'Url aint valid']
            input_ = None
            return d
        else:
            if valid == True:
                page = requests.get(input_)
                soup = BeautifulSoup(page.content, 'html.parser')
                content = []
                p =[]
                headers = ''
                text = ''
                content_header = soup.find_all('h1')
                content_para = soup.find_all('p')
                for header in content_header:
                    content.append(str(header.text))
                for para in content_para:
                    p.append(str(para.text))
                if len(content_header) >= 1 :
                    for i in range(0 , len(content_header)):
                        headers = headers + ' ' + str(content[i] )
                elif len(content_header) == 0 :
                    headers = soup.find('h1')
                    if headers == None:
                        headers = 'Header could not fetched'
                else:
                    headers= 'Error ' 
                    
                if len(content_para) >= 1 :
                    for i in range(0 , len(content_para)):
                        text = text + ' ' + str(p[i])
                else :
                    text = 'Error while parsing Text'
                print(text)
                d = [headers , text]
                return d
            d = ['Url is not valid', 'Url aint valid']
            return d
    except KeyError:
        d= ['Error While Scraping','Error was found while scraping']
        return d

    


def get_tweet(input_):
    try : 
        valid = validators.url(input_)
        if valid == False:
            d = ['Url is not valid', 'Url aint valid']
            input_ = None
            return d
        else:
            if valid == True:
               
                input_ = input_.split('/')[-1].split('?')[0]
                tweet = api.get_status(input_)
                content = api.get_status(input_, tweet_mode='extended')._json['full_text']
                headers = tweet.user.name
                d = [headers , content]
                return d
            d = ['Url is not valid', 'Url aint valid']
            return d
    except KeyError:
        d= ['Error While Scraping','Error was found while scraping']
        return d