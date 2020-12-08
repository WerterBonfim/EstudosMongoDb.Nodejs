# Estudos MongoDb com Node

Meus estudos de MongoDb, Node, Typescript e TDD. Estou fazendo esse projeto em paralelo com o .NET que se encontra no seguinte repositório: [MongoDb Com C#](https://github.com/WerterBonfim/Werter.EstudoMongoDb "Github")


Para executar o projeto siga os seguintes passos:

```sh
# clonar o repositório
git clone https://github.com/WerterBonfim/EstudosMongoDb.Nodejs.git

cd EstudosMongoDb.Nodejs

yarn
```

Para facilitar minha vida, utilizei o docker. Execute o comando a baixo para ter um container do MongoDB

```sh
# para criar o container
docker run --rm --name mongodb -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME='mongo' -e MONGO_INITDB_ROOT_PASSWORD='!123Senha' mongo

# para definir um diretório de log, use o seguinte argumento
docker run ... mongo --logpath /var/log/mongodb/mongo.log

# para conectar no container via bash
docker container exec -it mongodb /bin/bash

# para ver os utimos dados do arquivo de log
tail mongo.log

# para monitor o arquivo de log
tail -f mongo.log
```

Não é necessário definir um arquivo de log, pois é possível monitor via Docker. Porem, por questão de aprendizado eu quis monitorar os logs via Shell.

