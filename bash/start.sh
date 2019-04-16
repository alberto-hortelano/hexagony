#!/bin/bash
set -e
cd "$(dirname "$0")"
cd ../
terminator=false
gnome-terminal -e 'sh -c "docker-compose up"'
function handle_event() {
    local entry="$1"
    local action=$(echo $entry | jq -r '.action')
    local service=$(echo $entry | jq -r '.service')
    if [ "$service" == "hexagony" ] && [ "$action" == "start" ]; then
		if [ "$terminator" = true ]; then
        	terminator -m -b -l hex
		else
			gnome-terminal -e 'sh -c "./bash/run.sh build:all"'
			gnome-terminal -e 'sh -c "./bash/run.sh bundle"'
			sleep 3 && gnome-terminal -e 'sh -c "./bash/run.sh start"'
		fi
		echo "done"
    fi
}
docker-compose events --json | (
    while read event; do
        done=$(handle_event "$event")
		if [ "$done" == "done" ]; then
			exit
		fi
    done
)
