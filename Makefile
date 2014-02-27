install:
	@npm install --registry=http://r.cnpmjs.org

autod: install
	@./node_modules/.bin/autod -w -e example.js

contributors: install
	@./node_modules/.bin/contributors -f plain -o AUTHORS
