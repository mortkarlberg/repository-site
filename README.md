```
 ██▀███  ▓█████  ██████   ▒█████    ██████  ██▒████████▓ ▒█████   ██▀███ ▒██   ██▓
▓██ ▒ ██▒▓█   ▀ ▓██░  ██▒▒██▒  ██▒▒██    ▒ ▓██▒▓  ██▒ ▓▒▒██▒  ██▒▓██ ▒ ██▒▒██  ██▒
▓██ ░▄█ ▒▒███   ▓██░ ██▓▒▒██░  ██▒░ ▓██▄   ▒██▒▒ ▒██░ ▒░▒██░  ██▒▓██ ░▄█ ▒ ▒██ ██░
▒██▀▀█▄  ▒▓█  ▄ ▒██▄█▓▒ ▒▒██   ██░  ▒   ██▒░██░░ ▒██▒ ░ ▒██   ██░▒██▀▀█▄   ░ ▐██▓░
░██▓ ▒██▒░▒████▒▒██▒ ░  ░░ ████▓▒░▒██████▒▒░██░  ▒██▓ ░ ░ ████▓▒░░██▒ ▒██▒ ░ ██▒▓░
░ ▒▓ ░▒▓▓░░ ▒░ ░▒▓▒░ ░  ░░ ▒░▒░▒░ ▒ ▒▓▒ ▒ ░░▓    ▒  ▒   ░ ▒░▒░▒░ ░ ▓▒ ░▒▓░  ██▒▒▒
  ░▒ ░  ▓░  ░  ░░▒ ░       ░ ▒ ▒░ ░ ░▒  ░ ░ ▒ ░    ▒      ░ ▒ ▒░   ░▒ ░ ▒░ ██ ░▒░
  ░░     ▓  ░   ░░       ░ ░ ░ ▒  ░  ░  ░   ▒ ░  ░ ▒    ░ ░ ░ ▒    ░░   ░ ▓ ▒ ░░
   ░     ░  ░    ░           ░ ░  ░     ░   ░     ░         ░ ░     ░     ░ ░
         ░                                                    ░
```

The dev-metal band web site.

Dev release: https://repository-203818.appspot.com

## Requirements
* nodejs
* sass (https://sass-lang.com/install)

## Start script:
* npm install
* start jsx-preprocessor: npx babel --watch src/jsx --out-dir www/js --presets react-app/prod  (https://reactjs.org/docs, add-react-to-a-website.html)
* start sass-preprocessor: sass --watch src/sass:www/css
