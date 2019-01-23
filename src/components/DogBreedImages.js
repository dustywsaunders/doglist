import React from 'react'
import { Link } from 'react-router-dom'

export default function DogBreedImages (props) {
  const { images, breed } = props

  return (
    <div className="dog-breed-images">
      <h1>Dog Breed Images</h1>

      This page will show images of the { breed } breed.<br />

      <Link to = '/'>Go back to the Index</Link>

      <div className="images">
        { images && images.map(url => <img src={ url } alt="Dog" />) }
        { !images && 'Loading...' }
      </div>
      
    </div>
  )
}

// props.match.params.breed