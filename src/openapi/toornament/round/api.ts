/* tslint:disable */
/* eslint-disable */
/**
 * Rounds
 * The Toornament platform connects your website and application with the eSports tournaments around the world.
 *
 * The version of the OpenAPI document: 2.0.1
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
 * @interface RoundBase
 */
export interface RoundBase {
    /**
     * The name of the round.
     * @type {string}
     * @memberof RoundBase
     */
    'name'?: string;
    /**
     * Settings that describe the various options related to the round and stage types.
     * @type {object}
     * @memberof RoundBase
     */
    'settings'?: object;
}
/**
 * 
 * @export
 * @interface RoundBaseExtended
 */
export interface RoundBaseExtended {
    /**
     * Settings that define the match configuration used in the round.
     * @type {object}
     * @memberof RoundBaseExtended
     */
    'match_settings'?: object;
}
/**
 * 
 * @export
 * @interface RoundBaseIdentifier
 */
export interface RoundBaseIdentifier {
    /**
     * The id of the round.
     * @type {string}
     * @memberof RoundBaseIdentifier
     */
    'id'?: string;
}
/**
 * 
 * @export
 * @interface RoundBasePosition
 */
export interface RoundBasePosition {
    /**
     * A number used for ordering rounds.
     * @type {number}
     * @memberof RoundBasePosition
     */
    'number'?: number;
}
/**
 * 
 * @export
 * @interface RoundBaseReference
 */
export interface RoundBaseReference {
    /**
     * The id of the stage that contains the round.
     * @type {string}
     * @memberof RoundBaseReference
     */
    'stage_id'?: string;
    /**
     * The id of the group that contains the round.
     * @type {string}
     * @memberof RoundBaseReference
     */
    'group_id'?: string;
}
/**
 * 
 * @export
 * @interface RoundBaseReferenceExtended
 */
export interface RoundBaseReferenceExtended {
    /**
     * The id of the tournament that contains this round.
     * @type {string}
     * @memberof RoundBaseReferenceExtended
     */
    'tournament_id'?: string;
}
/**
 * 
 * @export
 * @interface RoundBaseState
 */
export interface RoundBaseState {
    /**
     * Whether the round is closed.
     * @type {boolean}
     * @memberof RoundBaseState
     */
    'closed'?: boolean;
}
/**
 * 
 * @export
 * @interface RoundCreate
 */
export interface RoundCreate {
    /**
     * The id of the stage that contains the round.
     * @type {string}
     * @memberof RoundCreate
     */
    'stage_id': string;
    /**
     * The id of the group that contains the round.
     * @type {string}
     * @memberof RoundCreate
     */
    'group_id': string;
    /**
     * The id of the tournament that contains this round.
     * @type {string}
     * @memberof RoundCreate
     */
    'tournament_id': string;
}
/**
 * 
 * @export
 * @interface RoundFully
 */
export interface RoundFully {
    /**
     * The name of the round.
     * @type {string}
     * @memberof RoundFully
     */
    'name': string;
    /**
     * Settings that describe the various options related to the round and stage types.
     * @type {object}
     * @memberof RoundFully
     */
    'settings': object;
    /**
     * The id of the round.
     * @type {string}
     * @memberof RoundFully
     */
    'id': string;
    /**
     * A number used for ordering rounds.
     * @type {number}
     * @memberof RoundFully
     */
    'number': number;
    /**
     * Settings that define the match configuration used in the round.
     * @type {object}
     * @memberof RoundFully
     */
    'match_settings': object;
    /**
     * The id of the stage that contains the round.
     * @type {string}
     * @memberof RoundFully
     */
    'stage_id': string;
    /**
     * The id of the group that contains the round.
     * @type {string}
     * @memberof RoundFully
     */
    'group_id': string;
    /**
     * The id of the tournament that contains this round.
     * @type {string}
     * @memberof RoundFully
     */
    'tournament_id': string;
    /**
     * Whether the round is closed.
     * @type {boolean}
     * @memberof RoundFully
     */
    'closed': boolean;
}
/**
 * 
 * @export
 * @interface RoundLegacy
 */
export interface RoundLegacy {
    /**
     * The name of the round.
     * @type {string}
     * @memberof RoundLegacy
     */
    'name': string;
    /**
     * Settings that describe the various options related to the round and stage types.
     * @type {object}
     * @memberof RoundLegacy
     */
    'settings': object;
    /**
     * The id of the round.
     * @type {string}
     * @memberof RoundLegacy
     */
    'id': string;
    /**
     * A number used for ordering rounds.
     * @type {number}
     * @memberof RoundLegacy
     */
    'number': number;
    /**
     * The id of the stage that contains the round.
     * @type {string}
     * @memberof RoundLegacy
     */
    'stage_id': string;
    /**
     * The id of the group that contains the round.
     * @type {string}
     * @memberof RoundLegacy
     */
    'group_id': string;
    /**
     * Whether the round is closed.
     * @type {boolean}
     * @memberof RoundLegacy
     */
    'closed': boolean;
}
/**
 * 
 * @export
 * @interface RoundUpdate
 */
