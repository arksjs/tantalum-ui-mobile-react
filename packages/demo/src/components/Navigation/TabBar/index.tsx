import { TaTabBar, TaFixed, TaGroup } from '@/index'
import { baseList, badgeList, imageList } from './data'
import TaobaoSvg from '../../../assets/icons/taobao.svg?jsx'
import QqSvg from '../../../assets/icons/qq.svg?jsx'
import WechatSvg from '../../../assets/icons/wechat.svg?jsx'
import WeiboSvg from '../../../assets/icons/weibo.svg?jsx'

const customIconList = [
  {
    value: 'wechat',
    label: '微信',
    icon: WechatSvg
  },
  {
    value: 'qq',
    label: 'QQ',
    icon: QqSvg
  },
  {
    value: 'weibo',
    label: '微博',
    icon: WeiboSvg
  },
  {
    value: 'taobao',
    label: '淘宝',
    icon: TaobaoSvg
  }
]

export default function ExpTabBar() {
  return (
    <>
      <TaGroup title="基础用法">
        <TaTabBar options={baseList} />
      </TaGroup>
      <TaGroup title="徽标">
        <TaTabBar options={badgeList} />
      </TaGroup>
      <TaGroup title="自定义图标">
        <TaTabBar options={customIconList} />
      </TaGroup>
      <TaGroup title="自定义颜色">
        <TaTabBar
          color="#8B8DB8"
          activeColor="#ffffff"
          style={{ backgroundColor: '#6667ab' }}
          options={baseList}
        />
      </TaGroup>
      <TaGroup title="自定义图片（icon=URL）">
        <TaTabBar className="exp-tabBar-custom" options={imageList} />
      </TaGroup>
      <TaGroup title="配合 Fixed 实现置底">
        <TaFixed>
          <TaTabBar options={baseList} />
        </TaFixed>
      </TaGroup>
    </>
  )
}
