# Installation

Copy the last installation url for your version of Kibana from [the repository releases](https://github.com/fermiumlabs/mathlion/releases/latest). The file follows the naming `mathlion-major.minor.patch.zip` where the version indicated it's the one in Kibana.

Remember that starting from Kibana 5.0 you always need an update version of every plugin for it to start as indicated [here](https://siren.solutions/in-kibana-5-all-your-plugins-will-break-at-each-and-every-update/).

```sh
#kibana >5

./bin/kibana-plugin install  https://github.com/fermiumlabs/mathlion/releases/download/version_name/mathlion-major.minor.patch.zip
```
