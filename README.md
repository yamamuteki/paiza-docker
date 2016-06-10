# paiza-docker

## Links

Docker実戦活用ガイド  
吉岡 恒夫  
固定リンク: [http://www.amazon.co.jp/dp/4839959234](http://www.amazon.co.jp/dp/4839959234)

## Usage

```sh
docker build -t ubuntu-dev image-ubuntu-dev

cd coderunner

docker run -v $HOME/code/docker/paiza-docker/coderunner:/coderunner -v /usr/local/bin/docker:/usr/local/bin/docker -v /usr/bin/docker:/usr/bin/docker -v /var/run/docker.sock:/var/run/docker.sock -w /coderunner -p 3000:3000 --rm -i -t node /bin/bash

npm install --no-bin-links

node app.js
```
