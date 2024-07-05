import { Product } from "./src/app/interfaces/product";

export const products: Product[] = [
  // {
  //   id: "1",
  //   name: 'Gas Cylinder',
  //   description: 'This is a 3kg gas cylinder',
  //   price: 19.99,
  //   imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQiRm5k26vM7hC_ZXtL_v1ZbB9X_b-4X6hAiMXa3jKl1qg8LMjF1BpuDLQXi-CfxBjwHz4R5TdZ1PfBTyz5PCYBFVUzgSaJDbSXhCYKNroQ9ZU6kgZ0ZFtpbZLE4_8PKw5qaSM2ig&usqp=CAc',
  //   quantity: 10
  // },
  // {
  //   id: "2",
  //   name: '1 Burner Stove',
  //   description: 'This is a 1 burner stove',
  //   price: 29.99,
  //   imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRCmz-qVOiNEJEcdqLWxHaMNnqaqK0NrZ_jPjKcvU6IUcoEFEiXq8xJV18UZAJNwSDdVKY8k1XffC6XWOX11czOTQGnUW4a4gORYgYp2eOoZJ2cVZDuGNTk_Zi9cC8gp3qJVm92UJyBWjA&usqp=CAc',
  //   quantity: 5
  // },
  // {
  //   id: "3",
  //   name: '2 Burner Stove',
  //   description: 'This is a 2 burner stove',
  //   price: 39.99,
  //   imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRt9yWzp83KMe--xBjsUbkoka7GJn9piw1xkFF7zjHR5gtO-L5e9H4bGU-EQ10z9RNIrTVZXV1ucTUJfXMrah-cYqSgnYqbkP7_z6O53yO7rwjd0JHU8qs0UyvgrygvybislZUVSw&usqp=CAc',
  //   quantity: 8
  // },
  // {
  //   id: "4",
  //   name: 'Spare Part',
  //   description: 'This is a spare part',
  //   price: 49.99,
  //   imageUrl: 'data:image/webp;base64,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',
  //   quantity: 12
  // }
];
