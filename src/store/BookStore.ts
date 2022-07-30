export interface BookStore {
    books: {
        [id: string]: Book;
    };
    categories: {
        [id: string]: Category;
    };
    cars: {
        [id: string]: Car;
    };
    tracks: {
        [id: string]: Track;
    };
    selectedBookId: string | null;
    selectedCategoryId: string;
    cart: Cart;
}

export interface Book {
    name: string;
    categoryId: string;
    description: string;
    price: number;
}

export interface Car {
    name: string;
    speedRating: number;
}

export interface Track {
    name: string;
}

export interface Category {
    name: string;
}

export interface Cart {
    books: {
        bookId: string;
        quantity: number;
    }[];
    selectedBookId: string | null;
    isBuying: boolean;
}

export const sampleData: BookStore = {
    books: {
        '1': {
            name: 'Boiling Water',
            categoryId: '1',
            description:
                'A thrilling recipe book about how to perform one of the most important tasks in human history. Beautifully illustrated step by step instruction sets this book apart from all other boiling water recipe book.',
            price: 19.95,
        },
        '2': {
            name: 'Grilling: The One True Form of Cooking',
            categoryId: '1',
            description:
                'The definitive guide on grilling everything from pizza, cakes, and even a salad.',
            price: 39.95,
        },
        '3': {
            name: 'Ready Player One',
            categoryId: '2',
            description: 'A novel where a boy tries to impress a girl with his nerdiness.',
            price: 16.95,
        },
        '4': {
            name: 'Off to Be the Wizard',
            categoryId: '2',
            description: 'Another novel where a boy tries to impress a girl with his nerdiness.',
            price: 9.95,
        },
        '5': {
            name: 'A Wrinkle in Time',
            categoryId: '2',
            description: 'The Darkness Has You',
            price: 19.95,
        },
    },
    categories: {
        '1': {
            name: 'Cookbook',
        },
        '2': {
            name: 'Science Fiction',
        },
    },
    cars: {
        '1': {
            name: 'Bulldog',
            speedRating: 350,
        },
        '2': {
            name: 'RoadSlayer GT',
            speedRating: 317,
        },
        '3': {
            name: 'RoadSlayer GT',
            speedRating: 317,
        },
        '4': {
            name: 'Speedbird',
            speedRating: 357,
        },
        '5': {
            name: 'Sunrise Super',
            speedRating: 346,
        },
        '6': {
            name: 'Super Venom',
            speedRating: 364,
        },
        '7': {
            name: 'Venom',
            speedRating: 344,
        },
    },
    tracks: {
        '1': {
            name: 'Fire Rock Raceway',
        },
        '2': {
            name: 'Firwood Motocenter',
        },
    },
    selectedCategoryId: '1',
    selectedBookId: '1',
    cart: {
        books: [],
        selectedBookId: null,
        isBuying: false,
    },
};
