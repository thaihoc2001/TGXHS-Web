export const apiPath = {
  product: {
    product: 'api/products',
    productById: 'api/products/detail',
    productByCategory: 'api/products/category',
    productByType: 'api/products/product_type',
    category: 'api/categories',
    productType: 'api/product-type',
    productDetail: 'api/product-detail'
  },
  cookie: {
    ID_KEY:'auth-token',
    USERNAME_KEY: 'username',
    Refresh_Token: 'refresh',
    CART: 'cart',
    USER: 'user'
  },
  auth: {
    login: 'api/auth/login',
    refreshToken: 'api/auth/refreshToken',
    changePassword: 'api/auth/changePassword'
  },
  order: {
    order: 'api/orders',
  }
}
