import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  DateTime: any
  Hex: any
  Json: any
  Long: any
  RGBAHue: any
  RGBATransparency: any
  RichTextAST: any
}

export type Aggregate = {
  __typename?: 'Aggregate'
  count: Scalars['Int']
}

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Asset>
  /** The file name */
  fileName: Scalars['String']
  /** The file handle */
  handle: Scalars['String']
  /** The height of the file */
  height?: Maybe<Scalars['Float']>
  /** List of Asset versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  imageCity: Array<City>
  /** System Locale field */
  locale: Locale
  /** Get the other localizations for this document */
  localizations: Array<Asset>
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** The file size */
  size?: Maybe<Scalars['Float']>
  sliderHeroItem: Array<HeroItem>
  sliderImagesSlider: Array<Slider>
  /** System stage field */
  stage: Stage
  symbolCity: Array<City>
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']
  /** The file width */
  width?: Maybe<Scalars['Float']>
}

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

/** Asset system model */
export type AssetImageCityArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<CityOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CityWhereInput>
}

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']
  locales?: Array<Locale>
}

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Asset system model */
export type AssetSliderHeroItemArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<HeroItemOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<HeroItemWhereInput>
}

/** Asset system model */
export type AssetSliderImagesSliderArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<SliderOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<SliderWhereInput>
}

/** Asset system model */
export type AssetSymbolCityArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<CityOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CityWhereInput>
}

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>
}

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: AssetWhereUniqueInput
}

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<AssetEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  fileName: Scalars['String']
  handle: Scalars['String']
  height?: InputMaybe<Scalars['Float']>
  imageCity?: InputMaybe<CityCreateManyInlineInput>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  sliderHeroItem?: InputMaybe<HeroItemCreateManyInlineInput>
  sliderImagesSlider?: InputMaybe<SliderCreateManyInlineInput>
  symbolCity?: InputMaybe<CityCreateManyInlineInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  fileName: Scalars['String']
  handle: Scalars['String']
  height?: InputMaybe<Scalars['Float']>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput
  locale: Locale
}

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
}

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
}

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
}

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Asset
}

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AssetWhereStageInput>
  documentInStages_none?: InputMaybe<AssetWhereStageInput>
  documentInStages_some?: InputMaybe<AssetWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  imageCity_every?: InputMaybe<CityWhereInput>
  imageCity_none?: InputMaybe<CityWhereInput>
  imageCity_some?: InputMaybe<CityWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  sliderHeroItem_every?: InputMaybe<HeroItemWhereInput>
  sliderHeroItem_none?: InputMaybe<HeroItemWhereInput>
  sliderHeroItem_some?: InputMaybe<HeroItemWhereInput>
  sliderImagesSlider_every?: InputMaybe<SliderWhereInput>
  sliderImagesSlider_none?: InputMaybe<SliderWhereInput>
  sliderImagesSlider_some?: InputMaybe<SliderWhereInput>
  symbolCity_every?: InputMaybe<CityWhereInput>
  symbolCity_none?: InputMaybe<CityWhereInput>
  symbolCity_some?: InputMaybe<CityWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>
  image?: InputMaybe<ImageTransformationInput>
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>
}

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']>
  handle?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  imageCity?: InputMaybe<CityUpdateManyInlineInput>
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  sliderHeroItem?: InputMaybe<HeroItemUpdateManyInlineInput>
  sliderImagesSlider?: InputMaybe<SliderUpdateManyInlineInput>
  symbolCity?: InputMaybe<CityUpdateManyInlineInput>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>
  handle?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput
  locale: Locale
}

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>
}

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>
}

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput
  locale: Locale
}

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>
}

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput
  /** Document search */
  where: AssetWhereInput
}

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>
}

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput
  /** Update document if it exists */
  update: AssetUpdateInput
}

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput
  locale: Locale
  update: AssetUpdateLocalizationDataInput
}

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AssetWhereStageInput>
  documentInStages_none?: InputMaybe<AssetWhereStageInput>
  documentInStages_some?: InputMaybe<AssetWhereStageInput>
  fileName?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>
  handle?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  imageCity_every?: InputMaybe<CityWhereInput>
  imageCity_none?: InputMaybe<CityWhereInput>
  imageCity_some?: InputMaybe<CityWhereInput>
  mimeType?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  size?: InputMaybe<Scalars['Float']>
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  sliderHeroItem_every?: InputMaybe<HeroItemWhereInput>
  sliderHeroItem_none?: InputMaybe<HeroItemWhereInput>
  sliderHeroItem_some?: InputMaybe<HeroItemWhereInput>
  sliderImagesSlider_every?: InputMaybe<SliderWhereInput>
  sliderImagesSlider_none?: InputMaybe<SliderWhereInput>
  sliderImagesSlider_some?: InputMaybe<SliderWhereInput>
  symbolCity_every?: InputMaybe<CityWhereInput>
  symbolCity_none?: InputMaybe<CityWhereInput>
  symbolCity_some?: InputMaybe<CityWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  width?: InputMaybe<Scalars['Float']>
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type BatchPayload = {
  __typename?: 'BatchPayload'
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']
}

export type City = Node & {
  __typename?: 'City'
  /** Descreva as categorias */
  categories?: Maybe<Scalars['String']>
  /** Contato */
  contact?: Maybe<Scalars['String']>
  /** Create a custom meta description */
  content?: Maybe<Scalars['String']>
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<City>
  gallery?: Maybe<Scalars['String']>
  /** List of City versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  /** Select a custom OG image (the most common size is usually 1280x720) */
  image?: Maybe<Asset>
  levels: Array<Level>
  /** Localização */
  location?: Maybe<Scalars['String']>
  /** Lugar */
  place?: Maybe<Scalars['String']>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  registrations: Array<Registration>
  /** Coloque aqui o link para as regras */
  rulesUrl?: Maybe<Scalars['String']>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  /** Coloca o simbolo da cidade */
  symbol?: Maybe<Asset>
  /** Create a custom meta title */
  title?: Maybe<Scalars['String']>
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type CityCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type CityDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type CityHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type CityImageArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type CityLevelsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<LevelOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<LevelWhereInput>
}

export type CityPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type CityRegistrationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<RegistrationOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<RegistrationWhereInput>
}

export type CityScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type CitySymbolArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type CityUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type CityConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: CityWhereUniqueInput
}

