import { ConnectionOptions } from 'typeorm';
 
const config: ConnectionOptions = {
    type: process.env.TYPEORM_CONNECTION as 'postgres' || 'postgres',
    host: process.env.TYPEORM_HOST  || 'localhost',
    port: +process.env.TYPEORM_PORT || 5432,
    username: process.env.TYPEORM_USERNAME || 'postgres',
    password: process.env.TYPEORM_PASSWORD || 'postgres',
    database: process.env.TYPEORM_DATABASE || 'postgres'
  };
 
export = config;