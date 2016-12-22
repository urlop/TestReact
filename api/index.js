const http = require('http')
const bole = require('bole')
const pretty = require('bistre')()
const fake = require('fake-json-stream')
const serverRouter = require('server-router')
const from = require('from2-string')

bole.output({
  level: 'info',
  stream: pretty
})

const log = bole('server')
pretty.pipe(process.stdout)

const router = serverRouter({default: '/404'}, [
  ['/404', (req, res) => from('404: not found')],
  ['/users', (req, res) => fake(10)],
  ['/users/:count', (req, res, params) => {
    return fake(Number(params.count) || 10)
  }]
])

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  log.info(req)
  router(req, res).pipe(res)
}).listen(8080, () => {
  log.info('Listening at http://localhost:8080')
})
