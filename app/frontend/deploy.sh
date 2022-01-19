#!/bin/bash

echo "Cleaning all directories"
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

echo "Build React frontend"
npm run build

echo "Copying fronted to server"
cp build/* ../backend/public/ -r

cd ../backend

echo "Running sever..."
npm start .
