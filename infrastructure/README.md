# Feature Randomizer for AWS ⚡️ [![GitHub](https://img.shields.io/github/license/bfreiberg/randomizer-for-aws?color=blue)](https://github.com/bfreiberg/randomizer-for-aws/blob/main/LICENSE.md)

## Components

⚡️ CloudFront distribution with an ACM Certificate\
⚡️ S3 bucket secured with Origin Access Identity\
⚡️ Lambda@Edge URL rewriter\
⚡️ Route53 DNS entry

To view the live website, **[click here](https://freiberg.dev/randomizer)**

<h2 align="center">
  <img src="https://github.com/bfreiberg/randomizer-for-aws/blob/main/infrastructure/Infrastructure.png" alt="Infrastructure" width="600px" />
  <br>
</h2>

---

## CloudFront 🚀

A [CloudFront](https://aws.amazon.com/cloudfront/) distribution is used to serve the website and provide HTTPS access with an ACM Certificate. Caching is optimized because the content is completely static. Invalidations are used after a deployment.

Access to the S3 bucket is restricted by an Origin Access Policy, see [option 1](https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serve-static-website/). In this case, the static website hosting option of the S3 bucket must be disabled.

## URL rewriter with Lambda@Edge 🔧

In my case, the website is served under a specific path and S3 website redirects [cannot be used](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteEndpoints.html#WebsiteRestEndpointDiff) because of the REST API endpoint due to the Origin Access Identity.

Therefore, a small [Lambda@Edge](https://aws.amazon.com/lambda/edge/) function is used to rewrite requests without a trailing `'/'` to a customizable document except for the root object.

IAM permissions are created according to [the documentation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-edge-permissions.html)

**Note**: You need to create at least one version of your Lambda@Edge functions to use it in CloudFront.

## S3 Bucket 🛠️

Because the website is served under a specific path in my case, the path pattern used in CloudFront must be adhered to in S3 as well. Access to the bucket objects is secured via the automatically created bucket policy when enabling Origin Access Identity in CloudFront.

```json
{
  "Version": "2008-10-17",
  "Id": "PolicyForCloudFrontPrivateContent",
  "Statement": [
    {
      "Sid": "1",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity <SECRET>"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::aws-service-randomizer/*"
    }
  ]
}
```

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

---

Amazon Web Services, AWS, Amazon EC2, AWS Lambda, Amazon S3 and any other AWS Marks are trademarks of Amazon.com, Inc. or its affiliates in the United States and/or other countries.

This project is not affiliated, endorsed or sponsored by AWS.
