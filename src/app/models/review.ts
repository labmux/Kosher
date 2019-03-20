export class Review {
    author: number;
    rating: number;
    title: string;
    body: string;

    constructor(args?) {
    if (args) {
      this.author = args.author;
      this.rating = args.rating;
      this.title = args.title;
      this.body = args.body;
      this.date = args.date;
    }
  }

}
