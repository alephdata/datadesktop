MAKEFLAGS += -j2

install:
	npm install && npm link @alephdata/vislib

clean:
	rm -rf node_modules dist build

dev:
	npm run start-renderer-dev & npm run start-app-dev

build:
	npm run build

release:
	npm version patch
	npm run release
