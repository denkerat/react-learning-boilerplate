import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

function Navigation ({className, items}) {
  return (
    <div className={classNames('container navbar d-flex flex-row', className)}>
      {items.map((item, i) => <Link key={i} to={item.path} className="p-3">{item.title}</Link>)}
    </div>
  )
}

export default Navigation
