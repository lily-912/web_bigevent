//注意 每次调用$.get() $.post() 或 $.ajax()的时候，
// 会先调用ajaxPrefilter这个函数
// 在这个函数中可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function(options) {
    // 在发起真正的Ajax请求之前，同意拼接请求的根路径
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url
    console.log(options.url);

})