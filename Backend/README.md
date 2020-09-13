# FEEDFERCH BACKEND SETUP

## 1. Software Installation

Download and install node js https://nodejs.org/en/

## 2. Dependency Installation

bash
# install dependencies
npm install

## 3. Sequelize Installation

npm install sequelize 
npm install --save sequelize-cli
npm install --save pg pg-hstore



## 4. Table Creation & Model and Migration

npx sequelize-cli init

1. `User Table` : `node_modules\.bin\sequelize model:generate --name User --attributes first_name:string,last_name:string,email:string,password:string,status:string`

2. `Post Table` : `node_modules\.bin\sequelize model:generate --name Post --attributes user_id:integer,post_comment:string,status:string`

3. `User Folowers Table` : `node_modules\.bin\sequelize model:generate --name UserFollowers --attributes user_id:integer,follower_id:integer,status:string`



## Seeders file creation:
 1. `Seeders file creation`: `sequelize seed:generate --name User`
 2. `Seeders file creation`: `sequelize seed:generate --name Post`
 3. `Seeders file creation`: `sequelize seed:generate --name UserFollowers`

## 5. Database creation
1. `Database Create` : `node_modules\.bin\sequelize db:create`
2. `Migrate Database` : `node_modules\.bin\sequelize db:migrate`
3. `Load Sample Data` : `node_modules\.bin\sequelize db:seed:all`


## 6. Run the Application locally

bash
# run the app
npm start 
