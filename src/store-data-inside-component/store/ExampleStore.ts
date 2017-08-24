interface ExampleStore {
    items: Animal[];
}

interface Animal {
    name: string;
    description: string;
}

export {Animal};
export default ExampleStore;