import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { categories } from '../../../api/db.json'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://react-avanzado-testing-b39h5jmoy-eduardozepeda.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? <AiOutlineLoading3Quarters animate='spin' size='64px' /> : categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)}
    </List>
  )

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  })

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
