(self.webpackChunkleo_ui=self.webpackChunkleo_ui||[]).push([[761],{54444:function(n,t,e){"use strict";var _;e.r(t),e.d(t,{demos:function(){return p}});var s=e(15009),r=e.n(s),o=e(99289),a=e.n(o),l=e(67294),i=e(2100),u=e(86169),c=e(70208),f=e(45697),E=e.n(f),v=e(27386),p={"alert-demo-basic":{component:l.memo(l.lazy(function(){return e.e(819).then(e.bind(e,70621))})),asset:{type:"BLOCK",id:"alert-demo-basic",refAtomIds:["alert"],dependencies:{"index.tsx":{type:"FILE",value:e(6239).Z},react:{type:"NPM",value:"16.14.0"},"../style.ts":{type:"FILE",value:e(82441).Z},"../../alert.tsx":{type:"FILE",value:e(59695).Z},"prop-types":{type:"NPM",value:"15.8.1"},"./index.less":{type:"FILE",value:e(33936).Z}},entry:"index.tsx"},context:{"../style.ts":u,"../../alert.tsx":c,"./index.less":v,react:_||(_=e.t(l,2)),"/Users/bronx.zhang/project/Self/\u9879\u76EE\u7ECF\u5386/leo-ui/src/alert/style/index.ts":u,"/Users/bronx.zhang/project/Self/\u9879\u76EE\u7ECF\u5386/leo-ui/src/alert/index.tsx":c,"prop-types":f,"/Users/bronx.zhang/project/Self/\u9879\u76EE\u7ECF\u5386/leo-ui/src/alert/style/index.less":v},renderOpts:{compile:function(){var O=a()(r()().mark(function P(){var m,h=arguments;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(335).then(e.bind(e,37335));case 2:return d.abrupt("return",(m=d.sent).default.apply(m,h));case 3:case"end":return d.stop()}},P)}));function x(){return O.apply(this,arguments)}return x}()}}}},70208:function(n,t,e){"use strict";e.r(t);var _=e(67333),s=e.n(_),r=e(13769),o=e.n(r),a=e(67294),l=e(45697),i=e.n(l),u=["children","kind"],c="happy-alert",f={info:"#5352ED",positive:"#2ED573",negative:"#FF4757",warning:"#FFA502"},E=function(p){var O=p.children,x=p.kind,P=x===void 0?"info":x,m=o()(p,u);return a.createElement("div",s()({className:c,style:{background:f[P]}},m),O)};E.propTypes={kind:i().oneOf(["info","positive","negative","warning"])},t.default=E},86169:function(n,t,e){"use strict";e.r(t);var _=e(27386)},27386:function(n,t,e){"use strict";e.r(t)},5504:function(n,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return s}});var _=e(2100);const s=[{value:"\u8B66\u544A\u63D0\u793A\uFF0C\u5C55\u73B0\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:1,tocIndex:3},{value:"\u8BF4\u660E",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"kind",paraId:1,tocIndex:3},{value:"\u8B66\u544A\u7C7B\u578B",paraId:1,tocIndex:3},{value:"'info'/'positive'/'negative'/'warning'\u975E\u5FC5\u586B",paraId:1,tocIndex:3},{value:"'info'",paraId:1,tocIndex:3}]},6239:function(n,t){"use strict";t.Z=`import React from 'react';
import Alert from '../../alert';
import '../style';

export default () => <Alert kind="warning">\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u63D0\u793A</Alert>;`},59695:function(n,t){"use strict";t.Z=`import React from 'react';
import t from 'prop-types';

export interface AlertProps {
  kind?: 'info' | 'positive' | 'negative' | 'warning';
}

export type KindMap = Record<Required<AlertProps>['kind'], string>;

const prefixCls = 'happy-alert';

const kinds: KindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
};

const Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: kinds[kind],
    }}
    {...rest}
  >
    {children}
  </div>
);

Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
};
export default Alert;`},33936:function(n,t){"use strict";t.Z=`@popupPrefix: happy-alert;

.@{popupPrefix} {
  padding: 20px;
  background: white;
  border-radius: 3px;
  color: white;
}`},82441:function(n,t){"use strict";t.Z="import './index.less';"},67333:function(n){function t(){return n.exports=t=Object.assign?Object.assign.bind():function(e){for(var _=1;_<arguments.length;_++){var s=arguments[_];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},n.exports.__esModule=!0,n.exports.default=n.exports,t.apply(this,arguments)}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports},13769:function(n,t,e){var _=e(48541);function s(r,o){if(r==null)return{};var a=_(r,o),l,i;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);for(i=0;i<u.length;i++)l=u[i],!(o.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(r,l)&&(a[l]=r[l])}return a}n.exports=s,n.exports.__esModule=!0,n.exports.default=n.exports},48541:function(n){function t(e,_){if(e==null)return{};var s={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(_.indexOf(o)>=0)&&(s[o]=e[o]);return s}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports}}]);
