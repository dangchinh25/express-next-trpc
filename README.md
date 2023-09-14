# Thoughs

- tRPC is pretty nice but it doesn’t provide any mechanism for sharing types between calls, mostly relies on type inference of typescript

  - The adaptor to work with express is not a way to replace traditional REST api implementation, but more about a way to have both RPC calls and REST Api call
  - Haven’t really found a good reason to use it yet, aside from saving time for personal project (backend & frontend in the same repo), but in real work, probably not?

  > TRPC only works if client and server are on the same repo, so that they can share the `AppRouter` type definition, which enables the whole type safety thing, there's no magic here, just literally sharing type object between client and server. If BE and FE are on different repos, it doesn't work at all => Understandable why it's good for solo dev as it saves quite a lot of time

  - This is only specific to tRPC, not gRPC, which is totally different

## Conclusion

- tRPC + NextJs for simple solo project
  - Tbh, most indie project should be fine with just tRPC + NextJs stack, and deploy everything on Vercel (with Serverless/Edge Function for NextJs `Api Routes`)
- REST with separated BE/FE on different for larger project
