#!/bin/bash

set -ex

set -ex

rm -rf src/main/resources/static/*

(cd website-ui  &&  npm install --no-package-lock  &&  ng build --prod --output-path="../src/main/resources/static")

./gradlew clean build

heroku deploy:jar build/libs/website-0.0.1-SNAPSHOT.jar --app peter-iskandar-website-prod -i Procfile

