export interface DB {
    id: number;
    name: string;
    description: string;
    image: string;
    season: string;
    vibes: string;
    active: boolean;
    period: Date;
    season_starts: Date;
    season_ends: Date;
}