/** A connection to a list of items. */
export type CityConnection = {
  __typename?: 'CityConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<CityEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type CityCreateInput = {
  categories?: InputMaybe<Scalars['String']>
  contact?: InputMaybe<Scalars['String']>
  content?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  gallery?: InputMaybe<Scalars['String']>
  image?: InputMaybe<AssetCreateOneInlineInput>
  levels?: InputMaybe<LevelCreateManyInlineInput>
  location?: InputMaybe<Scalars['String']>
  place?: InputMaybe<Scalars['String']>
  registrations?: InputMaybe<RegistrationCreateManyInlineInput>
  rulesUrl?: InputMaybe<Scalars['String']>
  symbol?: InputMaybe<AssetCreateOneInlineInput>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type CityCreateManyInlineInput = {
  /** Connect multiple existing City documents */
  connect?: InputMaybe<Array<CityWhereUniqueInput>>
  /** Create and connect multiple existing City documents */
  create?: InputMaybe<Array<CityCreateInput>>
}

export type CityCreateOneInlineInput = {
  /** Connect one existing City document */
  connect?: InputMaybe<CityWhereUniqueInput>
  /** Create and connect one City document */
  create?: InputMaybe<CityCreateInput>
}

/** An edge in a connection. */
export type CityEdge = {
  __typename?: 'CityEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: City
}

/** Identifies documents */
export type CityManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CityWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CityWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CityWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  categories?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  categories_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  categories_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  categories_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  categories_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  categories_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  categories_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  categories_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  categories_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  categories_starts_with?: InputMaybe<Scalars['String']>
  contact?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  contact_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  contact_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  contact_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  contact_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  contact_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  contact_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  contact_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  contact_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  contact_starts_with?: InputMaybe<Scalars['String']>
  content?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  content_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<CityWhereStageInput>
  documentInStages_none?: InputMaybe<CityWhereStageInput>
  documentInStages_some?: InputMaybe<CityWhereStageInput>
  gallery?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  gallery_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  gallery_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  gallery_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  gallery_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  gallery_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  gallery_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  gallery_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  gallery_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  gallery_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  image?: InputMaybe<AssetWhereInput>
  levels_every?: InputMaybe<LevelWhereInput>
  levels_none?: InputMaybe<LevelWhereInput>
  levels_some?: InputMaybe<LevelWhereInput>
  location?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  location_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']>
  place?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  place_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  place_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  place_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  place_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  place_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  place_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  place_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  place_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  place_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  registrations_every?: InputMaybe<RegistrationWhereInput>
  registrations_none?: InputMaybe<RegistrationWhereInput>
  registrations_some?: InputMaybe<RegistrationWhereInput>
  rulesUrl?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  rulesUrl_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  rulesUrl_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  rulesUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  rulesUrl_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  rulesUrl_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  rulesUrl_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  rulesUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  rulesUrl_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  rulesUrl_starts_with?: InputMaybe<Scalars['String']>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  symbol?: InputMaybe<AssetWhereInput>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum CityOrderByInput {
  CategoriesAsc = 'categories_ASC',
  CategoriesDesc = 'categories_DESC',
  ContactAsc = 'contact_ASC',
  ContactDesc = 'contact_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  GalleryAsc = 'gallery_ASC',
  GalleryDesc = 'gallery_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  PlaceAsc = 'place_ASC',
  PlaceDesc = 'place_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RulesUrlAsc = 'rulesUrl_ASC',
  RulesUrlDesc = 'rulesUrl_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CityUpdateInput = {
  categories?: InputMaybe<Scalars['String']>
  contact?: InputMaybe<Scalars['String']>
  content?: InputMaybe<Scalars['String']>
  gallery?: InputMaybe<Scalars['String']>
  image?: InputMaybe<AssetUpdateOneInlineInput>
  levels?: InputMaybe<LevelUpdateManyInlineInput>
  location?: InputMaybe<Scalars['String']>
  place?: InputMaybe<Scalars['String']>
  registrations?: InputMaybe<RegistrationUpdateManyInlineInput>
  rulesUrl?: InputMaybe<Scalars['String']>
  symbol?: InputMaybe<AssetUpdateOneInlineInput>
  title?: InputMaybe<Scalars['String']>
}

export type CityUpdateManyInlineInput = {
  /** Connect multiple existing City documents */
  connect?: InputMaybe<Array<CityConnectInput>>
  /** Create and connect multiple City documents */
  create?: InputMaybe<Array<CityCreateInput>>
  /** Delete multiple City documents */
  delete?: InputMaybe<Array<CityWhereUniqueInput>>
  /** Disconnect multiple City documents */
  disconnect?: InputMaybe<Array<CityWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing City documents */
  set?: InputMaybe<Array<CityWhereUniqueInput>>
  /** Update multiple City documents */
  update?: InputMaybe<Array<CityUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple City documents */
  upsert?: InputMaybe<Array<CityUpsertWithNestedWhereUniqueInput>>
}

export type CityUpdateManyInput = {
  categories?: InputMaybe<Scalars['String']>
  contact?: InputMaybe<Scalars['String']>
  content?: InputMaybe<Scalars['String']>
  gallery?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  place?: InputMaybe<Scalars['String']>
  rulesUrl?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type CityUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CityUpdateManyInput
  /** Document search */
  where: CityWhereInput
}

export type CityUpdateOneInlineInput = {
  /** Connect existing City document */
  connect?: InputMaybe<CityWhereUniqueInput>
  /** Create and connect one City document */
  create?: InputMaybe<CityCreateInput>
  /** Delete currently connected City document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected City document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single City document */
  update?: InputMaybe<CityUpdateWithNestedWhereUniqueInput>
  /** Upsert single City document */
  upsert?: InputMaybe<CityUpsertWithNestedWhereUniqueInput>
}

export type CityUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CityUpdateInput
  /** Unique document search */
  where: CityWhereUniqueInput
}

export type CityUpsertInput = {
  /** Create document if it didn't exist */
  create: CityCreateInput
  /** Update document if it exists */
  update: CityUpdateInput
}

export type CityUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CityUpsertInput
  /** Unique document search */
  where: CityWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type CityWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type CityWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CityWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CityWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CityWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  categories?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  categories_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  categories_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  categories_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  categories_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  categories_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  categories_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  categories_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  categories_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  categories_starts_with?: InputMaybe<Scalars['String']>
  contact?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  contact_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  contact_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  contact_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  contact_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  contact_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  contact_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  contact_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  contact_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  contact_starts_with?: InputMaybe<Scalars['String']>
  content?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  content_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<CityWhereStageInput>
  documentInStages_none?: InputMaybe<CityWhereStageInput>
  documentInStages_some?: InputMaybe<CityWhereStageInput>
  gallery?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  gallery_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  gallery_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  gallery_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  gallery_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  gallery_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  gallery_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  gallery_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  gallery_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  gallery_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  image?: InputMaybe<AssetWhereInput>
  levels_every?: InputMaybe<LevelWhereInput>
  levels_none?: InputMaybe<LevelWhereInput>
  levels_some?: InputMaybe<LevelWhereInput>
  location?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  location_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']>
  place?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  place_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  place_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  place_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  place_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  place_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  place_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  place_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  place_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  place_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  registrations_every?: InputMaybe<RegistrationWhereInput>
  registrations_none?: InputMaybe<RegistrationWhereInput>
  registrations_some?: InputMaybe<RegistrationWhereInput>
  rulesUrl?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  rulesUrl_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  rulesUrl_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  rulesUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  rulesUrl_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  rulesUrl_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  rulesUrl_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  rulesUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  rulesUrl_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  rulesUrl_starts_with?: InputMaybe<Scalars['String']>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  symbol?: InputMaybe<AssetWhereInput>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CityWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CityWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CityWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CityWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CityWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References City record uniquely */
export type CityWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color'
  css: Scalars['String']
  hex: Scalars['Hex']
  rgba: Rgba
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>
  rgba?: InputMaybe<RgbaInput>
}

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>
}

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>
}

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>
}

export type DocumentVersion = {
  __typename?: 'DocumentVersion'
  createdAt: Scalars['DateTime']
  data?: Maybe<Scalars['Json']>
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: Stage
}

/** Os elementos que aparece na primeira pagina do site */
export type HeroItem = Node & {
  __typename?: 'HeroItem'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  description?: Maybe<Scalars['String']>
  /** Get the document in other stages */
  documentInStages: Array<HeroItem>
  /** List of HeroItem versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  slider: Array<Asset>
  /** System stage field */
  stage: Stage
  title?: Maybe<Scalars['String']>
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

/** Os elementos que aparece na primeira pagina do site */
export type HeroItemCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Os elementos que aparece na primeira pagina do site */
export type HeroItemDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

/** Os elementos que aparece na primeira pagina do site */
export type HeroItemHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

/** Os elementos que aparece na primeira pagina do site */
export type HeroItemPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Os elementos que aparece na primeira pagina do site */
export type HeroItemScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Os elementos que aparece na primeira pagina do site */
export type HeroItemSliderArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AssetWhereInput>
}

/** Os elementos que aparece na primeira pagina do site */
export type HeroItemUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type HeroItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: HeroItemWhereUniqueInput
}

