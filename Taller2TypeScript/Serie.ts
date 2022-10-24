export class Serie{
    name: string;
    id: number;
    chanel: string;
    seasons: number;
    description: string;
    url: string;
    image: string;
    constructor(
        id: number,
        name: string,
        channel: string,
        seasons: number,
        description: string,
        url: string,
        image: string
    ){
        this.id = id;
        this.name = name;
        this.chanel = channel;
        this.seasons = seasons;
        this.description = description;
        this.url = url;
        this.image = image;
    }
}