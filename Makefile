help:
	@echo 'Deploy your first AWS Lambda function                               '
	@echo '                                                                    '
	@echo 'Usage:                                                              '
	@echo '   make deps-maocs         install base deps                        '
	@echo '   make init               initialize terraform                     '
	@echo '   make build              package your function for deployment     '
	@echo '   make deploy             deploy the function to AWS               '
	@echo '   make check              check that the your function is deployed '
	@echo '   make test               test your function locally               '
	@echo '   make run                send a request to your function          '
	@echo '   make teardown           clean up AWS resources                   '
	@echo ''

deps-macos:
	brew install terraform jq awscli

init:
	terraform init

build:
	zip -r function.zip index.js

deploy:
	terraform apply

check:
	aws lambda list-functions

test:
	node index.test.js

run:
	aws lambda invoke \
		--function-name=demo_lambda \
		--invocation-type=RequestResponse \
		--payload='{ "test": "value" }' \
		--log-type=Tail \
		/dev/null | jq -r '.LogResult' | base64 --decode

teardown:
	terraform destroy

.PHONY: deps-macos init build deploy check test run teardown