/** A connection to a list of items. */
export type HeroItemConnection = {
  __typename?: 'HeroItemConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<HeroItemEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type HeroItemCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  description?: InputMaybe<Scalars['String']>
  slider?: InputMaybe<AssetCreateManyInlineInput>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type HeroItemCreateManyInlineInput = {
  /** Connect multiple existing HeroItem documents */
  connect?: InputMaybe<Array<HeroItemWhereUniqueInput>>
  /** Create and connect multiple existing HeroItem documents */
  create?: InputMaybe<Array<HeroItemCreateInput>>
}

export type HeroItemCreateOneInlineInput = {
  /** Connect one existing HeroItem document */
  connect?: InputMaybe<HeroItemWhereUniqueInput>
  /** Create and connect one HeroItem document */
  create?: InputMaybe<HeroItemCreateInput>
}

/** An edge in a connection. */
export type HeroItemEdge = {
  __typename?: 'HeroItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: HeroItem
}

/** Identifies documents */
export type HeroItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroItemWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroItemWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroItemWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  documentInStages_every?: InputMaybe<HeroItemWhereStageInput>
  documentInStages_none?: InputMaybe<HeroItemWhereStageInput>
  documentInStages_some?: InputMaybe<HeroItemWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  slider_every?: InputMaybe<AssetWhereInput>
  slider_none?: InputMaybe<AssetWhereInput>
  slider_some?: InputMaybe<AssetWhereInput>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum HeroItemOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type HeroItemUpdateInput = {
  description?: InputMaybe<Scalars['String']>
  slider?: InputMaybe<AssetUpdateManyInlineInput>
  title?: InputMaybe<Scalars['String']>
}

export type HeroItemUpdateManyInlineInput = {
  /** Connect multiple existing HeroItem documents */
  connect?: InputMaybe<Array<HeroItemConnectInput>>
  /** Create and connect multiple HeroItem documents */
  create?: InputMaybe<Array<HeroItemCreateInput>>
  /** Delete multiple HeroItem documents */
  delete?: InputMaybe<Array<HeroItemWhereUniqueInput>>
  /** Disconnect multiple HeroItem documents */
  disconnect?: InputMaybe<Array<HeroItemWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing HeroItem documents */
  set?: InputMaybe<Array<HeroItemWhereUniqueInput>>
  /** Update multiple HeroItem documents */
  update?: InputMaybe<Array<HeroItemUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple HeroItem documents */
  upsert?: InputMaybe<Array<HeroItemUpsertWithNestedWhereUniqueInput>>
}

export type HeroItemUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type HeroItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HeroItemUpdateManyInput
  /** Document search */
  where: HeroItemWhereInput
}

export type HeroItemUpdateOneInlineInput = {
  /** Connect existing HeroItem document */
  connect?: InputMaybe<HeroItemWhereUniqueInput>
  /** Create and connect one HeroItem document */
  create?: InputMaybe<HeroItemCreateInput>
  /** Delete currently connected HeroItem document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected HeroItem document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single HeroItem document */
  update?: InputMaybe<HeroItemUpdateWithNestedWhereUniqueInput>
  /** Upsert single HeroItem document */
  upsert?: InputMaybe<HeroItemUpsertWithNestedWhereUniqueInput>
}

export type HeroItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HeroItemUpdateInput
  /** Unique document search */
  where: HeroItemWhereUniqueInput
}

export type HeroItemUpsertInput = {
  /** Create document if it didn't exist */
  create: HeroItemCreateInput
  /** Update document if it exists */
  update: HeroItemUpdateInput
}

export type HeroItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HeroItemUpsertInput
  /** Unique document search */
  where: HeroItemWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type HeroItemWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type HeroItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroItemWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroItemWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroItemWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  documentInStages_every?: InputMaybe<HeroItemWhereStageInput>
  documentInStages_none?: InputMaybe<HeroItemWhereStageInput>
  documentInStages_some?: InputMaybe<HeroItemWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  slider_every?: InputMaybe<AssetWhereInput>
  slider_none?: InputMaybe<AssetWhereInput>
  slider_some?: InputMaybe<AssetWhereInput>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type HeroItemWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroItemWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroItemWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroItemWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<HeroItemWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References HeroItem record uniquely */
export type HeroItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>
}

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>
}

export type Level = Node & {
  __typename?: 'Level'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  date?: Maybe<Scalars['String']>
  /** Get the document in other stages */
  documentInStages: Array<Level>
  dueDate?: Maybe<Scalars['String']>
  finished?: Maybe<Scalars['Boolean']>
  /** List of Level versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  modalities?: Maybe<Scalars['String']>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  reportUrl?: Maybe<Scalars['String']>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  title?: Maybe<Scalars['String']>
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type LevelCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type LevelDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type LevelHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type LevelPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type LevelScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type LevelUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type LevelConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: LevelWhereUniqueInput
}

/** A connection to a list of items. */
export type LevelConnection = {
  __typename?: 'LevelConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<LevelEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type LevelCreateInput = {
  cl8emmb6n2uor01tcetoufv8i?: InputMaybe<CityCreateManyInlineInput>
  createdAt?: InputMaybe<Scalars['DateTime']>
  date?: InputMaybe<Scalars['String']>
  dueDate?: InputMaybe<Scalars['String']>
  finished?: InputMaybe<Scalars['Boolean']>
  modalities?: InputMaybe<Scalars['String']>
  reportUrl?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type LevelCreateManyInlineInput = {
  /** Connect multiple existing Level documents */
  connect?: InputMaybe<Array<LevelWhereUniqueInput>>
  /** Create and connect multiple existing Level documents */
  create?: InputMaybe<Array<LevelCreateInput>>
}

export type LevelCreateOneInlineInput = {
  /** Connect one existing Level document */
  connect?: InputMaybe<LevelWhereUniqueInput>
  /** Create and connect one Level document */
  create?: InputMaybe<LevelCreateInput>
}

/** An edge in a connection. */
export type LevelEdge = {
  __typename?: 'LevelEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Level
}

/** Identifies documents */
export type LevelManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LevelWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LevelWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LevelWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  date?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  date_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  date_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  date_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  date_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  date_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  date_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  date_starts_with?: InputMaybe<Scalars['String']>
  documentInStages_every?: InputMaybe<LevelWhereStageInput>
  documentInStages_none?: InputMaybe<LevelWhereStageInput>
  documentInStages_some?: InputMaybe<LevelWhereStageInput>
  dueDate?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  dueDate_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  dueDate_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  dueDate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  dueDate_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  dueDate_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  dueDate_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  dueDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  dueDate_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  dueDate_starts_with?: InputMaybe<Scalars['String']>
  finished?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  finished_not?: InputMaybe<Scalars['Boolean']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  modalities?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  modalities_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  modalities_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  modalities_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  modalities_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  modalities_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  modalities_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  modalities_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  modalities_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  modalities_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  reportUrl?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  reportUrl_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  reportUrl_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  reportUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  reportUrl_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  reportUrl_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  reportUrl_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  reportUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  reportUrl_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  reportUrl_starts_with?: InputMaybe<Scalars['String']>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum LevelOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  DueDateAsc = 'dueDate_ASC',
  DueDateDesc = 'dueDate_DESC',
  FinishedAsc = 'finished_ASC',
  FinishedDesc = 'finished_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ModalitiesAsc = 'modalities_ASC',
  ModalitiesDesc = 'modalities_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReportUrlAsc = 'reportUrl_ASC',
  ReportUrlDesc = 'reportUrl_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type LevelUpdateInput = {
  cl8emmb6n2uor01tcetoufv8i?: InputMaybe<CityUpdateManyInlineInput>
  date?: InputMaybe<Scalars['String']>
  dueDate?: InputMaybe<Scalars['String']>
  finished?: InputMaybe<Scalars['Boolean']>
  modalities?: InputMaybe<Scalars['String']>
  reportUrl?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type LevelUpdateManyInlineInput = {
  /** Connect multiple existing Level documents */
  connect?: InputMaybe<Array<LevelConnectInput>>
  /** Create and connect multiple Level documents */
  create?: InputMaybe<Array<LevelCreateInput>>
  /** Delete multiple Level documents */
  delete?: InputMaybe<Array<LevelWhereUniqueInput>>
  /** Disconnect multiple Level documents */
  disconnect?: InputMaybe<Array<LevelWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Level documents */
  set?: InputMaybe<Array<LevelWhereUniqueInput>>
  /** Update multiple Level documents */
  update?: InputMaybe<Array<LevelUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Level documents */
  upsert?: InputMaybe<Array<LevelUpsertWithNestedWhereUniqueInput>>
}

export type LevelUpdateManyInput = {
  date?: InputMaybe<Scalars['String']>
  dueDate?: InputMaybe<Scalars['String']>
  finished?: InputMaybe<Scalars['Boolean']>
  modalities?: InputMaybe<Scalars['String']>
  reportUrl?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type LevelUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LevelUpdateManyInput
  /** Document search */
  where: LevelWhereInput
}

export type LevelUpdateOneInlineInput = {
  /** Connect existing Level document */
  connect?: InputMaybe<LevelWhereUniqueInput>
  /** Create and connect one Level document */
  create?: InputMaybe<LevelCreateInput>
  /** Delete currently connected Level document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Level document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Level document */
  update?: InputMaybe<LevelUpdateWithNestedWhereUniqueInput>
  /** Upsert single Level document */
  upsert?: InputMaybe<LevelUpsertWithNestedWhereUniqueInput>
}

export type LevelUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LevelUpdateInput
  /** Unique document search */
  where: LevelWhereUniqueInput
}

export type LevelUpsertInput = {
  /** Create document if it didn't exist */
  create: LevelCreateInput
  /** Update document if it exists */
  update: LevelUpdateInput
}

export type LevelUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LevelUpsertInput
  /** Unique document search */
  where: LevelWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type LevelWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type LevelWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LevelWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LevelWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LevelWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  date?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  date_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  date_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  date_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  date_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  date_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  date_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  date_starts_with?: InputMaybe<Scalars['String']>
  documentInStages_every?: InputMaybe<LevelWhereStageInput>
  documentInStages_none?: InputMaybe<LevelWhereStageInput>
  documentInStages_some?: InputMaybe<LevelWhereStageInput>
  dueDate?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  dueDate_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  dueDate_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  dueDate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  dueDate_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  dueDate_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  dueDate_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  dueDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  dueDate_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  dueDate_starts_with?: InputMaybe<Scalars['String']>
  finished?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  finished_not?: InputMaybe<Scalars['Boolean']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  modalities?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  modalities_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  modalities_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  modalities_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  modalities_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  modalities_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  modalities_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  modalities_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  modalities_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  modalities_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  reportUrl?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  reportUrl_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  reportUrl_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  reportUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  reportUrl_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  reportUrl_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  reportUrl_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  reportUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  reportUrl_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  reportUrl_starts_with?: InputMaybe<Scalars['String']>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type LevelWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LevelWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LevelWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LevelWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<LevelWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Level record uniquely */
export type LevelWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location'
  distance: Scalars['Float']
  latitude: Scalars['Float']
  longitude: Scalars['Float']
}

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput
}

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']
  longitude: Scalars['Float']
}

