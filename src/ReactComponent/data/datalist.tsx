import {
    languagesData,
    databasesData,
    webDevelopmentData,
    operatingSystemData,
    versionControlData,
    devToolsData,
  } from "./cheatsheet_data";
  import {
    WebIcon,
    CodeIcon,
    DatabaseIcon,
    GitIcon,
    OSIcon,
    DevToolsIcon,
  } from "../icons/Icon";

const dataList = [
    {
      id: "langs",
      _name: "Programming Languages",
      data: languagesData,
      icon: <CodeIcon dimension={40} color="#6364f1" />,
      number_of_cheatsheets: languagesData.length,
    },
    {
      id: "dbs",
      _name: "Databases",
      data: databasesData,
      icon: <DatabaseIcon dimension={40} color="#fba8a8" />,
      number_of_cheatsheets: databasesData.length,
    },
    {
      id: "web",
      _name: "Web Development",
      data: webDevelopmentData,
      icon: <WebIcon dimension={40} color="#fecb66" />,
      number_of_cheatsheets: webDevelopmentData.length,
    },
    {
      id: "os",
      _name: "Operating System",
      data: operatingSystemData,
      icon: <OSIcon dimension={45} color="#1aa5e7" />,
      number_of_cheatsheets: operatingSystemData.length,
    },
    {
      id: "vc",
      _name: "Version Control",
      data: versionControlData,
      icon: <GitIcon dimension={40} />,
      number_of_cheatsheets: versionControlData.length,
    },
    {
      id: "dev",
      _name: "Dev Tools",
      data: devToolsData,
      icon: <DevToolsIcon dimension={40} color="#aea" />,
      number_of_cheatsheets: devToolsData.length,
    },
  ];

  export default dataList;