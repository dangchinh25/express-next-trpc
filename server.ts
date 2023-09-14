import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { z } from 'zod';

export const createContext = ( { req, res }: trpcExpress.CreateExpressContextOptions ) => ( {} );
type Context = inferAsyncReturnType<typeof createContext>;

export const t = initTRPC.context<Context>().create();

export const appRouter = t.router( {
    getUser: t.procedure.input( z.string() ).query( ( opts ) => {
        return { id: opts.input, name: 'Bilbo' };
    } )
    , createUser: t.procedure
        .input( z.object( { name: z.string().min( 5 ) } ) )
        .mutation( async ( opts ) => {
            // use your ORM of choice
            return { data: opts.input };
        } )
} );

// export type definition of API
export type AppRouter = typeof appRouter;