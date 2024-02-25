### やったこと
1. `yarn init`
    - Node.js: JavaScriptをブラウザ上ではなくマシン上で動かすための実行環境
    - npm: Node.jsのパッケージ管理システム
    - yarn: Node.jsのパッケージ管理システム
        - npmより良いらしい
        - npmと互換性がある = 同じpackage.jsonが使える
1. `yarn add -D typescript @types/node`
    - `yarn add`: パッケージのインストール & package.jsonに追記
    - `-D`: devDependencies(開発者向け)にパッケージ追加
    - `typescript`: typescriptのパッケージインスト
    - `@types/node`: Node.jsの型定義ファイルもインスト
1. tsconfig.json 作成
    - TSC(TypeScript コンパイラ)の設定ファイル？っぽい
1. サンプルコード`src/index.ts`を作成
1. `node_modules/.bin/tsc [オプション] [tsファイルパス]`を実行
    - `dist`ディレクトリにjsにコンパイルされたコードがアウトプットされる
1. `node [jsファイルパス]`を実行
    - jsファイルが実行される(やったぜ)
1. `node_modules/.bin/ts-node [tsファイルパス]`を実行
    - tsファイルが実行される(やったぜ)