#!/bin/bash
# echo 'bash' && read go && cd ~/code/dkr/node/projects/open/hexagony && docker-compose exec hexagony bash
echo 'bundle' && read go && cd ~/code/dkr/node/projects/open/hexagony && docker-compose exec hexagony sh -c "cd /opt/app && npm run bundle";