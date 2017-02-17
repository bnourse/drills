require "sinatra"

get "/" do
    erb :index
end

get "/comments" do
	erb :comments
end