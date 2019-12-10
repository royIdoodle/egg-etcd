'use strict';

module.exports = app => {
  const config = app.config.etcd;
  const { Etcd3 } = require('etcd3');
  app.etcd = new Etcd3(config);
};

