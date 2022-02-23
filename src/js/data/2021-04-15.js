dataSetVersion = "2022-02-28"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Arcana Heart 1", key: "AH1" },
      { name "Arcana Heart 2", key: "AH2" },
      { name "Arcana Heart 3 Love Max Six Stars!!!!!! xtend", key: "AH3X"},
     ]
   },
  {
    name: "Filter by Character Type",
    key: "type",
    tooltip: "Check this to restrict either characters or arcanas",
    checked: false,
    sub: [
      { name: "CPU", key: "cpu" },
      { name: "Character", key: "char" },
      { name: "Arcana" , key: "arc" },
    ]
  },
  {
    name: "Arcana",
    key: "arcana",
    tooltip: "Check this to include all Arcana."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Kamui Tokinomiya",
    img: "SD_Kamui.png",
    opts: {
      series: ['AH1', 'AH2', 'AH3X'],
      type: ['char'],
      arcana: false
  },
  {
    name: "Heart Aino",
    img: "SD_Heart",
    opts: {
       series: ['AH1', 'AH2', 'AH3X'],
       type: ['char'],
       arcana: false
 },
  {
    name: "Akane Inuwaka",
    img: "SD_Akane",
    opts: {
       series: ['AH2', 'AH3X'],
       type {'char'],
       arcana: false
   },
];
