const routes = [
  {
    path: "/dashboard",
    icon: "fas fa-chart-bar",
    name: "Dashboard",
  },
  {
    icon: "fas fa-database",
    name: "Master Data",
    routes: [
      //submenu
      {
        path: "/master/user",
        name: "User",
      },
      {
        path: "/master/urusan",
        name: "Urusan",
      },
      {
        path: "/master/opd",
        name: "Bidang",
      },
      {
        path: "/master/opd",
        name: "Program",
      },
      {
        path: "/master/opd",
        name: "Kegiatan",
      },
      {
        path: "/master/opd",
        name: "Sub Kegiatan",
      },
      {
        path: "/master/opd",
        name: "Tujuan",
      },
      {
        path: "/master/opd",
        name: "Sasaran",
      },
      {
        path: "/master/opd",
        name: "OPD",
      },
      {
        path: "/master/opd",
        name: "Sub OPD",
      },
    ],
  },
  {
    icon: "fas fa-file-signature",
    name: "Evaluasi",
    routes: [
      {
        path: '/evaluasi/rpjmd',
        name: 'RPJMD',
        routes: [
          {
            path: '/evaluasi/rpjmd/target',
            name: 'Target'
          },
          {
            path: '/evaluasi/rpjmd/realiasasi',
            name: 'Realisasi'
          },
        ]
      },
      {
        path: '/evaluasi/renstra',
        name: 'Renstra',
        routes: [
          {
            path: '/evaluasi/renstra/target',
            name: 'Target'
          },
          {
            path: '/evaluasi/renstra/realiasasi',
            name: 'Realisasi'
          },
        ]
      },
    ]
  },
  {
    path: "/laporan",
    icon: "fas fa-file-invoice",
    name: "Laporan",
  },
  {
    path: "/laporan",
    icon: "fas fa-file-invoice",
    name: "Laporan 2",
  },
];

export default routes;
