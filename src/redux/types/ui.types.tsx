export interface UII {
  isLoading: boolean;
  message: string;
}

export const UII_InitState: UII = {
  isLoading: false,
  message: '',
};

export type UIActionTypes =
  | { type: 'UI_LOADING'; payload: { message: string } }
  | { type: 'UI_LOADED' };
