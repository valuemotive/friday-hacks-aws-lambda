provider "aws" {
  region     = "eu-west-1"
  access_key = "AKIAWJPMNBJ6DWTEDLQE"
  secret_key = "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"
}

resource "aws_iam_role" "lambda_exec_role" {
  name               = "lambda_exec_role"
  assume_role_policy = <<EOF
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Action": "sts:AssumeRole",
			"Principal": {
				"Service": "lambda.amazonaws.com"
			},
			"Effect": "Allow",
			"Sid": ""
		}
	]
}
EOF
}

resource "aws_lambda_function" "demo_lambda" {
  function_name = "demo_lambda"
  handler = "index.handler"
  runtime = "nodejs10.x"
  filename = "function.zip"
  source_code_hash = "${filesha256("function.zip")}"
  role = "${aws_iam_role.lambda_exec_role.arn}"
}
