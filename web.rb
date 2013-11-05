require 'sinatra'

class Web < Sinatra::Base
  # ... app code here ...
  get '/' do
    "Hello, world"
  end
  
  get '/fb/loginBasic' do
    #"login basic"
    erb :"fb/loginBasic/index"
  end
  
  get '/fb/loginJQuery' do
    erb :"fb/loginJQuery/index"
  end
  
  # start the server if ruby file executed directly
  run! if app_file == $0
end