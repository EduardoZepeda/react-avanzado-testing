import React, {useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { categories } from '../../../api/db.json'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map(category => <Item key={category.id}><Category {...category} /></Item>)}
    </List>
    )

  useEffect(()=>{
    window.fetch('https://react-avanzado-testing-eduardozepeda.vercel.app/categories')
    .then(res=>res.json())
    .then(response=>setCategories(response))
  }, [])

  useEffect(()=>{
    const onScroll = e => {
      const newShowFixed = window.scrollY>200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('stroll', onScroll)
  })

  return (
    <>
    {renderList()}
    {showFixed && renderList(true)}
    </>
  )
}
