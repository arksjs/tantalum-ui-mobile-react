import {
  CountTime,
  AkStopwatch,
  AkGroup,
  AkCell,
  AkButton,
  StopwatchOnStop,
  StopwatchRef
} from '@/index'
import { useRef, useState } from 'react'

export default function ExpStopwatch() {
  const [paused, setPaused] = useState(true)
  const [laps, setLaps] = useState<string[]>([])
  const stopWatchRef = useRef<StopwatchRef>(null)

  const updateLaps = (_laps: CountTime[] = []) => {
    setLaps(
      _laps.reverse().map(countTime => {
        return `${
          parseInt(countTime.fullHours) > 0
            ? countTime.thousandsFullHours + ':'
            : ''
        }${countTime.minutes}:${countTime.seconds}.${countTime.milliseconds}`
      })
    )
  }

  const resetOrLap = () => {
    if (paused) {
      stopWatchRef.current?.reset()
      updateLaps([])
    } else {
      updateLaps(stopWatchRef.current?.lap() ?? [])
    }
  }

  const startOrStop = () => {
    if (paused) {
      stopWatchRef.current?.start()
    } else {
      stopWatchRef.current?.stop()
    }
  }

  const onStop: StopwatchOnStop = e => {
    setPaused(true)

    console.log('stop', e)

    updateLaps(e.laps)
  }

  const onStart = () => {
    setPaused(false)
  }

  const onReset = () => {
    setPaused(true)
  }

  function renderLaps() {
    return laps.map((item, index) => (
      <AkCell label={'计次 ' + (laps.length - index)} key={item}>
        {item}
      </AkCell>
    ))
  }
  return (
    <>
      <AkGroup title="基础用法">
        <div className="exp-stopwatch-box">
          <div className="exp-stopwatch-box-header">
            <AkStopwatch
              onStop={onStop}
              onStart={onStart}
              onReset={onReset}
              ref={stopWatchRef}
            />
          </div>
          <div className="exp-stopwatch-box-body">
            <AkButton onClick={resetOrLap}>{paused ? '重置' : '计次'}</AkButton>
            <AkButton
              onClick={startOrStop}
              type={!paused ? 'danger' : 'success'}
            >
              {paused ? '启动' : '停止'}
            </AkButton>
          </div>
        </div>
        {renderLaps()}
      </AkGroup>
    </>
  )
}
