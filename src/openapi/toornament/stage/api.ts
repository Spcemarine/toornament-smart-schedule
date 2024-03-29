/* tslint:disable */
/* eslint-disable */
/**
 * Stages
 * The Toornament platform connects your website and application with the eSports tournaments around the world.
 *
 * The version of the OpenAPI document: 2.0.2
 * Contact: contact@toornament.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface StageBase
 */
export interface StageBase {
    /**
     * A number used for ordering stages.
     * @type {number}
     * @memberof StageBase
     */
    'number'?: number;
    /**
     * The name of the stage.
     * @type {string}
     * @memberof StageBase
     */
    'name'?: string;
    /**
     * Settings that describe the various options for the stage type.
     * @type {object}
     * @memberof StageBase
     */
    'settings'?: object;
}
/**
 * 
 * @export
 * @interface StageBaseComplete
 */
export interface StageBaseComplete {
    /**
     * The id of the stage.
     * @type {string}
     * @memberof StageBaseComplete
     */
    'id'?: string;
    /**
     * Whether the stage is closed.
     * @type {boolean}
     * @memberof StageBaseComplete
     */
    'closed'?: boolean;
}
/**
 * 
 * @export
 * @interface StageBaseReadonly
 */
export interface StageBaseReadonly {
    /**
     * The type of stage that defines how the stage functions.
     * @type {string}
     * @memberof StageBaseReadonly
     */
    'type'?: StageBaseReadonlyTypeEnum;
}

export const StageBaseReadonlyTypeEnum = {
    SingleElimination: 'single_elimination',
    DoubleElimination: 'double_elimination',
    BracketGroups: 'bracket_groups',
    Pools: 'pools',
    Gauntlet: 'gauntlet',
    League: 'league',
    Swiss: 'swiss',
    Simple: 'simple',
    FfaSingleEliminationFfaBracketGroups: 'ffa_single_elimination_ ffa_bracket_groups'
} as const;

export type StageBaseReadonlyTypeEnum = typeof StageBaseReadonlyTypeEnum[keyof typeof StageBaseReadonlyTypeEnum];

/**
 * 
 * @export
 * @interface StageBaseSettings
 */
export interface StageBaseSettings {
    /**
     * Settings that define the match configuration used in the stage.
     * @type {object}
     * @memberof StageBaseSettings
     */
    'match_settings'?: object;
    /**
     * If enabled, participants will automatically be placed in the stage using their creation order as seeding.
     * @type {boolean}
     * @memberof StageBaseSettings
     */
    'auto_placement_enabled'?: boolean;
}
/**
 * 
 * @export
 * @interface StageBaseShort
 */
export interface StageBaseShort {
    /**
     * The id of the tournament.
     * @type {string}
     * @memberof StageBaseShort
     */
    'tournament_id'?: string;
}
/**
 * 
 * @export
 * @interface StageCreate
 */
export interface StageCreate {
    /**
     * A number used for ordering stages.
     * @type {number}
     * @memberof StageCreate
     */
    'number': number;
    /**
     * The name of the stage.
     * @type {string}
     * @memberof StageCreate
     */
    'name': string;
    /**
     * Settings that describe the various options for the stage type.
     * @type {object}
     * @memberof StageCreate
     */
    'settings': object;
    /**
     * The type of stage that defines how the stage functions.
     * @type {string}
     * @memberof StageCreate
     */
    'type': StageCreateTypeEnum;
    /**
     * Settings that define the match configuration used in the stage.
     * @type {object}
     * @memberof StageCreate
     */
    'match_settings'?: object;
    /**
     * If enabled, participants will automatically be placed in the stage using their creation order as seeding.
     * @type {boolean}
     * @memberof StageCreate
     */
    'auto_placement_enabled'?: boolean;
    /**
     * The id of the tournament.
     * @type {string}
     * @memberof StageCreate
     */
    'tournament_id': string;
}

export const StageCreateTypeEnum = {
    SingleElimination: 'single_elimination',
    DoubleElimination: 'double_elimination',
    BracketGroups: 'bracket_groups',
    Pools: 'pools',
    Gauntlet: 'gauntlet',
    League: 'league',
    Swiss: 'swiss',
    Simple: 'simple',
    FfaSingleEliminationFfaBracketGroups: 'ffa_single_elimination_ ffa_bracket_groups'
} as const;

