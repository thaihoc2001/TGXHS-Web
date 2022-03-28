export const apiPath = {
  product: {
    product: 'api/products',
    productById: 'api/products/detail',
    productByCategory: 'api/products/categories',
    productByType: 'api/products/product_type',
    category: 'api/categories',
    productType: 'api/product-type',
    productDetail: 'api/product-detail'
  },
  token: {
    ID_KEY:'auth-token',
    USERNAME_KEY: 'username',
    Refresh_Token: 'refresh'
  },
  auth: {
    login: 'api/auth/login',
    refreshToken: 'api/auth/refreshToken',
    changePassword: 'api/auth/changePassword'
  },
}
