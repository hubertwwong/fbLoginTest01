# fbLoginTest01



## Intro

Some basic test to see how the fb social integrations work.
I just have the javascript and the jquery version working at this point.
The app needs a server so i'm using a basic sinatra app for that.
Code mostly taken from FB developer portal just to get things working.




## Random notes

So far, the mechanism seems a bit kludgy.
Seems like you are going to have 2 huge javascript files. One for FB and one for twitter.
I wonder if there is a more lightweight approach to this.
Probably want to figure out a better loading mechanism.
Seems like if FB fails for some reason, you app doesn't load.