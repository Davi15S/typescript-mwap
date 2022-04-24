import type { NextPage } from 'next'
import Post from '../components/Post'

const Home: NextPage = () => {
  return (
    <div>
      <Post title='Post' content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta porta turpis sed finibus. Aliquam tempus ligula mi, tincidunt mollis urna maximus et. Donec suscipit in urna quis luctus. Donec bibendum nisl mauris, in aliquet neque mattis ac. Nam nisi dui, pretium sit amet tellus nec, mattis convallis arcu. Praesent id mauris odio. Nullam convallis nulla sem, feugiat viverra enim mollis venenatis. In hac habitasse platea dictumst. Duis varius fringilla nisi ac malesuada. Nulla in eros consequat, semper justo nec, semper metus. Nunc ac mattis sapien, eu posuere odio. Sed consectetur venenatis leo, sit amet mattis mi placerat et. Phasellus consectetur vehicula ipsum dignissim volutpat." date="25.4.2022"/>
    </div>
  )
}

export default Home
