export const MENUITEMS = [
  {
    menutitle: "DASHBOARD",
    Items: [
      {
        path: "/components/dashboard/dashboard",
        icon: "ti-home",
        type: "link",
        active: false,
        selected: false,
        title: "Accueil",
      },
      {
        title: "GESTION ENTITE",
        icon: "ti-wallet",
        type: "sub",
        active: false,
        selected: false,
        children: [
          {
            path: "/components/crypto-currencies/dashboard",
            type: "link",
            active: false,
            selected: false,
            title: "ACCUEIL",
          },
          {
            path: "/components/crypto-currencies/marketcap",
            type: "link",
            active: false,
            selected: false,
            title: "Marketcap",
          },
          {
            path: "/components/crypto-currencies/currency-exchange",
            type: "link",
            active: false,
            selected: false,
            title: "Currency exchange",
          },
          {
            path: "/components/crypto-currencies/buy-sell",
            type: "link",
            active: false,
            selected: false,
            title: "Buy & Sell",
          },
          {
            path: "/components/crypto-currencies/wallet",
            type: "link",
            active: false,
            selected: false,
            title: "Wallet",
          },
          {
            path: "/components/crypto-currencies/transcations",
            type: "link",
            active: false,
            selected: false,
            title: "Transcations",
          },
        ],
      },
      {
        title: "ECommerce",
        icon: "ti-shopping-cart-full",
        type: "sub",
        active: false,
        selected: false,
        children: [
          {
            path: "/components/ecommerce/dashboard",
            type: "link",
            active: false,
            selected: false,
            title: "Dashboard",
          },
          {
            path: "/components/ecommerce/products",
            type: "link",
            active: false,
            selected: false,
            title: "Products",
          },
          {
            path: "/components/ecommerce/product-details",
            type: "link",
            active: false,
            selected: false,
            title: "Product Details",
          },
          {
            path: "/components/ecommerce/cart",
            type: "link",
            active: false,
            selected: false,
            title: "Cart",
          },
          {
            path: "/components/ecommerce/wishlist",
            type: "link",
            active: false,
            selected: false,
            title: "Wishlist",
          },
          {
            path: "/components/ecommerce/checkout",
            type: "link",
            active: false,
            selected: false,
            title: "Checkout",
          },
          {
            path: "/components/ecommerce/orders",
            type: "link",
            active: false,
            selected: false,
            title: "Orders",
          },
          {
            path: "/components/ecommerce/add-product",
            type: "link",
            active: false,
            selected: false,
            title: "Add Product",
          },
          {
            path: "/components/ecommerce/account",
            type: "link",
            active: false,
            selected: false,
            title: "Account",
          },
        ],
      },
    ],
  },
  // {
  //   menutitle: "LANDINGPAGE",
  //   Items: [
  //     {
  //       path: "/components/landingpage/landingpage",
  //       icon: "ti-layout",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       title: "Landingpage",
  //     },
  //   ],
  // },
  // {
  //   menutitle: "APPLICATIONS",
  //   Items: [
  //     {
  //       title: "Apps",
  //       icon: "ti-write",
  //       type: "sub",
  //       active: false,
  //       selected: false,
  //       children: [
  //         {
  //           path: "/components/apps/widgets",
  //           icon: "ti-server",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Widgets",
  //         },
  //         {
  //           title: "Mail",
  //           icon: "ti-email",
  //           type: "sub",
  //           active: false,
  //           selected: false,
  //           children: [
  //             {
  //               path: "/components/apps/mail/mail-inbox",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "Mail-Inbox",
  //             },
  //             {
  //               path: "/components/apps/mail/view-mail",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "View-Mail ",
  //             },
  //             {
  //               path: "/components/apps/mail/mail-compose",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "Mail-Composed ",
  //             },
  //           ],
  //         },
  //         {
  //           title: "Maps",
  //           type: "sub",
  //           active: false,
  //           selected: false,
  //           children: [
  //             {
  //               path: "/components/apps/maps/leafletsmaps",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "Leaflet Maps",
  //             },
  //             {
  //               path: "/components/apps/maps/rsmmaps",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "Rsm Maps",
  //             },
  //           ],
  //         },
  //         {
  //           title: "Tables",
  //           icon: "ti-agenda",
  //           type: "sub",
  //           active: false,
  //           selected: false,
  //           children: [
  //             {
  //               path: "/components/apps/tables/basic-tables",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "Basic Tables",
  //             },
  //             {
  //               path: "/components/apps/tables/data-tables",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "Data Tables",
  //             },
  //           ],
  //         },
  //         {
  //           title: "Blog",
  //           icon: "ti-agenda",
  //           type: "sub",
  //           active: false,
  //           selected: false,
  //           children: [
  //             {
  //               path: "/components/apps/blog/blog-page",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "Blog",
  //             },
  //             {
  //               path: "/components/apps/blog/blog-details",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "Blog-details",
  //             },
  //             {
  //               path: "/components/apps/blog/blog-post",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "Blog-post",
  //             },
  //           ],
  //         },
  //         {
  //           title: "File Manager",
  //           icon: "ti-agenda",
  //           type: "sub",
  //           active: false,
  //           selected: false,
  //           children: [
  //             {
  //               path: "/components/apps/file-manager/file-manager",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "File-manager",
  //             },
  //             {
  //               path: "/components/apps/file-manager/file-manager-list",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "File-manager-list",
  //             },
  //             {
  //               path: "/components/apps/file-manager/file-details",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "File-details",
  //             },
  //             {
  //               path: "/components/apps/file-manager/file-attachments",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "FileAttachements",
  //             },
  //           ],
  //         },
  //         {
  //           title: "Icons",
  //           icon: "ti-agenda",
  //           type: "sub",
  //           active: false,
  //           selected: false,
  //           children: [
  //             {
  //               path: "/components/apps/icons/font-awesome",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "Font Awesome",
  //             },
  //             {
  //               path: "/components/apps/icons/material-design-icons",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "Material Design icons",
  //             },
  //             {
  //               path: "/components/apps/icons/simple-line-icons",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "Simple Line icons",
  //             },
  //             {
  //               path: "/components/apps/icons/feather-icons",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "Feather icons",
  //             },
  //             {
  //               path: "/components/apps/icons/ionic-icons",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "Ionic icons",
  //             },
  //             {
  //               path: "/components/apps/icons/flag-icons",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "Flags icons",
  //             },
  //             {
  //               path: "/components/apps/icons/pe7-icons",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "Pe7 icons",
  //             },
  //             {
  //               path: "/components/apps/icons/themify-icons",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "Themify icons",
  //             },
  //             {
  //               path: "/components/apps/icons/typicons-icons",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "Typicons icons",
  //             },
  //             {
  //               path: "/components/apps/icons/weather-icons",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "Weather icons",
  //             },
  //             {
  //               path: "/components/apps/icons/material-icons",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "Material icons",
  //             },
  //             {
  //               path: "/components/apps/icons/bootstrap-icons",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               title: "Bootstrap icons",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   menutitle: "components",
  //   Items: [
  //     {
  //       title: "Elements",
  //       icon: "ti-package",
  //       type: "sub",
  //       active: false,
  //       selected: false,
  //       children: [
  //         {
  //           path: "/components/elements/alerts",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Alerts",
  //         },
  //         {
  //           path: "/components/elements/accordion",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Accordion",
  //         },
  //         {
  //           path: "/components/elements/avatar",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Avatar",
  //         },
  //         {
  //           path: "/components/elements/breadcrumbs",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Breadcrumbs",
  //         },
  //         {
  //           path: "/components/elements/buttons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Buttons",
  //         },
  //         {
  //           path: "/components/elements/badge",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Badge",
  //         },
  //         {
  //           path: "/components/elements/dropdown",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Dropdown",
  //         },
  //         {
  //           path: "/components/elements/thumbnails",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Thumbnails",
  //         },
  //         {
  //           path: "/components/elements/list-group",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "List Group",
  //         },
  //         {
  //           path: "/components/elements/navigation",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Navigation",
  //         },
  //         {
  //           path: "/components/elements/pagination",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Pagination",
  //         },
  //         {
  //           path: "/components/elements/popover",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Popover",
  //         },
  //         {
  //           path: "/components/elements/progress",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Progress",
  //         },
  //         {
  //           path: "/components/elements/spinners",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Spinners",
  //         },
  //         {
  //           path: "/components/elements/media-object",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Media Object",
  //         },
  //         {
  //           path: "/components/elements/typography",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Typography",
  //         },
  //         {
  //           path: "/components/elements/tooltip",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Tooltip",
  //         },
  //         {
  //           path: "/components/elements/tabs",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Tabs",
  //         },
  //         {
  //           path: "/components/elements/toast",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Toast",
  //         },
  //         {
  //           path: "/components/elements/tags",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Tags",
  //         },
  //       ],
  //     },
  //     {
  //       title: "AdvancedUI",
  //       icon: "ti-briefcase",
  //       type: "sub",
  //       active: false,
  //       selected: false,
  //       children: [
  //         {
  //           path: "/components/advancedui/chat",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Chat",
  //         },
  //         {
  //           path: "/components/advancedui/card",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "cards",
  //         },
  //         {
  //           path: "/components/advancedui/calendar",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Calendar",
  //         },
  //         {
  //           path: "/components/advancedui/contacts",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Contacts",
  //         },

  //         {
  //           path: "/components/advancedui/carousel",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Carousel",
  //         },
  //         {
  //           path: "/components/advancedui/collapse",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Collapse",
  //         },
  //         {
  //           path: "/components/advancedui/modals",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Modals",
  //         },
  //         {
  //           path: "/components/advancedui/timeline",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Timeline",
  //         },

  //         {
  //           path: "/components/advancedui/sweet-alert",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Sweet Alert",
  //         },
  //         {
  //           path: "/components/advancedui/ratings",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Ratings",
  //         },
  //         {
  //           path: "/components/advancedui/search",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Search",
  //         },
  //         {
  //           path: "/components/advancedui/userlist",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Userlist",
  //         },
  //         {
  //           path: "/components/advancedui/notification",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Notification",
  //         },
  //         {
  //           path: "/components/advancedui/three-view",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Tree-view",
  //         },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   menutitle: "OTHER PAGES",
  //   Items: [
  //     {
  //       title: "Pages",
  //       icon: "ti-palette",
  //       type: "sub",
  //       menutitle: "",
  //       active: false,
  //       selected: false,
  //       children: [
  //         {
  //           path: "/components/pages/profile",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Profile",
  //         },
  //         {
  //           path: "/components/pages/about-us",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "About us",
  //         },
  //         {
  //           path: "/components/pages/notifications-list",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Notification list",
  //         },
  //         {
  //           path: "/components/pages/settings",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Settings",
  //         },

  //         {
  //           path: "/components/pages/invoice",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Invoice",
  //         },
  //         {
  //           path: "/components/pages/faqs",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Faqs",
  //         },
  //         {
  //           path: "/components/pages/pricing",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Pricing",
  //         },
  //         {
  //           path: "/components/pages/gallery",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Gallery",
  //         },
  //         {
  //           path: "/components/pages/success-message",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Success Message",
  //         },
  //         {
  //           path: "/components/pages/danger-message",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Danger Message",
  //         },
  //         {
  //           path: "/components/pages/warning-message",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Warning Message",
  //         },
  //         {
  //           path: "/components/pages/empty-page",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Empty Page",
  //         },
  //         {
  //           path: "/components/pages/switcher-page",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Switcher Page",
  //         },
  //       ],
  //     },

  //     {
  //       title: "Utilities",
  //       icon: "ti-shield",
  //       type: "sub",
  //       children: [
  //         {
  //           path: "/components/utilities/background",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Background",
  //         },
  //         {
  //           path: "/components/utilities/border",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Border",
  //         },
  //         {
  //           path: "/components/utilities/display",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Display",
  //         },
  //         {
  //           path: "/components/utilities/flex",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Flex",
  //         },
  //         {
  //           path: "/components/utilities/height",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Height",
  //         },
  //         {
  //           path: "/components/utilities/margin",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Margin",
  //         },
  //         {
  //           path: "/components/utilities/padding",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Padding",
  //         },
  //         {
  //           path: "/components/utilities/position",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Position",
  //         },
  //         {
  //           path: "/components/utilities/width",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Width",
  //         },
  //         {
  //           path: "/components/utilities/extras",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Extras",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Authentication",
  //       icon: "ti-lock",
  //       type: "sub",
  //       children: [
  //         {
  //           path: "/components/authentication/signin",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: " Sign In",
  //         },
  //         {
  //           path: "/components/authentication/signup",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: " Sign Up",
  //         },
  //         {
  //           path: "/components/authentication/forgot-password",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: " Forgot Password",
  //         },
  //         {
  //           path: "/components/authentication/reset-password",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: " Reset Password",
  //         },
  //         {
  //           path: "/components/authentication/under-construction",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: " UnderConstruction",
  //         },
  //         {
  //           path: "/components/authentication/lockscreen",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Lockscreen",
  //         },
  //         {
  //           path: "/components/authentication/error404",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: " Error404",
  //         },
  //         {
  //           path: "/components/authentication/error505",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: " Error505",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   menutitle: "FORMS & CHARTS",
  //   Items: [
  //     {
  //       title: "Forms",
  //       icon: "ti-receipt",
  //       type: "sub",
  //       badge: "badge bg-info side-badge",
  //       badgetxt: "7",
  //       background: "hor-rightangle",
  //       active: false,
  //       selected: false,
  //       children: [
  //         {
  //           path: "/components/forms/form-elements",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Form Elements",
  //         },
  //         {
  //           path: "/components/forms/advanced-forms",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Advanced Forms",
  //         },
  //         {
  //           path: "/components/forms/form-layouts",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Form Layouts",
  //         },
  //         {
  //           path: "/components/forms/form-validation",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Form Validation",
  //         },
  //         {
  //           path: "/components/forms/form-wizards",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Form wizards",
  //         },
  //         {
  //           path: "/components/forms/wysiwyg-editer",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Form Editor",
  //         },
  //         {
  //           path: "/components/forms/form-element-sizes",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Form Element-sizes",
  //         },
  //       ],
  //     },

  //     {
  //       title: "Charts",
  //       icon: "ti-bar-chart",
  //       type: "sub",
  //       badge: "badge bg-danger side-badge",
  //       badgetxt: "5",
  //       background: "hor-rightangle",
  //       badge1: true,
  //       active: false,
  //       selected: false,
  //       children: [
  //         {
  //           path: "/components/charts/chartjs",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Chartjs",
  //         },
  //         {
  //           path: "/components/charts/echart",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Echart",
  //         },
  //         {
  //           path: "/components/charts/nvd3charts",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Nvd3charts",
  //         },
  //         {
  //           path: "/components/charts/c3barcharts",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "C3barcharts",
  //         },
  //         {
  //           path: "/components/charts/piacharts",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Piacharts",
  //         },
  //       ],
  //     },
  //   ],
  // },
];
