export interface Favorites {
    userId: {
        ref: string,
        required: Boolean,
      },
      itemId: {
        ref: string,
        required: Boolean,
        unique: Boolean,
      },
      createdAt: any,
}
