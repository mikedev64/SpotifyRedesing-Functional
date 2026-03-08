interface IFolder {
	name: string;
	data: IAlbum[]
}

interface ILibrary {
	data: (IAlbum | IArtist)[]
	likes: ISong[]
	folders: IFolder[]
}