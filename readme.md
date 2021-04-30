# Twitch Mining

<a href="https://github.com/VinicinhuSZ/twitch-mining/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/VinicinhuSZ/twitch-mining?color=a970ff"></a>
<a href="https://github.com/VinicinhuSZ/twitch-mining"><img alt="GitHub license" src="https://img.shields.io/github/license/VinicinhuSZ/twitch-mining?color=a970ff"></a>

## Install

Install the dependecies

```sh
$ yarn install

OR

$ npm install
```

## Usage

To run this project you have to execute :

```sh
$ yarn build

OR

$ npm run build
```

## Debug

After building the project you can run the commands below to auto compile on save.

Obs: Don't forget to reload the extension at `chrome://extensions`

```sh
$ yarn start

OR

$ npm run start
```

After the project has been built, a directory named `dist` has been created. You have to add this directory to your Chrome browser:

1. Open Chrome.
2. Navigate to `chrome://extensions`.
3. Enable _Developer mode_.
4. Click _Load unpacked_.
5. Select the `dist` directory.
