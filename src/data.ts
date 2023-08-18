export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },

  {
    id: 2,
    title: "Lists",
    listItems: [

      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "post2.svg",
      },
    ],
  },

  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "element.svg",
      },

      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "note.svg",
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: "form.svg",
      },

      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: "calendar.svg",
      },
    ],
  },

  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Setting",
        url: "/",
        icon: "setting.svg",
      },

      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "backup.svg",
      },
    ],
  },

  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "chart.svg",
      },

      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "log.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://i.ibb.co/y5N3s20/d1.jpg",
    username: "sylvia dex",
    email: "sly23@gmail.com",
    amount: "4.543",
  },
  {
    id: 2,
    img: "https://i.ibb.co/n8nsTVj/d2.jpg",
    username: "ryan",
    email: "ryan234@gmail.com",
    amount: "10.233",
  },
  {
    id: 3,
    img: "https://i.ibb.co/HT3hkf5/d3.jpg",
    username: "Sebastian",
    email: "sebastian2030@gmail.com",
    amount: "2.342",
  },
  {
    id: 4,
    img: "https://i.ibb.co/Kb6ZvTN/d4.jpg",
    username: "sam lyre",
    email: "saml1903@gmail.com",
    amount: "5.643",
  },
  {
    id: 5,
    img: "https://i.ibb.co/N2Fqn00/d5.jpg",
    username: "terminator",
    email: "tr77@gmail.com",
    amount: "15.386",
  },
  {
    id: 6,
    img: "https://i.ibb.co/L6b6Qz0/d6.jpg",
    username: "queen heart",
    email: "qxihrt893@gmail.com",
    amount: "7.443",
  },
  {
    id: 7,
    img: "https://i.ibb.co/kHhJBzM/d7.jpg",
    username: "flame Ashtoreth",
    email: "flawtorth@gmail.com",
    amount: "12.343",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total User",
  number: "11.322",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 500 },
    { name: "Mon", users: 400 },
    { name: "Tue", users: 660 },
    { name: "Wed", users: 340 },
    { name: "Thu", users: 450 },
    { name: "Fri", users: 160 },
    { name: "Sat", users: 700 },
  ],
};

export const chartBoxProduct = {
  color: "blue",
  icon: "/productIcon.svg",
  title: "Total Products",
  number: "345",
  dataKey: "products",
  percentage: -10,
  chartData: [
    { name: "Sun", products: 500 },
    { name: "Mon", products: 400 },
    { name: "Tue", products: 660 },
    { name: "Wed", products: 340 },
    { name: "Thu", products: 450 },
    { name: "Fri", products: 160 },
    { name: "Sat", products: 700 },
  ],
};

