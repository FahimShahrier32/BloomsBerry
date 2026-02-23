export interface InstagramPost {
    id: string;
    timestamp: string;
    permalink: string;
    mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
    mediaUrl: string;
    sizes: {
        small: { mediaUrl: string; height: number; width: number };
        medium: { mediaUrl: string; height: number; width: number };
        large: { mediaUrl: string; height: number; width: number };
        full: { mediaUrl: string; height: number; width: number };
    };
    caption: string;
    prunedCaption: string;
}

export interface BeholdResponse {
    username: string;
    posts: InstagramPost[];
}
