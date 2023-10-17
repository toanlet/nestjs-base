import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();

export default {
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [join(__dirname, '/entities/*.entity{.js,.ts}')],
  migrationsTableName: 'custom_migration_table',
  migrations: [join(__dirname, 'migrations', '*{.js,.ts}')],
  logging: !!+process.env.DB_LOGGING,
  synchronize: false,
  autoLoadEntities: false,
  // cache: true,
  timezone: 'Z',
  cli: {
    migrationsDir: 'src/migrations',
  },
};
