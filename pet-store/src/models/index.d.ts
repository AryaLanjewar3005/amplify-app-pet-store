import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Per, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly age?: number | null;
  readonly breed?: string | null;
  readonly about?: string | null;
  readonly image?: string | null;
  readonly color?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Per, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly age?: number | null;
  readonly breed?: string | null;
  readonly about?: string | null;
  readonly image?: string | null;
  readonly color?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Per = LazyLoading extends LazyLoadingDisabled ? EagerPer : LazyPer

export declare const Per: (new (init: ModelInit<Per>) => Per) & {
  copyOf(source: Per, mutator: (draft: MutableModel<Per>) => MutableModel<Per> | void): Per;
}