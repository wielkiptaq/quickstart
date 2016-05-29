export class InMemoryDataService {
    createDb() {
        let pages =  [
                {"name": "Home Page", "url": "/", "title": "Home Page", "text": "dsad231ff"},
                {"name": "About Us", "url": "/about-us", "title": "About Us", "text": "dsad231ff"},
                {"name": "Contact", "url": "/contect", "title": "Contact", "text": "dsad231ff"}
          ];
        return { pages };
    }
}
