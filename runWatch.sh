#!/bin/bash
echo 'watch' && read go && cd ~/code/dkr/node/projects/open/hexagony && docker-compose exec hexagony sh -c "cd /opt/app && npm run build:all";
