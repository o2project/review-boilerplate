#!/bin/bash

REDPEN_URL=https://github.com/recruit-tech/redpen/releases/download

curl -OL $REDPEN_URL/redpen-$1/redpen-$1.tar.gz
tar xvf redpen-$1.tar.gz
