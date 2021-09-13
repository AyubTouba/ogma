---
id: service
title: NestJS Service
---

# @ogma/nestjs-module Service

The `@ogma/nestjs-module` comes with its own decorator to be used with `OgmaModule.forFeature()`, very similar to `@nestjs/typeorm` and `@nestjs/mongoose`. To inject an `OgmaService`, simply use the `@OgmaLogger()` decorator and provide the context for the injection. E.g.

```ts
@Module({
  imports: [OgmaModule.forFeature(FooService)],
  providers: [FooService]
})
export class FooModule {}
```

```ts
@Injectable()
export class FooService {
  constructor(
    @OgmaLogger(FooService) private readonly logger: OgmaService
  ) {}
}
```

And as `OgmaService` implements Nest's `LoggerService` you can simply use the `LoggerService` type instead in case you want to easily be able to swap out loggers in the future.

## Request Scoped Logger

If you are using a request scoped logger, denoted by adding `{ addRequestId: true }` in the `OgmaModule.forFeature()`, then you'll need to use `@OgmaLoggerRequestScoped()` instead of `@OgmaLogger()`. This is to keep the injection tokens easily separated under the hood.

:::warning

**_[Please make sure you understand the implications of using a request scoped service!](https://docs.nestjs.com/fundamentals/injection-scopes#injection-scopes)_**

:::

## Methods

For the most part, all of the methods for the `OgmaService` are the same as using `Ogma` directly, with the exception of being able to pass `application` to the optional `meta` parameter.

### Meta

The `meta` parameter for all of the logging methods (`info`, `verbose`, `debug`, `warn`, `fatal`, `silly`, and `error`) is an optional parameter where you can pass either a string for a separate context in the log, or an object with additional data defined in any way you would please. This is great for use with log aggregators like [DataDog](https://www.datadoghq.com/) or [LogDNA](https://www.logdna.com/).

### error

You'll also notice that `error` has a slightly different signature than the other logging methods. This is due to keeping in line with Nest's `LoggerService` interface. You can decide to pass a `trace` as a second parameter and a `meta` object as the third, or just pass the `meta` object as the second parameter and Ogma will pass the information on as necessary to the appropriate methods.

## Testing

If you end up using the `@OgmaLogger()` decorators and dependency injection, then you'll undoubtedly run into the need to mock out the logger during tests. For this, `@ogma/nestjs-module` provides the two token creation methods for you, so all you need to do is provide a mock custom provider like so:

```ts
const modRef = await Test.createTestingModule({
  providers: [
    FooService,
    {
      provide: createProviderToken(FooService),
      useValue: {
        log: jest.fn()
        // other logger methods that are used
      }
    }
  ]
}).compile();
```

## Replacing Nest's Logger

As Nest provides developers the ability to call `app.useLogger()` it's only fair to show how to get the root `OgmaService` instance out of the Nest container so it can be set for the entire application. Just like any other DI component, you can use `app.get()` to get the root service and pass it to Nest for general use

```ts
const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true
  });
  const ogma = app.get(OgmaService, { strict: false });
  app.useLogger(ogma);
  await app.listen(3000);
};
```

:::info

`{ bufferLogs: true }` was added in Nest v8. For before v8, you can either pass `{logger: false}` or no options object

:::