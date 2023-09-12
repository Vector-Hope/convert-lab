# convert-lab
creat a project to test taro convert ability. Convert from weapp to taro

### 项目初始化
```
npm install
```
目前不安装依赖也可以在微信开发者工具中运行

### convert 过程
```
cd miniprogram
```
打开miniprogram文件夹

```
npx @tarojs/cli-convertor
```
对项目进行转换，生成taroConvert文件夹

```
cd taroConvert
```
打开taroConvert文件夹

```
pnpm install
```
安装依赖（注意，需提前在package.json中替换相应的依赖包）

```
npm run dev:<plantform>
```
在本地的其他平台运行该项目

```
npm run build:<plantform>
```
在本地构建对应平台的包
