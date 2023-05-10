# Import the flask module. An object of this class is our WSGI application.
from flask import Flask

# The Flask constructor takes the name of the current module (__name__) as argument.
app = Flask(__name__)

# The route() function of the Flask class is a decorator,
# which tells the application which URL should call the associated function.
@app.route('/')
# ‘/’ URL is bound with welcome() function.
def welcome():
    return "Hello, World!"

# main driver function
if __name__ == '__main__':

    # run() method of Flask class runs the application
    # on the local development server.
    app.run()
