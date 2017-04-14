var config = [];

config['dev'] = {
    mongoUrl: 'mongodb://localhost/treatsfromuk',
    mc_api_key:'512732dd48fe0b740b50bf9f5217449e-us15',
    mg_api_key:'key-f04b0e48c5a6fc439036aa284b5e15e6'

};

config['production'] = {
    mongoUrl: 'mongodb://localhost/treatsfromuk',
    mc_api_key:'512732dd48fe0b740b50bf9f5217449e-us15',
    mg_api_key:'key-f04b0e48c5a6fc439036aa284b5e15e6'
};

module.exports = config;