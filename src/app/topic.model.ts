export class Topic {
    id: string = "";
    name: string = "";
    description: string = "";
}

export class Topics {
    topics: Topic[] = [];
    topic: Topic = new Topic();
}