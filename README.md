# friday-hacks-aws-lambda

! You need to have an implicit AWS user, e.g. [default] in AWS credentials file, or set one as active for you session. [Details](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html) !

## Terraform version

In `terraform` subdirectory

```
aws-lambda on  master via ⬢ v12.4.0
➜ make help
Deploy your first AWS Lambda function

Usage:
   make deps-maocs         install base deps
   make init               initialize terraform
   make build              package your function for deployment
   make deploy             deploy the function to AWS
   make check              check that the your function is deployed
   make test               test your function locally
   make run                send a request to your function
   make teardown           clean up AWS resources

```

## Serverless version

In `serverless` directory

To deploy, run

`yarn`

then

`npx serverless deploy`

To reset the cloud environment, run

`npx serverless remove`
