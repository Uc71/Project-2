# Mapping Crime and Streetlights in Cary, NC
Will Sargent, James Bryant, Ken Saville, & Scott Thomas

This project's aim is to display crimes and streetlights as superimposed, swithable layers on a map of the city of Cary, NC.

One of the maps generated will have a unique layer for each day of the week, displaying which crimes are committed on that day of the week from 1977-2021.

index.html is the html for the map displaying crimes on each day of the week. It connects to the static folder.

index-cluster.html connects to the static-cluster folder.

The crimes and streetlights folders contain the files (html, js, css) for generating the initial maps of crimes and streetlights.

app.py is the flask app to hold the data and the maps. It connects to our PostgreSQL data base.

crimes.ipynb contains the code for importing json into pandas and cleaning it up, then generatig a postgres database.

making_sqlite.ipynb converts our pandas db into an sqlite database.

We used the postgres data base for the flask app.
