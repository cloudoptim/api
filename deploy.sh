#! /bin/bash

#eval $(ssh-agent -s)
#ssh-add /home/ubuntu/build_script/auto_deploy
git clone git@github.com:qpair/api-create-master.git
cd api-create-master
docker-machine create --driver=amazonec2 --amazonec2-ami=ami-40d28157 --amazonec2-access-key=AKIAJHZNXHN7HRCSRGEQ --amazonec2-instance-type=t2.micro --amazonec2-region=us-east-1 --amazonec2-secret-key=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 --amazonec2-ssh-user=ubuntu --amazonec2-subnet-id=subnet-e31452b8 --amazonec2-vpc-id=vpc-cc59cbaa --amazonec2-zone=a api-creator
eval $(docker-machine env api-creator --shell bash)
docker-compose up --build -d
#docker build -t $3 .
#docker run $3
