Node.js Application with CI/CD Pipeline
This repository contains a Node.js application with a fully automated CI/CD pipeline. The pipeline runs tests, builds a Docker image, deploys it to a Kubernetes cluster, and sends notifications on deployment success or failure.

Approach
1. Running Tests on Pull Requests
To ensure that the code remains stable, I configured GitHub Actions to automatically run unit tests whenever a pull request (PR) is opened or updated. The main.yml file, located in the .github/workflows/ directory, defines the workflow to run the tests using the Jest testing framework.

Tests are executed with the command npm test.
Test results are shown in the GitHub Actions UI, allowing easy monitoring.
2. Building a Docker Image
Once the tests pass, the next step in the pipeline is to build a Docker image for the Node.js application. The project includes a Dockerfile that defines how to containerize the application.

Application source code is copied into the Docker image.
Dependencies are installed using npm install.
The app is set to run with the npm start command.
The Docker image is automatically built whenever changes are pushed to the repository.

3. Deploying to Kubernetes
After the Docker image is built, the pipeline deploys it to a Kubernetes cluster. The deployment configuration files (deployment.yaml and service.yaml) are used to deploy the application.

deployment.yaml defines the deployment configuration for the Node.js app, including the replica count and the image used.
service.yaml exposes the application, making it accessible externally.
The deployment to Kubernetes is fully automated in the CI/CD pipeline, ensuring continuous deployment.

4. Notifications for Deployment Success or Failure
The pipeline is configured to send notifications about the deployment status. After the deployment:

Success notifications are sent if the deployment is successful.
Failure notifications are triggered if the deployment fails, ensuring quick feedback for the team.
Technologies Used
Node.js: JavaScript runtime for building the application.
Docker: Containerization of the Node.js application into a portable image.
Kubernetes: Orchestration platform for deploying the containerized application.
GitHub Actions: Automates the CI/CD pipeline, including testing, building, and deploying.
Jest: Testing framework used to run unit tests on the Node.js app.
Running the Application Locally

1. Clone the repository:
git clone https://github.com/Devkhuman/my-node-app.git
cd my-node-app

2. Install dependencies:
npm install

3. Run the application locally:
npm start
This will start the Node.js application on your local machine.

5. Run the tests locally:
npm test
This command runs all the tests in the tests directory and ensures everything is working as expected.

Setting Up the CI/CD Pipeline

1. Build the Docker Image
To build the Docker image locally, use the following command:
docker build -t my-node-app .

3. Push the Docker Image
Once the image is built, you can push it to a Docker registry:
docker push my-node-app
Make sure you're logged into the Docker registry before pushing the image.

3. Deploy to Kubernetes
To deploy the app to Kubernetes, use the following commands:

kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
Make sure your Kubernetes cluster is properly set up and kubectl is configured to point to it.

CI/CD Pipeline Overview
The CI/CD pipeline is defined in the main.yml file located in .github/workflows/. The pipeline includes the following steps:

Checkout Code: The latest code is pulled from the repository.
Set Up Node.js: The pipeline sets up the Node.js environment.
Install Dependencies: It installs required dependencies using npm install.
Run Tests: It runs unit tests with npm test.
Build Docker Image: It builds the Docker image using the Dockerfile.
Deploy to Kubernetes: It deploys the image to Kubernetes using kubectl.
Send Notifications: It notifies the team about the success or failure of the deployment.

Conclusion
This project demonstrates a complete CI/CD pipeline for a Node.js application. The pipeline automates testing, building, and deployment, ensuring that the application is continuously integrated and deployed without manual intervention. Notifications provide transparency into the deployment process and help quickly resolve any issues.
