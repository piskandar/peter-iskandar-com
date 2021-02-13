#!/bin/bash

set -ex

./gradlew clean build

heroku deploy:jar build/libs/website-0.0.1-SNAPSHOT.jar --app peter-iskandar-com-staging -i Procfile

