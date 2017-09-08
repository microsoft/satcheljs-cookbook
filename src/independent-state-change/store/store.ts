import {createStore} from 'satcheljs';
import ExampleStore from './ExampleStore';

export default createStore<ExampleStore>('ExampleStore', {
    items: [
        // tslint:disable:quotemark
        {"name":"Red-capped cardinal","description":"Paroaria gularis"},
        {"name":"Woylie","description":"Bettongia penicillata"},
        {"name":"Wallaby, agile","description":"Macropus agilis"},
        {"name":"Egyptian goose","description":"Alopochen aegyptiacus"},
        {"name":"Common genet","description":"Genetta genetta"},
        {"name":"Cormorant, king","description":"Phalacrocorax albiventer"},
        {"name":"Southern tamandua","description":"Tamandua tetradactyla"},
        {"name":"Openbill, asian","description":"Anastomus oscitans"},
        {"name":"Whale, baleen","description":"Eubalaena australis"}
    ],
    selected: null,
});