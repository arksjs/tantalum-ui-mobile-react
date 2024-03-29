import { TaTimeline, TaIcon, TaGroup } from '@/index'

export default function ExpTimeline() {
  return (
    <>
      <TaGroup title="基础用法">
        <TaTimeline>
          <TaTimeline.Item title="成功获得0.01元收益">
            搞半天就这点？
          </TaTimeline.Item>
          <TaTimeline.Item title="十天后到账">
            0.01元还要十天到账？
          </TaTimeline.Item>
          <TaTimeline.Item title="爱要不要">不要了，滚。</TaTimeline.Item>
        </TaTimeline>
      </TaGroup>
      <TaGroup title="自定义轴点颜色（color）">
        <TaTimeline>
          <TaTimeline.Item dotColor="#52c41a" title="成功获得0.01元收益">
            搞半天就这点？
          </TaTimeline.Item>
          <TaTimeline.Item dotColor="#faad14" title="十天后到账">
            0.01元还要十天到账？
          </TaTimeline.Item>
          <TaTimeline.Item dotColor="#ff4d4f" title="爱要不要">
            不要了，滚。
          </TaTimeline.Item>
        </TaTimeline>
      </TaGroup>
      <TaGroup title="自定义轴点（TimelineItem Slot dot）">
        <TaTimeline>
          <TaTimeline.Item
            title="成功获得0.01元收益"
            renderDot={() => (
              <div className="exp-timeline-custom-dot">
                <TaIcon icon="HeartOutlined" />
              </div>
            )}
          >
            搞半天就这点？
          </TaTimeline.Item>
          <TaTimeline.Item
            title="十天后到账"
            renderDot={() => (
              <div className="exp-timeline-custom-dot">
                <TaIcon icon="HeartOutlined" />
              </div>
            )}
          >
            0.01元还要十天到账？
          </TaTimeline.Item>
          <TaTimeline.Item
            title="爱要不要"
            renderDot={() => (
              <div className="exp-timeline-custom-dot">
                <TaIcon icon="HeartOutlined" />
              </div>
            )}
          >
            不要了，滚。
          </TaTimeline.Item>
        </TaTimeline>
      </TaGroup>
      <TaGroup title="自定义内容（TimelineItem default/title）">
        <TaTimeline>
          <TaTimeline.Item
            renderTitle={() => (
              <>
                【珠海市】快件已送达【正方云创园】，如有疑问请电联：
                <a href="tel:10000">10000</a>，感谢您使用中通快递
              </>
            )}
          >
            2021-04-13 12:42:57
          </TaTimeline.Item>
          <TaTimeline.Item
            renderTitle={() => (
              <>
                【珠海市】【珠海一部】快递小哥正在派件（
                <a href="tel:10000">10000</a>）
              </>
            )}
          >
            2021-04-13 11:22:16
          </TaTimeline.Item>
          <TaTimeline.Item title="【珠海市】快件离开【珠海中心】已发往【珠海一部】">
            2021-04-13 09:04:03
          </TaTimeline.Item>
        </TaTimeline>
      </TaGroup>
    </>
  )
}
