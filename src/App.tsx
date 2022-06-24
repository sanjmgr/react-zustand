import { useStore, IPerson } from './store';
import './index.css';

export default function App() {
    const store = useStore();

    const person: IPerson = {
        id: Math.max(0, Math.max(...store.people.map(({ id }) => id))) + 1,
        firstname: 'Sanjay',
        lastname: 'Gharti',
        age: 24,
        address: 'Jwagal, Lalitpur',
        phone: '987654321',
    };

    const updatePerson: IPerson = {
        id: 4,
        firstname: 'Nisan',
        lastname: 'Chhetri',
        age: 24,
        address: 'NC State, USA',
        phone: '987654321',
    };

    return (
        <div className='container mx-auto px-14 py-8 text-center gap-4'>
            <div className='flex gap-4 justify-center'>
                <button
                    onClick={() => store.add(person)}
                    className='px-2 py-1 bg-indigo-200 rounded-md '
                >
                    Add Person
                </button>

                <button
                    onClick={() => store.update(updatePerson)}
                    className='px-2 py-1 bg-indigo-200 rounded-md '
                >
                    Update Person
                </button>

                <button
                    onClick={() => store.remove(4)}
                    className='px-2 py-1 bg-indigo-200 rounded-md '
                >
                    Remove Person
                </button>
            </div>
            <div className='flex gap-4 mt-4 flex-wrap'>
                {store.people.map((person: IPerson, index) => (
                    <div
                        key={index}
                        className='flex justify-center bg-indigo-100 rounded-md flex-col w-fit px-4 py-2'
                    >
                        <p>Id: {person.id}</p>
                        <p>Firstname: {person.firstname}</p>
                        <p>Lastname: {person.lastname}</p>
                        <p>Age: {person.age}</p>
                        <p>Phone: {person.phone}</p>
                        <p>Address: {person.address}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
