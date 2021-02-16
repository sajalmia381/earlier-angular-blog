interface Entity {
    id: number
}


export class StoreUtility {
    
    // [{id: 1, name: "Sajal"}, {id: 2, name: "Rose"}] => {id: {id: 1, name: "sajal"}}
    static normalize (objList: Entity[]): object {
        return objList.reduce((prevObj, current: Entity) => {
            return {...prevObj, [current.id]: current}
        }, {})
    }

    //{id: {id: 1, name: "sajal"}} => [{id: 1, name: "Sajal"}, {id: 2, name: "Rose"}]
    static unnormalize (entities: {[id: number]: Entity}): number[] {
        if (!entities) {
            return []
        }
        return Object.keys(entities).map(key => entities[key])
    }

    static filterDublicatedIds (ids: number[]): number[] {
        return ids.filter((id, index, self) => id === self.indexOf(id))
    }
    static removeEntity (entities: {id: number}, id: number): object {
        const newEntities = {...entities}
        delete newEntities[id]
        return newEntities

    }
}