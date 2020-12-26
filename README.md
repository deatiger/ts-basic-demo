# License
The source code is licensed MIT.

## 1.環境構築
### 1-1.TypeScript環境構築
1-1-1. 開発用ディレクトリの作成  
`mkdir ~/<YOUR_DEV_DIR>/ts-basic`
1-1-2. npmの初期化  
`npm init`
1-1-3. 関連パッケージのインストール  
`npm install --save-dev typescript ts-loader webpack webpack-cli webpack-dev-server` 

**もし`npm install`実行時に`gyp: No Xcode or CLT version detected!`のエラーが出たら**  
Mac OSに入っているXCodeのバージョンと、XCodeのコマンドラインツールのバージョンが合っていないという理由で怒られています。  
以下手順でコマンドラインツールのバージョンをアップデートしましょう。

sudo付きのコマンドはMac OSのパスワード入力が必要です。
4.を実行すると、コマンドラインツールをインストールするか聞かれるので、同意して進めてください。

1. `sudo rm -rf $(xcode-select -print-path)`
2. `sudo rm -rf /Library/Developer/CommandLineTools`
3. `sudo xcode-select --reset`
4. `xcode-select --install`
5. `xcode-select -p`
6. 5.の実行結果が`/Library/Developer/CommandLineTools`でなければ`sudo xcode-select -switch /Library/Developer/CommandLineTools`

インストールが完了したら、「1-1-3. 関連パッケージのインストール」のコマンドを再実行してください。  

### 
 




