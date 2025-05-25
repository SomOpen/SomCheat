import { FirestoreIcon, MongoDBIcon, MySQLIcon, PostgreSQLIcon, RedisIcon, SQLLiteIcon } from "../icons/db_icons";
import {
    FileCodeIcon,
    JsIcon,
    TsIcon,
    LuaIcon,
    CIcon,
    GoIcon,
    CPPIcon,
    CSharpIcon,
    PyIcon,
    PHPIcon,
    RubyIcon,
    KotlinIcon,
    DartIcon,
    JavaIcon,
    RustIcon,
    SwiftIcon,
    RIcon
  } from "../icons/lang_icons";
  import { BunIcon, DenoIcon, NodejsIcon } from "../icons/Runtime_icons";
  import { GitIcon } from "../icons/DevTools_Icons";
  
  const all_cheat_icons = {
    default: <FileCodeIcon />,
    js: <JsIcon />,
    ts: <TsIcon/>,
    lua: <LuaIcon />,
    c: <CIcon />,
    cpp: <CPPIcon />,
    cs: <CSharpIcon />,
    go: <GoIcon />,
    py: <PyIcon />,
    php: <PHPIcon />,
    rb: <RubyIcon/>,
    kotlin: <KotlinIcon/>,
    dart: <DartIcon/>,
    java: <JavaIcon/>,
    rust: <RustIcon/>,
    swift: <SwiftIcon/>,
    r: <RIcon/>,
    mysql: <MySQLIcon/>,
    postgresql: <PostgreSQLIcon/>,
    mongodb: <MongoDBIcon/>,
    redis: <RedisIcon/>,
    firestore: <FirestoreIcon/>,
    sqlite: <SQLLiteIcon/>,
    nodejs: <NodejsIcon/>,
    deno: <DenoIcon/>,
    bun: <BunIcon/>,
    git: <GitIcon/>,
  };

  export default all_cheat_icons;