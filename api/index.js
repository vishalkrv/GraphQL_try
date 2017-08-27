import Koa from 'koa';
import koaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import { graphqlKoa } from 'graphql-server-koa';
import schema from './presentation/schema';
import graphiql from 'koa-graphiql';
import Hero from './business/hero';
import { parseAuthorizationHeader } from './utils';

const app = new Koa();
const router = new koaRouter();

router.get('/', ctx => {
    ctx.body = 'Hello World!';
});
router.post(
    '/api',
    graphqlKoa(async ctx => {
        return {
            schema: schema,
            context: {
                authToken: parseAuthorizationHeader(ctx.req),
                dataLoaders: {
                    hero: Hero.getLoaders(),                    
                }
            },
            debug: true,
        };
    })
);
router.get('/graphiql', graphiql(async (ctx) => ({
    url: '/api',
})));
app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);

console.log('Server is up and running');