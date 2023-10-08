export interface ResponseData {
    data: productData;
    totalCount: number;
}

export interface productData {
    id: string;
    category_code: string;
    status: string;
    owner_product_code: string;
    product_name: string;
    price: string;
    main_image: string;
    origin: string;
    brand: string;
    model: string;
    keywords: Array<string>;
}
