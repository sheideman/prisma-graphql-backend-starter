
# Set up PosGres SQL Database on Heroku or wherever
SERVICE heroku-postgresql
PLAN hobby-dev



$ prisma init
? Set up a new Prisma server or deploy to an existing server? Use existing database
? What kind of database do you want to deploy to? PostgreSQL
? Does your database contain existing data? No
? Enter database host heroku > database credentials > view credentials > host
? Enter database port heroku > database credentials > view credentials > port
? Enter database user heroku > database credentials > view credentials > user
? Enter database password heroku > database credentials > view credentials > password
? Enter database name heroku > database credentials > view credentials > database
? Use SSL? (Y/n) Y 
Connecting to database 534ms
? Select the programming language for the generated Prisma client Don't generate

Created 3 new files:

  prisma.yml           Prisma service definition
  datamodel.prisma    GraphQL SDL-based datamodel (foundation for database)
  docker-compose.yml   Docker configuration file

Next steps:

  1. Start your Prisma server: docker-compose up -d
  2. Deploy your Prisma service: prisma deploy
  3. Read more about Prisma server:
     http://bit.ly/prisma-server-overview

$ docker-compose up -d
Creating network "graphql-prisma_default" with the default driver
$ prisma deploy
Creating stage default for service default ✔
Deploying service `default` to stage `default` to server `local` 1.1s

Changes:

  User (Type)
  + Created type `User`
  + Created field `id` of type `GraphQLID!`
  + Created field `name` of type `String!`
  + Created field `updatedAt` of type `DateTime!`
  + Created field `createdAt` of type `DateTime!`

Applying changes 2.1s

Your Prisma GraphQL database endpoint is live:

  HTTP:  http://localhost:4466
  WS:    ws://localhost:4466
Get Prisma typeDefs with graphql-cli
create new script in package.json to fetch the prisma schema.
npm run get-schema 
git remote add origin git@github.com:sheideman/prisma-graphql-backend-starter.git
git push -u origin master

