#!/bin/bash
set -e

echo "installing timelion"
./kibana/bin/kibana plugin --install elastic/timelion

echo "installing the plugin"
./kibana/bin/kibana plugin --install mathlion -u $(./transfer upload target/mathlion-*.zip)

echo "starting kibana in the background"
nohup bash -c "./kibana/bin/kibana>&1 &"

echo "Waiting for 120 seconds..."
sleep 120

echo "Kibana log:"
cat nohup.out

echo "testing for errors..."
if grep --ignore-case -q "error" nohup.out; then
    echo "error!" && exit 1 
fi

if grep -q "Skipping non-plugin directory" nohup.out; then
    echo "error!" && exit 1 
fi

echo "No errors found"