export type Mutation = {
  __typename?: 'Mutation'
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>
  /** Create one city */
  createCity?: Maybe<City>
  /** Create one heroItem */
  createHeroItem?: Maybe<HeroItem>
  /** Create one level */
  createLevel?: Maybe<Level>
  /** Create one registration */
  createRegistration?: Maybe<Registration>
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>
  /** Create one slider */
  createSlider?: Maybe<Slider>
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>
  /** Delete one city from _all_ existing stages. Returns deleted document. */
  deleteCity?: Maybe<City>
  /** Delete one heroItem from _all_ existing stages. Returns deleted document. */
  deleteHeroItem?: Maybe<HeroItem>
  /** Delete one level from _all_ existing stages. Returns deleted document. */
  deleteLevel?: Maybe<Level>
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection
  /**
   * Delete many City documents
   * @deprecated Please use the new paginated many mutation (deleteManyCitiesConnection)
   */
  deleteManyCities: BatchPayload
  /** Delete many City documents, return deleted documents */
  deleteManyCitiesConnection: CityConnection
  /**
   * Delete many HeroItem documents
   * @deprecated Please use the new paginated many mutation (deleteManyHeroItemsConnection)
   */
  deleteManyHeroItems: BatchPayload
  /** Delete many HeroItem documents, return deleted documents */
  deleteManyHeroItemsConnection: HeroItemConnection
  /**
   * Delete many Level documents
   * @deprecated Please use the new paginated many mutation (deleteManyLevelsConnection)
   */
  deleteManyLevels: BatchPayload
  /** Delete many Level documents, return deleted documents */
  deleteManyLevelsConnection: LevelConnection
  /**
   * Delete many Registration documents
   * @deprecated Please use the new paginated many mutation (deleteManyRegistrationsConnection)
   */
  deleteManyRegistrations: BatchPayload
  /** Delete many Registration documents, return deleted documents */
  deleteManyRegistrationsConnection: RegistrationConnection
  /**
   * Delete many Slider documents
   * @deprecated Please use the new paginated many mutation (deleteManySlidersConnection)
   */
  deleteManySliders: BatchPayload
  /** Delete many Slider documents, return deleted documents */
  deleteManySlidersConnection: SliderConnection
  /** Delete one registration from _all_ existing stages. Returns deleted document. */
  deleteRegistration?: Maybe<Registration>
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>
  /** Delete one slider from _all_ existing stages. Returns deleted document. */
  deleteSlider?: Maybe<Slider>
  /** Publish one asset */
  publishAsset?: Maybe<Asset>
  /** Publish one city */
  publishCity?: Maybe<City>
  /** Publish one heroItem */
  publishHeroItem?: Maybe<HeroItem>
  /** Publish one level */
  publishLevel?: Maybe<Level>
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection
  /**
   * Publish many City documents
   * @deprecated Please use the new paginated many mutation (publishManyCitiesConnection)
   */
  publishManyCities: BatchPayload
  /** Publish many City documents */
  publishManyCitiesConnection: CityConnection
  /**
   * Publish many HeroItem documents
   * @deprecated Please use the new paginated many mutation (publishManyHeroItemsConnection)
   */
  publishManyHeroItems: BatchPayload
  /** Publish many HeroItem documents */
  publishManyHeroItemsConnection: HeroItemConnection
  /**
   * Publish many Level documents
   * @deprecated Please use the new paginated many mutation (publishManyLevelsConnection)
   */
  publishManyLevels: BatchPayload
  /** Publish many Level documents */
  publishManyLevelsConnection: LevelConnection
  /**
   * Publish many Registration documents
   * @deprecated Please use the new paginated many mutation (publishManyRegistrationsConnection)
   */
  publishManyRegistrations: BatchPayload
  /** Publish many Registration documents */
  publishManyRegistrationsConnection: RegistrationConnection
  /**
   * Publish many Slider documents
   * @deprecated Please use the new paginated many mutation (publishManySlidersConnection)
   */
  publishManySliders: BatchPayload
  /** Publish many Slider documents */
  publishManySlidersConnection: SliderConnection
  /** Publish one registration */
  publishRegistration?: Maybe<Registration>
  /** Publish one slider */
  publishSlider?: Maybe<Slider>
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>
  /** Schedule to publish one city */
  schedulePublishCity?: Maybe<City>
  /** Schedule to publish one heroItem */
  schedulePublishHeroItem?: Maybe<HeroItem>
  /** Schedule to publish one level */
  schedulePublishLevel?: Maybe<Level>
  /** Schedule to publish one registration */
  schedulePublishRegistration?: Maybe<Registration>
  /** Schedule to publish one slider */
  schedulePublishSlider?: Maybe<Slider>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>
  /** Unpublish one city from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCity?: Maybe<City>
  /** Unpublish one heroItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishHeroItem?: Maybe<HeroItem>
  /** Unpublish one level from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishLevel?: Maybe<Level>
  /** Unpublish one registration from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishRegistration?: Maybe<Registration>
  /** Unpublish one slider from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSlider?: Maybe<Slider>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>
  /** Unpublish one city from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCity?: Maybe<City>
  /** Unpublish one heroItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishHeroItem?: Maybe<HeroItem>
  /** Unpublish one level from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLevel?: Maybe<Level>
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection
  /**
   * Unpublish many City documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCitiesConnection)
   */
  unpublishManyCities: BatchPayload
  /** Find many City documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCitiesConnection: CityConnection
  /**
   * Unpublish many HeroItem documents
   * @deprecated Please use the new paginated many mutation (unpublishManyHeroItemsConnection)
   */
  unpublishManyHeroItems: BatchPayload
  /** Find many HeroItem documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyHeroItemsConnection: HeroItemConnection
  /**
   * Unpublish many Level documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLevelsConnection)
   */
  unpublishManyLevels: BatchPayload
  /** Find many Level documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLevelsConnection: LevelConnection
  /**
   * Unpublish many Registration documents
   * @deprecated Please use the new paginated many mutation (unpublishManyRegistrationsConnection)
   */
  unpublishManyRegistrations: BatchPayload
  /** Find many Registration documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyRegistrationsConnection: RegistrationConnection
  /**
   * Unpublish many Slider documents
   * @deprecated Please use the new paginated many mutation (unpublishManySlidersConnection)
   */
  unpublishManySliders: BatchPayload
  /** Find many Slider documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySlidersConnection: SliderConnection
  /** Unpublish one registration from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishRegistration?: Maybe<Registration>
  /** Unpublish one slider from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSlider?: Maybe<Slider>
  /** Update one asset */
  updateAsset?: Maybe<Asset>
  /** Update one city */
  updateCity?: Maybe<City>
  /** Update one heroItem */
  updateHeroItem?: Maybe<HeroItem>
  /** Update one level */
  updateLevel?: Maybe<Level>
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection
  /**
   * Update many cities
   * @deprecated Please use the new paginated many mutation (updateManyCitiesConnection)
   */
  updateManyCities: BatchPayload
  /** Update many City documents */
  updateManyCitiesConnection: CityConnection
  /**
   * Update many heroItems
   * @deprecated Please use the new paginated many mutation (updateManyHeroItemsConnection)
   */
  updateManyHeroItems: BatchPayload
  /** Update many HeroItem documents */
  updateManyHeroItemsConnection: HeroItemConnection
  /**
   * Update many levels
   * @deprecated Please use the new paginated many mutation (updateManyLevelsConnection)
   */
  updateManyLevels: BatchPayload
  /** Update many Level documents */
  updateManyLevelsConnection: LevelConnection
  /**
   * Update many registrations
   * @deprecated Please use the new paginated many mutation (updateManyRegistrationsConnection)
   */
  updateManyRegistrations: BatchPayload
  /** Update many Registration documents */
  updateManyRegistrationsConnection: RegistrationConnection
  /**
   * Update many sliders
   * @deprecated Please use the new paginated many mutation (updateManySlidersConnection)
   */
  updateManySliders: BatchPayload
  /** Update many Slider documents */
  updateManySlidersConnection: SliderConnection
  /** Update one registration */
  updateRegistration?: Maybe<Registration>
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>
  /** Update one slider */
  updateSlider?: Maybe<Slider>
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>
  /** Upsert one city */
  upsertCity?: Maybe<City>
  /** Upsert one heroItem */
  upsertHeroItem?: Maybe<HeroItem>
  /** Upsert one level */
  upsertLevel?: Maybe<Level>
  /** Upsert one registration */
  upsertRegistration?: Maybe<Registration>
  /** Upsert one slider */
  upsertSlider?: Maybe<Slider>
}

