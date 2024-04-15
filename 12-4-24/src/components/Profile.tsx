const Profile = (props: any) => {
  return (
    <>
      <p>{props.name}</p>
      <p>{props.surname}</p>
      <p>{props.age}</p>
      <p>{props.isMarried ? 'true' : 'false'}</p>
      {
        props.friends.map((friend: string) => {
          return <p>{friend}</p>
        })
      }
      <p>{props.address.city}, {props.address.country}</p>
    </>
  )
}

export default Profile;