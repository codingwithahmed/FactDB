import tweepy

API_KEY = "SifRZ47O1FRvfcSBBS4nuaPL4"
API_SECRET = "i1m3SUqvYSsq1GnSGb4g5yfnWJhZjTZAflqWxgZWeC5XcWXziv"
ACCESS_TOKEN = "1336704180879241222-Xp1RBL4PjtxMaXGa5OelkdS4SZ91UZ"
ACCESS_TOKENSECRET = "rezVwo0mhlycAnM3B4RkO0U5VezaIL0WBiDezKxBN805l"

auth = tweepy.OAuthHandler(API_KEY, API_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKENSECRET)
api = tweepy.API(auth)

url = 'https://twitter.com/POTUS/status/1370224248879452162'
url = url.split('/')[-1].split('?')[0]

tweet = api.get_status(url, tweet_mode='extended')._json['full_text']
print(tweet)