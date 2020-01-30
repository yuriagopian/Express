const env = process.env.NODE_ENV; // 'dev' or 'test'

const dev = {
    db: 'mongodb://localhost:27017/local',
};

// const hml = {
//     db: 'mongodb+srv://devuser:RyNZVCMb3Ao9Tds1@cluster0-xbhwa.mongodb.net/soubank?retryWrites=true&w=majority',
//     urlTokenGen: 'http://172.17.0.2:3001/oauth/token',
//     customerUrl: 'http://172.17.0.10:3011/customers?email=',
//     urlCustomerPatch: 'http://172.17.0.6:3010/customers'
// };

// const prod = {
//     db: 'mongodb+srv://devuser:RyNZVCMb3Ao9Tds1@cluster0-xbhwa.mongodb.net/soubank?retryWrites=true&w=majority',
//     urlTokenGen: 'http://172.17.0.2:3001/oauth/token',
//     customerUrl: 'http://172.17.0.10:3011/customers?email=',
//     urlCustomerPatch: 'http://172.17.0.6:3010/customers'
// };

const config = {
    dev,
    // hml,
    // prod
};

module.exports = config[env];