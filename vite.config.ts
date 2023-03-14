import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

//element-plus按需加载
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

const utilsResolver = name => {
	//符合use小写开头,第四个字母要大写的
	if (/^use[A-Z]/.test(name)) {
		console.log('导入:',name);
		return `@/utils/${name}`
	}
}
// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [
			{ find: /^@(?=\/)/, replacement: resolve(__dirname, './src') },
			{ find: /^~(?=\/)/, replacement: resolve(__dirname, './') }
		],
	},
	server:{
		host:'0.0.0.0'
	},
	plugins: [
		vue(),
		AutoImport({
			resolvers: [
				utilsResolver,
				ElementPlusResolver(),
				IconsResolver({
					prefix: 'Icon',
				}),
			],
			imports: ['vue', 'vue-router'],
			dts: 'src/auto-imports.d.ts'
		}),
		Components({
			dirs: 'src/components',
			resolvers: [
				IconsResolver({ //使用方法i-ep-aim
					enabledCollections: ['ep']
				}),
				ElementPlusResolver()
			],
			dts: 'src/components.d.ts',
		}),
		Icons({
			compiler: 'vue3',
			autoInstall:true
		})
	]
})