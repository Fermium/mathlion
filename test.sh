#!/bin/bash
set -e

printf "\n\n uploading the plugin\n"
TRANSFER_URL=$(./transfer upload target/mathlion-*-${ELASTIC_VERSION}.zip)

printf "\n\ninstalling the plugin\n"
./kibana/bin/kibana-plugin install $TRANSFER_URL

printf "\n\nstarting kibana in the background\n"
nohup bash -c "./kibana/bin/kibana --no-ssl >&1 &"

printf "\n\nWaiting for 120 seconds...\n"
sleep 120

printf "\n\nKibana log:\n"
cat nohup.out

printf "\n\ntesting for errors...\n"
if grep --ignore-case -q "error" nohup.out; then
    printf "\nerror!\n" && exit 1 
fi

if grep -q "Skipping non-plugin directory" nohup.out; then
    printf "\nerror!\n" && exit 1 
fi

printf "No errors found\n"
printf "Download tested zip file at:\n"
printf "$TRANSFER_URL"
