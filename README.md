# Friday Hacks - AWS Lambda

## About

Valuemotive has a culture of sharing interesting ideas. Our employees are curious, which leads to ad hoc exchanges. Folks will test the validity of their ideas, ask for feedback on complicated things and discuss their work with others.

We've previously had several _Techtogethers_; group events that follow a pattern. Someone introduces a piece of tech and we'll discuss it, maybe even try it out. We recognised an opportunity to have a more informal type of event for open-ended learning and Friday Hacks was born. Our first event’s topic was the AWS Lambda service.

Many of us at Valuemotive have used AWS Lambda by proxy. Larger AWS-based systems often have some endpoints running, but folks might not have a chance to deploy one themselves. We made sure to have at least one experienced Lambda user present at the event.

### Lambda in short

You can ignore most of the infrastructure behind your application with AWS Lambda. "Functions" are invoked, they exit and that's it. You only have to specify the input and output. Depending on demand, there might be a single function running, or hundreds. Number of common concerns do not apply when Lamda scales automatically and promotes stateless logic.

## What we learned

You have to figure out where data comes from and where it is stored in. You can match AWS Lambda with AWS-specific storage like S3 and DynamoDB, or have a Lambda execute some SQL on RDS. The "serverless" terms that is often used with Lambda really just means that you don't need a dedicated server for your app. You'll have short-lived VMs instead.

AWS Lambda does have some limitations. The functions have a limited amount memory and you have to think about the startup speed of a Lambda instance. Some interpreted languages and runtimes are naturally easier to work with in this setting. A NodeJS handler will be interpreted quickly and will run at reasonable speed. Getting a Java handler running is slower because of the need to have a (J)VM ready before app logic is executed. Another concern is the lifecycle of a handler. You will eventually hear about the hot vs. cold start problem. If a handler is called often enough, it's "hot" and will respond quickly. If the VM behind the handler has been terminated (due to inactivity), it takes a moment to get it back up.

Our Lambda expert summarised his experiences with AWS Lambda.

_Biggest challenges:_

- Inherit AWS resource limits (e.g. max amount of S3 buckets per account) will indirectly affect Lambdas
- IAM roles are hard to get right (as always 😩)
- Sharing code between handlers is not that easy

_Positive impressions:_

- Big hype from customer, they dig it
- “Everything is a Lambda” culture keeps things simple (devs can focus on the application logic itself)
- Serverless brings a clear productivity boost to (back-end) development

_Testing:_

- Unit tests for handlers
- Integrations test for Lambda chains

## What we tried

### Low level deploy via Terraform

We tried a low level approach first. We packaged a test handler up and deployed it into AWS with Terraform. Being familiar with Terraform wasn’t required, since the minimal configuration for a Lambda deployment is simple. The bare minimum is to specify a role that the function has, a zip file that contains the function(s) and a name for the deployment.

Things worked pretty well, and we quickly had a Lambda handler running. The handler wasn't connected to any other service, nor exposed to the outside world. We could verify that the handler did what was expected by using the `aws-cli` to invoke it. Quite a manual effort overall.

### High level deploy via Serverless

Serverless framework takes care of zipping up the files, getting a DNS name for a function and calling `aws-cli` in the right way (amongst other things). Your handlers can invoke each other and they can be deployed to numerous cloud providers. They can also be tested locally.

We went a bit further by adding multiple instances of the same handler with different configuration. We added a dependency to prove that it doesn't really make things any harder. After running the deployment accessed the endpoint using a DNS name. Neat! We had some bugs with e.g. the NodeJS version used, but could fix them and get our function deployed again. It didn't take a very long time to see the value that Serverless provides over manual deployments.

## Usage

⚠ You need to have an implicit AWS user, e.g. `[default]` in AWS credentials file, or set one as active for you session. [Details](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)

### Terraform version

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

### Serverless version

In `serverless` directory

To deploy, run

`yarn`

then

`npx serverless deploy`

To reset the cloud environment, run

`npx serverless remove`
