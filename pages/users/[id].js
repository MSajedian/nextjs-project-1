export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    const paths = data.map((user) => {
        return {
            params: { id: user.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + context.params.id)
    const data = await res.json()
    return {
        props: { users: data }
    }
}

const Details = ({ users }) => {
    return (
        <div>
            <h1>{users.name}</h1>
            <p>{users.email}</p>
            <p>{users.website}</p>
            <p>{users.address.city}</p>
        </div>
    );
}

export default Details;