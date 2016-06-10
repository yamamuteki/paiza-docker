# Usage

```sh
docker run -v /c/Users/yamazaki/code/docker/paiza-docker/coderunner:/coderunner -v /usr/local/bin/docker:/usr/local/bin/docker -v /usr/bin/docker:/usr/bin/docker -v /var/run/docker.sock:/var/run/docker.sock -w /coderunner -p 3000:3000 --rm -i -t node /bin/bash

npm install --no-bin-links

node app.js
```
