echo "cd /root/OtakuShelter.Infrastructure/src && \
ansible-playbook deploy.yml \
-e \"\
otakushelter_hosts=frontends \
otakushelter_container=otakushelter_frontend \
otakushelter_image=otakushelter/frontend \
otakushelter_port=4004 \
otakushelter_build_number=$TRAVIS_BUILD_NUMBER\" \
-i inventories/staging"