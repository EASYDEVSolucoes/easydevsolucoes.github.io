import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'EasyDev Soluções',
        short_name: 'EasyDev',
        description: 'Transformando ideias em soluções digitais inovadoras. Especialistas em desenvolvimento de software e consultoria em TI.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#B8860B', // Matching the Primary/Gold color
        icons: [
            {
                src: '/favicon/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/favicon/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
}
