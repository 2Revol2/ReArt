import { ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManager, StateSchemaKey } from "@/app/providers/StoreProvider";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  children: ReactNode;
  removeAfterUnmout?: boolean;
}

export const DynamicModuleLoader = ({
  children,
  reducers,
  removeAfterUnmout,
}: DynamicModuleLoaderProps) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;
  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmout) {
        Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
          store.reducerManager.remove("loginForm");
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
