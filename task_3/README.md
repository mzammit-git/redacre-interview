# Usage

1. Clone this repo and navigate to the *redacre-interview* directory
   ```
   git clone git@github.com:mzammit-git/redacre-interview.git && cd redacre-interview/task_1/
   ```

2. Set up the required docker images to be used by k8s.
   > **Note:** Easiest way is to build the images with docker-compose.
   ```
   eval $(minikube docker-env)
   docker-compose build --parallel
   ```

3. Enable the ingress addon for minikube
   ``` 
   minikube addons enable ingress 
   ```
4. Create the *redacre-interview-testing* namespace to isolate the setup from any other pods you might have.
   ```
   cd ../task_3/
   minikube kubectl -- create -f namespace.yml
   ```
5. Finally deploy the application. Both the backend and frontend are replicated 3 times to showcase replication and load-balancing.
   ```
   minikube kubectl -- apply -f deployments_and_services.yml
   minikube tunnel
   ```

> You should now be able to access the node app using http://\<ip-of-your-machine\>/
