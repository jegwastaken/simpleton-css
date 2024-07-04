import Lollygag from '@lollygag/lollygag';
import livedev from '@lollygag/lollygag/dist/workers/livedev';
import markdown from '@lollygag/lollygag/dist/workers/markdown';
import scss from '@lollygag/lollygag/dist/workers/scss';
import templates from '@lollygag/lollygag/dist/workers/templates';

const isProduction = process.env.NODE_ENV === 'production';
const lollygag = new Lollygag();

lollygag
    .config({
        prettyUrls: true,
    })
    .contentDir('files')
    .outputDir('public')
    .sitemeta({
        siteName: 'Simpleton CSS',
        siteDescription: 'A glorified CSS reset.',
    })
    .do(markdown())
    .do(templates())
    .do(scss());

if (!isProduction) {
    lollygag.do(
        livedev({
            serverPort: 3003,
            livereloadHost: 'localhost',
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
