require 'sinatra'

class Web < Sinatra::Base
  # ... app code here ...
  get '/' do
    "Hello, world"
  end
  
  # start the server if ruby file executed directly
  run! if app_file == $0
end