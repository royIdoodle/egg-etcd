# egg-egg-etcd

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-etcd.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-etcd
[travis-image]: https://img.shields.io/travis/eggjs/egg-etcd.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-etcd
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-etcd.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-etcd?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-etcd.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-etcd
[snyk-image]: https://snyk.io/test/npm/egg-etcd/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-etcd
[download-image]: https://img.shields.io/npm/dm/egg-etcd.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-etcd

<!--
Description here.
-->

## Install

```bash
$ npm i egg-etcd --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.eggEtcd = {
  enable: true,
  package: 'egg-etcd',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.eggEtcd = {
  hosts: [
    'your-etcd-cluster1.host.com',
    'your-etcd-cluster2.host.com',
    'your-etcd-cluster3.host.com',
  ],
  auth: {
    username: 'your_user_name',
    password: 'your_password',
  },
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

```javascript
// app.js

// get value
app.etcd.get('foo').string().then(value => {
  console.log('foo value is:', value);
});

// watch value
app.etcd
      .watch()
      .key('bar')
      .create()
      .then(watcher => {
        watcher.on('put', res => {
          console.log('bar value is:', res.value);
        });
      });
```

## More Info
This plugin is based on [Etcd3](https://mixer.github.io/etcd3/classes/index_.etcd3.html), you can read Etcd3 document for more info.

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
