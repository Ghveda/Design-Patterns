interface IDatabase {
    save(data: string): void;
}

class MySqlDatabase implements IDatabase {
    save(data: string): void {
        console.log(`${data} is being saved my MySQL`);
    }
}

class MongoDbDatabase implements IDatabase {
    save(data: string): void {
        console.log(`${data} is being saved my MongoDb`);
    }
}

class HighLevelModule {
    constructor(private database: IDatabase) {
    }

    execute(data: string) {
        this.database.save(data);
    }
}

const mySql = new MySqlDatabase();
const mongoDb = new MongoDbDatabase();

const user = new HighLevelModule(mySql);
const post = new HighLevelModule(mongoDb);

export function callLDIPMethods() {
    console.log('DIP\n------------------------------------');
    user.execute('User');
    post.execute('Post');
    console.log('------------------------------------');
}