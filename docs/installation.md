# Installation

Copy the last installation url for your version of Kibana from [the repository releases](https://github.com/fermiumlabs/mathlion/releases/latest). The file follows the naming `mathlion-major.minor.patch.zip` where the version indicated it's the one in Kibana.

Remember that starting from Kibana 5.0 you always need an update version of every plugin for it to start as indicated [here](https://siren.solutions/in-kibana-5-all-your-plugins-will-break-at-each-and-every-update/).

```sh
#Kibana >= 5.x
./bin/kibana-plugin install  https://github.com/fermiumlabs/mathlion/releases/download/version_name/mathlion-major.minor.patch_for_kibana-major.minor.patch.zip

#Kibana 4
./bin/kibana --install mathlion -u https://github.com/fermiumlabs/mathlion/releases/download/version_name/mathlion-major.minor.patch_for_kibana-4.X.zip
```

You have to download the 4.x version for Kibana 4 and the specific version to match your Kibana version if you have Kibana >=5.x
