
import Context from '@/main.js'

//createNotify('测试通知',{body:'啊啊啊啊啊啊啊啊啊啊啊啊'});
export const createNotify=function createNotify(title,options,router) {
  var PERMISSON_GRANTED = 'granted';
  var PERMISSON_DENIED = 'denied';
  var PERMISSON_DEFAULT = 'default';

  if (Notification.permission === PERMISSON_GRANTED) {
    notify(title,options,router);
  } else {
    Notification.requestPermission(function (res) {
      if (res === PERMISSON_GRANTED) {
        notify(title,options,router);
      }
    });
  }

  function notify($title,$options,router) {
    var notification = new Notification($title, $options);
    notification.onshow = function(event){ console.log('show : ',event); }
    notification.onclose = function(event){ console.log('close : ',event); }
    notification.onclick = function(event){

      if(router){
        Context.nav({path:router.path,query:router.query})
      }
      notification.close();
    }
  }
}


