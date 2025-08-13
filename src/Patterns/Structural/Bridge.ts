// Example 1
interface IMediaPlayerImplementation {
    playAudio(): void;

    playVideo(): void;
}

class WindowsMediaPlayer implements IMediaPlayerImplementation {
    playAudio(): void {
        console.log('Playing audio on windows media player');
    }

    playVideo(): void {
        console.log('Playing video on windows media player');

    }
}

class MacOsMediaPlayer implements IMediaPlayerImplementation {
    playAudio(): void {
        console.log('Playing audio on MacOs media player');
    }

    playVideo(): void {
        console.log('Playing video on MacOs media player');

    }
}

abstract class MediaPlayerAbstraction {
    constructor(
        protected mediaPlayerImplementation: IMediaPlayerImplementation
    ) {
    }

    abstract playFile(): void;
}

class AudioPlayer extends MediaPlayerAbstraction {
    playFile(): void {
        this.mediaPlayerImplementation.playAudio();
    }
}

class VideoPlayer extends MediaPlayerAbstraction {
    playFile(): void {
        this.mediaPlayerImplementation.playVideo();
    }
}


const windowsAudioPlayer = new AudioPlayer(new WindowsMediaPlayer());
const macOsAudioPlayer = new AudioPlayer(new MacOsMediaPlayer());

windowsAudioPlayer.playFile();
macOsAudioPlayer.playFile();

// Example 2
interface Database {
    connect(): void;

    query(sql: string): void;

    close(): void;
}

class PostgreSQLDatabase implements Database {
    close(): void {
        console.log('PostreSql Closed!');
    }

    connect(): void {
        console.log('PostreSql Connected!');
    }

    query(sql: string): void {
        console.log(`PostreSql query ${sql}`);
    }
}

class MongoDBDatabase implements Database {
    close(): void {
        console.log('MongoDB Closed!');
    }

    connect(): void {
        console.log('MongoDB Connected!');
    }

    query(sql: string): void {
        console.log(`MongoDB query ${sql}`);
    }
}

abstract class DatabaseService {
    constructor(protected database: Database) {
    }

    abstract fetchData(query: string);
}

class ClientDatabaseService extends DatabaseService {
    fetchData(query: string) {
        this.database.connect();
        this.database.query(query);
        this.database.close();
    }
}

const postgresDatabase = new ClientDatabaseService(new PostgreSQLDatabase());
const mongoDbDatabase = new ClientDatabaseService(new MongoDBDatabase());

postgresDatabase.fetchData('User');
mongoDbDatabase.fetchData('User');

export {}
