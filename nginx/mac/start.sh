#!/bin/bash
docker build . -t cb_junior:latest && \
echo "====================**** RUNNING NGINX CONTAINER ****====================" && \
docker run --rm -p 80:80 --name cbj cb_junior:latest 