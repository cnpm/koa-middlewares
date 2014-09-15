install:
	@npm install --registry=http://registry.npm.taobao.org --save-dev autod

autod: install
	@node_modules/.bin/autod -w --prefix="~" -e example.js -k bluebird

contributors: install
	@./node_modules/.bin/contributors -f plain -o AUTHORS
