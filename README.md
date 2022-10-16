# Redacre DevOps tasks
## Task_1
### Overview
Backend and Frontend implementation: 
- Docker files make use of multi-stage builds to minimize image size.
- Both are based on Alpine images.
- Containers run as non-root users for security purposes.
- Frontend App.js file was modified to call *backend:5000/stats* instead of *localhost:5000/stats*.
    - This was done to use a bridged docker network for inter-container communication using DNS resolutions.
    - Utilised in [task_3](./task_3) to allow API calls to be made to the service instead of the pods directly. 
    
HAProxy
- Environment variable added in [haproxy.cfg](./task_1/haproxy/haproxy.cfg). This simplifies the setting of the reverse-proxy server depending on the frontend's container's hostname.

> For usage notes see [task_1](./task_1).

## Task_2
### Overview

This task was implemented solely using ansible.

Run-through of the playbook:
1. Get the default AWS VPC ID
2. Obtain the subnet id of a random subnet configured on the VPC 
3. Create an EC2 instance private key and save it in *./task_2/aws.redacre-ec2-key.pem*
> **Note:** If a key already exists with the name *redacre-ec2-key* on AWS when running the playbook for the first time, then the new key will not be generated so that the previous key is not overwritten. In that case, copy the private key in *./task_2/aws.redacre-ec2-key.pem* so that it can be used.
4. Obtain the public IP address of the machine that is executing the playbook.
5. Create a Security Group to allow access to ports 80 and 22 from your public IP address.
6. Provision an EC2 instance with a publicly routable IP address.
7. Add the EC2 instance IP to the inventory file in *./task_2/inventory/ec2*.
8. Connect to the EC2 instance and install docker and any dependencies.
9. Copy the docker files, docker-compose.yml from [task_1](./task_1) to the EC2 instance.
9. Run the application with docker-compose.

> For usage notes see [task_2](./task_2).

## Task_3
### Flow diagram
![plot](./task_3/deployment.png)

### Overview
This implementation consists of the following:
- Deployments for the frontend and backend applications, both replicated with 3 pods each.
    - Resource limits were implemented per pod's container to avoid resource run-away in case of an unpredictable bug in code.
- ClusterIP services for each deployment to load balance between the pods.
- Ingress resource to forward traffic received on port 80 to port 3000 of the frontend service
- All the above reside on the *redacre-interview-testing* namespace.

>**Note:** Docker images used are the same as **task_1**.

> For usage notes see [task_3](./task_3).
