import Lollygag from '@lollygag/core';
import livedev from '@lollygag/livedev';
import markdown from '@lollygag/markdown';
import templates from '@lollygag/templates';
import sass from '@lollygag/sass';

const isProduction = process.env.NODE_ENV === 'production';
const lollygag = new Lollygag();

lollygag
    .config({
        prettyUrls: true,
    })
    .meta({
        siteName: 'Simpleton CSS',
        siteDescription: 'A glorified CSS reset.',
    })
    .do(markdown())
    .do(templates())
    .do(sass());

if(!isProduction) {
    lollygag.do(
        livedev({
            serverPort: 3003,
            livereloadPort: 35555,
            patterns: {
                'files/**/*': true,
                'templates/**/*': '**/*.md',
            },
            injectLivereloadScript: true,
        })
    );
}

lollygag.build({fullBuild: true});