export type StageCreateTypeEnum = typeof StageCreateTypeEnum[keyof typeof StageCreateTypeEnum];

/**
 * 
 * @export
 * @interface StageFully
 */
export interface StageFully {
    /**
     * A number used for ordering stages.
     * @type {number}
     * @memberof StageFully
     */
    'number': number;
    /**
     * The name of the stage.
     * @type {string}
     * @memberof StageFully
     */
    'name': string;
    /**
     * Settings that describe the various options for the stage type.
     * @type {object}
     * @memberof StageFully
     */
    'settings': object;
    /**
     * The type of stage that defines how the stage functions.
     * @type {string}
     * @memberof StageFully
     */
    'type': StageFullyTypeEnum;
    /**
     * Settings that define the match configuration used in the stage.
     * @type {object}
     * @memberof StageFully
     */
    'match_settings': object;
    /**
     * If enabled, participants will automatically be placed in the stage using their creation order as seeding.
     * @type {boolean}
     * @memberof StageFully
     */
    'auto_placement_enabled': boolean;
    /**
     * The id of the tournament.
     * @type {string}
     * @memberof StageFully
     */
    'tournament_id': string;
    /**
     * The id of the stage.
     * @type {string}
     * @memberof StageFully
     */
    'id': string;
    /**
     * Whether the stage is closed.
     * @type {boolean}
     * @memberof StageFully
     */
    'closed': boolean;
}

export const StageFullyTypeEnum = {
    SingleElimination: 'single_elimination',
    DoubleElimination: 'double_elimination',
    BracketGroups: 'bracket_groups',
    Pools: 'pools',
    Gauntlet: 'gauntlet',
    League: 'league',
    Swiss: 'swiss',
    Simple: 'simple',
    FfaSingleEliminationFfaBracketGroups: 'ffa_single_elimination_ ffa_bracket_groups'
} as const;

export type StageFullyTypeEnum = typeof StageFullyTypeEnum[keyof typeof StageFullyTypeEnum];

/**
 * 
 * @export
 * @interface StageLegacy
 */
export interface StageLegacy {
    /**
     * A number used for ordering stages.
     * @type {number}
     * @memberof StageLegacy
     */
    'number': number;
    /**
     * The name of the stage.
     * @type {string}
     * @memberof StageLegacy
     */
    'name': string;
    /**
     * Settings that describe the various options for the stage type.
     * @type {object}
     * @memberof StageLegacy
     */
    'settings': object;
    /**
     * The type of stage that defines how the stage functions.
     * @type {string}
     * @memberof StageLegacy
     */
    'type': StageLegacyTypeEnum;
    /**
     * The id of the stage.
     * @type {string}
     * @memberof StageLegacy
     */
    'id': string;
    /**
     * Whether the stage is closed.
     * @type {boolean}
     * @memberof StageLegacy
     */
    'closed': boolean;
}

export const StageLegacyTypeEnum = {
    SingleElimination: 'single_elimination',
    DoubleElimination: 'double_elimination',
    BracketGroups: 'bracket_groups',
    Pools: 'pools',
    Gauntlet: 'gauntlet',
    League: 'league',
    Swiss: 'swiss',
    Simple: 'simple',
    FfaSingleEliminationFfaBracketGroups: 'ffa_single_elimination_ ffa_bracket_groups'
} as const;

export type StageLegacyTypeEnum = typeof StageLegacyTypeEnum[keyof typeof StageLegacyTypeEnum];

/**
 * 
 * @export
 * @interface StageUpdate
 */
export interface StageUpdate {
    /**
     * A number used for ordering stages.
     * @type {number}
     * @memberof StageUpdate
     */
    'number'?: number;
    /**
     * The name of the stage.
     * @type {string}
     * @memberof StageUpdate
     */
    'name'?: string;
    /**
     * Settings that describe the various options for the stage type.
     * @type {object}
     * @memberof StageUpdate
     */
    'settings'?: object;
    /**
     * Settings that define the match configuration used in the stage.
     * @type {object}
     * @memberof StageUpdate
     */
    'match_settings'?: object;
    /**
     * If enabled, participants will automatically be placed in the stage using their creation order as seeding.
     * @type {boolean}
     * @memberof StageUpdate
     */
    'auto_placement_enabled'?: boolean;
}

