export const apiPath = {
  product: {
    product: 'api/products/see/more',
    productById: 'api/products',
    productCategory: 'api/categories',
    productType: 'api/product-type',
    productByCategory: (category_id: any) => `api/products/category/${category_id}`,
    productByType: (type_id: any) => `api/products/product_type/${type_id}`
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
  }
}
