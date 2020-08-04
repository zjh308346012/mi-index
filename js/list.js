/*

需求:1.获取数据库的数据
     2.将数据库的数据进行遍历,里面的每一个元素都是一个对象,我们要提取里面的对象(用到了数据的arr.map的方法)
     3.将数组里面的数据渲染到页面上面去
*/

$(function () {
  const data = window.dataXiaomi;
  const data1 = window.dataRedmi;
  const data2 = window.dataTv;
  const data3 = window.dataCom;
  const data4 = window.dataHomeApp;
  const data5 = window.dataRoute;
  const data6 = window.dataCap;

  //从数据库获取数据
  const htmlList = data.map(function (item) {
    //map函数中有两个参数,一个是index索引跟item 元素

    return `
    <li>
    <a href="detail.html?id=${item.id}">
              <div class="item-img">
                <img src="${item.imgSrc}" alt="">
              </div>
              <div class="item-title">
                ${item.name}
              </div>
              <div class="item-price">
                <span class="now">¥ ${item.price}</span>
              </div>
          </li>
    `
  })
  $('.nav_select ul').html(htmlList);
  const htmlList1 = data1.map(function (item) {
    //map函数中有两个参数,一个是index索引跟item 元素

    return `
    <li>
    
            <a href="detail.html?id=${item.id}">
              <div class="item-img">
                <img src="${item.imgSrc}" alt="">
              </div>
              <div class="item-title">
                ${item.name}
              </div>
              <div class="item-price">
                <span class="now">¥ ${item.price}</span>
              </div>
          </li>
    
    
    `
  })
  $('.nav_select1 ul').html(htmlList1);
  const htmlList2 = data2.map(function (item) {
    //map函数中有两个参数,一个是index索引跟item 元素

    return `
    <li>
            <a href="detail.html?id=${item.id}">
              <div class="item-img">
                <img src="${item.imgSrc}" alt="">
              </div>
              <div class="item-title">
                ${item.name}
              </div>
              <div class="item-price">
                <span class="now">¥ ${item.price}</span>
              </div>
          </li>
    `
  })
  $('.nav_select2 ul').html(htmlList2);
  const htmlList3 = data3.map(function (item) {
    //map函数中有两个参数,一个是index索引跟item 元素

    return `
    <li>
            <a href="detail.html?id=${item.id}">
              <div class="item-img">
                <img src="${item.imgSrc}" alt="">
              </div>
              <div class="item-title">
                ${item.name}
              </div>
              <div class="item-price">
                <span class="now">¥ ${item.price}</span>
              </div>
          </li>
    `
  })
  $('.nav_select3 ul').html(htmlList3);
  const htmlList4 = data4.map(function (item) {
    //map函数中有两个参数,一个是index索引跟item 元素

    return `
    <li>
            <a href="detail.html?id=${item.id}">
              <div class="item-img">
                <img src="${item.imgSrc}" alt="">
              </div>
              <div class="item-title">
                ${item.name}
              </div>
              <div class="item-price">
                <span class="now">¥ ${item.price}</span>
              </div>
          </li>
    `
  })
  $('.nav_select4 ul').html(htmlList4);
  const htmlList5 = data5.map(function (item) {
    //map函数中有两个参数,一个是index索引跟item 元素

    return `
    <li>
            <a href="detail.html?id=${item.id}">
              <div class="item-img">
                <img src="${item.imgSrc}" alt="">
              </div>
              <div class="item-title">
                ${item.name}
              </div>
              <div class="item-price">
                <span class="now">¥ ${item.price}</span>
              </div>
          </li>
    `
  })
  $('.nav_select5 ul').html(htmlList5);
  const htmlList6 = data6.map(function (item) {
    //map函数中有两个参数,一个是index索引跟item 元素

    return `
    <li>
            <a href="detail.html?id=${item.id}">
              <div class="item-img">
                <img src="${item.imgSrc}" alt="">
              </div>
              <div class="item-title">
                ${item.name}
              </div>
              <div class="item-price">
                <span class="now">¥ ${item.price}</span>
              </div>    
          </li>
    `
  })
  $('.nav_select6 ul').html(htmlList6);


  const data11 = window.dataSim;
  const data12 = window.dataTvbox;
  const data13 = window.dataIpad;
  const data14 = window.dataPatch;
  const data15 = window.dataTrip;
  const data16 = window.dataSmart;
  const data17 = window.dataPower;
  const data18 = window.dataHealth;
  const data19 = window.dataHeadset;
  const data20 = window.dataLive;


  const htmlList11 = data11.map(function (item) {
    //map函数中有两个参数,一个是index索引跟item 元素

    return `
    <li>
    <img src="${item.imgSrc}" alt="">
    <span>${item.name}</span>
       </li>
    `
  })
  $('.bg_select ul').html(htmlList11);

  const htmlList12 = data12.map(function (item) {
    //map函数中有两个参数,一个是index索引跟item 元素

    return `
    <li>
    <img src="${item.imgSrc}" alt="">
    <span>${item.name}</span>
       </li>
    `
  })
  $('.bg_select1 ul').html(htmlList12);

  const htmlList13 = data13.map(function (item) {
    //map函数中有两个参数,一个是index索引跟item 元素

    return `
    <li>
    <img src="${item.imgSrc}" alt="">
    <span>${item.name}</span>
       </li>
    `
  })
  $('.bg_select2 ul').html(htmlList13);
  const htmlList14 = data14.map(function (item) {
    //map函数中有两个参数,一个是index索引跟item 元素

    return `
    <li>
    <img src="${item.imgSrc}" alt="">
    <span>${item.name}</span>
       </li>
    `
  })
  $('.bg_select3 ul').html(htmlList14);
  const htmlList15 = data15.map(function (item) {
    //map函数中有两个参数,一个是index索引跟item 元素

    return `
    <li>
    <img src="${item.imgSrc}" alt="">
    <span>${item.name}</span>
       </li>
    `
  })
  $('.bg_select4 ul').html(htmlList15);
  const htmlList16 = data16.map(function (item) {
    //map函数中有两个参数,一个是index索引跟item 元素

    return `
    <li>
    <img src="${item.imgSrc}" alt="">
    <span>${item.name}</span>
       </li>
    `
  })
  $('.bg_select5 ul').html(htmlList16);
  const htmlList17 = data17.map(function (item) {
    //map函数中有两个参数,一个是index索引跟item 元素

    return `
    <li>
    <img src="${item.imgSrc}" alt="">
    <span>${item.name}</span>
       </li>
    `
  })
  $('.bg_select6 ul').html(htmlList17);
  const htmlList18 = data18.map(function (item) {
    //map函数中有两个参数,一个是index索引跟item 元素

    return `
    <li>
    <img src="${item.imgSrc}" alt="">
    <span>${item.name}</span>
       </li>
    `
  })
  $('.bg_select7 ul').html(htmlList18);

  const htmlList19 = data19.map(function (item) {
    //map函数中有两个参数,一个是index索引跟item 元素

    return `
    <li>
    <img src="${item.imgSrc}" alt="">
    <span>${item.name}</span>
       </li>
    `
  })
  $('.bg_select8 ul').html(htmlList19);
  const htmlList20 = data20.map(function (item) {
    //map函数中有两个参数,一个是index索引跟item 元素

    return `
    <li>
    <img src="${item.imgSrc}" alt="">
    <span>${item.name}</span>
       </li>
    `
  })
  $('.bg_select9 ul').html(htmlList20);

});
























