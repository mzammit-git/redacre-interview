# Task_1

# Task_3

## Flow diagram
![plot](./task_3/deployment.png)

## Overview
This implimentation consists of the following:
- Deployments for the frontend and backend applications, both replicated with 3 pods each.
- ClusterIP services for each deployment to load-balance between the pods.
- Ingress resource to forward traffic recieved on port 80 to port 3000 of the frontend service
- All the above recide on the *redacre-interview-testing* namespace.

>**Note:** Docker images used are the same from **task_1**.

For usage notes see [task_3](./task_3)
