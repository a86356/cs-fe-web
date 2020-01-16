<template>
    <div class="container-fluid banner">
      <div class="container">
        <div class="row ">
          <div class="tit">学习是最好的投资</div>
          <div class="subtit">订阅会员,即可观看本站所有视频</div>
        </div>

        <div class="row subscribeitems">
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="item">
              <div class="icon">
                <i class="iconfont">&#xe6e9;</i>
              </div>
              <div class="pricewrap">
                <div class="price">
                  <span class="money">99</span><span class="tag">元</span>
                </div>
                <div class="subtit">
                  一个月订阅
                </div>
              </div>

              <div class="paynow">
                <div class="intro">
                  试试一个月的会员
                </div>
                <div class="btn btn-primary" @click="payNow">立即支付</div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="item">
              <div class="icon">
                <i class="iconfont">&#xe6ea;</i>
              </div>
              <div class="pricewrap">
                <div class="price">
                  <span class="money">499</span><span class="tag">元</span>
                </div>
                <div class="subtit">
                  半年订阅
                </div>
              </div>

              <div class="paynow">
                <div class="intro">
                  用半年提升技术
                </div>
                <div class="btn btn-primary" @click="payNow">立即支付</div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="item">
              <div class="icon">
                <i class="iconfont">&#xe6ec;</i>
              </div>
              <div class="pricewrap">
                <div class="price">
                  <span class="money">699</span><span class="tag">元</span>
                </div>
                <div class="subtit">
                  一年订阅
                </div>
              </div>

              <div class="paynow">
                <div class="intro">
                  用一年深入技术
                </div>
                <div class="btn btn-primary" @click="payNow">立即支付</div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="item">
              <div class="icon">
                <i class="iconfont">&#xe6eb;</i>
              </div>
              <div class="pricewrap">
                <div class="price">
                  <span class="money">4980</span><span class="tag">元</span>
                </div>
                <div class="subtit">
                  零基础转行
                </div>
              </div>

              <div class="paynow">
                <div class="intro">
                  老师带你零基础快速转行
                </div>
                <div class="btn btn-primary" @click="payNow">立即支付</div>
              </div>
            </div>
          </div>
        </div>

        <div class="row tips">
          <div class="item">1.以上商品均属于虚拟商品,购买后不支持退款</div>
          <div class="item">2.月付,半年付,一年付支付的费用仅支持视频的观看，不含其他服务（如在线解答）,有问题可以在网站论坛提出，我们会尽量帮助</div>
          <div class="item">3.零基础转行可以观看本站所有视频，老师提供24小时的在线解答,还有海量练习题,项目，帮助你快速学会。另外还提供面试,求职,英语提升等方面指导,另外提供工作机会推荐,帮您在3-6个月从零基础入职前端,刚入职待遇一线城市8k-12k,其他城市6k-8k</div>
        </div>
      </div>


    </div>
</template>

<script>
    export default {
        name: "index",
        methods:{
            payNow(){
              this.$Modal.info({
                  title:"支付",
                  content:"订阅本站请联系qq:100000356或者微信:100000356,备注开通会员,有优惠哦~~~~"
              })
            }
        }
    }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";

  .banner{
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
  color: #fff;
  background-image: linear-gradient(150deg, #2d1582 0%, #19a0ff 100%);
  background-repeat: repeat-x;
  margin-top: -60px;
  .tit{
    font-size: 60px;
    font-weight: bold;
  }
  .subtit{
    font-size: 30px;
  }
}
  .subscribeitems{
    margin-top: 50px;
    .shadow-sm;
    color: @title;
    .item{
      background: #fff;
      .icon{
        padding: 20px 0;
        i{
          font-size: 50px;
          color: @blue;

        }
      }
      .pricewrap{
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid @border;
        .money{
          color: @title;
          font-size: 50px;
        }
        .tag{
          color: @subtitle;
        }
        .subtit{
          font-size: 16px;
          color: @subtitle;
        }
      }
      .paynow{
        padding-bottom: 20px;
        .intro{
          line-height: 30px;
          margin-bottom: 10px;
          font-weight: bold;
          font-size: 20px;
        }
      }
    }
  }
  .tips{
    text-align: left;
    margin-top: 20px;
    line-height: 25px;
    font-size: 16px;
  }
</style>
