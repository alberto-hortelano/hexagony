#!/bin/bash
cd "$(dirname "$0")"
cd ../
if [ -z "$1" ]; then
	docker-compose exec hexagony bash
else
	docker-compose exec hexagony bash ./bash/npm.sh "$1"
fi
