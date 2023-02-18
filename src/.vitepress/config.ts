import { defineConfig } from "vitepress"
export default defineConfig({
    lang: "zh",
    title: "TypeScript 中文文档",
    description: "这是一个Typescript中文版文档",
    base: "/typescriptdoc/",
    outDir: "../docs",
    themeConfig: {
        nav: [
            {
                text: '开始',
                items: [
                    { text: '新手上路', link: '/about/about'}
                ]
            },{
                text: '手册',
                items: [

                ]
            },{
                text: '参考',
                items: [
                    
                ]
            },{
                text: '教程',
                items: [
                    
                ]
            }
        ]
    }
})