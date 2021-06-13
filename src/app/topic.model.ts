export class Topic {
    id: number = 0
    name: string = "";
    description: string = "";
}

export class Topics {
    topics: Topic[] = [];
    topic: Topic = new Topic();
}