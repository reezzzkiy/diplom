import {makeAutoObservable} from 'mobx'

export default class ObjectStore {
    constructor(){
        this._types1 = [{
            id:1, name:'Ручная работа'
        },
        {
            id:2, name:'работа'
        }]
       
        this._objects = [{
            id:1, name:'ghzybr 1'
        },
        {
            id:2, name:'ghzybr 2'
        }]
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setSelectedType(type){
        this._selectedType = type
    }

    setTypes(types1) {
        this._types1 = types1
    }
    setObject(objects) {
        this._objects = objects
    }
    get types(){
        return this._types1
    }
    get objects(){
        return this._objects
    }
    get selectedType(){
        return this._selectedType
    }
    
}