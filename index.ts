import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/forkJoin';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';

import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/debounceTime';

import baiduRedirect from './src/baidu';
import baiduTiebaRedirect from './src/tieba';
import baiduVideoRedirect from './src/baidu-video';
import googleRedirect from './src/google';
import weboRedirect from './src/weibo';
import twitterRedirect from './src/twitter';
import soRedirect from './src/so';
import zhihuRedirect from './src/zhihu';
import zhihuDailyRedirect from './src/zhihu-daily';
import zhihuZhuanlanRedirect from './src/zhihu-zhuanlan';
import sogouRedirect from './src/sogou';

baiduRedirect.bootstrap();
baiduTiebaRedirect.bootstrap();
baiduVideoRedirect.bootstrap();
googleRedirect.bootstrap();
weboRedirect.bootstrap();
twitterRedirect.bootstrap();
soRedirect.bootstrap();
zhihuRedirect.bootstrap();
zhihuDailyRedirect.bootstrap();
zhihuZhuanlanRedirect.bootstrap();
sogouRedirect.bootstrap();