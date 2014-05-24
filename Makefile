install:
	@npm install --registry=http://registry.npm.taobao.org

autod: install
	@node_modules/.bin/autod -w --prefix="~" -e example.js -k koa-rt,koa-jsonp

contributors: install
	@./node_modules/.bin/contributors -f plain -o AUTHORS
