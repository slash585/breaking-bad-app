import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  fetchCharacters,
  selectCharacters,
} from "../../redux/slices/characterSlice"
import { useEffect } from "react"

export default function Home() {
  const items = useSelector(selectCharacters)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])
  return <div>Home</div>
}
