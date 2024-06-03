import { DataSource } from 'typeorm';
import CONNECTION from './db.connection';

//@ts-ignore
const AppDataSource = new DataSource({
  ...CONNECTION,
  entities: ['*/**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('work');
  })
  .catch((err) => {
    console.log(err);
  });

export default AppDataSource;
