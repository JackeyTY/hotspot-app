import React from 'react'
import Svg, { Path } from 'react-native-svg'

const HotspotSvg = ({ size, color }: { size: number; color: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 29 7" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.24189 3.12094C6.24189 4.84459 4.84459 6.24189 3.12094 6.24189C1.39729 6.24189 0 4.84459 0 3.12094C0 1.39729 1.39729 0 3.12094 0C4.84459 0 6.24189 1.39729 6.24189 3.12094ZM17.2077 3.12094C17.2077 4.84459 15.8104 6.24189 14.0868 6.24189C12.3631 6.24189 10.9658 4.84459 10.9658 3.12094C10.9658 1.39729 12.3631 0 14.0868 0C15.8104 0 17.2077 1.39729 17.2077 3.12094ZM25.0526 6.24189C26.7762 6.24189 28.1735 4.84459 28.1735 3.12094C28.1735 1.39729 26.7762 0 25.0526 0C23.3289 0 21.9316 1.39729 21.9316 3.12094C21.9316 4.84459 23.3289 6.24189 25.0526 6.24189Z"
        fill={color}
      />
    </Svg>
  )
}

export default HotspotSvg
