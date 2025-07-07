import { StateSchema } from "@/app/providers/StoreProvider";
import {
  getCreateAndEditArticleData,
  getCreateAndEditArticleError,
  getCreateAndEditArticleIsLoading,
} from "./createAndEditArticlePage";

describe("createAndEditArticlePage", () => {
  test("should return data", () => {
    const data = { title: "title", subtitle: "subtitle" };

    const state: DeepPartial<StateSchema> = {
      createAndEditArticlePage: { data },
    };
    expect(getCreateAndEditArticleData(state as StateSchema)).toEqual(data);
  });

  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      createAndEditArticlePage: { isLoading: true },
    };
    expect(getCreateAndEditArticleIsLoading(state as StateSchema)).toBe(true);
  });

  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      createAndEditArticlePage: { error: "error" },
    };
    expect(getCreateAndEditArticleError(state as StateSchema)).toBe("error");
  });
});
