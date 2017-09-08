interface ExampleStore {
    items: Animal[];
    selected: string | null;
}

export interface Animal {
    name: string;
    description: string;
}

export default ExampleStore;