import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { CreateAndEditArticlePageSchema } from "../types/createAndEditArticlePage";
import {
  ArticleType,
  Article,
  ArticleBlockType,
  ArticleCodeBlock,
  ArticleImageBlock,
  ArticleTextBlock,
  ArticleBlock,
} from "@/entities/Article";
import { fetchArticleData } from "../services/fetchArticleData/fetchArticleData";
import { createNewArticle } from "../services/createNewArticle/createNewArticle";
import { updateArticleData } from "../services/updateArticleData/updateArticleData";

const initialState: CreateAndEditArticlePageSchema = {
  data: {
    id: uuidv4(),
    views: 0,
    createdAt: new Date().toISOString().split("T")[0],
    blocks: [],
    type: [],
  },
  isLoading: false,
};

export const createAndEditArticlePageSlice = createSlice({
  name: "createAndEditArticlePage",
  initialState,
  reducers: {
    setArticleTitle: (state, action: PayloadAction<string>) => {
      state.data.title = action.payload;
    },
    setArticleSubtitle: (state, action: PayloadAction<string>) => {
      state.data.subtitle = action.payload;
    },

    setArticleImage: (state, action: PayloadAction<string>) => {
      state.data.img = action.payload;
    },

    setArticleType: (state, action: PayloadAction<ArticleType>) => {
      const currentTypes = state.data?.type || [];
      const newType = currentTypes.includes(action.payload)
        ? currentTypes.filter((type) => type !== action.payload)
        : [...currentTypes, action.payload];

      state.data.type = newType;
    },

    addArticleBlock: (state, action: PayloadAction<ArticleBlockType>) => {
      let newBlock: ArticleBlock;
      const id = uuidv4();
      switch (action.payload) {
        case ArticleBlockType.IMAGE:
          newBlock = {
            id,
            type: ArticleBlockType.IMAGE,
            src: "",
            title: "",
          };
          break;
        case ArticleBlockType.TEXT:
          newBlock = {
            id,
            type: ArticleBlockType.TEXT,
            title: "",
            paragraphs: [],
          };
          break;
        case ArticleBlockType.CODE:
          newBlock = {
            id,
            type: ArticleBlockType.CODE,
            code: "",
          };
          break;
        default:
          return;
      }
      state.data?.blocks?.push(newBlock);
    },

    updateImageBlock: (state, action: PayloadAction<{ id?: string; changes?: Partial<ArticleImageBlock> }>) => {
      state.data.blocks = state.data.blocks?.map((block) => {
        return block.id === action.payload.id && block.type === ArticleBlockType.IMAGE
          ? { ...block, ...action.payload.changes }
          : block;
      });
    },

    updateCodeBlock: (state, action: PayloadAction<{ id?: string; changes?: Partial<ArticleCodeBlock> }>) => {
      state.data.blocks = state.data.blocks?.map((block) => {
        return block.id === action.payload.id && block.type === ArticleBlockType.CODE
          ? { ...block, ...action.payload.changes }
          : block;
      });
    },

    updateTextBlock: (state, action: PayloadAction<{ id?: string; changes?: Partial<ArticleTextBlock> }>) => {
      state.data.blocks = state.data.blocks?.map((block) => {
        return block.id === action.payload.id && block.type === ArticleBlockType.TEXT
          ? { ...block, ...action.payload.changes }
          : block;
      });
    },

    removeArticleBlock: (state, action: PayloadAction<string>) => {
      state.data.blocks = state.data.blocks?.filter((block) => block.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleData.fulfilled, (state, actions: PayloadAction<Article>) => {
        state.data = actions.payload;
        state.isLoading = false;
      })
      .addCase(fetchArticleData.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.payload;
      })
      .addCase(createNewArticle.rejected, (state, actions) => {
        state.isLoading = false;
        state.validateErrors = actions.payload;
      })
      .addCase(createNewArticle.fulfilled, (state) => {
        state.isLoading = false;
        state.validateErrors = undefined;
      })
      .addCase(createNewArticle.pending, (state, actions) => {
        state.validateErrors = actions.payload;
      })
      .addCase(updateArticleData.rejected, (state, actions) => {
        state.isLoading = false;
        state.validateErrors = actions.payload;
      })
      .addCase(updateArticleData.fulfilled, (state) => {
        state.isLoading = false;
        state.validateErrors = undefined;
      })
      .addCase(updateArticleData.pending, (state, actions) => {
        state.validateErrors = actions.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { reducer: createAndEditArticlePageReducer } = createAndEditArticlePageSlice;
export const { actions: createAndEditArticlePageActions } = createAndEditArticlePageSlice;