export interface RoundUpdate {
    /**
     * The name of the round.
     * @type {string}
     * @memberof RoundUpdate
     */
    'name'?: string;
    /**
     * Settings that describe the various options related to the round and stage types.
     * @type {object}
     * @memberof RoundUpdate
     */
    'settings'?: object;
    /**
     * Settings that define the match configuration used in the round.
     * @type {object}
     * @memberof RoundUpdate
     */
    'match_settings'?: object;
}

/**
 * OrganizerRoundsApi - axios parameter creator
 * @export
 */
export const OrganizerRoundsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns all rounds with basic information and settings.
         * @summary Retrieve all rounds.
         * @param {string} range A range of requested items using the \&#39;rounds\&#39; unit. The size of the range can not exceed 50. (see [Pagination](https://developer.toornament.com/v2/overview/pagination))
         * @param {Array<string>} [stageIds] A list of stage ids to filter.
         * @param {Array<number>} [stageNumbers] A list of stage numbers to filter.
         * @param {Array<string>} [groupIds] A list of group ids to filter.
         * @param {Array<number>} [groupNumbers] A list of group numbers to filter.
         * @param {Array<string>} [tournamentIds] Only return rounds for the given list of tournaments.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roundsGet: async (range: string, stageIds?: Array<string>, stageNumbers?: Array<number>, groupIds?: Array<string>, groupNumbers?: Array<number>, tournamentIds?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'range' is not null or undefined
            assertParamExists('roundsGet', 'range', range)
            const localVarPath = `/rounds`;
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

            if (stageIds) {
                localVarQueryParameter['stage_ids'] = stageIds.join(COLLECTION_FORMATS.csv);
            }

            if (stageNumbers) {
                localVarQueryParameter['stage_numbers'] = stageNumbers.join(COLLECTION_FORMATS.csv);
            }

            if (groupIds) {
                localVarQueryParameter['group_ids'] = groupIds.join(COLLECTION_FORMATS.csv);
            }

            if (groupNumbers) {
                localVarQueryParameter['group_numbers'] = groupNumbers.join(COLLECTION_FORMATS.csv);
            }

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
         * Returns a round with the given id with basic information and settings.
         * @summary Retrieve a single round.
         * @param {string} id The id of the round.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roundsIdGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('roundsIdGet', 'id', id)
            const localVarPath = `/rounds/{id}`
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
         * Returns all rounds of a tournament with basic information and settings.
         * @summary Retrieve all rounds of a tournament.
         * @param {string} range A range of requested items using the \&#39;rounds\&#39; unit. The size of the range can not exceed 50. (see [Pagination](https://developer.toornament.com/v2/overview/pagination))
         * @param {string} tournamentId The id of the tournament you want to retrieve data about.
         * @param {Array<string>} [stageIds] A list of stage ids to filter.
         * @param {Array<number>} [stageNumbers] A list of stage numbers to filter.
         * @param {Array<string>} [groupIds] A list of group ids to filter.
         * @param {Array<number>} [groupNumbers] A list of group numbers to filter.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        tournamentsTournamentIdRoundsGet: async (range: string, tournamentId: string, stageIds?: Array<string>, stageNumbers?: Array<number>, groupIds?: Array<string>, groupNumbers?: Array<number>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'range' is not null or undefined
            assertParamExists('tournamentsTournamentIdRoundsGet', 'range', range)
            // verify required parameter 'tournamentId' is not null or undefined
            assertParamExists('tournamentsTournamentIdRoundsGet', 'tournamentId', tournamentId)
            const localVarPath = `/tournaments/{tournament_id}/rounds`
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

            if (stageIds) {
                localVarQueryParameter['stage_ids'] = stageIds.join(COLLECTION_FORMATS.csv);
            }

            if (stageNumbers) {
                localVarQueryParameter['stage_numbers'] = stageNumbers.join(COLLECTION_FORMATS.csv);
            }

            if (groupIds) {
                localVarQueryParameter['group_ids'] = groupIds.join(COLLECTION_FORMATS.csv);
            }

            if (groupNumbers) {
                localVarQueryParameter['group_numbers'] = groupNumbers.join(COLLECTION_FORMATS.csv);
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
         * Returns a round with the given id with basic information and settings.
         * @summary Retrieve a single round of a tournament.
         * @param {string} tournamentId The id of the tournament you want to retrieve data about.
         * @param {string} id The id of the round.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        tournamentsTournamentIdRoundsIdGet: async (tournamentId: string, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tournamentId' is not null or undefined
            assertParamExists('tournamentsTournamentIdRoundsIdGet', 'tournamentId', tournamentId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('tournamentsTournamentIdRoundsIdGet', 'id', id)
            const localVarPath = `/tournaments/{tournament_id}/rounds/{id}`
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
 * OrganizerRoundsApi - functional programming interface
 * @export
 */
export const OrganizerRoundsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OrganizerRoundsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns all rounds with basic information and settings.
         * @summary Retrieve all rounds.
         * @param {string} range A range of requested items using the \&#39;rounds\&#39; unit. The size of the range can not exceed 50. (see [Pagination](https://developer.toornament.com/v2/overview/pagination))
         * @param {Array<string>} [stageIds] A list of stage ids to filter.
         * @param {Array<number>} [stageNumbers] A list of stage numbers to filter.
         * @param {Array<string>} [groupIds] A list of group ids to filter.
         * @param {Array<number>} [groupNumbers] A list of group numbers to filter.
         * @param {Array<string>} [tournamentIds] Only return rounds for the given list of tournaments.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async roundsGet(range: string, stageIds?: Array<string>, stageNumbers?: Array<number>, groupIds?: Array<string>, groupNumbers?: Array<number>, tournamentIds?: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<RoundFully>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.roundsGet(range, stageIds, stageNumbers, groupIds, groupNumbers, tournamentIds, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a round with the given id with basic information and settings.
         * @summary Retrieve a single round.
         * @param {string} id The id of the round.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async roundsIdGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoundFully>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.roundsIdGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns all rounds of a tournament with basic information and settings.
         * @summary Retrieve all rounds of a tournament.
         * @param {string} range A range of requested items using the \&#39;rounds\&#39; unit. The size of the range can not exceed 50. (see [Pagination](https://developer.toornament.com/v2/overview/pagination))
         * @param {string} tournamentId The id of the tournament you want to retrieve data about.
         * @param {Array<string>} [stageIds] A list of stage ids to filter.
         * @param {Array<number>} [stageNumbers] A list of stage numbers to filter.
         * @param {Array<string>} [groupIds] A list of group ids to filter.
         * @param {Array<number>} [groupNumbers] A list of group numbers to filter.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async tournamentsTournamentIdRoundsGet(range: string, tournamentId: string, stageIds?: Array<string>, stageNumbers?: Array<number>, groupIds?: Array<string>, groupNumbers?: Array<number>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<RoundLegacy>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tournamentsTournamentIdRoundsGet(range, tournamentId, stageIds, stageNumbers, groupIds, groupNumbers, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a round with the given id with basic information and settings.
         * @summary Retrieve a single round of a tournament.
         * @param {string} tournamentId The id of the tournament you want to retrieve data about.
         * @param {string} id The id of the round.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async tournamentsTournamentIdRoundsIdGet(tournamentId: string, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoundLegacy>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tournamentsTournamentIdRoundsIdGet(tournamentId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OrganizerRoundsApi - factory interface
 * @export
 */
export const OrganizerRoundsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OrganizerRoundsApiFp(configuration)
    return {
        /**
         * Returns all rounds with basic information and settings.
         * @summary Retrieve all rounds.
         * @param {string} range A range of requested items using the \&#39;rounds\&#39; unit. The size of the range can not exceed 50. (see [Pagination](https://developer.toornament.com/v2/overview/pagination))
         * @param {Array<string>} [stageIds] A list of stage ids to filter.
         * @param {Array<number>} [stageNumbers] A list of stage numbers to filter.
         * @param {Array<string>} [groupIds] A list of group ids to filter.
         * @param {Array<number>} [groupNumbers] A list of group numbers to filter.
         * @param {Array<string>} [tournamentIds] Only return rounds for the given list of tournaments.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roundsGet(range: string, stageIds?: Array<string>, stageNumbers?: Array<number>, groupIds?: Array<string>, groupNumbers?: Array<number>, tournamentIds?: Array<string>, options?: any): AxiosPromise<Array<RoundFully>> {
            return localVarFp.roundsGet(range, stageIds, stageNumbers, groupIds, groupNumbers, tournamentIds, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a round with the given id with basic information and settings.
         * @summary Retrieve a single round.
         * @param {string} id The id of the round.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roundsIdGet(id: string, options?: any): AxiosPromise<RoundFully> {
            return localVarFp.roundsIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns all rounds of a tournament with basic information and settings.
         * @summary Retrieve all rounds of a tournament.
         * @param {string} range A range of requested items using the \&#39;rounds\&#39; unit. The size of the range can not exceed 50. (see [Pagination](https://developer.toornament.com/v2/overview/pagination))
         * @param {string} tournamentId The id of the tournament you want to retrieve data about.
         * @param {Array<string>} [stageIds] A list of stage ids to filter.
         * @param {Array<number>} [stageNumbers] A list of stage numbers to filter.
         * @param {Array<string>} [groupIds] A list of group ids to filter.
         * @param {Array<number>} [groupNumbers] A list of group numbers to filter.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        tournamentsTournamentIdRoundsGet(range: string, tournamentId: string, stageIds?: Array<string>, stageNumbers?: Array<number>, groupIds?: Array<string>, groupNumbers?: Array<number>, options?: any): AxiosPromise<Array<RoundLegacy>> {
            return localVarFp.tournamentsTournamentIdRoundsGet(range, tournamentId, stageIds, stageNumbers, groupIds, groupNumbers, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a round with the given id with basic information and settings.
         * @summary Retrieve a single round of a tournament.
         * @param {string} tournamentId The id of the tournament you want to retrieve data about.
         * @param {string} id The id of the round.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        tournamentsTournamentIdRoundsIdGet(tournamentId: string, id: string, options?: any): AxiosPromise<RoundLegacy> {
            return localVarFp.tournamentsTournamentIdRoundsIdGet(tournamentId, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OrganizerRoundsApi - object-oriented interface
 * @export
 * @class OrganizerRoundsApi
 * @extends {BaseAPI}
 */
export class OrganizerRoundsApi extends BaseAPI {
    /**
     * Returns all rounds with basic information and settings.
     * @summary Retrieve all rounds.
     * @param {string} range A range of requested items using the \&#39;rounds\&#39; unit. The size of the range can not exceed 50. (see [Pagination](https://developer.toornament.com/v2/overview/pagination))
     * @param {Array<string>} [stageIds] A list of stage ids to filter.
     * @param {Array<number>} [stageNumbers] A list of stage numbers to filter.
     * @param {Array<string>} [groupIds] A list of group ids to filter.
     * @param {Array<number>} [groupNumbers] A list of group numbers to filter.
     * @param {Array<string>} [tournamentIds] Only return rounds for the given list of tournaments.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerRoundsApi
     */
    public roundsGet(range: string, stageIds?: Array<string>, stageNumbers?: Array<number>, groupIds?: Array<string>, groupNumbers?: Array<number>, tournamentIds?: Array<string>, options?: AxiosRequestConfig) {
        return OrganizerRoundsApiFp(this.configuration).roundsGet(range, stageIds, stageNumbers, groupIds, groupNumbers, tournamentIds, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a round with the given id with basic information and settings.
     * @summary Retrieve a single round.
     * @param {string} id The id of the round.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerRoundsApi
     */
    public roundsIdGet(id: string, options?: AxiosRequestConfig) {
        return OrganizerRoundsApiFp(this.configuration).roundsIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns all rounds of a tournament with basic information and settings.
     * @summary Retrieve all rounds of a tournament.
     * @param {string} range A range of requested items using the \&#39;rounds\&#39; unit. The size of the range can not exceed 50. (see [Pagination](https://developer.toornament.com/v2/overview/pagination))
     * @param {string} tournamentId The id of the tournament you want to retrieve data about.
     * @param {Array<string>} [stageIds] A list of stage ids to filter.
     * @param {Array<number>} [stageNumbers] A list of stage numbers to filter.
     * @param {Array<string>} [groupIds] A list of group ids to filter.
     * @param {Array<number>} [groupNumbers] A list of group numbers to filter.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof OrganizerRoundsApi
     */
    public tournamentsTournamentIdRoundsGet(range: string, tournamentId: string, stageIds?: Array<string>, stageNumbers?: Array<number>, groupIds?: Array<string>, groupNumbers?: Array<number>, options?: AxiosRequestConfig) {
        return OrganizerRoundsApiFp(this.configuration).tournamentsTournamentIdRoundsGet(range, tournamentId, stageIds, stageNumbers, groupIds, groupNumbers, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a round with the given id with basic information and settings.
     * @summary Retrieve a single round of a tournament.
     * @param {string} tournamentId The id of the tournament you want to retrieve data about.
     * @param {string} id The id of the round.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof OrganizerRoundsApi
     */
    public tournamentsTournamentIdRoundsIdGet(tournamentId: string, id: string, options?: AxiosRequestConfig) {
        return OrganizerRoundsApiFp(this.configuration).tournamentsTournamentIdRoundsIdGet(tournamentId, id, options).then((request) => request(this.axios, this.basePath));
    }
}

