export interface UserTypes {
  guid?: string;
  status_info?: boolean;
  username?: string;
  email?: string;
  point?: number;
  location?: any;
  image_url?: string;
  size?: "90px" | "140px" | "170px";
}

export const dummyUser: UserTypes[] = [
  {
    guid: '-',
    status_info: true,
    username: "-",
    email: "",
    point: 0,
    image_url:
      "0",
    location: null,
    size: "170px",
  },
  {
    guid: '1',
    status_info: false,
    username: "@randy_kapolsek",
    email: "randy@wit.id",
    point: 50,
    image_url:
      "https://png.pngtree.com/png-clipart/20230604/ourmid/pngtree-3d-avatar-oldman-like-detective-png-image_7120500.png",
    location: null,
    size: "90px",
  },
  {
    guid: '2',
    status_info: false,
    username: "@duckprovider",
    email: "ihsan@wit.id",
    point: 150,
    image_url:
      "https://cdn3d.iconscout.com/3d/premium/thumb/woman-avatar-6299541-5187873.png",
    location: null,
    size: "140px",
  },
  {
    guid: '3',
    status_info: false,
    username: "@dummy_1",
    email: "dummy_1@wit.id",
    point: 90,
    image_url:
      "https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-6299539-5187871.png?f=webp",
    location: null,
    size: "90px",
  },
];
