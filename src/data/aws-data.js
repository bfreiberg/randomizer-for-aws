const awsData = [
  {
    name: 'Amazon S3 Object Lambda',
    text:
      'With S3 Object Lambda you can add your own code to S3 GET requests to modify and process data as it is returned to an application. For the first time, you can use custom code to modify the data returned by standard S3 GET requests to filter rows, dynamically resize images, redact confidential data, and much more.',
    urls: [
      {
        text: 'Announcement Blog Post',
        link:
          'https://aws.amazon.com/blogs/aws/introducing-amazon-s3-object-lambda-use-your-code-to-process-data-as-it-is-being-retrieved-from-s3/',
      },
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/s3/features/object-lambda/',
      },
      {
        text: 'User guide',
        link: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/transforming-objects.html',
      },
    ],
    tags: ['S3', 'Lambda', 'Storage', 'Serverless', 'New in 2021'],
  },
  {
    name: 'DynamoDB Streams',
    text:
      'DynamoDB Streams captures a time-ordered sequence of item-level modifications in any DynamoDB table and stores this information in a log for up to 24 hours. Applications can access this log and view the data items as they appeared before and after they were modified, in near-real time.',
    urls: [
      {
        text: 'Use Cases and Design Patterns Blog Post',
        link:
          'https://aws.amazon.com/blogs/database/dynamodb-streams-use-cases-and-design-patterns/',
      },
      {
        text: 'Documentation',
        link: 'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html',
      },
      {
        text: 'Amazon DynamoDB Lab',
        link: 'https://amazon-dynamodb-labs.com/design-patterns/ex8streams.html',
      },
    ],
    tags: ['Database', 'Streaming', 'Serverless', 'DynamoDB'],
  },
  {
    name: 'AWS Nitro Enclaves',
    text:
      'AWS Nitro Enclaves enables customers to create isolated compute environments to further protect and securely process highly sensitive data such as personally identifiable information (PII), healthcare, financial, and intellectual property data within their Amazon EC2 instances.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/ec2/nitro/nitro-enclaves/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html',
      },
      {
        text: 'Blog Post',
        link:
          'https://aws.amazon.com/blogs/aws/aws-nitro-enclaves-isolated-ec2-environments-to-process-confidential-data/',
      },
    ],
    tags: ['Compute', 'EC2', 'Nitro'],
  },
  {
    name: 'AWS Ground Station',
    text:
      'AWS Ground Station is a fully managed service that lets you control satellite communications, process data, and scale your operations without having to worry about building or managing your own ground station infrastructure.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/ground-station/',
      },
      {
        text: 'Open in Console',
        link: 'https://console.aws.amazon.com/groundstation/home/',
      },
      {
        text: 'User Guide',
        link:
          'https://docs.aws.amazon.com/ground-station/latest/ug/what-is-aws-ground-station.html',
      },
    ],
    tags: ['Satellite'],
  },
  {
    name: 'Amazon CodeGuru',
    text:
      'Amazon CodeGuru is a developer tool that provides intelligent recommendations to improve code quality and identify an application’s most expensive lines of code. Integrate CodeGuru into your existing software development workflow to automate code reviews during application development, continuously monitor application performance in production, provide recommendations and visual clues for improving code quality and application performance, and reduce overall cost.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/codeguru/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/welcome.html',
      },
      {
        text: 'DevOps Blog Posts',
        link:
          'https://aws.amazon.com/blogs/devops/category/artificial-intelligence/amazon-codeguru/',
      },
      {
        text: 'Developer Forum',
        link: 'https://forums.aws.amazon.com/forum.jspa?forumID=360',
      },
    ],
    tags: ['Machine Learning', 'Developer Tools', 'Guru'],
  },
  {
    name: 'AWS Systems Manager OpsCenter',
    text:
      'OpsCenter provides a central location where operations engineers and IT professionals can view, investigate, and resolve operational issues related to any AWS resource. OpsCenter aggregates and standardizes operational issues, referred to as OpsItems, while providing contextually relevant data that helps with diagnosis and remediation.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/systems-manager/features/#OpsCenter',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html',
      },
      {
        text: 'DevOps Blog Posts',
        link:
          'https://aws.amazon.com/blogs/devops/category/artificial-intelligence/amazon-codeguru/',
      },
    ],
    tags: ['DevOps', 'Operations', 'Systems Manager', 'Management'],
  },
  {
    name: 'Amazon DocumentDB',
    text:
      'Amazon DocumentDB (with MongoDB compatibility) is a fast, scalable, highly available, and fully managed document database service that supports MongoDB workloads. As a document database, Amazon DocumentDB makes it easy to store, query, and index JSON data.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/documentdb/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/documentdb/latest/developerguide/what-is.html',
      },
      {
        text: 'Top 10 Developer Guide Pages',
        link:
          'https://aws.amazon.com/blogs/database/top-10-developer-guide-pages-for-amazon-documentdb-with-mongodb-compatibility/',
      },
      {
        text: 'Open in Console',
        link: 'https://console.aws.amazon.com/docdb/',
      },
    ],
    tags: ['Database'],
  },
  {
    name: 'Amazon DevOps Guru',
    text:
      'Amazon DevOps Guru is a Machine Learning powered service that makes it easy to improve an application’s operational performance and availability. DevOps Guru detects behaviors that deviate from normal operating patterns so you can identify operational issues long before they impact your customers.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/devops-guru/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html',
      },
      {
        text: 'Workshop',
        link: 'https://aiops-using-devops-guru.workshop.aws/',
      },
      {
        text: 'Cost Estimator',
        link: 'https://console.aws.amazon.com/devops-guru/home#/cost-estimator',
      },
    ],
    tags: ['Machine Learning', 'Developer Tools', 'Guru', 'DevOps', 'New in 2021'],
  },
  {
    name: 'Amazon Personalize',
    text:
      'Amazon Personalize enables you to personalize your website, app, ads, emails, and more, using the same machine learning technology as used by Amazon.com, without requiring any prior machine learning experience. Using Amazon Personalize, you can generate personalized recommendations for your users through a simple API interface.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/personalize/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/personalize/latest/dg/what-is-personalize.html',
      },
      {
        text: 'Blog Posts',
        link:
          'https://aws.amazon.com/blogs/machine-learning/category/artificial-intelligence/amazon-personalize/',
      },
      {
        text: 'Open in Console',
        link: 'https://console.aws.amazon.com/personalize/home',
      },
    ],
    tags: ['Machine Learning', 'Low Code'],
  },
  {
    name: 'Amazon Forecast',
    text:
      'Amazon Forecast is a fully managed service that uses machine learning to deliver highly accurate forecasts. Based on the same technology used at Amazon.com, Amazon Forecast uses machine learning to combine time series data with additional variables to build forecasts. It requires no machine learning experience to get started. You only need to provide historical data, plus any additional data that you believe may impact your forecasts.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/forecast/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html',
      },
      {
        text: 'Blog Posts',
        link:
          'https://aws.amazon.com/blogs/machine-learning/category/artificial-intelligence/amazon-forecast/',
      },
      {
        text: 'Open in Console',
        link: 'https://console.aws.amazon.com/forecast/home',
      },
    ],
    tags: ['Machine Learning', 'Time Series'],
  },
  {
    name: 'CloudFront Functions',
    text:
      'CloudFront Functions is a serverless edge compute feature allowing you to run JavaScript code at the 225+ CloudFront edge locations for lightweight HTTP(s) transformations and manipulations, allowing you to deliver richer, more personalized content with low latency to your customers.',
    urls: [
      {
        text: 'Launch Blog Post',
        link:
          'https://aws.amazon.com/blogs/aws/introducing-cloudfront-functions-run-your-code-at-the-edge-with-low-latency-at-any-scale/',
      },
      {
        text: 'User Guide',
        link:
          'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-functions.html',
      },
      {
        text: 'Sample functions on GitHub',
        link: 'https://github.com/aws-samples/amazon-cloudfront-functions',
        type: 'code',
      },
      {
        text: 'FAQ',
        link: 'https://aws.amazon.com/cloudfront/faqs/#CloudFront_Functions',
      },
    ],
    tags: ['Content Delivery', 'New in 2021', 'Serverless'],
  },
  {
    name: 'AWS Cloud Development Kit',
    text:
      'The AWS CDK is an open-source software development framework to define cloud infrastructure in code and provision it through AWS CloudFormation. It offers a high-level object-oriented abstraction to define AWS resources imperatively using the power of modern programming languages.',
    urls: [
      {
        text: 'CDK v2 Developer Preview Post',
        link:
          'https://aws.amazon.com/blogs/developer/announcing-aws-cloud-development-kit-v2-developer-preview/',
      },
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/cdk/',
      },
      {
        text: 'CDK Constructs',
        link: 'https://docs.aws.amazon.com/cdk/latest/guide/constructs.html',
      },
      {
        text: 'Getting started',
        link: 'https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html',
      },
    ],
    tags: ['IaC', 'CloudFormation', 'DevOps'],
  },
  {
    name: 'AWS IoT SiteWise',
    text:
      'AWS IoT SiteWise is a managed service that makes it easy to collect, store, organize, and monitor data from industrial equipment at scale to help you make better, data-driven decisions. You can use AWS IoT SiteWise to monitor operations across facilities, quickly compute common industrial performance metrics, and create applications that analyze industrial equipment data to prevent costly equipment issues and reduce gaps in production.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/iot-sitewise/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/iot-sitewise/latest/userguide/what-is-sitewise.html',
      },
      {
        text: '2020 in Review - Blog Post',
        link: 'https://aws.amazon.com/blogs/iot/aws-iot-sitewise-2020-in-review/',
      },
    ],
    tags: ['IoT', 'Industrial'],
  },
  {
    name: 'AWS Batch',
    text:
      'AWS Batch enables developers, scientists, and engineers to easily and efficiently run hundreds of thousands of batch computing jobs on AWS. AWS Batch dynamically provisions the optimal quantity and type of compute resources based on the volume and specific resource requirements of the batch jobs submitted',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/batch/',
      },
      {
        text: 'Blog Posts',
        link: 'https://aws.amazon.com/blogs/compute/category/compute/aws-batch/',
      },
      {
        text: 'Getting Started',
        link: 'https://docs.aws.amazon.com/batch/latest/userguide/Batch_GetStarted.html',
      },
      {
        text: 'Open in Console',
        link: 'https://console.aws.amazon.com/batch/home#/wizard',
      },
    ],
    tags: ['Compute', 'EC2', 'Fargate', 'Serverless'],
  },
  {
    name: 'EC2 Image Builder',
    text:
      'EC2 Image Builder simplifies the building, testing, and deployment of Virtual Machine and container images for use on AWS or on-premises. Image Builder significantly reduces the effort of keeping images up-to-date and secure by providing a simple graphical interface, built-in automation, and AWS-provided security settings.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/image-builder/',
      },
      {
        text: 'Public Roadmap',
        link: 'https://github.com/aws/ec2-image-builder-roadmap/projects/3',
        type: 'code',
      },
      {
        text: 'User Guide',
        link:
          'https://docs.aws.amazon.com/imagebuilder/latest/userguide/what-is-image-builder.html',
      },
    ],
    tags: ['EC2', 'Fargate', 'Serverless'],
  },
  {
    name: 'AWS Glue DataBrew',
    text:
      'AWS Glue DataBrew is a visual data preparation tool that makes it easy for data analysts and data scientists to clean and normalize data to prepare it for analytics and machine learning. You can choose from over 250 pre-built transformations to automate data preparation tasks, all without the need to write any code.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/glue/features/databrew/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/databrew/latest/dg/what-is.html',
      },
      {
        text: 'User Guide',
        link:
          'https://docs.aws.amazon.com/imagebuilder/latest/userguide/what-is-image-builder.html',
      },
    ],
    tags: ['Low Code', 'Machine Learning', 'Glue'],
  },
  {
    name: 'Amazon MSK',
    text:
      'Amazon Managed Streaming for Apache Kafka is a fully managed service that makes it easy for you to build and run applications that use Apache Kafka to process streaming data. With Amazon MSK, you can use native Apache Kafka APIs to populate data lakes, stream changes to and from databases, and power machine learning and analytics applications.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/msk/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/msk/latest/developerguide/getting-started.html',
      },
      {
        text: 'Amazon MSK Master Class',
        link: 'https://learn-msk.com/',
      },
      {
        text: 'Amazon MSK Labs',
        link: 'https://amazonmsk-labs.workshop.aws/en/overview/overview.html',
      },
    ],
    tags: ['Streaming', 'Analytics'],
  },
  {
    name: 'AWS DeepRacer',
    text:
      'AWS DeepRacer is the fastest way to get rolling with reinforcement learning (RL), literally, with a fully autonomous 1/18th scale race car driven by reinforcement learning, 3D racing simulator, and a global racing league.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/deepracer/',
      },
      {
        text: 'Train your first model',
        link:
          'https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html',
      },
      {
        text: 'Workshop Lab',
        link: 'https://github.com/aws-samples/aws-deepracer-workshops',
        type: 'code',
      },
    ],
    tags: ['Machine Learning', 'Robotics'],
  },
  {
    name: 'AWS Secrets Manager',
    text:
      'AWS Secrets Manager helps you protect secrets needed to access your applications, services, and IT resources. The service enables you to easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/secrets-manager/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html',
      },
      {
        text: 'Builder Sessions',
        link: 'https://secrets-manager.awssecworkshops.com/',
      },
      {
        text: 'Blog Posts',
        link: 'https://aws.amazon.com/blogs/security/tag/aws-secrets-manager/',
      },
    ],
    tags: ['Security', 'Compliance'],
  },
  {
    name: 'AWS CodeDeploy',
    text:
      'AWS CodeDeploy is a fully managed deployment service that automates software deployments to a variety of compute services such as Amazon EC2, AWS Fargate, AWS Lambda, and your on-premises servers.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/codedeploy/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/codedeploy/latest/userguide/welcome.html',
      },
      {
        text: 'Third party integrations',
        link: 'https://aws.amazon.com/codedeploy/product-integrations/',
      },
      {
        text: 'Blog Posts',
        link: 'https://aws.amazon.com/blogs/devops/category/developer-tools/aws-codedeploy/',
      },
    ],
    tags: ['Developer Tools', 'DevOps', 'Free tier'],
  },
  {
    name: 'Amazon CloudWatch Monitoring Framework',
    text:
      'Amazon CloudWatch Monitoring Framework for Apache is a reference architecture that makes it easier for customers to set up Amazon CloudWatch dashboards to monitor Apache workloads running on AWS.',
    urls: [
      {
        text: 'AWS Solutions Library',
        link:
          'https://aws.amazon.com/solutions/implementations/amazon-cloudwatch-monitoring-framework/',
      },
      {
        text: 'Implementation Guide',
        link:
          'https://docs.aws.amazon.com/solutions/latest/amazon-cloudwatch-monitoring-framework/welcome.html',
      },
      {
        text: 'GitHub repo',
        link: 'https://github.com/awslabs/amazon-cloudwatch-monitoring-framework',
        type: 'code',
      },
    ],
    tags: ['CloudWatch', 'Solutions Implementations', 'Monitoring', 'Observability'],
  },
  {
    name: 'Moving Graphs for CloudWatch Dashboards',
    text:
      'Moving graphs allows you to animate your CloudWatch Dashboard and more easily see the progression of health and operational performance trends over time. Moving graphs allows customers to switch their dashboards into animation mode to replay operational data for a period of time.',
    urls: [
      {
        text: 'Announcement blog post',
        link:
          'https://aws.amazon.com/about-aws/whats-new/2021/04/announcing-moving-graphs-for-cloudwatch-dashboards/',
      },
      {
        text: 'User Guide',
        link:
          'https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-animated-dashboard.html',
      },
    ],
    tags: ['CloudWatch', 'New in 2021', 'Monitoring', 'Observability'],
  },
  {
    name: 'Amazon Elasticsearch Service',
    text:
      'Amazon Elasticsearch Service is a fully managed service that makes it easy for you to deploy, secure, and run Elasticsearch cost effectively at scale. You can build, monitor, and troubleshoot your applications using the tools you love, at the scale you need.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/elasticsearch-service/',
      },
      {
        text: 'Workshops',
        link: 'https://www.aesworkshops.com/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-gsg.html',
      },
    ],
    tags: ['Analytics', 'Database', 'Free tier'],
  },
  {
    name: 'AWS Systems Manager Run Command',
    text:
      'Run Command, a capability of AWS Systems Manager, lets you remotely and securely manage the configuration of your managed instances. Run Command enables you to automate common administrative tasks and perform one-time configuration changes at scale.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/systems-manager/features/#Run_Command',
      },
      {
        text: 'Hands-on tutorial',
        link:
          'https://aws.amazon.com/getting-started/hands-on/remotely-run-commands-ec2-instance-systems-manager/',
      },
      {
        text: 'User Guide',
        link:
          'https://docs.aws.amazon.com/systems-manager/latest/userguide/execute-remote-commands.html',
      },
      {
        text: 'Demo Video',
        link: 'https://www.youtube.com/watch?v=sriNozVSj0U',
        type: 'video',
      },
    ],
    tags: ['Operations', 'Systems Manager', 'Management', 'EC2'],
  },
  {
    name: 'CloudFormation support for AWS Budgets actions',
    text:
      'You can now configure budgets actions to enforce budget limits for your AWS Budgets resources in your AWS CloudFormation templates, stacks, and StackSets. With budget actions, you can define the action you want to take in your account when a budget exceeds the threshold you defined.',
    urls: [
      {
        text: 'Announcement Post',
        link:
          'https://aws.amazon.com/about-aws/whats-new/2021/04/aws-budgets-announces-cloudformation-support-for-budget-actions/',
      },
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/aws-cost-management/aws-budgets/',
      },
      {
        text: 'CloudFormation Docs',
        link:
          'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html',
      },
    ],
    tags: ['CloudFormation', 'IaC', 'New in 2021', 'Cost Management'],
  },
  {
    name: 'Instance Refresh for EC2 Auto Scaling',
    text:
      'Instance Refresh feature enables you to update the EC2 instances in your Auto Scaling groups on a rolling basis. You can use Instance Refresh checkpoints to gain more control over your phased deployments.',
    urls: [
      {
        text: 'Introduction Blog Post',
        link:
          'https://aws.amazon.com/blogs/compute/introducing-instance-refresh-for-ec2-auto-scaling/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html',
      },
      {
        text: 'Checkpoint Documentation',
        link:
          'https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-adding-checkpoints-instance-refresh.html',
      },
    ],
    tags: ['EC2', 'Auto Scaling'],
  },
  {
    name: 'IAM Access Analyzer',
    text:
      'IAM Access Analyzer enables you to validate access before deploying permissions changes. IAM Access Analyzer uses comprehensive policy analysis to provide provable security and generate findings for resource access.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/iam/features/analyze-access/',
      },
      {
        text: 'Getting Started',
        link:
          'https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html',
      },
      {
        text: 'Demo Video',
        link: 'https://www.youtube.com/watch?v=5ipJtR7uKUs',
        type: 'video',
      },
    ],
    tags: ['IAM', 'Security'],
  },
  {
    name: 'EC2 Auto Scaling Warm Pools',
    text:
      'A warm pool gives you the ability to decrease latency for your applications that have exceptionally long boot times. With warm pools, you no longer have to over-provision your Auto Scaling groups to manage latency in order to improve application performance',
    urls: [
      {
        text: 'Announcement Post',
        link:
          'https://aws.amazon.com/blogs/compute/scaling-your-applications-faster-with-ec2-auto-scaling-warm-pools/',
      },
      {
        text: 'User Guide',
        link:
          'https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html',
      },
      {
        text: 'Example Repo',
        link:
          'https://github.com/aws-samples/amazon-ec2-auto-scaling-group-examples/tree/main/features/warm-pools',
        type: 'code',
      },
    ],
    tags: ['EC2', 'Compute', 'Auto Scaling', 'New in 2021'],
  },
  {
    name: 'AWS WAF Bot Control',
    text:
      'AWS WAF Bot Control gives you visibility and control over common and pervasive bot traffic that can consume excess resources, skew metrics, cause downtime, or perform other undesired activities. You can use AWS Firewall Manager to deploy Bot Control for your web applications across multiple accounts in your AWS Organization.',
    urls: [
      {
        text: 'Announcement Post',
        link:
          'https://aws.amazon.com/blogs/aws/reduce-unwanted-traffic-on-your-web-site-with-aws-bot-control/',
      },
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/waf/features/bot-control/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/waf/latest/developerguide/waf-bot-control.html',
      },
    ],
    tags: ['Security', 'Firewall', 'Organisations', 'WAF', 'Networking', 'New in 2021'],
  },
  {
    name: 'Amazon Route 53 Resolver DNS Firewall',
    text:
      'Amazon Route 53 Resolver DNS Firewall, a managed firewall that enables customers to block DNS queries made for known malicious domains and to allow queries for trusted domains. DNS Firewall provides more granular control over the DNS querying behavior of resources within your VPCs',
    urls: [
      {
        text: 'Announcement Post',
        link:
          'https://aws.amazon.com/blogs/aws/how-to-get-started-with-amazon-route-53-resolver-dns-firewall-for-amazon-vpc/',
      },
      {
        text: 'How to',
        link:
          'https://aws.amazon.com/blogs/networking-and-content-delivery/secure-your-amazon-vpc-dns-resolution-with-amazon-route-53-resolver-dns-firewall/',
      },
      {
        text: 'User Guide',
        link:
          'https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-dns-firewall-overview.html',
      },
    ],
    tags: ['Security', 'Firewall', 'Route 53', 'Networking', 'New in 2021'],
  },
  {
    name: 'EC2 Serial Console',
    text:
      'EC2 Serial Console provides a simple and secure way to troubleshoot boot and network connectivity issues by establishing a connection to the serial port of an instance. It provides a one-click, text-based access to an instances’ serial port as though a monitor and keyboard were attached to it.',
    urls: [
      {
        text: 'Announcement Post',
        link:
          'https://aws.amazon.com/blogs/aws/troubleshoot-boot-and-networking-issues-with-new-ec2-serial-console/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-serial-console.html',
      },
    ],
    tags: ['EC2', 'Compute', 'New in 2021', 'Nitro'],
  },
  {
    name: 'AWS Systems Manager Incident Manager',
    text:
      'AWS Systems Manager Incident Manager enables faster resolution of critical application availability and performance issues. It helps you prepare for incidents with automated response plans that bring the right people and information together.',
    urls: [
      {
        text: 'Announcement Post',
        link:
          'https://aws.amazon.com/blogs/aws/resolve-it-incidents-faster-with-incident-manager-a-new-capability-of-aws-systems-manager/',
      },
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/systems-manager/features/#Incident_Manager',
      },
      {
        text: 'User Guide',
        link:
          'https://docs.aws.amazon.com/incident-manager/latest/userguide/what-is-incident-manager.html',
      },
    ],
    tags: ['Systems Manager', 'Management', 'New in 2021', 'Operations'],
  },
  {
    name: 'S3 Select',
    text:
      'With Amazon S3 Select, you can use SQL statements to filter the contents of Amazon S3 objects and retrieve just the subset of data that you need. By filtering this data, you can reduce the amount of data that S3 transfers, which reduces the cost and latency to retrieve this data.',
    urls: [
      {
        text: 'Announcement Post',
        link: 'https://aws.amazon.com/blogs/aws/s3-glacier-select/',
      },
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/s3/features/#Query_in_place',
      },
      {
        text: 'User Guide',
        link:
          'https://docs.aws.amazon.com/AmazonS3/latest/userguide/selecting-content-from-objects.html',
      },
    ],
    tags: ['S3', 'Storage'],
  },
  {
    name: 'AWS Control Tower',
    text:
      'AWS Control Tower creates an abstraction or orchestration layer that combines and integrates the capabilities of several other AWS services, including AWS Organizations, AWS Single Sign-on, and AWS Service Catalog. AWS Control Tower provides the easiest way to set up and govern a secure, compliant, multi-account AWS environment based on best practices established by working with thousands of enterprises.',
    urls: [
      {
        text: 'Announcement Post',
        link:
          'https://aws.amazon.com/blogs/aws/aws-control-tower-set-up-govern-a-multi-account-aws-environment/',
      },
      {
        text: 'Feature Page',
        link:
          'https://aws.amazon.com/controltower/?control-blogs.sort-by=item.additionalFields.createdDate&control-blogs.sort-order=desc',
      },
      {
        text: 'User Guide',
        link:
          'https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html',
      },
      {
        text: 'What is Control Tower',
        link: 'https://www.youtube.com/watch?v=daLvEb44d5Q',
        type: 'video',
      },
    ],
    tags: ['Organisations', 'Management'],
  },
  {
    name: 'Amazon Kinesis Data Firehose',
    text:
      'Amazon Kinesis Data Firehose is the easiest way to capture, transform, and load data streams into AWS data stores for near real-time analytics with existing business intelligence tools.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/kinesis/data-firehose/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/firehose/latest/dev/what-is-this-service.html',
      },
      {
        text: 'Hands-on tutorial',
        link: 'https://aws.amazon.com/getting-started/hands-on/build-log-analytics-solution/',
      },
    ],
    tags: ['Kinesis', 'Streaming', 'Serverless'],
  },
  {
    name: 'Amazon Kinesis Data Analytics',
    text:
      'Amazon Kinesis Data Analytics is the easiest way to transform and analyze streaming data in real time with Apache Flink. Amazon Kinesis Data Analytics reduces the complexity of building, managing, and integrating Apache Flink applications with other AWS services.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/kinesis/data-analytics/',
      },
      {
        text: 'Blog Posts',
        link:
          'https://aws.amazon.com/blogs/big-data/category/analytics/amazon-kinesis/kinesis-data-analytics/',
      },
      {
        text: 'Getting started',
        link: 'https://aws.amazon.com/kinesis/data-analytics/getting-started/',
      },
      {
        text: 'Workshop',
        link: 'https://streaming-analytics.workshop.aws/beam-on-kda/',
      },
    ],
    tags: ['Kinesis', 'Streaming', 'Analytics', 'Serverless'],
  },
  {
    name: 'NoSQL Workbench for Amazon DynamoDB',
    text:
      'NoSQL Workbench for Amazon DynamoDB is a cross-platform client-side GUI application for modern database development and operations and is available for Windows, macOS, and Linux. It is a unified visual IDE tool that provides data modeling, data visualization, and query development features.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/dynamodb/nosql-workbench/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/workbench.html',
      },
      {
        text: 'Virtual Workshop',
        link: 'https://www.youtube.com/watch?v=Xn12QSNa4RE',
      },
    ],
    tags: ['DynamoDB', 'Developer Tools', 'Database'],
  },
  {
    name: 'Lambda@Edge',
    text:
      "Lambda@Edge is a feature of Amazon CloudFront that lets you run code closer to users of your application, which improves performance and reduces latency. With Lambda@Edge, you don't have to provision or manage infrastructure in multiple locations around the world.",
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/lambda/edge/',
      },
      {
        text: 'Example Functions',
        link:
          'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-examples.html',
      },
      {
        text: 'User Guide',
        link:
          'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-at-the-edge.html',
      },
      {
        text: 'How to video',
        link: 'https://www.youtube.com/watch?v=_LdGsvrD9gU',
        type: 'video',
      },
    ],
    tags: ['Lambda', 'Serverless', 'Content Delivery'],
  },
  {
    name: 'Amazon Redshift Spectrum',
    text:
      'Amazon Redshift Spectrum allows you to efficiently query and retrieve structured and semistructured data from files in Amazon S3 without having to load the data into Amazon Redshift tables. Redshift Spectrum queries employ massive parallelism to execute very fast against large datasets.',
    urls: [
      {
        text: 'Blog Posts',
        link: 'https://aws.amazon.com/blogs/big-data/tag/amazon-redshift-spectrum/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/redshift/latest/dg/c-using-spectrum.html',
      },
      {
        text: 'Introductory video',
        link: 'https://www.youtube.com/watch?v=XMGqabZTqz0',
        type: 'video',
      },
    ],
    tags: ['Redshift', 'S3', 'Analytics'],
  },
  {
    name: 'Amazon Neptune',
    text:
      'Amazon Neptune is a fast, reliable, fully managed graph database service that makes it easy to build and run applications that work with highly connected datasets. Amazon Neptune is highly available, with read replicas, point-in-time recovery, continuous backup to Amazon S3, and replication across Availability Zones.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/neptune/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/neptune/latest/userguide/intro.html',
      },
      {
        text: 'Learning Path',
        link:
          'https://pages.awscloud.com/AWS-Learning-Path-Getting-Started-with-Amazon-Neptune_2020_LP_0009-DAT.html',
      },
      {
        text: 'GitHub Samples',
        link: 'https://github.com/aws-samples/amazon-neptune-samples/',
        type: 'code',
      },
    ],
    tags: ['Database'],
  },
  {
    name: 'Amazon Timestream',
    text:
      'Amazon Timestream is a fast, scalable, and serverless time series database service for IoT and operational applications that makes it easy to store and analyze trillions of events per day. Amazon Timestream has built-in time series analytics functions, helping you identify trends and patterns in your data in near real-time.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/timestream/',
      },
      {
        text: 'User Guide',
        link:
          'https://docs.aws.amazon.com/timestream/latest/developerguide/what-is-timestream.html',
      },
      {
        text: 'Blog Posts',
        link: 'https://aws.amazon.com/blogs/database/category/database/amazon-timestream/',
      },
      {
        text: 'Getting started',
        link: 'https://www.youtube.com/watch?v=8RHFPNReylI',
        type: 'video',
      },
    ],
    tags: ['Database', 'Time Series', 'Serverless'],
  },
  {
    name: 'Amazon Honeycode',
    text:
      'Amazon Honeycode is a fully managed service that allows you to quickly build powerful mobile and web apps—with no programming required. You can use a simple spreadsheet interface along with a visual application builder to create web and mobile apps for your team.',
    urls: [
      {
        text: 'Homepage',
        link: 'https://www.honeycode.aws/',
      },
      {
        text: 'Announcement Post',
        link:
          'https://aws.amazon.com/blogs/aws/introducing-amazon-honeycode-build-web-mobile-apps-without-writing-code/',
      },
      {
        text: 'What is Honeyode?',
        link: 'https://honeycodecommunity.aws/t/what-is-honeycode/106',
      },
      {
        text: 'Demo Video',
        link: 'https://www.youtube.com/watch?v=MbSrik5L3qk',
        type: 'video',
      },
    ],
    tags: ['Business Apps', 'Low Code'],
  },
  {
    name: 'Amazon Polly',
    text:
      "Amazon Polly is a service that turns text into lifelike speech, allowing you to create applications that talk, and build entirely new categories of speech-enabled products. Polly's Text-to-Speech service uses advanced deep learning technologies to synthesize natural sounding human speech.",
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/polly/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/polly/latest/dg/what-is.html',
      },
      {
        text: 'Blog Posts',
        link:
          'https://aws.amazon.com/blogs/machine-learning/category/artificial-intelligence/amazon-polly/',
      },
      {
        text: 'Building Chatbots',
        link: 'https://www.youtube.com/watch?v=PLnRzHNmcao',
        type: 'video',
      },
    ],
    tags: ['Free tier', 'Machine Learning'],
  },
  {
    name: 'AWS Global Accelerator',
    text:
      'AWS Global Accelerator is a networking service that sends your user’s traffic through Amazon Web Service’s global network infrastructure, improving your internet user performance by up to 60%. When the internet is congested, Global Accelerator’s automatic routing optimizations will help keep your packet loss, jitter, and latency consistently low.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/global-accelerator/',
      },
      {
        text: 'User Guide',
        link:
          'https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html',
      },
      {
        text: 'Workshop',
        link: 'https://intro-to-global-accelerator.workshop.aws/en/',
      },
      {
        text: 'Speed Test',
        link: 'https://speedtest.globalaccelerator.aws/#/',
      },
      {
        text: 'Demo Video',
        link: 'https://www.youtube.com/watch?v=Docl4julOQw',
        type: 'video',
      },
    ],
    tags: ['Networking', 'Content Delivery'],
  },
  {
    name: 'Amazon Detective',
    text:
      'Amazon Detective makes it easy to analyze, investigate, and quickly identify the root cause of potential security issues or suspicious activities. Amazon Detective automatically collects log data from your AWS resources and enables you to easily conduct faster and more efficient security investigations.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/detective/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/detective/latest/adminguide/what-is-detective.html',
      },
      {
        text: 'Multi-Account Scripts',
        link: 'https://github.com/aws-samples/amazon-detective-multiaccount-scripts',
        type: 'code',
      },
      {
        text: 'Overview Video',
        link: 'https://www.youtube.com/watch?v=fmm4PXhg8BY',
        type: 'video',
      },
    ],
    tags: ['Security', 'Machine Learning', 'Free tier', 'Compliance'],
  },
  {
    name: 'AWS Fargate',
    text:
      'AWS Fargate is a serverless compute engine for containers that works with both Amazon ECS and Amazon EKS. Fargate removes the need to provision and manage servers, lets you specify and pay for resources per application, and improves security through application isolation by design.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/fargate',
      },
      {
        text: 'Getting Started',
        link: 'https://aws.amazon.com/fargate/getting-started/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/AmazonECS/latest/userguide/what-is-fargate.html',
      },
      {
        text: 'Deep Dive',
        link: 'https://www.youtube.com/watch?v=Vtymod0nPBo',
        type: 'video',
      },
    ],
    tags: ['Serverless', 'Containers', 'EC2'],
  },
  {
    name: 'AWS Copilot',
    text:
      'AWS Copilot is a CLI that enables you to quickly launch and easily manage containerized applications on AWS. It provides a simple declarative set of commands, including examples and guided experiences built in to help you deploy quickly. After writing your application code, Copilot automates each step in the deployment lifecycle.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/containers/copilot/',
      },
      {
        text: 'Announcement Post',
        link: 'https://aws.amazon.com/blogs/containers/introducing-aws-copilot/',
      },
      {
        text: 'GitHub Repo',
        link: 'https://github.com/aws/copilot-cli',
        type: 'code',
      },
      {
        text: 'Tech Talk',
        link: 'https://www.youtube.com/watch?v=hrW-dLpIQto',
        type: 'video',
      },
    ],
    tags: ['Containers', 'EC2', 'Developer Tools'],
  },
  {
    name: 'Amazon WorkDocs',
    text:
      'Amazon WorkDocs is a fully managed, secure content creation, storage, and collaboration service. With Amazon WorkDocs, you can easily create, edit, and share content, and because it’s stored centrally on AWS, access it from anywhere on any device.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/workdocs/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/workdocs/latest/userguide/what_is.html',
      },
      {
        text: 'Getting Started',
        link: 'https://www.youtube.com/watch?v=haQoDdeGOBo',
        type: 'video',
      },
    ],
    tags: ['Business Apps'],
  },
  {
    name: 'Amazon Fraud Detector',
    text:
      "Amazon Fraud Detector is a fully managed service that uses machine learning and Amazon's fraud detection expertise, to identify potentially fraudulent activity so customers can catch more online fraud faster. It automates the time consuming and expensive steps to build, train, and deploy an ML model for fraud detection.",
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/fraud-detector/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/frauddetector/latest/ug/what-is-frauddetector.html',
      },
      {
        text: 'Tech Talk',
        link: 'https://www.youtube.com/watch?v=MNSq2G3V8wM',
        type: 'video',
      },
    ],
    tags: ['Machine Learning', 'Security'],
  },
  {
    name: 'Amazon MQ',
    text:
      'Amazon MQ is a managed message broker service for Apache ActiveMQ and RabbitMQ that makes it easy to set up and operate message brokers on AWS. Amazon MQ reduces your operational responsibilities by managing the provisioning, setup, and maintenance of message brokers for you.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/amazon-mq/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/welcome.html',
      },
      {
        text: 'Tutorial',
        link: 'https://aws.amazon.com/getting-started/hands-on/create-a-connected-message-broker/',
      },
      {
        text: 'Tech Talk',
        link: 'https://www.youtube.com/watch?v=IzCdl-D3-mk',
        type: 'video',
      },
    ],
    tags: ['Application Integration', 'Messaging'],
  },
  {
    name: 'Amazon AppFlow',
    text:
      'Amazon AppFlow is a fully managed integration service that enables you to securely transfer data between SaaS applications like Salesforce, Zendesk, Slack, and ServiceNow, and AWS services like Amazon S3 and Amazon Redshift, in just a few clicks.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/appflow/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/appflow/latest/userguide/what-is-appflow.html',
      },
      {
        text: 'Available Integrations',
        link: 'https://aws.amazon.com/appflow/integrations/',
      },
      {
        text: 'Tech Talk',
        link: 'https://www.youtube.com/watch?v=i_WKLhlrB-0',
        type: 'video',
      },
      {
        text: 'Samples & Demos',
        link: 'https://github.com/aws-samples/amazon-appflow',
        type: 'code',
      },
    ],
    tags: ['Application Integration', 'Business Apps'],
  },
  {
    name: 'Amazon Simple Notification Service',
    text:
      "Amazon SNS is a managed service that provides message delivery from publishers to subscribers (also known as producers and consumers). SNS's pub/sub functionality provides topics for high-throughput, push-based, many-to-many messaging between distributed systems, microservices, and event-driven serverless applications.",
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/sns/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/sns/latest/dg/welcome.html',
      },
      {
        text: 'Blog Posts',
        link:
          'https://aws.amazon.com/blogs/compute/category/messaging/amazon-simple-notification-service-sns/',
      },
    ],
    tags: ['Messaging', 'Application Integration'],
  },
  {
    name: 'Amazon CloudWatch Synthetics',
    text:
      'You can use CloudWatch Synthetics to create canaries, configurable scripts that run on a schedule, to monitor your endpoints and APIs. Canaries follow the same routes and perform the same actions as a customer, which makes it possible for you to continually verify your customer experience even with no traffic.',
    urls: [
      {
        text: 'User Guide',
        link:
          'https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html',
      },
      {
        text: 'Demo Video',
        link: 'https://www.youtube.com/watch?v=MItluIsvfTo',
        type: 'video',
      },
      {
        text: 'Workshop',
        link: 'https://observability.workshop.aws/en/synthetics.html',
      },
      {
        text: 'How-to Blog Post',
        link:
          'https://aws.amazon.com/blogs/aws/new-use-cloudwatch-synthetics-to-monitor-sites-api-endpoints-web-workflows-and-more/',
      },
    ],
    tags: ['CloudWatch', 'Monitoring', 'Observability'],
  },
  {
    name: 'SageMaker Automatic Model Tuning',
    text:
      'Amazon SageMaker Automatic Model Tuning, also known as hyperparameter tuning, finds the best version of a model by running many training jobs on your dataset using the algorithm and ranges of hyperparameters that you specify.',
    urls: [
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning.html',
      },
      {
        text: 'Demo Video',
        link: 'https://www.youtube.com/watch?v=xpZFNIOaQns',
        type: 'video',
      },
      {
        text: 'Sample Jobs',
        link: 'https://github.com/aws/amazon-sagemaker-examples#sagemaker-automatic-model-tuning',
        type: 'code',
      },
    ],
    tags: ['SageMaker', 'Machine Learning'],
  },
  {
    name: 'SageMaker Data Wrangler',
    text:
      'With Amazon SageMaker Data Wrangler, you can simplify the process of data preparation and feature engineering, and complete each step of the data preparation workflow, including data selection, cleansing, exploration, and visualization from a single visual interface.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/sagemaker/data-wrangler/',
      },
      {
        text: 'Announcement Post',
        link:
          'https://aws.amazon.com/blogs/aws/introducing-amazon-sagemaker-data-wrangler-a-visual-interface-to-prepare-data-for-machine-learning/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/sagemaker/latest/dg/data-wrangler-getting-started.html',
      },
      {
        text: 'Tutorial',
        link: 'https://www.youtube.com/watch?v=_bsat_2N8LI',
        type: 'video',
      },
    ],
    tags: ['SageMaker', 'Machine Learning'],
  },
  {
    name: 'SageMaker Ground Truth',
    text:
      'Amazon SageMaker Ground Truth makes it easy for you to efficiently and accurately label the datasets required for training machine learning systems. SageMaker Ground Truth can automatically label a portion of the dataset based on the labels done manually by human labelers.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/de/sagemaker/groundtruth/',
      },
      {
        text: 'Getting Started',
        link: 'https://www.youtube.com/watch?v=_FPI6KjDlCI',
        type: 'video',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/sagemaker/latest/dg/sms.html',
      },
      {
        text: 'Code Examples',
        link:
          'https://github.com/aws/amazon-sagemaker-examples#introduction-to-ground-truth-labeling-jobs',
        type: 'code',
      },
    ],
    tags: ['SageMaker', 'Machine Learning'],
  },
  {
    name: 'AWS Proton',
    text:
      'AWS Proton enables platform teams to connect and coordinate all the different tools your development teams need for infrastructure provisioning, code deployments, monitoring, and updates.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/proton/',
      },
      {
        text: 'Getting Started',
        link: 'https://www.youtube.com/watch?v=3wno4h_d4Is',
        type: 'video',
      },
      {
        text: 'Admin Guide',
        link: 'https://docs.aws.amazon.com/proton/latest/adminguide/Welcome.html',
      },
      {
        text: 'Template Library',
        link: 'https://github.com/aws-samples/aws-proton-sample-templates',
        type: 'code',
      },
    ],
    tags: ['Serverless', 'Containers', 'New in 2021'],
  },
  {
    name: 'Amazon Location Service',
    text:
      'Amazon Location Service (in Preview) is a fully managed service that makes it easy for developers to add location data, such as maps, points of interest, and geocoding to applications, without sacrificing data security, user privacy, data quality, or cost.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/location/',
      },
      {
        text: 'Getting Started',
        link: 'https://aws.amazon.com/blogs/mobile/getting-started-with-amazon-location/',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/location/latest/developerguide/what-is.html',
      },
      {
        text: 'Tech Talk',
        link: 'https://www.youtube.com/watch?v=EP_95Bkbce8',
        type: 'video',
      },
      {
        text: 'App Tutorial',
        link: 'https://www.youtube.com/watch?v=dTzrjuz7qAA',
        type: 'video',
      },
    ],
    tags: ['Developer Tools', 'New in 2021'],
  },
  {
    name: 'AWS Systems Manager Change Calendar',
    text:
      'Change Calendar, a capability of AWS Systems Manager, lets you set up date and time ranges when actions you specify, for example in Systems Manager Automation runbooks, may or may not be performed in your AWS account.',
    urls: [
      {
        text: 'Announcement Post',
        link:
          'https://aws.amazon.com/blogs/mt/using-aws-systems-manager-change-calendar-to-prevent-changes-during-critical-events/',
      },
      {
        text: 'User Guide',
        link:
          'https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar.html',
      },
      {
        text: 'Hands-on Lab',
        link: 'https://workshop.aws-management.tools/ssm/capability_hands-on_labs/changecalendar/',
      },
    ],
    tags: ['DevOps', 'Operations', 'Systems Manager', 'Management'],
  },
  {
    name: 'Cross-account Glue Data Catalog Access',
    text:
      'Amazon Athena can now query databases and tables across AWS accounts through built-in support for AWS Glue Data Catalogs in other AWS accounts. Native support for cross-account AWS Glue Data Catalogs with Amazon Athena makes it easier for you to have a central data catalog.',
    urls: [
      {
        text: 'Announcement Post',
        link:
          'https://aws.amazon.com/about-aws/whats-new/2021/05/amazon-athena-adds-built-in-support-for-cross-account-aws-glue-data-catalogs/',
      },
      {
        text: 'How To',
        link: 'https://docs.aws.amazon.com/athena/latest/ug/data-sources-glue-cross-account.html',
      },
      {
        text: 'Integration Docs',
        link: 'https://docs.aws.amazon.com/athena/latest/ug/glue-athena.html',
      },
    ],
    tags: ['Analytics', 'Organizations', 'New in 2021'],
  },
  {
    name: 'AQUA for Redshift',
    text:
      'AQUA is a high-speed cache on top of Redshift Managed Storage that can scale out and process data in parallel across many AQUA nodes. AQUA uses AWS designed analytics processors that dramatically accelerate data compression, encryption, and data processing on queries that scan, filter, and aggregate large data sets.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/redshift/features/aqua/',
      },
      {
        text: 'Announcement Post',
        link:
          'https://aws.amazon.com/blogs/aws/new-aqua-advanced-query-accelerator-for-amazon-redshift/',
      },
      {
        text: 'Introduction Video',
        link: 'https://www.youtube.com/watch?v=0LVyd-kqpdE',
        type: 'video',
      },
      {
        text: 'Documentation',
        link: 'https://docs.aws.amazon.com/redshift/latest/mgmt/managing-cluster-aqua.html',
      },
    ],
    tags: ['Redshift', 'Analytics', 'New in 2021'],
  },
  {
    name: 'Distributed Load Testing on AWS',
    text:
      'Distributed Load Testing on AWS helps you easily simulate thousands of users connecting to your application so that you can better understand your application performance under load. It uses containers on AWS Fargate to generate a specified number of transactions per second without having to provision servers.',
    urls: [
      {
        text: 'Solutions Page',
        link: 'https://aws.amazon.com/solutions/implementations/distributed-load-testing-on-aws/',
      },
      {
        text: 'Implementation Guide',
        link:
          'https://docs.aws.amazon.com/solutions/latest/distributed-load-testing-on-aws/welcome.html',
      },
      {
        text: 'Introduction Video',
        link: 'https://www.youtube.com/watch?v=Uv7I75pLmb4',
        type: 'video',
      },
    ],
    tags: ['Solutions Implementations', 'Serverless', 'DevOps'],
  },
  {
    name: 'AWS Lake Formation',
    text:
      'AWS Lake Formation is a service that makes it easy to set up a secure data lake in days. Lake Formation is an integrated data lake service that makes it easy for you to ingest, clean, catalog, transform, and secure your data and make it available for analysis and machine learning.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/lake-formation/',
      },
      {
        text: 'Getting Started',
        link: 'https://docs.aws.amazon.com/lake-formation/latest/dg/getting-started.html',
      },
      {
        text: 'User Guide',
        link: 'https://docs.aws.amazon.com/lake-formation/latest/dg/what-is-lake-formation.html',
      },
      {
        text: 'Deep Dive',
        link: 'https://www.youtube.com/watch?v=Aj5T5fcZZr0',
        type: 'video',
      },
      {
        text: 'Blog Posts',
        link: 'https://aws.amazon.com/blogs/big-data/category/analytics/aws-lake-formation/',
      },
    ],
    tags: ['S3', 'Analytics', 'Storage'],
  },
  {
    name: 'Machine Downtime Monitor on AWS',
    text:
      'Machine Downtime Monitor on AWS is a new solution that provides a dashboard to industrial customers to help them monitor the health of factory floor equipment, which enables easier identification of machine breakdowns and quicker response, improving asset availability.',
    urls: [
      {
        text: 'Solutions Page',
        link: 'https://aws.amazon.com/solutions/implementations/machine-downtime-monitor-on-aws/',
      },
      {
        text: 'Implementation Guide',
        link:
          'https://docs.aws.amazon.com/solutions/latest/machine-downtime-monitor-on-aws/welcome.html',
      },
    ],
    tags: ['Solutions Implementations', 'Monitoring', 'Observability', 'Industrial'],
  },
  {
    name: 'Amazon QuickSight Q',
    text:
      'Quicksight Q is a machine learning-powered natural language capability that empowers business users to ask questions about all of their data using everyday business language and get answers in seconds.',
    urls: [
      {
        text: 'Feature Page',
        link: 'https://aws.amazon.com/quicksight/q/',
      },
      {
        text: 'Announcement Post',
        link:
          'https://aws.amazon.com/blogs/aws/amazon-quicksight-q-to-answer-ad-hoc-business-questions/',
      },
      {
        text: 'Q in 5 Minutes',
        link: 'https://www.youtube.com/watch?v=0IBAS2GiWwo',
        type: 'video',
      },
      {
        text: 'Demo Video',
        link: 'https://www.youtube.com/watch?v=0dQqhzujpek',
        type: 'video',
      },
    ],
    tags: ['Business Intelligence', 'Analytics'],
  },
];

export default awsData;
