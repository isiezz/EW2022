#!/bin/bash

#1) Increment version
#   npm version patch

#2) Build o projeto modo producao
#   rm -Rf dist && yarn build

#3) Build o projeto modo producao
#   ssh -v root@173.230.137.157 "cd /var/www/dev/empreendeweek;rm -Rf 2021/*"
#   scp -r build/* root@173.230.137.157:/var/www/dev/empreendeweek/2021