// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

export class QueryParameterNames {
    public static get TestHooksParamName(): string {
        return "testhooks";
    }
    public static get ConnectionIdHeader(): string {
        return "X-ConnectionId";
    }
    public static get DeploymentIdParamName(): string {
        return "cid";
    }
    public static get FormatParamName(): string {
        return "format";
    }
    public static get LanguageParamName(): string {
        return "language";
    }
    public static get TranslationFromParamName(): string {
        return "from";
    }
    public static get TranslationToParamName(): string {
        return "to";
    }
    public static get Profanify(): string {
        return "profanity";
    }
    public static get EnableAudioLogging(): string {
        return "storeAudio";
    }
    public static get EnableWordLevelTimestamps(): string {
        return "wordLevelTimestamps";
    }
    public static get InitialSilenceTimeoutMs(): string {
        return "initialSilenceTimeoutMs";
    }
    public static get EndSilenceTimeoutMs(): string {
        return "endSilenceTimeoutMs";
    }
    public static get StableIntermediateThreshold(): string {
        return "stableIntermediateThreshold";
    }
    public static get StableTranslation(): string {
        return "stableTranslation";
    }
}
