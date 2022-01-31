#!/bin/bash

echo "Deploy stage: cleaning all directories"
if [[ -d build ]]
then
    rm build -rf
fi

if [[ -d ../backend/public ]]
then
    rm ../backend/public/* -rf
else
    mkdir ../backend/public
fi

echo "Deploy stage: build React frontend"
npm run build

echo "Deploy stage: copying fronted to server"
cp build/* ../backend/public/ -r
rm ../backend/public/products

cd ../backend

echo "Deploy stage: configure server"

echo "{\"server_port\":8000}" > server_settings.json

echo "Running sever..."
npm start .
