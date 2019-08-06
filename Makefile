MAKEFLAGS += -j2

all: build

install:
	npm install && npm link @alephdata/vislib

clean:
	rm -rf node_modules

dev:
	npm start

build:
	npm run build
