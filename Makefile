install:
	@npm install --registry=http://r.cnpmjs.org

contributors: install
	@./node_modules/.bin/contributors -f plain -o AUTHORS
