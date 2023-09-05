import {router} from "@/server/trpc";
import {todoRouter} from "@/server/routers/todos";


/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = router({
    todo: todoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
