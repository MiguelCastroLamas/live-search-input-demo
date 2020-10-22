## DEVELOPMENT TOOLS
~~~
* OS:               Ubuntu 18.04.5 LTS
* NPM:              6.14.6
* Node:             10.22.1
* Angular CLI:      9.1.12
* Docker:           Docker version 19.03.6, build 369ce74a3c
* Docker Compose:   docker-compose version 1.21.2, build a133471
* IDE:              Visual Studio Code
~~~

## TODO
~~~
* Improve BDD testing
* Handle errors
* Block events countries are loading
~~~

## INSTALL DEPENDENCES
```sh
# Run in the project root
$ npm install
```

## RUN
```sh
# With Docker
$ npm run docker-serve-dev

# Without Docker
$ npm start

# Running in your browser on http://localhost:4200/
# See the selected country on console
```

## TEST
```sh
$ npm run test
# Running in your browser on http://localhost:9876/
```

### In case of error: "Error: ENOSPC: System limit for number of file watchers reached"
```sh
# More info -> https://stackoverflow.com/a/55763478
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

## BUILD
```sh
$ npm run build
```
