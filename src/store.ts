import create from 'zustand';

export interface IPerson {
    id: number;
    firstname: string;
    lastname: string;
    age: number;
    address: string;
    phone: string;
}

type People = {
    people: IPerson[];
    add: (person: IPerson) => void;
    update: (person: IPerson) => void;
    remove: (id: number) => void;
};

export const useStore = create<People>(set => ({
    people: [],
    add: (person: IPerson) =>
        set(state => ({ people: [...state.people, person] })),
    update: (newPerson: IPerson) =>
        set(state => ({
            ...state,
            people: state.people.map(person =>
                person.id === newPerson.id ? newPerson : person
            ),
        })),
    remove: (id: number) =>
        set(state => ({
            ...state,
            people: state.people.filter(person => person.id !== id),
        })),
}));
