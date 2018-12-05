import { Integration, SentryEvent } from '@sentry/types';
/** JSDoc */
interface InboundFiltersOptions {
    blacklistUrls?: Array<string | RegExp>;
    ignoreErrors?: Array<string | RegExp>;
    ignoreInternal?: boolean;
    whitelistUrls?: Array<string | RegExp>;
}
/** Inbound filters configurable by the user */
export declare class InboundFilters implements Integration {
    private readonly options;
    /**
     * @inheritDoc
     */
    name: string;
    /**
     * @inheritDoc
     */
    static id: string;
    constructor(options?: InboundFiltersOptions);
    /**
     * @inheritDoc
     */
    setupOnce(): void;
    /** JSDoc */
    shouldDropEvent(event: SentryEvent, options: InboundFiltersOptions): boolean;
    /** JSDoc */
    isSentryError(event: SentryEvent, options?: InboundFiltersOptions): boolean;
    /** JSDoc */
    isIgnoredError(event: SentryEvent, options?: InboundFiltersOptions): boolean;
    /** JSDoc */
    isBlacklistedUrl(event: SentryEvent, options?: InboundFiltersOptions): boolean;
    /** JSDoc */
    isWhitelistedUrl(event: SentryEvent, options?: InboundFiltersOptions): boolean;
    /** JSDoc */
    mergeOptions(clientOptions?: InboundFiltersOptions): InboundFiltersOptions;
    /** JSDoc */
    private isMatchingPattern;
    /** JSDoc */
    private getPossibleEventMessages;
    /** JSDoc */
    private getEventFilterUrl;
}
export {};
