<template>
  <div>
    队伍管理
  </div>
</template>

<script type="text/javascript">
  import EchartsBar from 'components/echarts/bar'
  export default {
    name: 'teamManage',
    data(){
      return {
        echartsData:{
          xdata:[1,2,3,4,5],
          data:[100,200,300,400,500]
        }
      }
    },
    methods:{
      handleCharts(data){
        console.log(data)
      }
    },
    components:{
      EchartsBar
    }

   }
</script>

<style lang="scss" scoped>
  @import "~assets/css/lib-variable";
  @import "~assets/css/lib-mixin";
  .charts-wrap{
    width: 400px;
    height: 400px;
  }

</style>
