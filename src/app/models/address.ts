export class Address {
    streetNumber: number;
    streetName: string;
    apartment: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;

    constructor(args?) {
        if (args) {
            this.streetNumber = args.streetNumber;
            this.apartment = args.apartment;
            this.streetName = args.streetName;
            this.city = args.city;
            this.province = args.province;
            this.postalCode = args.postalCode;
            this.country = args.country;
        }
    }

}