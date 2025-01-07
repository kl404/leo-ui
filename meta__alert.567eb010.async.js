(self.webpackChunkleo_ui=self.webpackChunkleo_ui||[]).push([[761],{54444:function(n,t,e){"use strict";var _;e.r(t),e.d(t,{demos:function(){return m}});var o=e(15009),r=e.n(o),s=e(99289),i=e.n(s),l=e(67294),u=e(2100),a=e(86169),c=e(70208),f=e(27386),p=e(45697),P=e.n(p),m={"alert-demo-basic":{component:l.memo(l.lazy(function(){return e.e(819).then(e.bind(e,70621))})),asset:{type:"BLOCK",id:"alert-demo-basic",refAtomIds:["alert"],dependencies:{"index.tsx":{type:"FILE",value:e(6239).Z},react:{type:"NPM",value:"16.14.0"},"../style.ts":{type:"FILE",value:e(82441).Z},"../../alert.tsx":{type:"FILE",value:e(59695).Z},"./index.less":{type:"FILE",value:e(33936).Z},"prop-types":{type:"NPM",value:"15.8.1"}},entry:"index.tsx"},context:{"../style.ts":a,"../../alert.tsx":c,"./index.less":f,react:_||(_=e.t(l,2)),"/home/runner/work/leo-ui/leo-ui/src/alert/style/index.ts":a,"/home/runner/work/leo-ui/leo-ui/src/alert/index.tsx":c,"/home/runner/work/leo-ui/leo-ui/src/alert/style/index.less":f,"prop-types":p},renderOpts:{compile:function(){var x=i()(r()().mark(function O(){var v,h=arguments;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(335).then(e.bind(e,37335));case 2:return d.abrupt("return",(v=d.sent).default.apply(v,h));case 3:case"end":return d.stop()}},O)}));function E(){return x.apply(this,arguments)}return E}()}}}},70208:function(n,t,e){"use strict";e.r(t);var _=e(67333),o=e.n(_),r=e(13769),s=e.n(r),i=e(67294),l=e(45697),u=e.n(l),a=["children","kind"],c="happy-alert",f={info:"#5352ED",positive:"#2ED573",negative:"#FF4757",warning:"#FFA502"},p=function(m){var x=m.children,E=m.kind,O=E===void 0?"info":E,v=s()(m,a);return i.createElement("div",o()({className:c,style:{background:f[O]}},v),x)};p.propTypes={kind:u().oneOf(["info","positive","negative","warning"])},t.default=p},86169:function(n,t,e){"use strict";e.r(t);var _=e(27386)},27386:function(n,t,e){"use strict";e.r(t)},5504:function(n,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return o}});var _=e(2100);const o=[{value:"\u8B66\u544A\u63D0\u793A\uFF0C\u5C55\u73B0\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:1,tocIndex:3},{value:"\u8BF4\u660E",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"kind",paraId:1,tocIndex:3},{value:"\u8B66\u544A\u7C7B\u578B",paraId:1,tocIndex:3},{value:"'info'/'positive'/'negative'/'warning'\u975E\u5FC5\u586B",paraId:1,tocIndex:3},{value:"'info'",paraId:1,tocIndex:3}]},6239:function(n,t){"use strict";t.Z=`import React from 'react';
import Alert from '../../alert';
import '../style';

export default () => <Alert kind="warning">\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u63D0\u793A</Alert>;
`},59695:function(n,t){"use strict";t.Z=`import React from 'react';
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
}`},82441:function(n,t){"use strict";t.Z="import './index.less';"},67333:function(n){function t(){return n.exports=t=Object.assign?Object.assign.bind():function(e){for(var _=1;_<arguments.length;_++){var o=arguments[_];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},n.exports.__esModule=!0,n.exports.default=n.exports,t.apply(this,arguments)}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports},13769:function(n,t,e){var _=e(48541);function o(r,s){if(r==null)return{};var i=_(r,s),l,u;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(u=0;u<a.length;u++)l=a[u],!(s.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(r,l)&&(i[l]=r[l])}return i}n.exports=o,n.exports.__esModule=!0,n.exports.default=n.exports},48541:function(n){function t(e,_){if(e==null)return{};var o={},r=Object.keys(e),s,i;for(i=0;i<r.length;i++)s=r[i],!(_.indexOf(s)>=0)&&(o[s]=e[s]);return o}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports}}]);
