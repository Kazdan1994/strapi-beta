module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/wallets',
      handler: 'wallet.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/wallets/:id',
      handler: 'wallet.findOne',
      config: {
        policies: [],
      },
    },
    {
      method: 'POST',
      path: '/wallets',
      handler: 'wallet.create',
      config: {
        policies: [],
      },
    },
    {
      method: 'PUT',
      path: '/wallets/:id',
      handler: 'wallet.update',
      config: {
        policies: [],
      },
    },
    {
      method: 'DELETE',
      path: '/wallets/:id',
      handler: 'wallet.delete',
      config: {
        policies: [],
      },
    },
  ],
};
