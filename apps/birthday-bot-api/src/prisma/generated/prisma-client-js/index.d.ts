
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model UserModel
 * 
 */
export type UserModel = {
  id: number
  firstName: string
  username: string
  roleId: number
}

/**
 * Model UserListModel
 * 
 */
export type UserListModel = {
  id: number
  name: string
  surname: string
  birthday: Date
}

/**
 * Model RoleModel
 * 
 */
export type RoleModel = {
  id: number
  name: EUserRole
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const EUserRole: {
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR',
  USER: 'USER'
};

export type EUserRole = (typeof EUserRole)[keyof typeof EUserRole]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserModels
 * const userModels = await prisma.userModel.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserModels
   * const userModels = await prisma.userModel.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.userModel`: Exposes CRUD operations for the **UserModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserModels
    * const userModels = await prisma.userModel.findMany()
    * ```
    */
  get userModel(): Prisma.UserModelDelegate<GlobalReject>;

  /**
   * `prisma.userListModel`: Exposes CRUD operations for the **UserListModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserListModels
    * const userListModels = await prisma.userListModel.findMany()
    * ```
    */
  get userListModel(): Prisma.UserListModelDelegate<GlobalReject>;

  /**
   * `prisma.roleModel`: Exposes CRUD operations for the **RoleModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoleModels
    * const roleModels = await prisma.roleModel.findMany()
    * ```
    */
  get roleModel(): Prisma.RoleModelDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.0.0
   * Query Engine version: da41d2bb3406da22087b849f0e911199ba4fbf11
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    UserModel: 'UserModel',
    UserListModel: 'UserListModel',
    RoleModel: 'RoleModel'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model UserModel
   */


  export type AggregateUserModel = {
    _count: UserModelCountAggregateOutputType | null
    _avg: UserModelAvgAggregateOutputType | null
    _sum: UserModelSumAggregateOutputType | null
    _min: UserModelMinAggregateOutputType | null
    _max: UserModelMaxAggregateOutputType | null
  }

  export type UserModelAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserModelSumAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserModelMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    username: string | null
    roleId: number | null
  }

  export type UserModelMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    username: string | null
    roleId: number | null
  }

  export type UserModelCountAggregateOutputType = {
    id: number
    firstName: number
    username: number
    roleId: number
    _all: number
  }


  export type UserModelAvgAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserModelSumAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserModelMinAggregateInputType = {
    id?: true
    firstName?: true
    username?: true
    roleId?: true
  }

  export type UserModelMaxAggregateInputType = {
    id?: true
    firstName?: true
    username?: true
    roleId?: true
  }

  export type UserModelCountAggregateInputType = {
    id?: true
    firstName?: true
    username?: true
    roleId?: true
    _all?: true
  }

  export type UserModelAggregateArgs = {
    /**
     * Filter which UserModel to aggregate.
     * 
    **/
    where?: UserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModels to fetch.
     * 
    **/
    orderBy?: Enumerable<UserModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserModels
    **/
    _count?: true | UserModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserModelMaxAggregateInputType
  }

  export type GetUserModelAggregateType<T extends UserModelAggregateArgs> = {
        [P in keyof T & keyof AggregateUserModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserModel[P]>
      : GetScalarType<T[P], AggregateUserModel[P]>
  }




  export type UserModelGroupByArgs = {
    where?: UserModelWhereInput
    orderBy?: Enumerable<UserModelOrderByWithAggregationInput>
    by: Array<UserModelScalarFieldEnum>
    having?: UserModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserModelCountAggregateInputType | true
    _avg?: UserModelAvgAggregateInputType
    _sum?: UserModelSumAggregateInputType
    _min?: UserModelMinAggregateInputType
    _max?: UserModelMaxAggregateInputType
  }


  export type UserModelGroupByOutputType = {
    id: number
    firstName: string
    username: string
    roleId: number
    _count: UserModelCountAggregateOutputType | null
    _avg: UserModelAvgAggregateOutputType | null
    _sum: UserModelSumAggregateOutputType | null
    _min: UserModelMinAggregateOutputType | null
    _max: UserModelMaxAggregateOutputType | null
  }

  type GetUserModelGroupByPayload<T extends UserModelGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserModelGroupByOutputType[P]>
            : GetScalarType<T[P], UserModelGroupByOutputType[P]>
        }
      >
    >


  export type UserModelSelect = {
    id?: boolean
    firstName?: boolean
    username?: boolean
    roleId?: boolean
  }

  export type UserModelGetPayload<
    S extends boolean | null | undefined | UserModelArgs,
    U = keyof S
      > = S extends true
        ? UserModel
    : S extends undefined
    ? never
    : S extends UserModelArgs | UserModelFindManyArgs
    ?'include' extends U
    ? UserModel 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserModel ? UserModel[P] : never
  } 
    : UserModel
  : UserModel


  type UserModelCountArgs = Merge<
    Omit<UserModelFindManyArgs, 'select' | 'include'> & {
      select?: UserModelCountAggregateInputType | true
    }
  >

  export interface UserModelDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one UserModel that matches the filter.
     * @param {UserModelFindUniqueArgs} args - Arguments to find a UserModel
     * @example
     * // Get one UserModel
     * const userModel = await prisma.userModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserModel'> extends True ? CheckSelect<T, Prisma__UserModelClient<UserModel>, Prisma__UserModelClient<UserModelGetPayload<T>>> : CheckSelect<T, Prisma__UserModelClient<UserModel | null >, Prisma__UserModelClient<UserModelGetPayload<T> | null >>

    /**
     * Find the first UserModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelFindFirstArgs} args - Arguments to find a UserModel
     * @example
     * // Get one UserModel
     * const userModel = await prisma.userModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserModel'> extends True ? CheckSelect<T, Prisma__UserModelClient<UserModel>, Prisma__UserModelClient<UserModelGetPayload<T>>> : CheckSelect<T, Prisma__UserModelClient<UserModel | null >, Prisma__UserModelClient<UserModelGetPayload<T> | null >>

    /**
     * Find zero or more UserModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserModels
     * const userModels = await prisma.userModel.findMany()
     * 
     * // Get first 10 UserModels
     * const userModels = await prisma.userModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userModelWithIdOnly = await prisma.userModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserModelFindManyArgs>(
      args?: SelectSubset<T, UserModelFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UserModel>>, PrismaPromise<Array<UserModelGetPayload<T>>>>

    /**
     * Create a UserModel.
     * @param {UserModelCreateArgs} args - Arguments to create a UserModel.
     * @example
     * // Create one UserModel
     * const UserModel = await prisma.userModel.create({
     *   data: {
     *     // ... data to create a UserModel
     *   }
     * })
     * 
    **/
    create<T extends UserModelCreateArgs>(
      args: SelectSubset<T, UserModelCreateArgs>
    ): CheckSelect<T, Prisma__UserModelClient<UserModel>, Prisma__UserModelClient<UserModelGetPayload<T>>>

    /**
     * Create many UserModels.
     *     @param {UserModelCreateManyArgs} args - Arguments to create many UserModels.
     *     @example
     *     // Create many UserModels
     *     const userModel = await prisma.userModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserModelCreateManyArgs>(
      args?: SelectSubset<T, UserModelCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserModel.
     * @param {UserModelDeleteArgs} args - Arguments to delete one UserModel.
     * @example
     * // Delete one UserModel
     * const UserModel = await prisma.userModel.delete({
     *   where: {
     *     // ... filter to delete one UserModel
     *   }
     * })
     * 
    **/
    delete<T extends UserModelDeleteArgs>(
      args: SelectSubset<T, UserModelDeleteArgs>
    ): CheckSelect<T, Prisma__UserModelClient<UserModel>, Prisma__UserModelClient<UserModelGetPayload<T>>>

    /**
     * Update one UserModel.
     * @param {UserModelUpdateArgs} args - Arguments to update one UserModel.
     * @example
     * // Update one UserModel
     * const userModel = await prisma.userModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserModelUpdateArgs>(
      args: SelectSubset<T, UserModelUpdateArgs>
    ): CheckSelect<T, Prisma__UserModelClient<UserModel>, Prisma__UserModelClient<UserModelGetPayload<T>>>

    /**
     * Delete zero or more UserModels.
     * @param {UserModelDeleteManyArgs} args - Arguments to filter UserModels to delete.
     * @example
     * // Delete a few UserModels
     * const { count } = await prisma.userModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserModelDeleteManyArgs>(
      args?: SelectSubset<T, UserModelDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserModels
     * const userModel = await prisma.userModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserModelUpdateManyArgs>(
      args: SelectSubset<T, UserModelUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserModel.
     * @param {UserModelUpsertArgs} args - Arguments to update or create a UserModel.
     * @example
     * // Update or create a UserModel
     * const userModel = await prisma.userModel.upsert({
     *   create: {
     *     // ... data to create a UserModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserModel we want to update
     *   }
     * })
    **/
    upsert<T extends UserModelUpsertArgs>(
      args: SelectSubset<T, UserModelUpsertArgs>
    ): CheckSelect<T, Prisma__UserModelClient<UserModel>, Prisma__UserModelClient<UserModelGetPayload<T>>>

    /**
     * Find one UserModel that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserModelFindUniqueOrThrowArgs} args - Arguments to find a UserModel
     * @example
     * // Get one UserModel
     * const userModel = await prisma.userModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserModelFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserModelClient<UserModel>, Prisma__UserModelClient<UserModelGetPayload<T>>>

    /**
     * Find the first UserModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelFindFirstOrThrowArgs} args - Arguments to find a UserModel
     * @example
     * // Get one UserModel
     * const userModel = await prisma.userModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserModelFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserModelClient<UserModel>, Prisma__UserModelClient<UserModelGetPayload<T>>>

    /**
     * Count the number of UserModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelCountArgs} args - Arguments to filter UserModels to count.
     * @example
     * // Count the number of UserModels
     * const count = await prisma.userModel.count({
     *   where: {
     *     // ... the filter for the UserModels we want to count
     *   }
     * })
    **/
    count<T extends UserModelCountArgs>(
      args?: Subset<T, UserModelCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserModelAggregateArgs>(args: Subset<T, UserModelAggregateArgs>): PrismaPromise<GetUserModelAggregateType<T>>

    /**
     * Group by UserModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserModelGroupByArgs['orderBy'] }
        : { orderBy?: UserModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserModelGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserModelClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * UserModel base type for findUnique actions
   */
  export type UserModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserModel
     * 
    **/
    select?: UserModelSelect | null
    /**
     * Filter, which UserModel to fetch.
     * 
    **/
    where: UserModelWhereUniqueInput
  }

  /**
   * UserModel: findUnique
   */
  export interface UserModelFindUniqueArgs extends UserModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserModel base type for findFirst actions
   */
  export type UserModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserModel
     * 
    **/
    select?: UserModelSelect | null
    /**
     * Filter, which UserModel to fetch.
     * 
    **/
    where?: UserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModels to fetch.
     * 
    **/
    orderBy?: Enumerable<UserModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserModels.
     * 
    **/
    cursor?: UserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserModels.
     * 
    **/
    distinct?: Enumerable<UserModelScalarFieldEnum>
  }

  /**
   * UserModel: findFirst
   */
  export interface UserModelFindFirstArgs extends UserModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserModel findMany
   */
  export type UserModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserModel
     * 
    **/
    select?: UserModelSelect | null
    /**
     * Filter, which UserModels to fetch.
     * 
    **/
    where?: UserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModels to fetch.
     * 
    **/
    orderBy?: Enumerable<UserModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserModels.
     * 
    **/
    cursor?: UserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModels.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserModelScalarFieldEnum>
  }


  /**
   * UserModel create
   */
  export type UserModelCreateArgs = {
    /**
     * Select specific fields to fetch from the UserModel
     * 
    **/
    select?: UserModelSelect | null
    /**
     * The data needed to create a UserModel.
     * 
    **/
    data: XOR<UserModelCreateInput, UserModelUncheckedCreateInput>
  }


  /**
   * UserModel createMany
   */
  export type UserModelCreateManyArgs = {
    /**
     * The data used to create many UserModels.
     * 
    **/
    data: Enumerable<UserModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserModel update
   */
  export type UserModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserModel
     * 
    **/
    select?: UserModelSelect | null
    /**
     * The data needed to update a UserModel.
     * 
    **/
    data: XOR<UserModelUpdateInput, UserModelUncheckedUpdateInput>
    /**
     * Choose, which UserModel to update.
     * 
    **/
    where: UserModelWhereUniqueInput
  }


  /**
   * UserModel updateMany
   */
  export type UserModelUpdateManyArgs = {
    /**
     * The data used to update UserModels.
     * 
    **/
    data: XOR<UserModelUpdateManyMutationInput, UserModelUncheckedUpdateManyInput>
    /**
     * Filter which UserModels to update
     * 
    **/
    where?: UserModelWhereInput
  }


  /**
   * UserModel upsert
   */
  export type UserModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserModel
     * 
    **/
    select?: UserModelSelect | null
    /**
     * The filter to search for the UserModel to update in case it exists.
     * 
    **/
    where: UserModelWhereUniqueInput
    /**
     * In case the UserModel found by the `where` argument doesn't exist, create a new UserModel with this data.
     * 
    **/
    create: XOR<UserModelCreateInput, UserModelUncheckedCreateInput>
    /**
     * In case the UserModel was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserModelUpdateInput, UserModelUncheckedUpdateInput>
  }


  /**
   * UserModel delete
   */
  export type UserModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserModel
     * 
    **/
    select?: UserModelSelect | null
    /**
     * Filter which UserModel to delete.
     * 
    **/
    where: UserModelWhereUniqueInput
  }


  /**
   * UserModel deleteMany
   */
  export type UserModelDeleteManyArgs = {
    /**
     * Filter which UserModels to delete
     * 
    **/
    where?: UserModelWhereInput
  }


  /**
   * UserModel: findUniqueOrThrow
   */
  export type UserModelFindUniqueOrThrowArgs = UserModelFindUniqueArgsBase
      

  /**
   * UserModel: findFirstOrThrow
   */
  export type UserModelFindFirstOrThrowArgs = UserModelFindFirstArgsBase
      

  /**
   * UserModel without action
   */
  export type UserModelArgs = {
    /**
     * Select specific fields to fetch from the UserModel
     * 
    **/
    select?: UserModelSelect | null
  }



  /**
   * Model UserListModel
   */


  export type AggregateUserListModel = {
    _count: UserListModelCountAggregateOutputType | null
    _avg: UserListModelAvgAggregateOutputType | null
    _sum: UserListModelSumAggregateOutputType | null
    _min: UserListModelMinAggregateOutputType | null
    _max: UserListModelMaxAggregateOutputType | null
  }

  export type UserListModelAvgAggregateOutputType = {
    id: number | null
  }

  export type UserListModelSumAggregateOutputType = {
    id: number | null
  }

  export type UserListModelMinAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    birthday: Date | null
  }

  export type UserListModelMaxAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    birthday: Date | null
  }

  export type UserListModelCountAggregateOutputType = {
    id: number
    name: number
    surname: number
    birthday: number
    _all: number
  }


  export type UserListModelAvgAggregateInputType = {
    id?: true
  }

  export type UserListModelSumAggregateInputType = {
    id?: true
  }

  export type UserListModelMinAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    birthday?: true
  }

  export type UserListModelMaxAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    birthday?: true
  }

  export type UserListModelCountAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    birthday?: true
    _all?: true
  }

  export type UserListModelAggregateArgs = {
    /**
     * Filter which UserListModel to aggregate.
     * 
    **/
    where?: UserListModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserListModels to fetch.
     * 
    **/
    orderBy?: Enumerable<UserListModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserListModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserListModels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserListModels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserListModels
    **/
    _count?: true | UserListModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserListModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserListModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserListModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserListModelMaxAggregateInputType
  }

  export type GetUserListModelAggregateType<T extends UserListModelAggregateArgs> = {
        [P in keyof T & keyof AggregateUserListModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserListModel[P]>
      : GetScalarType<T[P], AggregateUserListModel[P]>
  }




  export type UserListModelGroupByArgs = {
    where?: UserListModelWhereInput
    orderBy?: Enumerable<UserListModelOrderByWithAggregationInput>
    by: Array<UserListModelScalarFieldEnum>
    having?: UserListModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserListModelCountAggregateInputType | true
    _avg?: UserListModelAvgAggregateInputType
    _sum?: UserListModelSumAggregateInputType
    _min?: UserListModelMinAggregateInputType
    _max?: UserListModelMaxAggregateInputType
  }


  export type UserListModelGroupByOutputType = {
    id: number
    name: string
    surname: string
    birthday: Date
    _count: UserListModelCountAggregateOutputType | null
    _avg: UserListModelAvgAggregateOutputType | null
    _sum: UserListModelSumAggregateOutputType | null
    _min: UserListModelMinAggregateOutputType | null
    _max: UserListModelMaxAggregateOutputType | null
  }

  type GetUserListModelGroupByPayload<T extends UserListModelGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserListModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserListModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserListModelGroupByOutputType[P]>
            : GetScalarType<T[P], UserListModelGroupByOutputType[P]>
        }
      >
    >


  export type UserListModelSelect = {
    id?: boolean
    name?: boolean
    surname?: boolean
    birthday?: boolean
  }

  export type UserListModelGetPayload<
    S extends boolean | null | undefined | UserListModelArgs,
    U = keyof S
      > = S extends true
        ? UserListModel
    : S extends undefined
    ? never
    : S extends UserListModelArgs | UserListModelFindManyArgs
    ?'include' extends U
    ? UserListModel 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserListModel ? UserListModel[P] : never
  } 
    : UserListModel
  : UserListModel


  type UserListModelCountArgs = Merge<
    Omit<UserListModelFindManyArgs, 'select' | 'include'> & {
      select?: UserListModelCountAggregateInputType | true
    }
  >

  export interface UserListModelDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one UserListModel that matches the filter.
     * @param {UserListModelFindUniqueArgs} args - Arguments to find a UserListModel
     * @example
     * // Get one UserListModel
     * const userListModel = await prisma.userListModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserListModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserListModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserListModel'> extends True ? CheckSelect<T, Prisma__UserListModelClient<UserListModel>, Prisma__UserListModelClient<UserListModelGetPayload<T>>> : CheckSelect<T, Prisma__UserListModelClient<UserListModel | null >, Prisma__UserListModelClient<UserListModelGetPayload<T> | null >>

    /**
     * Find the first UserListModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserListModelFindFirstArgs} args - Arguments to find a UserListModel
     * @example
     * // Get one UserListModel
     * const userListModel = await prisma.userListModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserListModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserListModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserListModel'> extends True ? CheckSelect<T, Prisma__UserListModelClient<UserListModel>, Prisma__UserListModelClient<UserListModelGetPayload<T>>> : CheckSelect<T, Prisma__UserListModelClient<UserListModel | null >, Prisma__UserListModelClient<UserListModelGetPayload<T> | null >>

    /**
     * Find zero or more UserListModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserListModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserListModels
     * const userListModels = await prisma.userListModel.findMany()
     * 
     * // Get first 10 UserListModels
     * const userListModels = await prisma.userListModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userListModelWithIdOnly = await prisma.userListModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserListModelFindManyArgs>(
      args?: SelectSubset<T, UserListModelFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UserListModel>>, PrismaPromise<Array<UserListModelGetPayload<T>>>>

    /**
     * Create a UserListModel.
     * @param {UserListModelCreateArgs} args - Arguments to create a UserListModel.
     * @example
     * // Create one UserListModel
     * const UserListModel = await prisma.userListModel.create({
     *   data: {
     *     // ... data to create a UserListModel
     *   }
     * })
     * 
    **/
    create<T extends UserListModelCreateArgs>(
      args: SelectSubset<T, UserListModelCreateArgs>
    ): CheckSelect<T, Prisma__UserListModelClient<UserListModel>, Prisma__UserListModelClient<UserListModelGetPayload<T>>>

    /**
     * Create many UserListModels.
     *     @param {UserListModelCreateManyArgs} args - Arguments to create many UserListModels.
     *     @example
     *     // Create many UserListModels
     *     const userListModel = await prisma.userListModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserListModelCreateManyArgs>(
      args?: SelectSubset<T, UserListModelCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserListModel.
     * @param {UserListModelDeleteArgs} args - Arguments to delete one UserListModel.
     * @example
     * // Delete one UserListModel
     * const UserListModel = await prisma.userListModel.delete({
     *   where: {
     *     // ... filter to delete one UserListModel
     *   }
     * })
     * 
    **/
    delete<T extends UserListModelDeleteArgs>(
      args: SelectSubset<T, UserListModelDeleteArgs>
    ): CheckSelect<T, Prisma__UserListModelClient<UserListModel>, Prisma__UserListModelClient<UserListModelGetPayload<T>>>

    /**
     * Update one UserListModel.
     * @param {UserListModelUpdateArgs} args - Arguments to update one UserListModel.
     * @example
     * // Update one UserListModel
     * const userListModel = await prisma.userListModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserListModelUpdateArgs>(
      args: SelectSubset<T, UserListModelUpdateArgs>
    ): CheckSelect<T, Prisma__UserListModelClient<UserListModel>, Prisma__UserListModelClient<UserListModelGetPayload<T>>>

    /**
     * Delete zero or more UserListModels.
     * @param {UserListModelDeleteManyArgs} args - Arguments to filter UserListModels to delete.
     * @example
     * // Delete a few UserListModels
     * const { count } = await prisma.userListModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserListModelDeleteManyArgs>(
      args?: SelectSubset<T, UserListModelDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserListModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserListModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserListModels
     * const userListModel = await prisma.userListModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserListModelUpdateManyArgs>(
      args: SelectSubset<T, UserListModelUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserListModel.
     * @param {UserListModelUpsertArgs} args - Arguments to update or create a UserListModel.
     * @example
     * // Update or create a UserListModel
     * const userListModel = await prisma.userListModel.upsert({
     *   create: {
     *     // ... data to create a UserListModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserListModel we want to update
     *   }
     * })
    **/
    upsert<T extends UserListModelUpsertArgs>(
      args: SelectSubset<T, UserListModelUpsertArgs>
    ): CheckSelect<T, Prisma__UserListModelClient<UserListModel>, Prisma__UserListModelClient<UserListModelGetPayload<T>>>

    /**
     * Find one UserListModel that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserListModelFindUniqueOrThrowArgs} args - Arguments to find a UserListModel
     * @example
     * // Get one UserListModel
     * const userListModel = await prisma.userListModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserListModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserListModelFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserListModelClient<UserListModel>, Prisma__UserListModelClient<UserListModelGetPayload<T>>>

    /**
     * Find the first UserListModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserListModelFindFirstOrThrowArgs} args - Arguments to find a UserListModel
     * @example
     * // Get one UserListModel
     * const userListModel = await prisma.userListModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserListModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserListModelFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserListModelClient<UserListModel>, Prisma__UserListModelClient<UserListModelGetPayload<T>>>

    /**
     * Count the number of UserListModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserListModelCountArgs} args - Arguments to filter UserListModels to count.
     * @example
     * // Count the number of UserListModels
     * const count = await prisma.userListModel.count({
     *   where: {
     *     // ... the filter for the UserListModels we want to count
     *   }
     * })
    **/
    count<T extends UserListModelCountArgs>(
      args?: Subset<T, UserListModelCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserListModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserListModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserListModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserListModelAggregateArgs>(args: Subset<T, UserListModelAggregateArgs>): PrismaPromise<GetUserListModelAggregateType<T>>

    /**
     * Group by UserListModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserListModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserListModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserListModelGroupByArgs['orderBy'] }
        : { orderBy?: UserListModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserListModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserListModelGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserListModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserListModelClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * UserListModel base type for findUnique actions
   */
  export type UserListModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserListModel
     * 
    **/
    select?: UserListModelSelect | null
    /**
     * Filter, which UserListModel to fetch.
     * 
    **/
    where: UserListModelWhereUniqueInput
  }

  /**
   * UserListModel: findUnique
   */
  export interface UserListModelFindUniqueArgs extends UserListModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserListModel base type for findFirst actions
   */
  export type UserListModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserListModel
     * 
    **/
    select?: UserListModelSelect | null
    /**
     * Filter, which UserListModel to fetch.
     * 
    **/
    where?: UserListModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserListModels to fetch.
     * 
    **/
    orderBy?: Enumerable<UserListModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserListModels.
     * 
    **/
    cursor?: UserListModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserListModels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserListModels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserListModels.
     * 
    **/
    distinct?: Enumerable<UserListModelScalarFieldEnum>
  }

  /**
   * UserListModel: findFirst
   */
  export interface UserListModelFindFirstArgs extends UserListModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserListModel findMany
   */
  export type UserListModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserListModel
     * 
    **/
    select?: UserListModelSelect | null
    /**
     * Filter, which UserListModels to fetch.
     * 
    **/
    where?: UserListModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserListModels to fetch.
     * 
    **/
    orderBy?: Enumerable<UserListModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserListModels.
     * 
    **/
    cursor?: UserListModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserListModels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserListModels.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserListModelScalarFieldEnum>
  }


  /**
   * UserListModel create
   */
  export type UserListModelCreateArgs = {
    /**
     * Select specific fields to fetch from the UserListModel
     * 
    **/
    select?: UserListModelSelect | null
    /**
     * The data needed to create a UserListModel.
     * 
    **/
    data: XOR<UserListModelCreateInput, UserListModelUncheckedCreateInput>
  }


  /**
   * UserListModel createMany
   */
  export type UserListModelCreateManyArgs = {
    /**
     * The data used to create many UserListModels.
     * 
    **/
    data: Enumerable<UserListModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserListModel update
   */
  export type UserListModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserListModel
     * 
    **/
    select?: UserListModelSelect | null
    /**
     * The data needed to update a UserListModel.
     * 
    **/
    data: XOR<UserListModelUpdateInput, UserListModelUncheckedUpdateInput>
    /**
     * Choose, which UserListModel to update.
     * 
    **/
    where: UserListModelWhereUniqueInput
  }


  /**
   * UserListModel updateMany
   */
  export type UserListModelUpdateManyArgs = {
    /**
     * The data used to update UserListModels.
     * 
    **/
    data: XOR<UserListModelUpdateManyMutationInput, UserListModelUncheckedUpdateManyInput>
    /**
     * Filter which UserListModels to update
     * 
    **/
    where?: UserListModelWhereInput
  }


  /**
   * UserListModel upsert
   */
  export type UserListModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserListModel
     * 
    **/
    select?: UserListModelSelect | null
    /**
     * The filter to search for the UserListModel to update in case it exists.
     * 
    **/
    where: UserListModelWhereUniqueInput
    /**
     * In case the UserListModel found by the `where` argument doesn't exist, create a new UserListModel with this data.
     * 
    **/
    create: XOR<UserListModelCreateInput, UserListModelUncheckedCreateInput>
    /**
     * In case the UserListModel was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserListModelUpdateInput, UserListModelUncheckedUpdateInput>
  }


  /**
   * UserListModel delete
   */
  export type UserListModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserListModel
     * 
    **/
    select?: UserListModelSelect | null
    /**
     * Filter which UserListModel to delete.
     * 
    **/
    where: UserListModelWhereUniqueInput
  }


  /**
   * UserListModel deleteMany
   */
  export type UserListModelDeleteManyArgs = {
    /**
     * Filter which UserListModels to delete
     * 
    **/
    where?: UserListModelWhereInput
  }


  /**
   * UserListModel: findUniqueOrThrow
   */
  export type UserListModelFindUniqueOrThrowArgs = UserListModelFindUniqueArgsBase
      

  /**
   * UserListModel: findFirstOrThrow
   */
  export type UserListModelFindFirstOrThrowArgs = UserListModelFindFirstArgsBase
      

  /**
   * UserListModel without action
   */
  export type UserListModelArgs = {
    /**
     * Select specific fields to fetch from the UserListModel
     * 
    **/
    select?: UserListModelSelect | null
  }



  /**
   * Model RoleModel
   */


  export type AggregateRoleModel = {
    _count: RoleModelCountAggregateOutputType | null
    _avg: RoleModelAvgAggregateOutputType | null
    _sum: RoleModelSumAggregateOutputType | null
    _min: RoleModelMinAggregateOutputType | null
    _max: RoleModelMaxAggregateOutputType | null
  }

  export type RoleModelAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleModelSumAggregateOutputType = {
    id: number | null
  }

  export type RoleModelMinAggregateOutputType = {
    id: number | null
    name: EUserRole | null
  }

  export type RoleModelMaxAggregateOutputType = {
    id: number | null
    name: EUserRole | null
  }

  export type RoleModelCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleModelAvgAggregateInputType = {
    id?: true
  }

  export type RoleModelSumAggregateInputType = {
    id?: true
  }

  export type RoleModelMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleModelMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleModelCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleModelAggregateArgs = {
    /**
     * Filter which RoleModel to aggregate.
     * 
    **/
    where?: RoleModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleModels to fetch.
     * 
    **/
    orderBy?: Enumerable<RoleModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RoleModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleModels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleModels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoleModels
    **/
    _count?: true | RoleModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleModelMaxAggregateInputType
  }

  export type GetRoleModelAggregateType<T extends RoleModelAggregateArgs> = {
        [P in keyof T & keyof AggregateRoleModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoleModel[P]>
      : GetScalarType<T[P], AggregateRoleModel[P]>
  }




  export type RoleModelGroupByArgs = {
    where?: RoleModelWhereInput
    orderBy?: Enumerable<RoleModelOrderByWithAggregationInput>
    by: Array<RoleModelScalarFieldEnum>
    having?: RoleModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleModelCountAggregateInputType | true
    _avg?: RoleModelAvgAggregateInputType
    _sum?: RoleModelSumAggregateInputType
    _min?: RoleModelMinAggregateInputType
    _max?: RoleModelMaxAggregateInputType
  }


  export type RoleModelGroupByOutputType = {
    id: number
    name: EUserRole
    _count: RoleModelCountAggregateOutputType | null
    _avg: RoleModelAvgAggregateOutputType | null
    _sum: RoleModelSumAggregateOutputType | null
    _min: RoleModelMinAggregateOutputType | null
    _max: RoleModelMaxAggregateOutputType | null
  }

  type GetRoleModelGroupByPayload<T extends RoleModelGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RoleModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleModelGroupByOutputType[P]>
            : GetScalarType<T[P], RoleModelGroupByOutputType[P]>
        }
      >
    >


  export type RoleModelSelect = {
    id?: boolean
    name?: boolean
  }

  export type RoleModelGetPayload<
    S extends boolean | null | undefined | RoleModelArgs,
    U = keyof S
      > = S extends true
        ? RoleModel
    : S extends undefined
    ? never
    : S extends RoleModelArgs | RoleModelFindManyArgs
    ?'include' extends U
    ? RoleModel 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof RoleModel ? RoleModel[P] : never
  } 
    : RoleModel
  : RoleModel


  type RoleModelCountArgs = Merge<
    Omit<RoleModelFindManyArgs, 'select' | 'include'> & {
      select?: RoleModelCountAggregateInputType | true
    }
  >

  export interface RoleModelDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one RoleModel that matches the filter.
     * @param {RoleModelFindUniqueArgs} args - Arguments to find a RoleModel
     * @example
     * // Get one RoleModel
     * const roleModel = await prisma.roleModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoleModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RoleModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RoleModel'> extends True ? CheckSelect<T, Prisma__RoleModelClient<RoleModel>, Prisma__RoleModelClient<RoleModelGetPayload<T>>> : CheckSelect<T, Prisma__RoleModelClient<RoleModel | null >, Prisma__RoleModelClient<RoleModelGetPayload<T> | null >>

    /**
     * Find the first RoleModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleModelFindFirstArgs} args - Arguments to find a RoleModel
     * @example
     * // Get one RoleModel
     * const roleModel = await prisma.roleModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoleModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RoleModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RoleModel'> extends True ? CheckSelect<T, Prisma__RoleModelClient<RoleModel>, Prisma__RoleModelClient<RoleModelGetPayload<T>>> : CheckSelect<T, Prisma__RoleModelClient<RoleModel | null >, Prisma__RoleModelClient<RoleModelGetPayload<T> | null >>

    /**
     * Find zero or more RoleModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoleModels
     * const roleModels = await prisma.roleModel.findMany()
     * 
     * // Get first 10 RoleModels
     * const roleModels = await prisma.roleModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleModelWithIdOnly = await prisma.roleModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoleModelFindManyArgs>(
      args?: SelectSubset<T, RoleModelFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<RoleModel>>, PrismaPromise<Array<RoleModelGetPayload<T>>>>

    /**
     * Create a RoleModel.
     * @param {RoleModelCreateArgs} args - Arguments to create a RoleModel.
     * @example
     * // Create one RoleModel
     * const RoleModel = await prisma.roleModel.create({
     *   data: {
     *     // ... data to create a RoleModel
     *   }
     * })
     * 
    **/
    create<T extends RoleModelCreateArgs>(
      args: SelectSubset<T, RoleModelCreateArgs>
    ): CheckSelect<T, Prisma__RoleModelClient<RoleModel>, Prisma__RoleModelClient<RoleModelGetPayload<T>>>

    /**
     * Create many RoleModels.
     *     @param {RoleModelCreateManyArgs} args - Arguments to create many RoleModels.
     *     @example
     *     // Create many RoleModels
     *     const roleModel = await prisma.roleModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoleModelCreateManyArgs>(
      args?: SelectSubset<T, RoleModelCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a RoleModel.
     * @param {RoleModelDeleteArgs} args - Arguments to delete one RoleModel.
     * @example
     * // Delete one RoleModel
     * const RoleModel = await prisma.roleModel.delete({
     *   where: {
     *     // ... filter to delete one RoleModel
     *   }
     * })
     * 
    **/
    delete<T extends RoleModelDeleteArgs>(
      args: SelectSubset<T, RoleModelDeleteArgs>
    ): CheckSelect<T, Prisma__RoleModelClient<RoleModel>, Prisma__RoleModelClient<RoleModelGetPayload<T>>>

    /**
     * Update one RoleModel.
     * @param {RoleModelUpdateArgs} args - Arguments to update one RoleModel.
     * @example
     * // Update one RoleModel
     * const roleModel = await prisma.roleModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoleModelUpdateArgs>(
      args: SelectSubset<T, RoleModelUpdateArgs>
    ): CheckSelect<T, Prisma__RoleModelClient<RoleModel>, Prisma__RoleModelClient<RoleModelGetPayload<T>>>

    /**
     * Delete zero or more RoleModels.
     * @param {RoleModelDeleteManyArgs} args - Arguments to filter RoleModels to delete.
     * @example
     * // Delete a few RoleModels
     * const { count } = await prisma.roleModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoleModelDeleteManyArgs>(
      args?: SelectSubset<T, RoleModelDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoleModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoleModels
     * const roleModel = await prisma.roleModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoleModelUpdateManyArgs>(
      args: SelectSubset<T, RoleModelUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one RoleModel.
     * @param {RoleModelUpsertArgs} args - Arguments to update or create a RoleModel.
     * @example
     * // Update or create a RoleModel
     * const roleModel = await prisma.roleModel.upsert({
     *   create: {
     *     // ... data to create a RoleModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoleModel we want to update
     *   }
     * })
    **/
    upsert<T extends RoleModelUpsertArgs>(
      args: SelectSubset<T, RoleModelUpsertArgs>
    ): CheckSelect<T, Prisma__RoleModelClient<RoleModel>, Prisma__RoleModelClient<RoleModelGetPayload<T>>>

    /**
     * Find one RoleModel that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {RoleModelFindUniqueOrThrowArgs} args - Arguments to find a RoleModel
     * @example
     * // Get one RoleModel
     * const roleModel = await prisma.roleModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoleModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RoleModelFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__RoleModelClient<RoleModel>, Prisma__RoleModelClient<RoleModelGetPayload<T>>>

    /**
     * Find the first RoleModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleModelFindFirstOrThrowArgs} args - Arguments to find a RoleModel
     * @example
     * // Get one RoleModel
     * const roleModel = await prisma.roleModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoleModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoleModelFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__RoleModelClient<RoleModel>, Prisma__RoleModelClient<RoleModelGetPayload<T>>>

    /**
     * Count the number of RoleModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleModelCountArgs} args - Arguments to filter RoleModels to count.
     * @example
     * // Count the number of RoleModels
     * const count = await prisma.roleModel.count({
     *   where: {
     *     // ... the filter for the RoleModels we want to count
     *   }
     * })
    **/
    count<T extends RoleModelCountArgs>(
      args?: Subset<T, RoleModelCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoleModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleModelAggregateArgs>(args: Subset<T, RoleModelAggregateArgs>): PrismaPromise<GetRoleModelAggregateType<T>>

    /**
     * Group by RoleModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleModelGroupByArgs['orderBy'] }
        : { orderBy?: RoleModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleModelGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoleModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoleModelClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * RoleModel base type for findUnique actions
   */
  export type RoleModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RoleModel
     * 
    **/
    select?: RoleModelSelect | null
    /**
     * Filter, which RoleModel to fetch.
     * 
    **/
    where: RoleModelWhereUniqueInput
  }

  /**
   * RoleModel: findUnique
   */
  export interface RoleModelFindUniqueArgs extends RoleModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RoleModel base type for findFirst actions
   */
  export type RoleModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RoleModel
     * 
    **/
    select?: RoleModelSelect | null
    /**
     * Filter, which RoleModel to fetch.
     * 
    **/
    where?: RoleModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleModels to fetch.
     * 
    **/
    orderBy?: Enumerable<RoleModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoleModels.
     * 
    **/
    cursor?: RoleModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleModels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleModels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoleModels.
     * 
    **/
    distinct?: Enumerable<RoleModelScalarFieldEnum>
  }

  /**
   * RoleModel: findFirst
   */
  export interface RoleModelFindFirstArgs extends RoleModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RoleModel findMany
   */
  export type RoleModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the RoleModel
     * 
    **/
    select?: RoleModelSelect | null
    /**
     * Filter, which RoleModels to fetch.
     * 
    **/
    where?: RoleModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleModels to fetch.
     * 
    **/
    orderBy?: Enumerable<RoleModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoleModels.
     * 
    **/
    cursor?: RoleModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleModels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleModels.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RoleModelScalarFieldEnum>
  }


  /**
   * RoleModel create
   */
  export type RoleModelCreateArgs = {
    /**
     * Select specific fields to fetch from the RoleModel
     * 
    **/
    select?: RoleModelSelect | null
    /**
     * The data needed to create a RoleModel.
     * 
    **/
    data: XOR<RoleModelCreateInput, RoleModelUncheckedCreateInput>
  }


  /**
   * RoleModel createMany
   */
  export type RoleModelCreateManyArgs = {
    /**
     * The data used to create many RoleModels.
     * 
    **/
    data: Enumerable<RoleModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RoleModel update
   */
  export type RoleModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the RoleModel
     * 
    **/
    select?: RoleModelSelect | null
    /**
     * The data needed to update a RoleModel.
     * 
    **/
    data: XOR<RoleModelUpdateInput, RoleModelUncheckedUpdateInput>
    /**
     * Choose, which RoleModel to update.
     * 
    **/
    where: RoleModelWhereUniqueInput
  }


  /**
   * RoleModel updateMany
   */
  export type RoleModelUpdateManyArgs = {
    /**
     * The data used to update RoleModels.
     * 
    **/
    data: XOR<RoleModelUpdateManyMutationInput, RoleModelUncheckedUpdateManyInput>
    /**
     * Filter which RoleModels to update
     * 
    **/
    where?: RoleModelWhereInput
  }


  /**
   * RoleModel upsert
   */
  export type RoleModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the RoleModel
     * 
    **/
    select?: RoleModelSelect | null
    /**
     * The filter to search for the RoleModel to update in case it exists.
     * 
    **/
    where: RoleModelWhereUniqueInput
    /**
     * In case the RoleModel found by the `where` argument doesn't exist, create a new RoleModel with this data.
     * 
    **/
    create: XOR<RoleModelCreateInput, RoleModelUncheckedCreateInput>
    /**
     * In case the RoleModel was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RoleModelUpdateInput, RoleModelUncheckedUpdateInput>
  }


  /**
   * RoleModel delete
   */
  export type RoleModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the RoleModel
     * 
    **/
    select?: RoleModelSelect | null
    /**
     * Filter which RoleModel to delete.
     * 
    **/
    where: RoleModelWhereUniqueInput
  }


  /**
   * RoleModel deleteMany
   */
  export type RoleModelDeleteManyArgs = {
    /**
     * Filter which RoleModels to delete
     * 
    **/
    where?: RoleModelWhereInput
  }


  /**
   * RoleModel: findUniqueOrThrow
   */
  export type RoleModelFindUniqueOrThrowArgs = RoleModelFindUniqueArgsBase
      

  /**
   * RoleModel: findFirstOrThrow
   */
  export type RoleModelFindFirstOrThrowArgs = RoleModelFindFirstArgsBase
      

  /**
   * RoleModel without action
   */
  export type RoleModelArgs = {
    /**
     * Select specific fields to fetch from the RoleModel
     * 
    **/
    select?: RoleModelSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserModelScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    username: 'username',
    roleId: 'roleId'
  };

  export type UserModelScalarFieldEnum = (typeof UserModelScalarFieldEnum)[keyof typeof UserModelScalarFieldEnum]


  export const UserListModelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    surname: 'surname',
    birthday: 'birthday'
  };

  export type UserListModelScalarFieldEnum = (typeof UserListModelScalarFieldEnum)[keyof typeof UserListModelScalarFieldEnum]


  export const RoleModelScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleModelScalarFieldEnum = (typeof RoleModelScalarFieldEnum)[keyof typeof RoleModelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type UserModelWhereInput = {
    AND?: Enumerable<UserModelWhereInput>
    OR?: Enumerable<UserModelWhereInput>
    NOT?: Enumerable<UserModelWhereInput>
    id?: IntFilter | number
    firstName?: StringFilter | string
    username?: StringFilter | string
    roleId?: IntFilter | number
  }

  export type UserModelOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    username?: SortOrder
    roleId?: SortOrder
  }

  export type UserModelWhereUniqueInput = {
    id?: number
  }

  export type UserModelOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    username?: SortOrder
    roleId?: SortOrder
    _count?: UserModelCountOrderByAggregateInput
    _avg?: UserModelAvgOrderByAggregateInput
    _max?: UserModelMaxOrderByAggregateInput
    _min?: UserModelMinOrderByAggregateInput
    _sum?: UserModelSumOrderByAggregateInput
  }

  export type UserModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserModelScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    firstName?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    roleId?: IntWithAggregatesFilter | number
  }

  export type UserListModelWhereInput = {
    AND?: Enumerable<UserListModelWhereInput>
    OR?: Enumerable<UserListModelWhereInput>
    NOT?: Enumerable<UserListModelWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    surname?: StringFilter | string
    birthday?: DateTimeFilter | Date | string
  }

  export type UserListModelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    birthday?: SortOrder
  }

  export type UserListModelWhereUniqueInput = {
    id?: number
    name_surname_birthday?: UserListModelNameSurnameBirthdayCompoundUniqueInput
  }

  export type UserListModelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    birthday?: SortOrder
    _count?: UserListModelCountOrderByAggregateInput
    _avg?: UserListModelAvgOrderByAggregateInput
    _max?: UserListModelMaxOrderByAggregateInput
    _min?: UserListModelMinOrderByAggregateInput
    _sum?: UserListModelSumOrderByAggregateInput
  }

  export type UserListModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserListModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserListModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserListModelScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    surname?: StringWithAggregatesFilter | string
    birthday?: DateTimeWithAggregatesFilter | Date | string
  }

  export type RoleModelWhereInput = {
    AND?: Enumerable<RoleModelWhereInput>
    OR?: Enumerable<RoleModelWhereInput>
    NOT?: Enumerable<RoleModelWhereInput>
    id?: IntFilter | number
    name?: EnumEUserRoleFilter | EUserRole
  }

  export type RoleModelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleModelWhereUniqueInput = {
    id?: number
  }

  export type RoleModelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RoleModelCountOrderByAggregateInput
    _avg?: RoleModelAvgOrderByAggregateInput
    _max?: RoleModelMaxOrderByAggregateInput
    _min?: RoleModelMinOrderByAggregateInput
    _sum?: RoleModelSumOrderByAggregateInput
  }

  export type RoleModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoleModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<RoleModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RoleModelScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: EnumEUserRoleWithAggregatesFilter | EUserRole
  }

  export type UserModelCreateInput = {
    firstName: string
    username: string
    roleId: number
  }

  export type UserModelUncheckedCreateInput = {
    id?: number
    firstName: string
    username: string
    roleId: number
  }

  export type UserModelUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type UserModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type UserModelCreateManyInput = {
    id?: number
    firstName: string
    username: string
    roleId: number
  }

  export type UserModelUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type UserModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type UserListModelCreateInput = {
    name: string
    surname: string
    birthday: Date | string
  }

  export type UserListModelUncheckedCreateInput = {
    id?: number
    name: string
    surname: string
    birthday: Date | string
  }

  export type UserListModelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserListModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserListModelCreateManyInput = {
    id?: number
    name: string
    surname: string
    birthday: Date | string
  }

  export type UserListModelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserListModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleModelCreateInput = {
    name: EUserRole
  }

  export type RoleModelUncheckedCreateInput = {
    id?: number
    name: EUserRole
  }

  export type RoleModelUpdateInput = {
    name?: EnumEUserRoleFieldUpdateOperationsInput | EUserRole
  }

  export type RoleModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumEUserRoleFieldUpdateOperationsInput | EUserRole
  }

  export type RoleModelCreateManyInput = {
    id?: number
    name: EUserRole
  }

  export type RoleModelUpdateManyMutationInput = {
    name?: EnumEUserRoleFieldUpdateOperationsInput | EUserRole
  }

  export type RoleModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumEUserRoleFieldUpdateOperationsInput | EUserRole
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type UserModelCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    username?: SortOrder
    roleId?: SortOrder
  }

  export type UserModelAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type UserModelMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    username?: SortOrder
    roleId?: SortOrder
  }

  export type UserModelMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    username?: SortOrder
    roleId?: SortOrder
  }

  export type UserModelSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type UserListModelNameSurnameBirthdayCompoundUniqueInput = {
    name: string
    surname: string
    birthday: Date | string
  }

  export type UserListModelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    birthday?: SortOrder
  }

  export type UserListModelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserListModelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    birthday?: SortOrder
  }

  export type UserListModelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    birthday?: SortOrder
  }

  export type UserListModelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type EnumEUserRoleFilter = {
    equals?: EUserRole
    in?: Enumerable<EUserRole>
    notIn?: Enumerable<EUserRole>
    not?: NestedEnumEUserRoleFilter | EUserRole
  }

  export type RoleModelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleModelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleModelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleModelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleModelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumEUserRoleWithAggregatesFilter = {
    equals?: EUserRole
    in?: Enumerable<EUserRole>
    notIn?: Enumerable<EUserRole>
    not?: NestedEnumEUserRoleWithAggregatesFilter | EUserRole
    _count?: NestedIntFilter
    _min?: NestedEnumEUserRoleFilter
    _max?: NestedEnumEUserRoleFilter
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumEUserRoleFieldUpdateOperationsInput = {
    set?: EUserRole
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumEUserRoleFilter = {
    equals?: EUserRole
    in?: Enumerable<EUserRole>
    notIn?: Enumerable<EUserRole>
    not?: NestedEnumEUserRoleFilter | EUserRole
  }

  export type NestedEnumEUserRoleWithAggregatesFilter = {
    equals?: EUserRole
    in?: Enumerable<EUserRole>
    notIn?: Enumerable<EUserRole>
    not?: NestedEnumEUserRoleWithAggregatesFilter | EUserRole
    _count?: NestedIntFilter
    _min?: NestedEnumEUserRoleFilter
    _max?: NestedEnumEUserRoleFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}