<template>
	<div class="datepicker">
	    <el-date-picker
	      v-model="startT"
	      type="date"
	      size="medium"
	      align="right"
	      placeholder="日期"
	      value-format="yyyy-MM-dd"
	      :picker-options="pickerOptions0">
	    </el-date-picker>
	</div>
</template>

<script>

	export default {
		props:["startTime"],
		data() {
			return {
				startT:this.startTime,
				pickerOptions0: {
				  disabledDate(time) {
				    return time.getTime() > Date.now();
				  }
				},
			};
		},

		watch:{
			startT(val){
				let time = val
				this.$emit("changesTime",val);
			},
		},
	};
</script>
<style lang="stylus" scoped>
.datepicker
	display inline-block
	.el-date-editor
		max-width 180px
</style>