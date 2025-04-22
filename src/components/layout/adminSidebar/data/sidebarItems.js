export const items = [
  {
    id: "100",
    title: "پیشخوان",
    icon: "/uploads/icons/home.svg",
    link: "/admin/counter",
  },
  {
    title: " مدیران سایت",
    eventKey: "110",
    icon: "/uploads/icons/users.svg",
    links: [
      {
        id: "111",
        eventKey: "110",
        title: "ایجاد مدیر",
        icon: "/uploads/icons/users.svg",
        link: "/admin/newAdmin",
      },
      {
        id: "112",
        eventKey: "110",
        title: "مدیران",
        icon: "/uploads/icons/users.svg",
        link: "/admin/allAdmins",
      },
    ],
  },
  {
    title: " کاربران سایت",
    eventKey: "120",
    icon: "/uploads/icons/users.svg",
    links: [
      {
        id: "121",
        eventKey: "120",
        title: "ایجاد کاربر",
        icon: "/uploads/icons/users.svg",
        link: "/admin/newUser",
      },
      {
        id: "122",
        eventKey: "120",
        title: "کاربران",
        icon: "/uploads/icons/users.svg",
        link: "/admin/allUsers",
      },
    ],
  },
  {
    title: "دسته بندی ها",
    eventKey: "130",
    icon: "/uploads/icons/category.svg",
    links: [
      {
        id: "131",
        eventKey: "130",
        title: "ایجاد دسته بندی",
        icon: "/uploads/icons/category.svg",
        link: "/admin/newCategory",
      },
      {
        id: "132",
        eventKey: "130",
        title: "دسته بندی ها",
        icon: "/uploads/icons/category.svg",
        link: "/admin/allCategories",
      },
    ],
  },
  {
    title: "محصولات ",
    eventKey: "140",
    icon: "/uploads/icons/product.svg",
    links: [
      {
        id: "141",
        eventKey: "140",
        title: "ایجاد محصول",
        icon: "/uploads/icons/product.svg",
        link: "/admin/newProduct",
      },
      {
        id: "142",
        eventKey: "140",
        title: "محصولات",
        icon: "/uploads/icons/product.svg",
        link: "/admin/allProducts",
      },
    ],
  },
  {
    title: "کارت ها ",
    eventKey: "150",
    icon: "/uploads/icons/credit-card.svg",
    links: [
      {
        id: "151",
        eventKey: "150",
        title: "ایجاد کارت",
        icon: "/uploads/icons/credit-card.svg",
        link: "/admin/newCard",
      },
      {
        id: "152",
        eventKey: "150",
        title: "کارت ها",
        icon: "/uploads/icons/credit-card.svg",
        link: "/admin/allCards",
      },
    ],
  },
  {
    title: "تیکت ها",
    eventKey: "160",
    icon: "/uploads/icons/message-square.svg",
    links: [
      {
        id: "161",
        eventKey: "160",
        title: "ایجاد تیکت",
        icon: "/uploads/icons/message-square.svg",
        link: "/admin/newTicket",
      },
      {
        id: "162",
        eventKey: "160",
        title: "تیکت ها",
        icon: "/uploads/icons/message-square.svg",
        link: "/admin/allTickets",
      },
    ],
  },
  {
    title: "ایمیل ها",
    icon: "/uploads/icons/inbox.svg",
    link: "/admin/allEmails",
  },
  {
    title: "خروج",
    icon: "/uploads/icons/log-out.svg",
    link: "/",
  },
];
