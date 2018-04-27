import Realm from 'realm';
export const BALANCE_SCHEMA = "Balance";

// Define your models and their properties
export const BalanceSchema = {
    name: BALANCE_SCHEMA,
    primaryKey: '_id',
    properties: {
        _id: 'int',
        week: 'int',
        length: 'double',
        weight: 'int'
    }
};

const databaseOptions = {
    path: '../assets/default.realm',
    schema: [BalanceSchema],
    schemaVersion: 0, //optional    
};

export const queryAllBalance = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let allBalance = realm.objects(BALANCE_SCHEMA);
        resolve(allBalance);
    }).catch((error) => {
        reject(error);
    });
});

export const insertNewBalance = newBalance => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(BALANCE_SCHEMA, newBalance);
            resolve(newBalance);
        });
    }).catch((error) => reject(error));
});
export const updateBalance = balanceList => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let updatingBalance = realm.objectForPrimaryKey(BALANCE_SCHEMA, balanceList._id);
            updatingBalance.week = balanceList.week;
            updatingBalance.length = balanceList.length;
            updatingBalance.weight = balanceList.weight;
            resolve();
        });
    }).catch((error) => reject(error));;
});

export const deleteBalance = balanceListId => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let deletingBalanceList = realm.objectForPrimaryKey(BALANCE_SCHEMA, balanceListId);
            realm.delete(deletingBalanceList);
            resolve();
        });
    }).catch((error) => reject(error));;
});

export default new Realm(databaseOptions);