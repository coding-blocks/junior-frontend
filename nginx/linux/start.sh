#!/bin/bash
docker build . -t cb_junior:latest && \
echo "====================**** RUNNING NGINX CONTAINER ****====================" && \
docker run --rm --network host --name cbj cb_junior:latest 