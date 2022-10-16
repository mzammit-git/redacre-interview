# Usage

1. Clone this repo and navigate to the *redacre-interview* directory
   ```
   git clone git@github.com:mzammit-git/redacre-interview.git && cd redacre-interview/task_2/
   ```
2. Modify ./vars/redacre_aws_vars.yml with your aws access key, secret key etc..
   ```
   vi ./vars/redacre_aws_vars.yml
   ```
3. Install boto3 to allow ansible to interface with aws (if not already installed).
   ```
   pip3 install boto3
   ```  
4. Run the playbook in task_2 as follows:
   ```
   ansible-playbook -i inventory/ playbook.yml
   ```
> Wait for conatiners to start. You should now be able to access the UI on http://<IP-of_instance>. 
> **Note:** The IP of the instance is returned by the ansible play itself.
