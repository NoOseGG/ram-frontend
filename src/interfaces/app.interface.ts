// Characters

import exp from "constants";

export interface ICharactersResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    }
    results: ICharacter[];
}

export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: IOriginForCharacter;
    location: ILocationForCharacter;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

interface IOriginForCharacter {
    name: string;
    url: string;
}

interface ILocationForCharacter {
    name: string;
    url: string;
}

// Locations

export interface ILocationsResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    }
    results: ILocation[];
}

export interface ILocation {
    id: number;
    name: string;
    type: string;
    dimension: string;   
    residents: string[];
    url: string;
    created: string;
}

// Character Info

export interface ICharacterInfo {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: IOriginForCharacter;
    location: ILocationForCharacter;
    image: string;
    episode: string[];
    url: string;
    created: string;
}