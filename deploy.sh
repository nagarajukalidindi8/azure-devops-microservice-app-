#!/bin/bash

echo "Building Docker image..."
docker build -t microservice-app .

echo "Running container..."
docker run -d -p 3000:3000 microservice-app

echo "App deployed successfully "
