/*
 * @Description:数据库链接
 * @Version: 1.0
 * @Author: WangDianWu
 * @Date: 2024-03-08 17:17:36
 * @LastEditors: WangDianWu
 * @LastEditTime: 2024-03-11 09:51:27
 */
import { DataSource } from 'typeorm';
import path from 'path';

console.log(__dirname);

const database = path.join(__dirname, './db/mt');
export const AppDataSource = new DataSource({
  type: 'sqlite',
  database,
  synchronize: true,
  logging: true,
  entities: ['src/**/**.entity{.ts,.js}'],
  migrations: [],
  subscribers: [],
});

AppDataSource.initialize()
  .then(async () => {
    console.log('Data Source has been initialized!');

    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = "25";
    // await AppDataSource.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export const getDataSource = (delay = 3000): Promise<DataSource> => {
  if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (AppDataSource.isInitialized) resolve(AppDataSource);
      else reject('Failed to create connection with database');
    }, delay);
  });
};
