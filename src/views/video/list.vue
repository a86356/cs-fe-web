<template>
  <div class="container">
    <div class="body">

      <div class="searchwrap">
        <div class="input-group">
          <input type="text" class="form-control " placeholder="请输入查询的内容">
          <div class="input-group-append">
            <button  class="btn btn-default">搜索课程</button>
          </div>
        </div>
        <div class="row">
          <div class="searchitem">
            <div class="clearfix list">
              <div class="mylabel fl">技术选型</div>
              <div class="leading fl item active">全部</div>

              <div v-for="(item,index) in videotypes" :key="index" class="fl item">
                {{item.name}}
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="searchitem">
            <div class="clearfix list">
              <div class="mylabel fl">是否收费</div>
              <div class="fl item active">全部</div>
              <div class="fl item ">收费</div>
              <div class="fl item ">免费</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="searchitem">
            <div class="clearfix list">
              <div class="mylabel fl">技术难度</div>
              <div class="fl item active">全部</div>
              <div class="fl item ">初级</div>
              <div class="fl item ">中级</div>
              <div class="fl item ">高级</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="searchitem">
            <div class="clearfix list">
              <div class="mylabel fl">排序方式</div>
              <div class="fl item active">默认</div>
              <div class="fl item ">发布时间从早到晚</div>
              <div class="fl item ">发布时间从晚到早</div>
            </div>
          </div>
        </div>

      </div>


      <videolist></videolist>

      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li>
            <a href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li>
            <a href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>

    </div>



  </div>
</template>

<script>
    import videolist from "../../components/videolist";

    export default {
        components:{
            videolist
        }

    };
</script>

<style lang="less" scoped>

  @import "../../assets/css/common.less";

  .body {
    background: #fff;
    padding: 20px;
    margin-bottom: 10px;
    .shadow-sm;
    .maintitle {
      line-height: 30px;
      text-align: center;
      border-bottom: 1px solid @border;
      margin-bottom: 30px;
      font-size: 14px;
    }
  }
  .input-group{
    width: 85%;
    margin: 0 auto;
  }

  .searchwrap{
    margin-bottom: 30px;
  }
  .searchitem{
    width: 80%;
    margin: 0 auto;
    .list{
      line-height: 40px;
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid @border;
      .item{
        margin-top: 12px;
        line-height: 30px;
        margin-left: 8px;
        margin-right: 8px;

        padding: 0 10px;
        cursor: pointer;
        color: @title;
        &:hover{
          color:@subColor;
        }
      }
      .active{
        background: @subColor;
        color: #fff;
        border-radius: 8px;
        &:hover{
          color: #fff;
        }
      }

      .mylabel{
        font-weight: bold;
        margin: 7px 8px;
      }
    }

  }

</style>
