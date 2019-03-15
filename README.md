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

## TODO

### Fix build/git structure, folder www generated and src checked in?

### Fix base layout, current table view doesn't look the same in Chrome and Firefox.

### Clean up unused css

### Requirements

### Start script:
* npm install
* start jsx-preprocessor: npx babel --watch src --out-dir www/js --presets react-app/prod  (https://reactjs.org/docs, add-react-to-a-website.html)
* start sass-preprocessor: scss - npm install -g sass, sass --watch src/sass:www/css
