<p align="center">
    <a href="http://kitura.io/">
        <img src="https://landscape.cncf.io/logos/ibm-cloud-kcsp.svg" height="100" alt="IBM Cloud">
    </a>
</p>


<p align="center">
    <a href="https://cloud.ibm.com">
    <img src="https://img.shields.io/badge/IBM%20Cloud-powered-blue.svg" alt="IBM Cloud">
    </a>
    <img src="https://img.shields.io/badge/platform-node-lightgrey.svg?style=flat" alt="platform">
    <img src="https://img.shields.io/badge/license-Apache2-blue.svg?style=flat" alt="Apache 2">
</p>


# Create and deploy a Node.js Microservice

> We have similar applications available for [Go](https://github.com/IBM/go-microservice), [Java Spring](https://github.com/IBM/spring-microservice), [Python Flask](https://github.com/IBM/flask-microservice), and [Java Liberty](https://github.com/IBM/java-liberty-microservice).

In this sample microservice, you will create a microservice using Express in Node.js, complete with standard best practices, including a health check and application metric monitoring. A microservice is an individual component of an application that follows the **microservice architecture** - an architectural style that structures an application as a collection of loosely coupled services, which implement business capabilities. The microservice exposes a RESTful API matching a [Swagger](http://swagger.io) definition.

You can access the cloud native microservice capabilities at the following endpoints:
- The [Swagger UI](http://swagger.io/swagger-ui/) is running on: `/explorer`
- The Swagger definition is running on: `/swagger/api`
- Health endpoint: `/health`
- Application Metrics: `/appmetrics-dash`

## Steps

You can [deploy this application to IBM Cloud](https://cloud.ibm.com/developer/appservice/create-app?starterKit=82d71c98-f9be-37c5-9cd8-f41eeac245bb) or [build it locally](#building-locally) by cloning this repo first. Once your app is live, you can access the `/health` endpoint to build out your cloud native application.

### Deploying to IBM Cloud

<p align="center">
    <a href="https://cloud.ibm.com/developer/appservice/create-app?starterKit=82d71c98-f9be-37c5-9cd8-f41eeac245bb">
    <img src="https://cloud.ibm.com/devops/setup/deploy/button_x2.png" alt="Deploy to IBM Cloud">
    </a>
</p>

Use the button above to deploy this same application to IBM Cloud. This option will create a deployment pipeline, complete with a hosted Git lab project and DevOps toolchain.  You will have the option of deploying to either Cloud Foundry or a Kubernetes cluster. [IBM Cloud DevOps](https://www.ibm.com/cloud/devops) services provides toolchains as a set of tool integrations that support development, deployment, and operations tasks inside IBM Cloud. 

### Building Locally

To get started building this application locally, you can either run the application natively or use the [IBM Cloud Developer Tools](https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started) for containerization and easy deployment to IBM Cloud.

#### Native Application Development

- Install the latest [Node.js](https://nodejs.org/en/download/) 6+ LTS version.

Once the Node toolchain has been installed, you can download the project dependencies with:

```bash
npm install
```

To run your application locally:

```bash
npm run start
```

Your application will be running at `http://localhost:3000`.  You can access the `/health` and `/appmetrics-dash` endpoints at the host.

<!--#### IBM Cloud Developer Tools

Install [IBM Cloud Developer Tools](https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started) on your machine by running the following command:
```
curl -sL https://ibm.biz/idt-installer | bash
```

Your application will be compiled with Docker containers. To compile and run your app, run:

```bash
ibmcloud dev build
ibmcloud dev run
```

This will launch your application locally. When you are ready to deploy to IBM Cloud on Cloud Foundry or Kubernetes, run one of the commands below:

```bash
ibmcloud dev deploy -t buildpack
ibmcloud dev deploy -t container
```

You can build and debug your app locally with:

```bash
ibmcloud dev build --debug
ibmcloud dev debug
```-->

##### Session Store
You may see this warning when running `ibmcloud dev run`:
```
Warning: connect.session() MemoryStore is not
designed for a production environment, as it will leak
memory, and will not scale past a single process.
```
When deploying to production, it is best practice to configure sessions to be stored in an external persistence service.

## Next Steps
* Learn more about augmenting your Node.js applications on IBM Cloud with the [Node Programming Guide](https://cloud.ibm.com/docs/node?topic=nodejs-getting-started).
* Explore other [sample applications](https://cloud.ibm.com/developer/appservice/starter-kits) on IBM Cloud.

## License

This sample application is licensed under the Apache License, Version 2. Separate third-party code objects invoked within this code pattern are licensed by their respective providers pursuant to their own separate licenses. Contributions are subject to the [Developer Certificate of Origin, Version 1.1](https://developercertificate.org/) and the [Apache License, Version 2](https://www.apache.org/licenses/LICENSE-2.0.txt).

[Apache License FAQ](https://www.apache.org/foundation/license-faq.html#WhatDoesItMEAN)