/**
 * OrganizerStagesApi - axios parameter creator
 * @export
 */
export const OrganizerStagesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns all stages of a tournament with basic information and settings.
         * @summary Retrieve all stages of a tournament.
         * @param {string} range A range of requested items using the \&#39;stages\&#39; unit. The size of the range can not exceed 50. (see [Pagination](https://developer.toornament.com/v2/overview/pagination))
         * @param {Array<string>} [tournamentIds] Only return stages for the given list of tournaments.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stagesGet: async (range: string, tournamentIds?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'range' is not null or undefined
            assertParamExists('stagesGet', 'range', range)
            const localVarPath = `/stages`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)

            // authentication oAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oAuth2", ["organizer:result", "organizer:admin"], configuration)

            // authentication oAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oAuth2", ["organizer:result", "organizer:admin"], configuration)

            if (tournamentIds) {
                localVarQueryParameter['tournament_ids'] = tournamentIds.join(COLLECTION_FORMATS.csv);
            }

            if (range !== undefined && range !== null) {
                localVarHeaderParameter['Range'] = String(range);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a stage with the given id with basic information and settings.
         * @summary Retrieve a single stage.
         * @param {string} id The id of the stage.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stagesIdGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('stagesIdGet', 'id', id)
            const localVarPath = `/stages/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)

            // authentication oAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oAuth2", ["organizer:result", "organizer:admin"], configuration)

            // authentication oAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oAuth2", ["organizer:result", "organizer:admin"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns all stages of a tournament with basic information and settings.
         * @summary Retrieve all stages of a tournament.
         * @param {string} tournamentId The id of the tournament you want to retrieve data about.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        tournamentsTournamentIdStagesGet: async (tournamentId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tournamentId' is not null or undefined
            assertParamExists('tournamentsTournamentIdStagesGet', 'tournamentId', tournamentId)
            const localVarPath = `/tournaments/{tournament_id}/stages`
                .replace(`{${"tournament_id"}}`, encodeURIComponent(String(tournamentId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)

            // authentication oAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oAuth2", ["organizer:result"], configuration)

            // authentication oAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oAuth2", ["organizer:result"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a stage with the given id with basic information and settings.
         * @summary Retrieve a single stage of a tournament.
         * @param {string} tournamentId The id of the tournament you want to retrieve data about.
         * @param {string} id The id of the stage.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        tournamentsTournamentIdStagesIdGet: async (tournamentId: string, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tournamentId' is not null or undefined
            assertParamExists('tournamentsTournamentIdStagesIdGet', 'tournamentId', tournamentId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('tournamentsTournamentIdStagesIdGet', 'id', id)
            const localVarPath = `/tournaments/{tournament_id}/stages/{id}`
                .replace(`{${"tournament_id"}}`, encodeURIComponent(String(tournamentId)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Api-Key", configuration)

            // authentication oAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oAuth2", ["organizer:result"], configuration)

            // authentication oAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oAuth2", ["organizer:result"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OrganizerStagesApi - functional programming interface
 * @export
 */
export const OrganizerStagesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OrganizerStagesApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns all stages of a tournament with basic information and settings.
         * @summary Retrieve all stages of a tournament.
         * @param {string} range A range of requested items using the \&#39;stages\&#39; unit. The size of the range can not exceed 50. (see [Pagination](https://developer.toornament.com/v2/overview/pagination))
         * @param {Array<string>} [tournamentIds] Only return stages for the given list of tournaments.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async stagesGet(range: string, tournamentIds?: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<StageFully>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.stagesGet(range, tournamentIds, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a stage with the given id with basic information and settings.
         * @summary Retrieve a single stage.
         * @param {string} id The id of the stage.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async stagesIdGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StageFully>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.stagesIdGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns all stages of a tournament with basic information and settings.
         * @summary Retrieve all stages of a tournament.
         * @param {string} tournamentId The id of the tournament you want to retrieve data about.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async tournamentsTournamentIdStagesGet(tournamentId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<StageLegacy>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tournamentsTournamentIdStagesGet(tournamentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a stage with the given id with basic information and settings.
         * @summary Retrieve a single stage of a tournament.
         * @param {string} tournamentId The id of the tournament you want to retrieve data about.
         * @param {string} id The id of the stage.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async tournamentsTournamentIdStagesIdGet(tournamentId: string, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StageLegacy>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tournamentsTournamentIdStagesIdGet(tournamentId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OrganizerStagesApi - factory interface
 * @export
 */
export const OrganizerStagesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OrganizerStagesApiFp(configuration)
    return {
        /**
         * Returns all stages of a tournament with basic information and settings.
         * @summary Retrieve all stages of a tournament.
         * @param {string} range A range of requested items using the \&#39;stages\&#39; unit. The size of the range can not exceed 50. (see [Pagination](https://developer.toornament.com/v2/overview/pagination))
         * @param {Array<string>} [tournamentIds] Only return stages for the given list of tournaments.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stagesGet(range: string, tournamentIds?: Array<string>, options?: any): AxiosPromise<Array<StageFully>> {
            return localVarFp.stagesGet(range, tournamentIds, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a stage with the given id with basic information and settings.
         * @summary Retrieve a single stage.
         * @param {string} id The id of the stage.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stagesIdGet(id: string, options?: any): AxiosPromise<StageFully> {
            return localVarFp.stagesIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns all stages of a tournament with basic information and settings.
         * @summary Retrieve all stages of a tournament.
         * @param {string} tournamentId The id of the tournament you want to retrieve data about.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        tournamentsTournamentIdStagesGet(tournamentId: string, options?: any): AxiosPromise<Array<StageLegacy>> {
            return localVarFp.tournamentsTournamentIdStagesGet(tournamentId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a stage with the given id with basic information and settings.
         * @summary Retrieve a single stage of a tournament.
         * @param {string} tournamentId The id of the tournament you want to retrieve data about.
         * @param {string} id The id of the stage.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        tournamentsTournamentIdStagesIdGet(tournamentId: string, id: string, options?: any): AxiosPromise<StageLegacy> {
            return localVarFp.tournamentsTournamentIdStagesIdGet(tournamentId, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OrganizerStagesApi - object-oriented interface
 * @export
 * @class OrganizerStagesApi
 * @extends {BaseAPI}
 */
export class OrganizerStagesApi extends BaseAPI {
    /**
     * Returns all stages of a tournament with basic information and settings.
     * @summary Retrieve all stages of a tournament.
     * @param {string} range A range of requested items using the \&#39;stages\&#39; unit. The size of the range can not exceed 50. (see [Pagination](https://developer.toornament.com/v2/overview/pagination))
     * @param {Array<string>} [tournamentIds] Only return stages for the given list of tournaments.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerStagesApi
     */
    public stagesGet(range: string, tournamentIds?: Array<string>, options?: AxiosRequestConfig) {
        return OrganizerStagesApiFp(this.configuration).stagesGet(range, tournamentIds, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a stage with the given id with basic information and settings.
     * @summary Retrieve a single stage.
     * @param {string} id The id of the stage.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerStagesApi
     */
    public stagesIdGet(id: string, options?: AxiosRequestConfig) {
        return OrganizerStagesApiFp(this.configuration).stagesIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns all stages of a tournament with basic information and settings.
     * @summary Retrieve all stages of a tournament.
     * @param {string} tournamentId The id of the tournament you want to retrieve data about.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof OrganizerStagesApi
     */
    public tournamentsTournamentIdStagesGet(tournamentId: string, options?: AxiosRequestConfig) {
        return OrganizerStagesApiFp(this.configuration).tournamentsTournamentIdStagesGet(tournamentId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a stage with the given id with basic information and settings.
     * @summary Retrieve a single stage of a tournament.
     * @param {string} tournamentId The id of the tournament you want to retrieve data about.
     * @param {string} id The id of the stage.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof OrganizerStagesApi
     */
    public tournamentsTournamentIdStagesIdGet(tournamentId: string, id: string, options?: AxiosRequestConfig) {
        return OrganizerStagesApiFp(this.configuration).tournamentsTournamentIdStagesIdGet(tournamentId, id, options).then((request) => request(this.axios, this.basePath));
    }
}


