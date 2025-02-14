const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    lrcType: 1,
    audio: [
        {
            name: 'Whats Up',
            artist: '4 Non Blondes',
            url: 'https://752758299-1300378859.cos.ap-shanghai.myqcloud.com/2.m4a',
            cover: 'https://752758299-1300378859.cos.ap-shanghai.myqcloud.com/222.png',
            lrc: '[00:29.700]25 years of my life and still[00:33.700]Im trying to get up that great big hill of hope[00:39.700]For a destination[00:43.700]I realized quickly when I knew I should[00:47.700]That the world was made up of this[00:50.700]Brotherhood of man[00:53.700]For whatever that means[00:57.700]So I cry somethimes when Im lying in bed[01:01.700]To get it all out whats in my head[01:05.700]Then I start feeling a little peculiar[01:12.700]So I wake in the morning and I step[01:15.700]Outside I take deep breath[01:17.700]I get real high[01:19.700]Then I scream from the top of my lungs[01:22.700]Whats goin on[01:26.700]And I say hey...[01:33.700]And I say hey whats goin on[01:40.700]And I say hey...[01:47.700]I said hey whats goin on[02:23.699]And I try, oh my God do I try[02:29.699]I try all the time[02:32.699]In this institution[02:37.699]And I pray, oh my God do I pray[02:43.699]I pray every single day[02:47.699]For a revolution[02:52.699]So I cry sometimes when Im lying in my bed[02:55.699]To get it all out whats in my head[02:59.699]Then I start feeling a little peculiar[03:06.699]So I wake in the morning and I step outside[03:09.699]I take a deep breaththen I get real high[03:13.699]Then I scream from the top of my lungs[03:16.699]Whats goin on[03:19.699]And I say hey...[03:27.699]And I say hey whats goin on[03:33.699]And I say hey...[03:41.699]I said hey whats goin on[03:47.699]And I say hey...[03:55.699]And I say hey whats goin on[04:01.699]And I say hey...[04:09.699]I said hey whats goin on[04:31.699]25 years of my life and still[04:36.699]Im trying to get up that great big hill of hope[04:42.699]For a destination"},"tlyric":{"version":11,"lyric":"[00:29.700]廿五年去 我一生波澜依旧[00:33.700]竭力挣扎 想探到天空星光时候[00:39.700]为自己一生留念[00:43.700]我这才发现自己后知后觉[00:47.700]这是个人与人[00:50.700]情感穿起的世界[00:53.700]可我仍孤身一人[00:57.700]所以有时我会蜷缩在床 任泪水流下[01:01.700]渴望泪水洗走 心中多少苦悲[01:05.700]这以后 空洞的胸口 却有着莫名悸动[01:12.700]在黎明中醒来 我迈出屋外[01:15.700]我深吸口气[01:17.700]大口呼出愉快[01:19.700]我灵魂共鸣着肺腑大声呐喊[01:22.700]这世界怎么了？！[01:26.700]我大喊 嘿[01:33.700]想知道 未来去向何方[01:40.700]我唱着 嘿[01:47.700]方才发觉 这就是人生吗？[02:23.699]我努力 上帝啊 我竭尽全力[02:29.699]向命运挥拳[02:32.699]却打不破世俗的牢笼[02:37.699]我祈祷 仁慈的神啊 我敞开灵魂[02:43.699]穿过神像的双眼的祈祷[02:47.699]祈求别样的人生[02:52.699]所以有时我会蜷缩在床 任泪水流下[02:55.699]渴望泪水洗走 脑海里太多烦恼[02:59.699]这以后 空白的意识 却听到惊异的共鸣[03:06.699]在黎明中醒来 我迈出屋外[03:09.699]我深吸口气 大口呼出愉快[03:13.699]我灵魂共鸣着肺腑大声呐喊[03:16.699]这世界怎么了？！[03:19.699]我大喊 嘿[03:27.699]想知道 未来去向何方[03:33.699]我大喊 嘿[03:41.699]想知道 未来去向何方[03:47.699]我大喊 嘿[03:55.699]想知道 未来去向何方[04:01.699]我唱着 嘿[04:09.699]方才发觉 这就是人生吗？[04:31.699]廿五年去 我一生波澜依旧[04:36.699]竭力挣扎 想探到山顶希望的光芒[04:42.699]只为我这一生'
        }
    ]
});

window.onload = function () {
    var items = document.querySelectorAll('.post-button .btn');
    for (var i = 0; i < items.length; i++) {
        const element = items[i];
        var link = element.getAttribute('href').replace('#more','');
        element.setAttribute('href',link);
    }
}