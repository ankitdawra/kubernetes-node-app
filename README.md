Docker image URL:

https://hub.docker.com/layers/ankitdawra/nodejs-image/latest/images/sha256-ad4a183b77a005e877af1df23644f64a37b758684e62a9b7f5fede2a55bd64b4?context=repo

<hr/>

<h2>Setup guidelines:</h2>

<h4>Step 1: Start all the containers, services with the below command</h4>

    kubectl apply -f __db_volume.yaml && kubectl apply -f __configMaps.yaml && kubectl apply -f __secrets.yaml && kubectl apply -f __db_deployment.yaml && kubectl apply -f __deployment.yaml

Note: (In case of any issues, we can delete all containers, services, configMaps etc.. by runnine below command and start afresh from step 1)
  
    kubectl delete -f __deployment.yaml && kubectl delete -f __db_deployment.yaml && kubectl delete -f __secrets.yaml&& kubectl delete -f __configMaps.yaml && kubectl delete -f __db_volume.yaml


<h4>Step 2: Database Import</h4>

    docker cp db.sql [mysql_container_id]:/db.sql (Copy the database file to db container)
    docker exec -it [mysql_container_id] /bin/bash (exec into db container)
    mysql -u root -p (login into mysql)
    ENTER PASSWORD as "password"
    source db.sql (Run db.sql file to import database)

    Note: We can find mysql_container_id from "docker ps" command

<h4>Step 3: Run the application</h4>

   Run the application on http://localhost:5000 if you are running on local or http://[IP_ADDR]:5000 where IP_ADDR is IP address where your node-js service is exposed.

If everything works well, you will see something like this:



In case of erros, you might see these screens:


