/// <reference types="node" />
import { SentryEvent } from '@sentry/types';
import * as http from 'http';
declare type TransactionTypes = 'path' | 'methodPath' | 'handler';
/**
 * Enriches passed event with request data.
 *
 *
 * @param event Will be mutated and enriched with req data
 * @param req Request object
 * @param options object containing flags to enable functionality
 */
export declare function parseRequest(event: SentryEvent, req: {
    [key: string]: any;
}, options?: {
    request?: boolean;
    serverName?: boolean;
    transaction?: boolean | TransactionTypes;
    user?: boolean | string[];
    version?: boolean;
}): SentryEvent;
/** JSDoc */
export declare function requestHandler(options?: {
    request?: boolean;
    serverName?: boolean;
    transaction?: boolean | TransactionTypes;
    user?: boolean | string[];
    version?: boolean;
}): (req: http.IncomingMessage, res: http.ServerResponse, next: (error?: any) => void) => void;
/** JSDoc */
interface MiddlewareError extends Error {
    status?: number | string;
    statusCode?: number | string;
    status_code?: number | string;
    output?: {
        statusCode?: number | string;
    };
}
/** JSDoc */
export declare function errorHandler(): (error: MiddlewareError, req: http.IncomingMessage, res: http.ServerResponse, next: (error: MiddlewareError) => void) => void;
/** JSDoc */
export declare function defaultOnFatalError(error: Error): void;
export {};
