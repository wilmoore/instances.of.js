test:
	node_modules/.bin/mocha --recursive $(MOCHAFLAGS)

test-help:
	@git web--browse http://chaijs.com/api/
	@git web--browse http://visionmedia.github.com/mocha/#mocha.opts

.PHONY: test