export type MutationCreateAssetArgs = {
  data: AssetCreateInput
}

export type MutationCreateCityArgs = {
  data: CityCreateInput
}

export type MutationCreateHeroItemArgs = {
  data: HeroItemCreateInput
}

export type MutationCreateLevelArgs = {
  data: LevelCreateInput
}

export type MutationCreateRegistrationArgs = {
  data: RegistrationCreateInput
}

export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput
}

export type MutationCreateSliderArgs = {
  data: SliderCreateInput
}

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput
}

export type MutationDeleteCityArgs = {
  where: CityWhereUniqueInput
}

export type MutationDeleteHeroItemArgs = {
  where: HeroItemWhereUniqueInput
}

export type MutationDeleteLevelArgs = {
  where: LevelWhereUniqueInput
}

export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyCitiesArgs = {
  where?: InputMaybe<CityManyWhereInput>
}

export type MutationDeleteManyCitiesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CityManyWhereInput>
}

export type MutationDeleteManyHeroItemsArgs = {
  where?: InputMaybe<HeroItemManyWhereInput>
}

export type MutationDeleteManyHeroItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<HeroItemManyWhereInput>
}

export type MutationDeleteManyLevelsArgs = {
  where?: InputMaybe<LevelManyWhereInput>
}

export type MutationDeleteManyLevelsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<LevelManyWhereInput>
}

export type MutationDeleteManyRegistrationsArgs = {
  where?: InputMaybe<RegistrationManyWhereInput>
}

export type MutationDeleteManyRegistrationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<RegistrationManyWhereInput>
}

export type MutationDeleteManySlidersArgs = {
  where?: InputMaybe<SliderManyWhereInput>
}

export type MutationDeleteManySlidersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<SliderManyWhereInput>
}

export type MutationDeleteRegistrationArgs = {
  where: RegistrationWhereUniqueInput
}

export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput
}

export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationDeleteSliderArgs = {
  where: SliderWhereUniqueInput
}

export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishCityArgs = {
  to?: Array<Stage>
  where: CityWhereUniqueInput
}

export type MutationPublishHeroItemArgs = {
  to?: Array<Stage>
  where: HeroItemWhereUniqueInput
}

export type MutationPublishLevelArgs = {
  to?: Array<Stage>
  where: LevelWhereUniqueInput
}

export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  to?: Array<Stage>
  where?: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishManyCitiesArgs = {
  to?: Array<Stage>
  where?: InputMaybe<CityManyWhereInput>
}

export type MutationPublishManyCitiesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<CityManyWhereInput>
}

export type MutationPublishManyHeroItemsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<HeroItemManyWhereInput>
}

export type MutationPublishManyHeroItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<HeroItemManyWhereInput>
}

export type MutationPublishManyLevelsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<LevelManyWhereInput>
}

export type MutationPublishManyLevelsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<LevelManyWhereInput>
}

export type MutationPublishManyRegistrationsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<RegistrationManyWhereInput>
}

export type MutationPublishManyRegistrationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<RegistrationManyWhereInput>
}

export type MutationPublishManySlidersArgs = {
  to?: Array<Stage>
  where?: InputMaybe<SliderManyWhereInput>
}

export type MutationPublishManySlidersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<SliderManyWhereInput>
}

export type MutationPublishRegistrationArgs = {
  to?: Array<Stage>
  where: RegistrationWhereUniqueInput
}

export type MutationPublishSliderArgs = {
  to?: Array<Stage>
  where: SliderWhereUniqueInput
}

export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationSchedulePublishCityArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: CityWhereUniqueInput
}

export type MutationSchedulePublishHeroItemArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: HeroItemWhereUniqueInput
}

export type MutationSchedulePublishLevelArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: LevelWhereUniqueInput
}

export type MutationSchedulePublishRegistrationArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: RegistrationWhereUniqueInput
}

export type MutationSchedulePublishSliderArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: SliderWhereUniqueInput
}

export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where: AssetWhereUniqueInput
}

export type MutationScheduleUnpublishCityArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: CityWhereUniqueInput
}

export type MutationScheduleUnpublishHeroItemArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: HeroItemWhereUniqueInput
}

export type MutationScheduleUnpublishLevelArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: LevelWhereUniqueInput
}

export type MutationScheduleUnpublishRegistrationArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: RegistrationWhereUniqueInput
}

export type MutationScheduleUnpublishSliderArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: SliderWhereUniqueInput
}

export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where: AssetWhereUniqueInput
}

export type MutationUnpublishCityArgs = {
  from?: Array<Stage>
  where: CityWhereUniqueInput
}

export type MutationUnpublishHeroItemArgs = {
  from?: Array<Stage>
  where: HeroItemWhereUniqueInput
}

export type MutationUnpublishLevelArgs = {
  from?: Array<Stage>
  where: LevelWhereUniqueInput
}

export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyCitiesArgs = {
  from?: Array<Stage>
  where?: InputMaybe<CityManyWhereInput>
}

export type MutationUnpublishManyCitiesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<CityManyWhereInput>
}

export type MutationUnpublishManyHeroItemsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<HeroItemManyWhereInput>
}

export type MutationUnpublishManyHeroItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<HeroItemManyWhereInput>
}

export type MutationUnpublishManyLevelsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<LevelManyWhereInput>
}

export type MutationUnpublishManyLevelsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<LevelManyWhereInput>
}

export type MutationUnpublishManyRegistrationsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<RegistrationManyWhereInput>
}

export type MutationUnpublishManyRegistrationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<RegistrationManyWhereInput>
}

export type MutationUnpublishManySlidersArgs = {
  from?: Array<Stage>
  where?: InputMaybe<SliderManyWhereInput>
}

export type MutationUnpublishManySlidersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<SliderManyWhereInput>
}

export type MutationUnpublishRegistrationArgs = {
  from?: Array<Stage>
  where: RegistrationWhereUniqueInput
}

export type MutationUnpublishSliderArgs = {
  from?: Array<Stage>
  where: SliderWhereUniqueInput
}

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput
  where: AssetWhereUniqueInput
}

export type MutationUpdateCityArgs = {
  data: CityUpdateInput
  where: CityWhereUniqueInput
}

export type MutationUpdateHeroItemArgs = {
  data: HeroItemUpdateInput
  where: HeroItemWhereUniqueInput
}

export type MutationUpdateLevelArgs = {
  data: LevelUpdateInput
  where: LevelWhereUniqueInput
}

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: AssetUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyCitiesArgs = {
  data: CityUpdateManyInput
  where?: InputMaybe<CityManyWhereInput>
}

export type MutationUpdateManyCitiesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: CityUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CityManyWhereInput>
}

export type MutationUpdateManyHeroItemsArgs = {
  data: HeroItemUpdateManyInput
  where?: InputMaybe<HeroItemManyWhereInput>
}

export type MutationUpdateManyHeroItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: HeroItemUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<HeroItemManyWhereInput>
}

export type MutationUpdateManyLevelsArgs = {
  data: LevelUpdateManyInput
  where?: InputMaybe<LevelManyWhereInput>
}

export type MutationUpdateManyLevelsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: LevelUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<LevelManyWhereInput>
}

export type MutationUpdateManyRegistrationsArgs = {
  data: RegistrationUpdateManyInput
  where?: InputMaybe<RegistrationManyWhereInput>
}

export type MutationUpdateManyRegistrationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: RegistrationUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<RegistrationManyWhereInput>
}

export type MutationUpdateManySlidersArgs = {
  data: SliderUpdateManyInput
  where?: InputMaybe<SliderManyWhereInput>
}

export type MutationUpdateManySlidersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: SliderUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<SliderManyWhereInput>
}

export type MutationUpdateRegistrationArgs = {
  data: RegistrationUpdateInput
  where: RegistrationWhereUniqueInput
}

export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationUpdateSliderArgs = {
  data: SliderUpdateInput
  where: SliderWhereUniqueInput
}

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput
  where: AssetWhereUniqueInput
}

export type MutationUpsertCityArgs = {
  upsert: CityUpsertInput
  where: CityWhereUniqueInput
}

export type MutationUpsertHeroItemArgs = {
  upsert: HeroItemUpsertInput
  where: HeroItemWhereUniqueInput
}

export type MutationUpsertLevelArgs = {
  upsert: LevelUpsertInput
  where: LevelWhereUniqueInput
}

export type MutationUpsertRegistrationArgs = {
  upsert: RegistrationUpsertInput
  where: RegistrationWhereUniqueInput
}

export type MutationUpsertSliderArgs = {
  upsert: SliderUpsertInput
  where: SliderWhereUniqueInput
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']
  /** The Stage of an object */
  stage: Stage
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>
}

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale
  /** Stages to publish selected locales to */
  stages: Array<Stage>
}

export type Query = {
  __typename?: 'Query'
  /** Retrieve a single asset */
  asset?: Maybe<Asset>
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple assets */
  assets: Array<Asset>
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection
  /** Retrieve multiple cities */
  cities: Array<City>
  /** Retrieve multiple cities using the Relay connection interface */
  citiesConnection: CityConnection
  /** Retrieve a single city */
  city?: Maybe<City>
  /** Retrieve document version */
  cityVersion?: Maybe<DocumentVersion>
  /** Retrieve a single heroItem */
  heroItem?: Maybe<HeroItem>
  /** Retrieve document version */
  heroItemVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple heroItems */
  heroItems: Array<HeroItem>
  /** Retrieve multiple heroItems using the Relay connection interface */
  heroItemsConnection: HeroItemConnection
  /** Retrieve a single level */
  level?: Maybe<Level>
  /** Retrieve document version */
  levelVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple levels */
  levels: Array<Level>
  /** Retrieve multiple levels using the Relay connection interface */
  levelsConnection: LevelConnection
  /** Fetches an object given its ID */
  node?: Maybe<Node>
  /** Retrieve a single registration */
  registration?: Maybe<Registration>
  /** Retrieve document version */
  registrationVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple registrations */
  registrations: Array<Registration>
  /** Retrieve multiple registrations using the Relay connection interface */
  registrationsConnection: RegistrationConnection
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection
  /** Retrieve a single slider */
  slider?: Maybe<Slider>
  /** Retrieve document version */
  sliderVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple sliders */
  sliders: Array<Slider>
  /** Retrieve multiple sliders using the Relay connection interface */
  slidersConnection: SliderConnection
  /** Retrieve a single user */
  user?: Maybe<User>
  /** Retrieve multiple users */
  users: Array<User>
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection
}

export type QueryAssetArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: AssetWhereUniqueInput
}

export type QueryAssetVersionArgs = {
  where: VersionWhereInput
}

export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<AssetWhereInput>
}

export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<AssetWhereInput>
}

export type QueryCitiesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<CityOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<CityWhereInput>
}

export type QueryCitiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<CityOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<CityWhereInput>
}

export type QueryCityArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: CityWhereUniqueInput
}

export type QueryCityVersionArgs = {
  where: VersionWhereInput
}

export type QueryHeroItemArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: HeroItemWhereUniqueInput
}

export type QueryHeroItemVersionArgs = {
  where: VersionWhereInput
}

export type QueryHeroItemsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<HeroItemOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<HeroItemWhereInput>
}

export type QueryHeroItemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<HeroItemOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<HeroItemWhereInput>
}

export type QueryLevelArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: LevelWhereUniqueInput
}

export type QueryLevelVersionArgs = {
  where: VersionWhereInput
}

export type QueryLevelsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<LevelOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<LevelWhereInput>
}

export type QueryLevelsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<LevelOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<LevelWhereInput>
}

