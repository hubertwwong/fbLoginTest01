require 'sinatra'

class Web < Sinatra::Base
  # ... app code here ...
  get '/' do
    "Hello, world"
  end
  
  get '/fb' do
    erb :"fb/index"
  end
  
  # start the server if ruby file executed directly
  run! if app_file == $0
end