# Hexagony

## Features
* AssemblyScript
* TypeScript
* Universal React

## Modules
* Game: Stand alone logic to handle state and game rules
* UI: Could choose between React and Vue
* Server: Gets the server side renderer from UI


## TODO
* Scss live reload
* Webpack common parts
* Server
* React

https generate certificates:
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost:8802' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")