export type QueryNodeArgs = {
  id: Scalars['ID']
  locales?: Array<Locale>
  stage?: Stage
}

export type QueryRegistrationArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: RegistrationWhereUniqueInput
}

export type QueryRegistrationVersionArgs = {
  where: VersionWhereInput
}

export type QueryRegistrationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<RegistrationOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<RegistrationWhereInput>
}

export type QueryRegistrationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<RegistrationOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<RegistrationWhereInput>
}

export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledOperationWhereUniqueInput
}

export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledReleaseWhereUniqueInput
}

export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QuerySliderArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: SliderWhereUniqueInput
}

export type QuerySliderVersionArgs = {
  where: VersionWhereInput
}

export type QuerySlidersArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<SliderOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<SliderWhereInput>
}

export type QuerySlidersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<SliderOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<SliderWhereInput>
}

export type QueryUserArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<UserOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<UserWhereInput>
}

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<UserOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<UserWhereInput>
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA'
  a: Scalars['RGBATransparency']
  b: Scalars['RGBAHue']
  g: Scalars['RGBAHue']
  r: Scalars['RGBAHue']
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']
  b: Scalars['RGBAHue']
  g: Scalars['RGBAHue']
  r: Scalars['RGBAHue']
}

export type Registration = Node & {
  __typename?: 'Registration'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Registration>
  finished?: Maybe<Scalars['Boolean']>
  /** List of Registration versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  title?: Maybe<Scalars['String']>
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
  url?: Maybe<Scalars['String']>
}

export type RegistrationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type RegistrationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type RegistrationHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type RegistrationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type RegistrationScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type RegistrationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type RegistrationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: RegistrationWhereUniqueInput
}

/** A connection to a list of items. */
export type RegistrationConnection = {
  __typename?: 'RegistrationConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<RegistrationEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type RegistrationCreateInput = {
  cl8eutn3x37x001ulbfyuf968?: InputMaybe<CityCreateManyInlineInput>
  createdAt?: InputMaybe<Scalars['DateTime']>
  finished?: InputMaybe<Scalars['Boolean']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  url?: InputMaybe<Scalars['String']>
}

export type RegistrationCreateManyInlineInput = {
  /** Connect multiple existing Registration documents */
  connect?: InputMaybe<Array<RegistrationWhereUniqueInput>>
  /** Create and connect multiple existing Registration documents */
  create?: InputMaybe<Array<RegistrationCreateInput>>
}

export type RegistrationCreateOneInlineInput = {
  /** Connect one existing Registration document */
  connect?: InputMaybe<RegistrationWhereUniqueInput>
  /** Create and connect one Registration document */
  create?: InputMaybe<RegistrationCreateInput>
}

/** An edge in a connection. */
export type RegistrationEdge = {
  __typename?: 'RegistrationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Registration
}

/** Identifies documents */
export type RegistrationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RegistrationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RegistrationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RegistrationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<RegistrationWhereStageInput>
  documentInStages_none?: InputMaybe<RegistrationWhereStageInput>
  documentInStages_some?: InputMaybe<RegistrationWhereStageInput>
  finished?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  finished_not?: InputMaybe<Scalars['Boolean']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  url?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  url_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']>
}

export enum RegistrationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FinishedAsc = 'finished_ASC',
  FinishedDesc = 'finished_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type RegistrationUpdateInput = {
  cl8eutn3x37x001ulbfyuf968?: InputMaybe<CityUpdateManyInlineInput>
  finished?: InputMaybe<Scalars['Boolean']>
  title?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

export type RegistrationUpdateManyInlineInput = {
  /** Connect multiple existing Registration documents */
  connect?: InputMaybe<Array<RegistrationConnectInput>>
  /** Create and connect multiple Registration documents */
  create?: InputMaybe<Array<RegistrationCreateInput>>
  /** Delete multiple Registration documents */
  delete?: InputMaybe<Array<RegistrationWhereUniqueInput>>
  /** Disconnect multiple Registration documents */
  disconnect?: InputMaybe<Array<RegistrationWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Registration documents */
  set?: InputMaybe<Array<RegistrationWhereUniqueInput>>
  /** Update multiple Registration documents */
  update?: InputMaybe<Array<RegistrationUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Registration documents */
  upsert?: InputMaybe<Array<RegistrationUpsertWithNestedWhereUniqueInput>>
}

export type RegistrationUpdateManyInput = {
  finished?: InputMaybe<Scalars['Boolean']>
  title?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

export type RegistrationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: RegistrationUpdateManyInput
  /** Document search */
  where: RegistrationWhereInput
}

export type RegistrationUpdateOneInlineInput = {
  /** Connect existing Registration document */
  connect?: InputMaybe<RegistrationWhereUniqueInput>
  /** Create and connect one Registration document */
  create?: InputMaybe<RegistrationCreateInput>
  /** Delete currently connected Registration document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Registration document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Registration document */
  update?: InputMaybe<RegistrationUpdateWithNestedWhereUniqueInput>
  /** Upsert single Registration document */
  upsert?: InputMaybe<RegistrationUpsertWithNestedWhereUniqueInput>
}

export type RegistrationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: RegistrationUpdateInput
  /** Unique document search */
  where: RegistrationWhereUniqueInput
}

export type RegistrationUpsertInput = {
  /** Create document if it didn't exist */
  create: RegistrationCreateInput
  /** Update document if it exists */
  update: RegistrationUpdateInput
}

export type RegistrationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: RegistrationUpsertInput
  /** Unique document search */
  where: RegistrationWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type RegistrationWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type RegistrationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RegistrationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RegistrationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RegistrationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<RegistrationWhereStageInput>
  documentInStages_none?: InputMaybe<RegistrationWhereStageInput>
  documentInStages_some?: InputMaybe<RegistrationWhereStageInput>
  finished?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  finished_not?: InputMaybe<Scalars['Boolean']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  url?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  url_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type RegistrationWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RegistrationWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RegistrationWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RegistrationWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<RegistrationWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Registration record uniquely */
