import React from 'react'
const baseUrl = 'https://api.qortal.org/'
export const LinkApi = ({ children, url }: any) => {
  return (
    <a href={baseUrl + url} target="_blank">
      {children}
    </a>
  )
}
