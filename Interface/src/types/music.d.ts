interface IArtist {
	id: number;
	name: string;
	followers: number;
	listeners: number;
	coverImage: string;
	profileImage: string;
}

interface IAlbum<T extends 'album' | 'single' | 'playlist'> {
	id: number;
	name: string;
	type: T;
	tags: string[];
	list: ISong[];
	artist: T extends 'playlist' ? IUser[] : IArtist[];
}

interface ISong {
	id: number;
	name: string;
	duration: number;
	cover: string;
	canvas: string;
	artist: IArtist[];
	lyrics: ILyrics;
	alnum: Omit<IAlbum, 'list'>
}

interface ILyrics {
	[time: number]: {
		original: string;
		[lenguage: string]: string;
	};
}
