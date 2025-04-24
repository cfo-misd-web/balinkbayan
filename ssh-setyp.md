ssh into your ec2 instance

```bash
#ssh script
ssh -i "key" ubuntu@your-ec2-instance-public-ip

#replace "key" with your actual key usually a .pem file

#move to file directory
cd /YOUR-LOCAL-PROJECT-REPO

#build with docker compose

docker-compose up --build -d

#this will build the webapp and run the reverse proxy in one setup

#bring down the site with
docker-compose down
```

some optional scripts for cleaning up docker images, volumes files

```bash
# remove unused containers
docker container prune -f

# remove unused images
docker image prune -a -f

# remove unused volumes
docker volume prune -f

# remove all unused Docker objects (containers, networks, images, volumes)
docker system prune -a -f
```

check system resources(ram, cpu, swap memory usage)

```bash
htop
```

check running containers with

```bash
docker ps
```
