import React from 'react'

export default function TaBuiltInSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 1024 1024" focusable="false">
      <path d="M512,140c50.3,0,99,9.8,144.8,29.2c44.3,18.7,84.1,45.6,118.3,79.8c34.2,34.2,61,74,79.8,118.3C874.2,413,884,461.7,884,512s-9.8,99-29.2,144.8c-18.7,44.3-45.6,84.1-79.8,118.3c-34.2,34.2-74,61-118.3,79.8C611,874.2,562.3,884,512,884s-99-9.8-144.8-29.2c-44.3-18.7-84.1-45.6-118.3-79.8c-34.2-34.2-61-74-79.8-118.3C149.8,611,140,562.3,140,512s9.8-99,29.2-144.8c18.7-44.3,45.6-84.1,79.8-118.3c34.2-34.2,74-61,118.3-79.8C413,149.8,461.7,140,512,140 M512,64C264.6,64,64,264.6,64,512s200.6,448,448,448s448-200.6,448-448S759.4,64,512,64L512,64z" />
    </svg>
  )
}