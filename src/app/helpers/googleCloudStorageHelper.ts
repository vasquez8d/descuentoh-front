export class GoogleCloudStorageHelper {

    constructor(
    ) { }

    getImageUrl(uri): any {
        const bucketName = uri.split('/')[2];
        const fileName = uri.split('/')[3];
        return 'https://storage.googleapis.com/' + bucketName + '/' + fileName;
    }

    getImageUrlSearch(bucketName, fileName): string {
        return 'https://storage.googleapis.com/' + bucketName + '/' + fileName;
    }
}
