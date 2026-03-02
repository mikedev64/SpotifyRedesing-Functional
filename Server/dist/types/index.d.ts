export interface User {
    id: string;
    email: string;
    name: string;
    profilePicture: string | null;
    url: string;
    createdAt: Date;
}
export interface Artist {
    id: string;
    name: string;
    url: string;
    profilePicture: string | null;
    followers: number;
    monthlyListeners: number;
}
export interface Album {
    id: string;
    title: string;
    artistId: string;
    artistName: string;
    coverImage: string | null;
    releaseDate: Date;
    tracks: Track[];
}
export interface Track {
    id: string;
    title: string;
    artistId: string;
    artistName: string;
    albumId: string;
    albumName: string;
    duration: number;
    trackNumber: number;
    url: string;
}
export interface Playlist {
    id: string;
    name: string;
    description: string | null;
    ownerId: string;
    ownerName: string;
    coverImage: string | null;
    tracks: Track[];
    isPublic: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export interface ApiResponse<T> {
    data: T;
    message?: string;
}
export interface ApiError {
    error: string;
    statusCode: number;
    details?: unknown;
}
export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    hasNext: boolean;
    hasPrev: boolean;
}
export interface LoginRequest {
    email: string;
    password: string;
}
export interface RegisterRequest {
    email: string;
    password: string;
    name: string;
}
export interface AuthResponse {
    token: string;
    user: Omit<User, 'createdAt'>;
}
export interface UserSettings {
    userId: string;
    theme: 'light' | 'dark' | 'system';
    language: string;
    audioQuality: 'low' | 'normal' | 'high' | 'very_high';
    autoplay: boolean;
    crossfade: number;
    normalizeVolume: boolean;
}
export interface UserLibrary {
    userId: string;
    favorites: Track[];
    playlists: Playlist[];
    pins: (Playlist | Album | Artist)[];
}
//# sourceMappingURL=index.d.ts.map