export type RegistrationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText'
  /** Returns HTMl representation */
  html: Scalars['String']
  /** Returns Markdown representation */
  markdown: Scalars['String']
  /** Returns AST representation */
  raw: Scalars['RichTextAST']
  /** Returns plain-text contents of RichText */
  text: Scalars['String']
}

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation'
  affectedDocuments: Array<ScheduledOperationAffectedDocument>
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Operation description */
  description?: Maybe<Scalars['String']>
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>
  /** System stage field */
  stage: Stage
  /** operation Status */
  status: ScheduledOperationStatus
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
}

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type ScheduledOperationAffectedDocument =
  | Asset
  | City
  | HeroItem
  | Level
  | Registration
  | Slider

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
}

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: ScheduledOperation
}

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Release description */
  description?: Maybe<Scalars['String']>
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>
  /** The unique identifier */
  id: Scalars['ID']
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>
  /** System stage field */
  stage: Stage
  /** Release Status */
  status: ScheduledReleaseStatus
  /** Release Title */
  title?: Maybe<Scalars['String']>
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  description?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  isActive?: InputMaybe<Scalars['Boolean']>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
}

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
}

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: ScheduledRelease
}

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isActive?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>
  isImplicit?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  isActive?: InputMaybe<Scalars['Boolean']>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  title?: InputMaybe<Scalars['String']>
}

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>
}

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  isActive?: InputMaybe<Scalars['Boolean']>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  title?: InputMaybe<Scalars['String']>
}

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput
  /** Document search */
  where: ScheduledReleaseWhereInput
}

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>
}

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput
}

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isActive?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>
  isImplicit?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type Slider = Node & {
  __typename?: 'Slider'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Slider>
  /** List of Slider versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  sliderImages: Array<Asset>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type SliderCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type SliderDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type SliderHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type SliderPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type SliderScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type SliderSliderImagesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AssetWhereInput>
}

export type SliderUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type SliderConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: SliderWhereUniqueInput
}

/** A connection to a list of items. */
export type SliderConnection = {
  __typename?: 'SliderConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<SliderEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type SliderCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  sliderImages?: InputMaybe<AssetCreateManyInlineInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type SliderCreateManyInlineInput = {
  /** Connect multiple existing Slider documents */
  connect?: InputMaybe<Array<SliderWhereUniqueInput>>
  /** Create and connect multiple existing Slider documents */
  create?: InputMaybe<Array<SliderCreateInput>>
}

export type SliderCreateOneInlineInput = {
  /** Connect one existing Slider document */
  connect?: InputMaybe<SliderWhereUniqueInput>
  /** Create and connect one Slider document */
  create?: InputMaybe<SliderCreateInput>
}

/** An edge in a connection. */
export type SliderEdge = {
  __typename?: 'SliderEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Slider
}

/** Identifies documents */
export type SliderManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SliderWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SliderWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SliderWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<SliderWhereStageInput>
  documentInStages_none?: InputMaybe<SliderWhereStageInput>
  documentInStages_some?: InputMaybe<SliderWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  sliderImages_every?: InputMaybe<AssetWhereInput>
  sliderImages_none?: InputMaybe<AssetWhereInput>
  sliderImages_some?: InputMaybe<AssetWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum SliderOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SliderUpdateInput = {
  sliderImages?: InputMaybe<AssetUpdateManyInlineInput>
}

export type SliderUpdateManyInlineInput = {
  /** Connect multiple existing Slider documents */
  connect?: InputMaybe<Array<SliderConnectInput>>
  /** Create and connect multiple Slider documents */
  create?: InputMaybe<Array<SliderCreateInput>>
  /** Delete multiple Slider documents */
  delete?: InputMaybe<Array<SliderWhereUniqueInput>>
  /** Disconnect multiple Slider documents */
  disconnect?: InputMaybe<Array<SliderWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Slider documents */
  set?: InputMaybe<Array<SliderWhereUniqueInput>>
  /** Update multiple Slider documents */
  update?: InputMaybe<Array<SliderUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Slider documents */
  upsert?: InputMaybe<Array<SliderUpsertWithNestedWhereUniqueInput>>
}

export type SliderUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>
}

export type SliderUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SliderUpdateManyInput
  /** Document search */
  where: SliderWhereInput
}

export type SliderUpdateOneInlineInput = {
  /** Connect existing Slider document */
  connect?: InputMaybe<SliderWhereUniqueInput>
  /** Create and connect one Slider document */
  create?: InputMaybe<SliderCreateInput>
  /** Delete currently connected Slider document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Slider document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Slider document */
  update?: InputMaybe<SliderUpdateWithNestedWhereUniqueInput>
  /** Upsert single Slider document */
  upsert?: InputMaybe<SliderUpsertWithNestedWhereUniqueInput>
}

export type SliderUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SliderUpdateInput
  /** Unique document search */
  where: SliderWhereUniqueInput
}

export type SliderUpsertInput = {
  /** Create document if it didn't exist */
  create: SliderCreateInput
  /** Update document if it exists */
  update: SliderUpdateInput
}

export type SliderUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SliderUpsertInput
  /** Unique document search */
  where: SliderWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type SliderWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type SliderWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SliderWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SliderWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SliderWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<SliderWhereStageInput>
  documentInStages_none?: InputMaybe<SliderWhereStageInput>
  documentInStages_some?: InputMaybe<SliderWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  sliderImages_every?: InputMaybe<AssetWhereInput>
  sliderImages_none?: InputMaybe<AssetWhereInput>
  sliderImages_some?: InputMaybe<AssetWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type SliderWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SliderWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SliderWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SliderWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<SliderWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Slider record uniquely */
export type SliderWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>
}

/** User system model */
export type User = Node & {
  __typename?: 'User'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** Get the document in other stages */
  documentInStages: Array<User>
  /** The unique identifier */
  id: Scalars['ID']
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind
  /** The username */
  name: Scalars['String']
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
}

/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: UserWhereUniqueInput
}

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<UserEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
}

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: User
}

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  documentInStages_every?: InputMaybe<UserWhereStageInput>
  documentInStages_none?: InputMaybe<UserWhereStageInput>
  documentInStages_some?: InputMaybe<UserWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isActive?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  picture?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
}

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>
}

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  documentInStages_every?: InputMaybe<UserWhereStageInput>
  documentInStages_none?: InputMaybe<UserWhereStageInput>
  documentInStages_some?: InputMaybe<UserWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isActive?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  picture?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type Version = {
  __typename?: 'Version'
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: Stage
}

export type VersionWhereInput = {
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: Stage
}

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type CitiesQueryVariables = Exact<{ [key: string]: never }>

export type CitiesQuery = {
  __typename?: 'Query'
  cities: Array<{
    __typename?: 'City'
    id: string
    title?: string | null
    content?: string | null
    location?: string | null
    place?: string | null
    contact?: string | null
    rulesUrl?: string | null
    gallery?: string | null
    image?: { __typename?: 'Asset'; url: string } | null
    symbol?: { __typename?: 'Asset'; url: string } | null
    levels: Array<{
      __typename?: 'Level'
      id: string
      title?: string | null
      date?: string | null
      modalities?: string | null
      finished?: boolean | null
      reportUrl?: string | null
      dueDate?: string | null
    }>
    registrations: Array<{
      __typename?: 'Registration'
      title?: string | null
      finished?: boolean | null
      url?: string | null
    }>
  }>
}

export type GetHeroItemsQueryVariables = Exact<{ [key: string]: never }>

export type GetHeroItemsQuery = {
  __typename?: 'Query'
  heroItems: Array<{
    __typename?: 'HeroItem'
    title?: string | null
    description?: string | null
    slider: Array<{ __typename?: 'Asset'; id: string; url: string }>
  }>
}

export const CitiesDocument = gql`
  query Cities {
    cities {
      id
      title
      content
      image {
        url
      }
      location
      place
      contact
      rulesUrl
      gallery
      symbol {
        url
      }
      levels {
        id
        title
        date
        modalities
        finished
        reportUrl
        dueDate
      }
      registrations {
        title
        finished
        url
      }
    }
  }
`

/**
 * __useCitiesQuery__
 *
 * To run a query within a React component, call `useCitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCitiesQuery(
  baseOptions?: Apollo.QueryHookOptions<CitiesQuery, CitiesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CitiesQuery, CitiesQueryVariables>(CitiesDocument, options)
}
export function useCitiesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CitiesQuery, CitiesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CitiesQuery, CitiesQueryVariables>(CitiesDocument, options)
}
export type CitiesQueryHookResult = ReturnType<typeof useCitiesQuery>
export type CitiesLazyQueryHookResult = ReturnType<typeof useCitiesLazyQuery>
export type CitiesQueryResult = Apollo.QueryResult<CitiesQuery, CitiesQueryVariables>
export const GetHeroItemsDocument = gql`
  query GetHeroItems {
    heroItems {
      title
      description
      slider {
        id
        url
      }
    }
  }
`

/**
 * __useGetHeroItemsQuery__
 *
 * To run a query within a React component, call `useGetHeroItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHeroItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHeroItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHeroItemsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetHeroItemsQuery, GetHeroItemsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetHeroItemsQuery, GetHeroItemsQueryVariables>(
    GetHeroItemsDocument,
    options
  )
}
export function useGetHeroItemsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetHeroItemsQuery, GetHeroItemsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetHeroItemsQuery, GetHeroItemsQueryVariables>(
    GetHeroItemsDocument,
    options
  )
}
export type GetHeroItemsQueryHookResult = ReturnType<typeof useGetHeroItemsQuery>
export type GetHeroItemsLazyQueryHookResult = ReturnType<typeof useGetHeroItemsLazyQuery>
export type GetHeroItemsQueryResult = Apollo.QueryResult<
  GetHeroItemsQuery,
  GetHeroItemsQueryVariables
>
