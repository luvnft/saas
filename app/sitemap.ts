import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: 'https://cogify.social/'
        },
        {
            url: 'https://cogify.social/help'
        },
        {
            url: 'https://cogify.social/about-us'
        },
        {
            url: 'https://cogify.social/feedback'
        },
        {
            url: 'https://cogify.social/join-us'
        },
        {
            url: 'https://cogify.social/privacy-policy'
        },
        {
            url: 'https://cogify.social/term-of-service'
        },
        {
            url: 'https://cogify.social/refund'
        },
    ]
}