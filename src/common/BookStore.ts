export interface BookStore {
    books: {
        [id: string]: Book;
    },
    categories: {
        [id: string]: Category;
    },
    selectedBookId: string | null;
    selectedCategoryId: string;
}

export interface Book {
    name: string;
    categoryId: string;
    description: string;
}

export interface Category {
    name: string;
}

export const sampleData: BookStore = {
    books: {
        '1': {
            name: 'Boiling Water',
            categoryId: '1',
            description: 'A thrilling recipe book about how to perform one of the most important tasks in human history. Beautifully illustrated step by step instruction sets this book apart from all other boiling water recipe book.'
        },
        '2': {
            name: 'Grilling: The One True Form of Cooking',
            categoryId: '1',
            description: 'The definitive guide on grilling everything from pizza, cakes, and even a salad.'
        },
        '3': {
            name: 'Ready Player One',
            categoryId: '2',
            description: 'A novel where a boy tries to impress a girl with his nerdiness.'
        },
        '4': {
            name: 'Off to Be the Wizard',
            categoryId: '2',
            description: 'Another novel where a boy tries to impress a girl with his nerdiness.'
        },
        '5': {
            name: 'A Wrinkle in Time',
            categoryId: '2',
            description: 'The Darkness Has You'
        },
    },
    categories: {
        '1': {
            name: 'Cookbook'
        },
        '2': {
            name: 'Science Fiction'
        }
    },
    selectedCategoryId: '1',
    selectedBookId: '1',
}



