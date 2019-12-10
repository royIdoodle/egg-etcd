'use strict';

const mock = require('egg-mock');

describe('test/egg-etcd.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/egg-etcd-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, etcd')
      .expect(200);
  });
});