export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "$86.512",
  dataKey: "revenue",
  percentage: -25,
  chartData: [
    { name: "Sun", revenue: 500 },
    { name: "Mon", revenue: 400 },
    { name: "Tue", revenue: 660 },
    { name: "Wed", revenue: 340 },
    { name: "Thu", revenue: 450 },
    { name: "Fri", revenue: 160 },
    { name: "Sat", revenue: 700 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "3.2",
  dataKey: "ratio",
  percentage: 15,
  chartData: [
    { name: "Sun", ratio: 500 },
    { name: "Mon", ratio: 400 },
    { name: "Tue", ratio: 660 },
    { name: "Wed", ratio: 340 },
    { name: "Thu", ratio: 450 },
    { name: "Fri", ratio: 160 },
    { name: "Sat", ratio: 700 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: "4000",
    },
    {
      name: "Mon",
      profit: "3000",
    },
    {
      name: "Tue",
      profit: "5300",
    },
    {
      name: "Wed",
      profit: "3000",
    },
    {
      name: "Thu",
      profit: "6000",
    },
    {
      name: "Fri",
      profit: "4000",
    },
    {
      name: "Sat",
      profit: "7000",
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: "4000",
    },
    {
      name: "Mon",
      visit: "3000",
    },
    {
      name: "Tue",
      visit: "5300",
    },
    {
      name: "Wed",
      visit: "3000",
    },
    {
      name: "Thu",
      visit: "6000",
    },
    {
      name: "Fri",
      visit: "4000",
    },
    {
      name: "Sat",
      visit: "7000",
    },
  ],
};

export const userRows = [
  {
    id: 1,
    img: "https://i.ibb.co/RH3ms6D/q1.jpg",
    lastName: "diana",
    firstName: "rem",
    email: "rer323@gmail.com",
    phone: "123 456 324",
    createdAt: "10.08.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://i.ibb.co/N2KxVJY/q2.jpg",
    lastName: "sin",
    firstName: "austin",
    email: "aust20@gmail.com",
    phone: "123 456 324",
    createdAt: "10.08.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://i.ibb.co/2ghxRS2/q3.jpg",
    lastName: "dexter",
    firstName: "ryan",
    email: "ryad23@gmail.com",
    phone: "123 456 324",
    createdAt: "10.08.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://i.ibb.co/870yb2q/q4.jpg",
    lastName: "luff",
    firstName: "neil",
    email: "nluf43@gmail.com",
    phone: "123 456 324",
    createdAt: "10.08.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://i.ibb.co/HY2vdP3/q5.jpg",
    lastName: "deil",
    firstName: "Wayne",
    email: "wanabe@gmail.com",
    phone: "123 456 324",
    createdAt: "10.08.2023",
    verified: true,
  },
  {
    id: 6,
    img: "https://i.ibb.co/58GxnRP/q6.jpg",
    lastName: "blizzard",
    firstName: "Yaml",
    email: "yamibliz@gmail.com",
    phone: "123 456 324",
    createdAt: "10.08.2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://i.ibb.co/JjRZc7K/q7.jpg",
    lastName: "yoko",
    firstName: "Oscine",
    email: "osh@gmail.com",
    phone: "123 456 324",
    createdAt: "10.08.2023",
    verified: true,
  },
  {
    id: 8,
    img: "https://i.ibb.co/T0z9D6k/q8.jpg",
    lastName: "Alisa",
    firstName: "Yuan",
    email: "yuni@gmail.com",
    phone: "123 456 324",
    createdAt: "10.08.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://i.ibb.co/jGhnTF4/q9.jpg",
    lastName: "bordon",
    firstName: "Billy",
    email: "bill@gmail.com",
    phone: "123 456 324",
    createdAt: "10.08.2023",
    verified: true,
  },
  {
    id: 10,
    img: "https://i.ibb.co/gSLNKVL/q10.jpg",
    lastName: "fan",
    firstName: "Mo",
    email: "moFa@gmail.com",
    phone: "123 456 324",
    createdAt: "10.08.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://i.ibb.co/mtkq90S/q11.jpg",
    lastName: "brothering",
    firstName: "Ash",
    email: "ashbro@gmail.com",
    phone: "123 456 324",
    createdAt: "10.08.2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://i.ibb.co/CBByCQB/q12.jpg",
    lastName: "monkey",
    firstName: "Duffy",
    email: "luff@gmail.com",
    phone: "123 456 324",
    createdAt: "10.08.2023",
    verified: true,
  },
  {
    id: 13,
    img: "https://i.ibb.co/tMdkVJN/q13.jpg",
    lastName: "blake",
    firstName: "Andrew",
    email: "ar3456@gmail.com",
    phone: "123 456 324",
    createdAt: "10.08.2023",
    verified: true,
  },
];

export const product = [
  {
    id: 1,
    img: "https://i.ibb.co/G33n80R/p1.jpg",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "$250.99",
    createdAt: "01-10-23",
    inStock: true,
  },
  {
    id: 2,
    img: "https://i.ibb.co/hy1YYm5/p2.jpg",
    title: "Dell Laptop inspirits G12",
    color: "black",
    producer: "Dell",
    price: "$100.50",
    createdAt: "01-10-23",
    inStock: true,
  },
  {
    id: 3,
    img: "https://i.ibb.co/RYrHr82/p3.jpg",
    title: "Mac book M1 pro",
    color: "grey",
    producer: "apple",
    price: "$750.45",
    createdAt: "01-10-23",
    inStock: true,
  },
  {
    id: 4,
    img: "https://i.ibb.co/n62Lf9C/p4.jpg",
    title: "I-phone 14 pro max",
    color: "purple",
    producer: "apple",
    price: "$500.32",
    createdAt: "01-10-23",
    inStock: true,
  },
  {
    id: 5,
    img: "https://i.ibb.co/qyhMqqS/p5.jpg",
    title: "Samsung galaxy S6 Lite Tab",
    color: "Grey",
    producer: "samsung",
    price: "$400.50",
    createdAt: "01-10-23",
    inStock: true,
  },

  {
    id: 6,
    img: "https://i.ibb.co/MN6vRtv/p6.jpg",
    title: "Galaxy S23 Ultra",
    color: "Black",
    producer: "samsung",
    price: "$330.60",
    createdAt: "01-10-23",
    inStock: true,
  },
  {
    id: 7,
    img: "https://i.ibb.co/fHystJT/p7.jpg",
    title: "Asus Rog Strix G15",
    color: "Black",
    producer: "Asus",
    price: "$550.00",
    createdAt: "01-10-23",
    inStock: true,
  },

  {
    id: 8,
    img: "https://i.ibb.co/ZKMGpSP/p8.jpg",
    title: "OnePus Nerd SE ",
    color: "white",
    producer: "OnePlus",
    price: "$270.78",
    createdAt: "01-10-23",
    inStock: true,
  },
  {
    id: 9,
    img: "https://i.ibb.co/LRqzr5J/p9.jpg",
    title: "LG 4k Monitor",
    color: "sliver",
    producer: "LG",
    price: "$800.34",
    createdAt: "01-10-23",
    inStock: true,
  },
  {
    id: 10,
    img: "https://i.ibb.co/tZ40kP6/p10.jpg",
    title: "Logitech Gaming KeyBoard",
    color: "black",
    producer: "Logitech",
    price: "$130.99",
    createdAt: "01-10-23",
    inStock: true,
  },
];



export const singleUser = {
  id: 1,
  title: "John Doe",
  img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  info: {
    username: "John99",
    fullname: "John Doe",
    email: "johndoe@gmail.com",
    phone: "123 456 789",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },

  activities: [
    {
      text: "Jacob purchased playstation 5 digital edition",
      time: "3 day ago",
    },
    {
      text: "law just reviewed the product",
      time: "5 month ago",
    },
    {
      text: "Jonathan purchased playstation 5 digital edition",
      time: "23 day ago",
    },
    {
      text: "lime purchased playstation 5 digital edition",
      time: "15 week ago",
    },
    {
      text: "Jacob purchased playstation 5 digital edition",
      time: "1 month ago",
    },
  ]
}
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mike Doe purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Anna Doe reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Helen Doe reviewed the product",
      time: "2 months ago",
    },
  ],
};

/*





















*/
