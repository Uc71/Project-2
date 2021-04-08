import numpy as np
import datetime as dt
import json

import pandas as pd

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

#################################################
# Database Setup
#dialect+driver://username:password@host:port/database
#################################################
engine = create_engine("postgresql://postgres:AlbionBio1@127.0.0.1/crime_incidents")
conn = engine.connect()

session = Session(bind=engine)

crimes = pd.read_sql("select * from crimes", conn)
lights = pd.read_sql("select * from streetlights", conn)


#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
   
    return (
        f"Available Routes:<br/>"
        
        f"number on a given day: /api/v1.0/days/insert day here in all caps<br/>"

        f"number in a given year:  /api/v1.0/year_count/insert year here.  e.g. 2020<br/>"

        f"All data for a given yeas:  /api/v1.0/year_data/insert year here.  e.g. 2020"
        #return jasonify(crimes)

        # f"List of Stations: /api/v1.0/stations<br/>"
        # f"Temperature for one year: /api/v1.0/tobs<br/>"
        # f"Temperature stat from the start date(yyyy-mm-dd): /api/v1.0/yyyy-mm-dd<br/>"
        # f"Temperature stat from start to end dates(yyyy-mm-dd): /api/v1.0/yyyy-mm-dd/yyyy-mm-dd"
    )

#enter a day and get the total number of incidents reported on that day of the week
@app.route('/api/v1.0/days/<day>')
def get_day_count(day):
    
    """Return list of days ."""
    # Use Pandas to perform the sql query


    day_count = pd.read_sql_query(f"SELECT count(crimeday) FROM crimes  where crimeday = '{day}'", conn)
    day_count = day_count.to_json()

    day_count = json.loads(day_count)

#    {"count":{"0":13697}}
    
    return f"on {day}S there were a total of " + str(day_count['count']['0']) + ' crimes'
#    day_count looks like this
# {
#   "count": {
#     "0": 13697
#   }
#}
    


#enter a year and get the total number of incidents reported in that year
@app.route('/api/v1.0/year_count/<year>')
def get_year_count(year):
    
    """Return list of days ."""
    # Use Pandas to perform the sql query


    year_count = pd.read_sql_query(f"SELECT count(year) FROM crimes  where year = '{year}'", conn)
    year_count = year_count.to_json()

    year_count = json.loads(year_count)
    
    return f"In the year {year} there were a total of " + str(year_count['count']['0']) + ' crimes'

    #enter a year and get the total number of incidents reported in that year

@app.route('/api/v1.0/year_data/<year>')
def get_year_data(year):
    
    """Return list of days ."""
    # Use Pandas to perform the sql query


    year_data = pd.read_sql_query(f"SELECT * FROM crimes  where year = '{year}'", conn)
    year_data = year_data.to_json()

    #year_count = json.loads(year_count)
    
    return year_data




if __name__ == '__main__':
    app.run(debug=True)