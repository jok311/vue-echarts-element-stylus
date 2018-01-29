<template>
	<div class="mainbox">
		<side-menu></side-menu>
		<div class="main-container">
			<app-main></app-main>
		</div>
	</div>
</template>
<script>
	import SideMenu from './SideMenu' //左侧菜单栏
	import AppMain from './AppMain'
	export default {
		data() {
			return {

			}
		},
		components: {SideMenu,AppMain}
	}
</script>
<style lang="stylus">
.main-container
	margin-left 180px

.globalLoading
	margin-left 180px
</style>