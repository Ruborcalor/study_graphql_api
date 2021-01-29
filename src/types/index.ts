import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};






export type UserStats = {
  __typename?: 'UserStats';
  /** The Stats of a User */
  studyTime?: Maybe<StudyTime>;
  leaderboardPlacement?: Maybe<LeaderboardPlacement>;
  studyRole?: Maybe<StudyRole>;
  pastDayTimeSeries?: Maybe<Array<Maybe<TimePoint>>>;
  pastWeekTimeSeries?: Maybe<Array<Maybe<TimePoint>>>;
  pastMonthTimeSeries?: Maybe<Array<Maybe<TimePoint>>>;
  allTimeTimeSeries?: Maybe<Array<Maybe<TimePoint>>>;
};

export type StudyTime = {
  __typename?: 'StudyTime';
  /** Basic study time info */
  pastDay?: Maybe<Scalars['Float']>;
  pastWeek?: Maybe<Scalars['Float']>;
  pastMonth?: Maybe<Scalars['Float']>;
  allTime?: Maybe<Scalars['Float']>;
};

export type LeaderboardPlacement = {
  __typename?: 'LeaderboardPlacement';
  /** Basic leaderboard info for a user */
  pastDay?: Maybe<Scalars['Int']>;
  pastWeek?: Maybe<Scalars['Int']>;
  pastMonth?: Maybe<Scalars['Int']>;
  allTime?: Maybe<Scalars['Int']>;
};

export type StudyRole = {
  __typename?: 'StudyRole';
  /** Basic study role info for a user */
  currentStudyRole?: Maybe<Scalars['String']>;
  nextStudyRole?: Maybe<Scalars['String']>;
  studyTimeToPromotion?: Maybe<Scalars['Float']>;
  roleRank?: Maybe<Scalars['Int']>;
};

export type TimePoint = {
  __typename?: 'TimePoint';
  /** For plotting. Time paired with size */
  datetime?: Maybe<Scalars['String']>;
  y?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  /** Query file by id or url */
  helloWorld?: Maybe<Scalars['String']>;
  /** Get a user's stats */
  getUserStats?: Maybe<UserStats>;
};


export type QueryHelloWorldArgs = {
  name?: Maybe<Scalars['String']>;
};


export type QueryGetUserStatsArgs = {
  userId?: Maybe<Scalars['ID']>;
};

export type _Service = {
  __typename?: '_Service';
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  UserStats: ResolverTypeWrapper<UserStats>;
  StudyTime: ResolverTypeWrapper<StudyTime>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  LeaderboardPlacement: ResolverTypeWrapper<LeaderboardPlacement>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  StudyRole: ResolverTypeWrapper<StudyRole>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TimePoint: ResolverTypeWrapper<TimePoint>;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  _Service: ResolverTypeWrapper<_Service>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  UserStats: UserStats;
  StudyTime: StudyTime;
  Float: Scalars['Float'];
  LeaderboardPlacement: LeaderboardPlacement;
  Int: Scalars['Int'];
  StudyRole: StudyRole;
  String: Scalars['String'];
  TimePoint: TimePoint;
  Query: {};
  ID: Scalars['ID'];
  _Service: _Service;
  Boolean: Scalars['Boolean'];
};

export type KeyDirectiveArgs = {   fields: Scalars['String']; };

export type KeyDirectiveResolver<Result, Parent, ContextType = any, Args = KeyDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ExtendsDirectiveArgs = {  };

export type ExtendsDirectiveResolver<Result, Parent, ContextType = any, Args = ExtendsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ExternalDirectiveArgs = {  };

export type ExternalDirectiveResolver<Result, Parent, ContextType = any, Args = ExternalDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type RequiresDirectiveArgs = {   fields: Scalars['String']; };

export type RequiresDirectiveResolver<Result, Parent, ContextType = any, Args = RequiresDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ProvidesDirectiveArgs = {   fields: Scalars['String']; };

export type ProvidesDirectiveResolver<Result, Parent, ContextType = any, Args = ProvidesDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type UserStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserStats'] = ResolversParentTypes['UserStats']> = {
  studyTime?: Resolver<Maybe<ResolversTypes['StudyTime']>, ParentType, ContextType>;
  leaderboardPlacement?: Resolver<Maybe<ResolversTypes['LeaderboardPlacement']>, ParentType, ContextType>;
  studyRole?: Resolver<Maybe<ResolversTypes['StudyRole']>, ParentType, ContextType>;
  pastDayTimeSeries?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimePoint']>>>, ParentType, ContextType>;
  pastWeekTimeSeries?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimePoint']>>>, ParentType, ContextType>;
  pastMonthTimeSeries?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimePoint']>>>, ParentType, ContextType>;
  allTimeTimeSeries?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimePoint']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudyTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['StudyTime'] = ResolversParentTypes['StudyTime']> = {
  pastDay?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pastWeek?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pastMonth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  allTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeaderboardPlacementResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeaderboardPlacement'] = ResolversParentTypes['LeaderboardPlacement']> = {
  pastDay?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pastWeek?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pastMonth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  allTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudyRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['StudyRole'] = ResolversParentTypes['StudyRole']> = {
  currentStudyRole?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nextStudyRole?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  studyTimeToPromotion?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  roleRank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimePointResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimePoint'] = ResolversParentTypes['TimePoint']> = {
  datetime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  y?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _service?: Resolver<ResolversTypes['_Service'], ParentType, ContextType>;
  helloWorld?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryHelloWorldArgs, never>>;
  getUserStats?: Resolver<Maybe<ResolversTypes['UserStats']>, ParentType, ContextType, RequireFields<QueryGetUserStatsArgs, never>>;
};

export type _ServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Service'] = ResolversParentTypes['_Service']> = {
  sdl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  UserStats?: UserStatsResolvers<ContextType>;
  StudyTime?: StudyTimeResolvers<ContextType>;
  LeaderboardPlacement?: LeaderboardPlacementResolvers<ContextType>;
  StudyRole?: StudyRoleResolvers<ContextType>;
  TimePoint?: TimePointResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  _Service?: _ServiceResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  key?: KeyDirectiveResolver<any, any, ContextType>;
  extends?: ExtendsDirectiveResolver<any, any, ContextType>;
  external?: ExternalDirectiveResolver<any, any, ContextType>;
  requires?: RequiresDirectiveResolver<any, any, ContextType>;
  provides?: ProvidesDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;