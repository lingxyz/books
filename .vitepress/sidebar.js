/**
 * 自动读取文件夹下的 index.md 生成 sidebar
 * 根目录下的 /index.md 除外（home配置）
 */
import fs from 'fs'
import path from 'path'
import mdjs from '@moox/markdown-to-json'

/* 递归 获取 index.md 路径 */
const indexFilesPath = []
function getIndexFilesPath(dir) {
  const files = fs.readdirSync(path.join(__dirname, dir));
  files.forEach(file => {
    let filePath = dir + '/' + file;
    if (file === 'index.md' && dir !== '..') {
      indexFilesPath.push(filePath)
    }
    const dirName = file.split('.')[0]
    if (dirName && !dirName.includes('node_module') && fs.statSync(path.join(__dirname, filePath)).isDirectory()) {
      getIndexFilesPath(filePath)
    }
  });

}
getIndexFilesPath('..');

/* 组装sideabr */
const sidebar =  {};
indexFilesPath.forEach(indexFilePath => {
  const sidebarMD = fs.readFileSync(path.join(__dirname, indexFilePath), 'utf8');
  const output = mdjs.markdownAsJsTree(sidebarMD);
  // 组装一个 sidebar items
  const sidebarItems = []
  const key = /(\/[^/]+)+\//.exec(indexFilePath)[0];
  output.body.children.forEach(element => {
    if (element.tag === 'h2') {
      const section = {
        text: element.children.at(-1),
        linkTemp: key + '#' + element.props.id,
        collapsed: true,
        items: []
      }
      sidebarItems.push(section);
    }
    if (element.tag === 'ul') {
      element.children.forEach(item => {
        const section = sidebarItems.at(-1);
        if (item.tag === 'li') {
          const link = {
            text: item.children[0]?.tag ? item.children[0]?.children[0] : item.children[0],
          }
          if (item.children[0]?.props?.href) {
            link.link = key + item.children[0]?.props?.href
          }
          section.items.push(link);
        }
      })
    }
  });
  // 若无子目录就使用#跳转
  sidebarItems.forEach(sidebarItem => {
    if (!sidebarItem.items.length) sidebarItem.link =  sidebarItem.linkTemp;
  })
  sidebar[key] = sidebarItems;
})

export default sidebar;
