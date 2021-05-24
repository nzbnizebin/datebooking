import { createConnection } from 'typeorm';

export const dbProvider = {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection({
      type: 'mongodb',
      host: '127.0.0.1',  // process.env.DB_HOST,
      port:  27017, // parseInt(process.env.DB_PORT, 10),
      // username: process.env.DB_USER,
      // password: procesqs.env.DB_PW,
      database: 'date-booking', // process.env.DB_NAME,
      entities: [
        'src/entity/**/*.ts',
      ],
      synchronize: true, // DEV only, do not use on PROD!
    }),
  };
