interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }

type ShoppingItem = Pick<Product, "id" | "name" | "price">;

// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

type UpdateProduct = Partial<Product>;

// 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// 방법1
interface UserProfileUpdate1 {
  username?: string;
  email?: string;
  profilePhotoUrl?: string;
}

// 방법2
type UserProfileUpdate2 = {
  username?: UserProfile["username"];
  email?: UserProfile["email"];
  profilePhotoUrl?: UserProfile["profilePhotoUrl"];
};

// 방법3
type UserProfileUpdate3 = {
  [p in "username" | "email" | "profilePhotoUrl"]?: UserProfile[p];
};

// 방법4
type UserProfileUpdate4 = {
  [p in keyof UserProfile]?: UserProfile[p];
};

// 방법5
type Subset<T> = {
  [p in keyof T]?: T[p];
};
