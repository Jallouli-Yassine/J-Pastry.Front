export class Product {

    name!: string;
    description!: string;
    pricePerUnit!: number;
    unit!: string; // 'kg', 'piece', 'liter', 'pack'
    category!: string; // Category ID
    quantity?: number;
    imageUrl!: string;
    createdAt!: string;


}
