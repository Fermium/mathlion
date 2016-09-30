#!/bin/bash
set -e

./kibana/bin/kibana-plugin install $(./transfer upload target/mathlion-${KIBANA_VERSION}.zip)
nohup bash -c "./kibana/bin/kibana --no-ssl>&1 &"
sleep 120
cat nohup.out
! grep -Fxq "error" nohup.out
! grep -Fxq "Skipping non-plugin directory" nohup.out
