<template>
	<el-config-provider :locale="zhCn">
		<Suspense>
			<router-view/>
		</Suspense>
	</el-config-provider>
</template>
<script setup lang="ts">
import zhCn from "element-plus/lib/locale/lang/zh-cn";

</script>
<style lang="scss">
@use '@/assets/css/global';
@use '@/assets/css/element-plus';
</style>