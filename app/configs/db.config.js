module.exports = {
    HOST: '172.17.0.2',
    USER: 'postgres',
    PASSWORD: 'mysecretpassword',
    DB: 'postgres',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 1000
    }
}