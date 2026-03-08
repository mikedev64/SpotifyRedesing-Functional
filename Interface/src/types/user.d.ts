interface IUser {
	id: number;
	name: string;
	profileImage: string;
}

interface ITabs {
	location: string;
	type: 'song' | 'artist' | 'album' | 'playlist';
	data: unknown;
	canClose: boolean;
}

interface IColections {
	pin: boolean;
	data: IAlbum[];
}

interface IUSerPreferences {
	interface: {
		hoem: {
			filters: 'music' | 'podcast';
			colections: IColections[]
		}
		queue: boolean;
		library: boolean;
	};
	tabs: ITabs[];
	lenguage: 'EN' | 'US';
}
