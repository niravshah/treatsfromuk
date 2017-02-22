var config = [];

config['dev'] = {
    mongoUrl: 'mongodb://localhost/treatsfromuk',
    mc_api_key:'512732dd48fe0b740b50bf9f5217449e-us15',
    zendesk_url:'https://treatsfromuk.zendesk.com',
    zendesk_email:'nirav@treatsfromuk.com',
    zendesk_api_key:'c3Hhw63UB1gGQg3setbyUkDyTrCQtUpSJV1FI3qP'

};

config['production'] = {
    mongoUrl: 'mongodb://localhost/treatsfromuk',
    mc_api_key:'512732dd48fe0b740b50bf9f5217449e-us15',
    zendesk_url:'https://treatsfromuk.zendesk.com',
    zendesk_email:'nirav@treatsfromuk.com',
    zendesk_api_key:'c3Hhw63UB1gGQg3setbyUkDyTrCQtUpSJV1FI3qP'

};

module.exports = config;