export class ProductCategoryHelper {

    constructor(
    ) { }

    getProductCategories(): any {
        return [
            {
                category_id: 'homegoods',
                category_name: 'homegoods'
            },
            {
                category_id: 'toys',
                category_name: 'toys'
            },
            {
                category_id: 'apparel',
                category_name: 'apparel'
            },
        ];
    }
}
