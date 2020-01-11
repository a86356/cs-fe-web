<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li @click="goPrev">
          <span aria-hidden="true" aria-label="Previous">&laquo;</span>
      </li>
      <li v-for="(item ,index) in pages" :key="index" :class="current==item.id?'active':''" @click="changePage(item.id)">
        <span>{{item.id}}</span>
      </li>
      <li @click="goNext">
          <span aria-hidden="true"  aria-label="Next" >&raquo;</span>
      </li>
    </ul>
  </nav>
</template>

<script>
    export default {
        name: "pagination",
        props:{
            count:{
                type:String|Number,
            }
        },
        data(){
            return {
                pageSize:20,
                current:1,
                max:1,
                pages:1
            }
        },
        mounted(){
          let p = Math.floor(this.count/this.pageSize);
          if(this.count%this.pageSize>0){
              p++;
          }
          this.max = p;
          let temp=[]
          for (let i=1;i<=p;i++){
             temp.push({id:i})
          }

          this.pages=temp;

        },
        methods:{
            changePage(page){

              this.current=page;
              this.$emit('setpage',{page:page});

            },
            goPrev(){
              if(this.current<=1)return;

              let now = this.current
              this.changePage(--now)
            },
            goNext(){
              if(this.current>=this.max)return;
                let now = this.current

                this.changePage(++now)
            }

        }

    }
</script>

<style scoped>

</style>
