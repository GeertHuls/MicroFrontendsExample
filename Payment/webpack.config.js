const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = withModuleFederationPlugin({
name: 'payment',
exposes: {
'./Module': './payment/src/app/payment/payment.module.ts',
},
shared: {
...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
},

});
