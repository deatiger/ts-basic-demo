# License
The source code is licensed MIT.

## 1.環境構築

### 1-1. Node環境の確認とインストール
1. Homebrewのバージョンを確認  
`brew --version`  
2. インストールされていなければ実行  
`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`  
3. nodebrewのインストール  
`brew install nodebrew`  
4. nodeの安定バージョンをインストール  
`nodebrew install stable`  
5. nodebrewのバージョン一覧を確認  
`nodebrew ls`
6. インストールしたバージョンを指定して切り替える  
`nodebrew use v14.15.3`  
7. nodeのパスを通す  
`echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.zprofile'`  
8. ターミナルの再起動  
9. nodeとnpmのバージョン確認  
`node -v`  
`npm -v`  

### 1-2. TypeScript環境構築
1. 開発用ディレクトリの作成  
`mkdir ~/<YOUR_DEV_DIR>/ts-basic`
2. npmの初期化  
`npm init`
3. 関連パッケージのインストール(※)  
`npm install --save-dev typescript ts-loader webpack webpack-cli webpack-dev-server` 
4. webpack.config.jsの作成と設定  
5. tsconfig.jsonの作成と設定  
`tsc --init`  

#### ※ 実行時に`gyp: No Xcode or CLT version detected!`のエラーが出たら  
  
Mac OSに入っているXCodeのバージョンと、コマンドラインツールのバージョンが合っていないという理由で怒られています。  
以下手順でコマンドラインツールのバージョンをアップデートしましょう。

sudo付きのコマンドはMac OSのパスワード入力が必要です。
4.を実行すると、コマンドラインツールをインストールするか聞かれるので、同意して進めてください。

1. `sudo rm -rf $(xcode-select -print-path)`
2. `sudo rm -rf /Library/Developer/CommandLineTools`
3. `sudo xcode-select --reset`
4. `xcode-select --install`
5. `xcode-select -p`
6. 5.の実行結果が`/Library/Developer/CommandLineTools`でなければ`sudo xcode-select -switch /Library/Developer/CommandLineTools`を実行

インストールが完了したら、「3.関連パッケージのインストール」のコマンドを再実行してください。  
 
## 2. ESLintとPrettierのCI環境を構築
### 2-1. パッケージのインストール
`npm install --save-dev eslint eslint-config-prettier prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin husky lint-staged`

### 2-2. huskyがもし動かなかったら...
.git/hooksが正常に作成されていない可能性アリ 
これで確認する   
`ls -la .git/hooks/ls -la .git/hooks/`  
  
`.sample`しかなかったらNG  
NGの場合はインストールし直す
`npm uninstall huksy`  
`npm install --save-dev husky`  
もう一度hooksを確認  
`ls -la .git/hooks/ls -la .git/hooks/`
