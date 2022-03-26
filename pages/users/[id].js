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

const Details = () => {
    return (<div>
        Details Page
    </div>);
}

export default Details;