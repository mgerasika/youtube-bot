import { createUrls, EMPTY_URL_ITEM, IUrlItem } from 'react-create-url';

interface IApiUrl {
    api: {
        user: {
            id: (id?: string) => IUrlItem;
        };
        imdb: {
            id: (id?: string) => IUrlItem;
        };
        movie: {
            search: IUrlItem;
            id: (id?: string) => IUrlItem;
        };
        tools: {
            getHurtomAll: IUrlItem;
            searchImdbInfo: IUrlItem;
            setup: IUrlItem;
        };
    };
}

export const API_URL = createUrls<IApiUrl>({
    api: {
        user: {
            id: (id?: string) => EMPTY_URL_ITEM,
        },
        imdb: {
            id: (id?: string) => EMPTY_URL_ITEM,
        },
        movie: {
            search: EMPTY_URL_ITEM,
            id: (id?: string) => EMPTY_URL_ITEM,
        },
        tools: {
            getHurtomAll: EMPTY_URL_ITEM,
            setup: EMPTY_URL_ITEM,
            searchImdbInfo: EMPTY_URL_ITEM,
        },
    },
});
