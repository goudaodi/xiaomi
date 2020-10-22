<template>
  <div class="box">
    <div class="box_con">
      <ul class="box_head">
        <li>
          <span>推荐</span>
          <p>猜你喜欢</p>
        </li>
        <li>
          <span>智能</span>
          <p>未来已来</p>
        </li>
        <li>
          <span>电器</span>
          <p>重塑生活</p>
        </li>
        <li>
          <span>生活</span>
          <p>品质生活</p>
        </li>
        <li>
          <span>时尚</span>
          <p>美妆穿搭</p>
        </li>
        <li>
          <span>特惠</span>
          <p>特惠专区</p>
        </li>
      </ul>
      <ul class="box_list">
        <li v-for="(book,index) in givedata" :key="index">
          <!-- 动态路由 -->
          <router-link :to="'/DetailsPage/'+book.id">
            <div class="box_img">
              <img :src="book.linkto" alt="">
            </div>
            <h5>{{book.name}}</h5>
            <h6>{{book.brief}}</h6>
            <p>
              <span class="list_n">￥：{{book.price}}</span>
              <span class="list_t iconfont icon-gengduo"></span>
            </p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:"CommoDity",
  props:["givedata"],
  data:function(){
    return{
      created(){
        console.log(this.givedata.id)
      }
    }
  }
}
</script>

<style scoped>
  @import url(../assets/icon/iconfont.css);
  @import url(../assets/css/reset.css);





  .box{
    width: 100%;
    /* height: 500px; */
    background: #ccc;
  }
  .box_con{
    width: 95%;
    height: 100%;
    margin: 0 auto;
  }
  .box_head{
    height: 50px;
    width: 100%;
    /* background: chocolate; */
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .box_head li{
    width: 16%;
    height: 50px;
    text-align: center;
  }
  .box_head li span{
    display: inline-block;
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }
  .box_head li p{
    font-size: 12px;
    color: #333;
  }
  .box_list{
    width: 100%;
    /* height: 88%; */
    /* background: chartreuse; */
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .box_list li{
    width: 49%;
    height: 200px;
    background: cornsilk;
    margin-bottom: 10px;
    border-radius: 10px;
    text-align: left;
  }
  .box_img{
    width: 100%;
    height: 65%;
    border-radius: 10px;
  }
  .box_img img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .box_list h5{
    font-size: 16px;
    color:#000;
    margin-left: 5px;
  }
  .box_list h6{
    font-size: 14px;
    color: #999;
    margin-left: 5px;
  }
  .box_list p{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
  }
  .list_n{
    font-size: 14px;
    color: #cc0033;
  }
</style>