import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { entities } from '../entitites';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {
    console.log('DIRNAME: ', __dirname);
  }

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      logging: true,
      type: 'postgres',
      host: this.getValue('POSTGRES_HOST'),
      port: parseInt(this.getValue('POSTGRES_PORT', false)) || 5432,
      username: this.getValue('POSTGRES_USER'),
      password: this.getValue('POSTGRES_PASSWORD'),
      database: this.getValue('POSTGRES_DB'),
      // Note: webpack is not compatible with static glob files: https://docs.nestjs.com/recipes/hot-reload
      // entities: ['dist/**/**.entity.js'],
      entities,
      migrations: [getMigrationDirectory()],
      synchronize: true,
      cli: {
        migrationsDir: 'src/migrations',
      },
    };
  }
}

function getMigrationDirectory() {
  const directory =
    process.env.NODE_ENV === 'migration' ? 'src' : `${__dirname}`;
  return `${directory}/migrations/**/*{.ts,.js}`;
}

const configService = new ConfigService(process.env).ensureValues([
  'POSTGRES_HOST',
  'POSTGRES_USER',
  'POSTGRES_PASSWORD',
  'POSTGRES_DB',
]);

export { configService };
