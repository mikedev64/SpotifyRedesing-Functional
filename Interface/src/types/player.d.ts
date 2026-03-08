interface ISongQueue extends ISong {}
interface IAlbumQueue extends Pick<IAlbum, 'id' & 'name'> {
	list: ISongQueue;
}

type TQueue = (IAlbumQueue | ISongQueue)[]

interface IPlayer {
	playing: boolean;
	time: number
	repeat: 'no' | 'context' | 'song';
	shuffle: boolean;
	devices: boolean;
	lyrics: boolean
	volume: number;
	song: ISong;
}
