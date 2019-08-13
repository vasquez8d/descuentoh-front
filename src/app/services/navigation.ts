import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'cloud-vision',
        title    : 'Cloud Vision',
        type     : 'group',
        children : [
            {
                id       : 'product',
                title    : 'Product',
                type     : 'item',
                icon     : 'shopping_basket',
                url      : '/product'
            },
            {
                id       : 'product-set',
                title    : 'Product Set',
                type     : 'item',
                icon     : 'view_column',
                url      : '/product-set'
            },
            {
                id       : 'similar',
                title    : 'Similar Products',
                type     : 'item',
                icon     : 'compare',
                url      : '/similar'
            }
        ]
    },
    // {
    //     id       : 'cloud-storage',
    //     title    : 'Cloud Storage',
    //     type     : 'group',
    //     children : [
    //         {
    //             id       : 'images',
    //             title    : 'Images',
    //             type     : 'item',
    //             icon     : 'image',
    //             url      : '/images'
    //         }
    //     ]
    // }
];
