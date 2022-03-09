export const apiPath = {
  product: {
    product: 'api/products/see/more',
    productById: 'api/products',
    productCategory: 'api/categories',
    productType: 'api/product-type',
    productByCategory: (category_id: any, count: any) => `api/products/category/${category_id}/${count}`,
    productByType: (type_id: any, count: any) => `api/products/product_type/${type_id}/${count}`,
    productByTypeAndCategory: (count: any, type_id: any, list_category: any, limit: any) => `api/products/type/category/${count}?type_id=${type_id}&listCategory=${list_category}&limit=${limit}`
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
